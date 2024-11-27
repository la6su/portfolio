import { reactive, ref, Ref, shallowReactive } from 'vue'
import { BaseCameraControls } from '@tresjs/cientos'
import gsap from 'gsap'
import {
  Object3D,
  Vector3,
  MathUtils,
  PerspectiveCamera,
  PCFSoftShadowMap,
  SRGBColorSpace,
  NoToneMapping,
  Raycaster,
  Vector2,
  Mesh,
} from 'three'
import { boxes } from '@/stores/boxesObject'
import { useLoadModels } from '@/composables/useLoadModels'

const sphereMeshRef: Ref<Mesh | null> = ref(null)
const fitBoxMeshRef: Ref<Object3D | null> = ref(null)
const cameraControlsRef: Ref<any | null> = ref(null)

const pointer = new Vector2()
const raycaster = new Raycaster()
const raycastObjects: Array<any> = []

const controlsState = shallowReactive({
  distance: 5,
  minDistance: 0,
  maxDistance: 5,
  minZoom: 0,
  maxZoom: 5,
  mouseButtons: {
    left: BaseCameraControls.ACTION.TRUCK,
    right: BaseCameraControls.ACTION.ROTATE,
    wheel: BaseCameraControls.ACTION.NONE,
  } as any,
  touches: {
    one: BaseCameraControls.ACTION.TOUCH_TRUCK,
  } as any,
  minPolarAngle: 0,
  maxPolarAngle: 80 * MathUtils.DEG2RAD,
})

interface MutableState {
  currentId: number | null
  current: string
  toggleSwitch: boolean
  showContacts: boolean
  showLoadingMesh: boolean
  selectedLightColor: string
  selectedDarkColor: string
  isAnimatingColor: boolean
  loadingProgress: number
}

const mutableState = reactive<MutableState>({
  currentId: null,
  current: '',
  toggleSwitch: false,
  showContacts: false,
  showLoadingMesh: true,
  selectedLightColor: '#585D6E',
  selectedDarkColor: '#868DA4',
  isAnimatingColor: false,
  loadingProgress: 0,
})

const gl = {
  clearColor: '#868DA4',
  shadows: true,
  antialias: true,
  powerPreference: 'high-performance',
  shadowMapType: PCFSoftShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

const {
  models,
  loadModels,
  modelMixers,
  animationsActions,
  headNodes,
  eyeNodes,
  updateModelsVisibility,
  setSpecificFrame,
} = useLoadModels()

function updatePointer(clientX: number, clientY: number) {
  pointer.x = (clientX / window.innerWidth) * 2 - 1
  pointer.y = -(clientY / window.innerHeight) * 2 + 1
  updateSpherePosition()
}
function targetPositionForSphere(
  offset: { y?: number; z?: number } = {}
): Vector3 {
  if (!fitBoxMeshRef.value || !fitBoxMeshRef.value.position) {
    return new Vector3()
  }
  return new Vector3(
    fitBoxMeshRef.value.position.x,
    fitBoxMeshRef.value.position.y + (offset.y || 0.1),
    fitBoxMeshRef.value.position.z + (offset.z || 0.6)
  )
}

function updateSpherePosition() {
  if (!fitBoxMeshRef.value || !sphereMeshRef.value || !cameraControlsRef.value)
    return

  raycaster.setFromCamera(pointer, cameraControlsRef.value.camera)
  const intersects = raycaster.intersectObject(fitBoxMeshRef.value)

  if (intersects.length > 0) {
    const point = intersects[0].point
    animateSphereToPosition(sphereMeshRef.value, point)
  }
}

function animateSphereToPosition(sphereMesh: Mesh, targetPosition: Vector3) {
  gsap.to(sphereMesh.position, {
    x: targetPosition.x,
    y: targetPosition.y,
    z: targetPosition.z,
    duration: 0.5,
    ease: 'power2.out',
  })
}

function animateColorChange(targetLightColor: string, targetDarkColor: string) {
  if (mutableState.isAnimatingColor) {
    gsap.killTweensOf(mutableState)
  }

  mutableState.isAnimatingColor = true

  gsap.to(mutableState, {
    duration: 0.8,
    selectedLightColor: targetLightColor,
    selectedDarkColor: targetDarkColor,
    onUpdate: () => {
      // You can add any necessary update logic here
    },
    onComplete: () => {
      mutableState.isAnimatingColor = false
    },
  })
}

function limitCameraPosition(camera: PerspectiveCamera) {
  const MIN_PAN = { x: -2.9, y: 0.4, z: 0 }
  const MAX_PAN = { x: 2.9, y: 4.4, z: 5.4 }
  camera.position.x = MathUtils.clamp(camera.position.x, MIN_PAN.x, MAX_PAN.x)
  camera.position.y = MathUtils.clamp(camera.position.y, MIN_PAN.y, MAX_PAN.y)
  camera.position.z = MathUtils.clamp(camera.position.z, MIN_PAN.z, MAX_PAN.z)
}

async function loadAllModels(sceneObj: Object3D) {
  try {
    await loadModels(sceneObj, boxes, (progress: number) => {
      mutableState.loadingProgress = progress
    })
  } catch (error) {
    console.error('Error loading models:', error)
  }
}

function updateFitBoxMesh(updates: { scale?: Vector3; position?: Vector3 }) {
  if (updates.scale) {
    fitBoxMeshRef?.value?.scale.copy(updates.scale)
  }
  if (updates.position) {
    fitBoxMeshRef?.value?.position.copy(updates.position)
  }
}

export const stateManager = {
  mutableState,
  boxes,
  sphereMeshRef,
  fitBoxMeshRef,
  updateFitBoxMesh,
  cameraControlsRef,
  gl,
  controlsState,
  models,
  modelMixers,
  animationsActions,
  headNodes,
  eyeNodes,
  animateColorChange,
  limitCameraPosition,
  loadAllModels,
  updateModelsVisibility,
  setSpecificFrame,
  raycaster,
  updatePointer,
  updateSpherePosition,
  animateSphereToPosition,
  raycastObjects,
  pointer,
  targetPositionForSphere,
}
