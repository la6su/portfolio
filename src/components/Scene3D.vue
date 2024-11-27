<script setup lang="ts">
import { onMounted, ref } from 'vue'
import isMobile from '@basitcodeenv/vue3-device-detect'

import { CameraControls, Html } from '@tresjs/cientos'
import { useRenderLoop, useTresContext } from '@tresjs/core'
import { Object3D, Texture, Mesh, FrontSide, PlaneGeometry, MeshBasicMaterial, AnimationMixer, LinearFilter, EquirectangularReflectionMapping } from 'three'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { useOnClick } from '@/composables/useOnClick'
import { stateManager } from '@/stores/stateManager'
import Enviroment from '@/components/Enviroment.vue'
import SVGPreloader from '@/components/SVGPreloader.vue'
import SpherePointer from '@/components/SpherePointer.vue'
let thisCanvas: HTMLCanvasElement | null = null

const { scene } = useTresContext()
const { onLoop } = useRenderLoop()
const { onClickFunc } = useOnClick

const cameraRef = ref()
const boxesRef = ref()

const { sphereMeshRef, fitBoxMeshRef, cameraControlsRef, boxes, raycastObjects } = stateManager

const planeGeometry = new PlaneGeometry(1, 1)
const planeMaterial = new MeshBasicMaterial({ color: 'teal', side: FrontSide, wireframe: true })
const planeMesh = new Mesh(planeGeometry, planeMaterial)
planeMesh.rotation.z = Math.PI / 2

const onPointerMove = (event: TouchEvent | MouseEvent) => {
  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
  const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY

  stateManager.updatePointer(clientX, clientY)
}

const setFitBoxMeshRef = (el: any) => {
  if (el && el instanceof Object3D) {
    fitBoxMeshRef.value = el
  } else {
    fitBoxMeshRef.value = null
  }
}
const setCameraControlsRef = (el: any) => {
  cameraControlsRef.value = el?.instance || null

}

const loadHDR = (filepath: string) => new Promise((resolve, reject) => {
  const loader = new RGBELoader()

  loader.load(filepath, (texture, textaureData) => {
    texture.minFilter = LinearFilter
    texture.magFilter = LinearFilter
    texture.mapping = EquirectangularReflectionMapping
    texture.needsUpdate = true
    resolve(texture)
  })
})

const onClick = (event: MouseEvent) => {
  onClickFunc(event, cameraRef, sphereMeshRef)
}

const initializeScene = async () => {
  if (scene.value) {
    await stateManager.loadAllModels(scene.value)
  }
  stateManager.mutableState.showLoadingMesh = false
}
onLoop(({ delta }) => {
  stateManager.modelMixers.value.forEach((mixer: AnimationMixer | null) => mixer?.update(delta))
})

const onControlsChange = () => {
  if (cameraRef.value) {
    stateManager.limitCameraPosition(cameraRef.value)
  }
}

onMounted(async () => {
  thisCanvas = document.querySelector('canvas')
  const pTexture = await loadHDR('/textures/env/Jewelry-HDRI-black-contrast.hdr')
  scene.value.environment = pTexture as Texture | null

  boxesRef.value.children.forEach(
    (box: any) => raycastObjects.push(box))

  await initializeScene()
  if (isMobile) {
    window.addEventListener('touchmove', onPointerMove)
    window.addEventListener('touchstart', onPointerMove)
  }

  window.addEventListener('mousemove', onPointerMove)

  thisCanvas?.addEventListener('click', onClick, false)
})

</script>

<template>

  <TresPerspectiveCamera ref="cameraRef" :position="[0, 3.65, 4]" :aspect="1" :fov="35" :near="0.1" :far="20" />
  <CameraControls v-bind="stateManager.controlsState" :ref="setCameraControlsRef" makeDefault
    @change="onControlsChange" />
  <SpherePointer />
  <TresMesh name="FitBoxMesh" :ref="setFitBoxMeshRef" :position="[0, 0.5, 0]">
    <TresBoxGeometry :args="[1, 1, 1]" />
    <TresMeshBasicMaterial color="red" wireframe :visible="false" />
    <primitive :object="planeMesh" :position="[0, 0, 0.6]" :visible="false" />
  </TresMesh>

  <TresGroup ref="boxesRef">
    <TresMesh v-for="box in boxes" :key="box.orderIndex" :index="box.orderIndex" :name="box.name"
      :position="box.position" :color="box.color" :darkColor="box.darkColor">

      <TresBoxGeometry :args="[0.45, 0.8, 0.45]" />
      <TresMeshBasicMaterial :color="box.color" :visible="false" wireframe />

      <Html wrapperClass="SVGPreloader" as="div" center transform :distance-factor="0.3" :position="[0, -0.47, 0]"
        :scale="1.8" :rotation="[-Math.PI / 2, 0, 0]">
      <Transition name="fade">
        <SVGPreloader v-show="stateManager.mutableState.showLoadingMesh" />
      </Transition>

      </Html>

    </TresMesh>
  </TresGroup>

  <Suspense>
    <Enviroment />
  </Suspense>

</template>

<style>
.svgCom>div:first-of-type {
  position: relative !important;
}

.svgCom {
  user-select: none;
  pointer-events: none !important;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>