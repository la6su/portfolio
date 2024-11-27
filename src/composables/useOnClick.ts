import { stateManager } from '@/stores/stateManager'
import { Vector3, MathUtils } from 'three'
import UIkit from 'uikit'
const {
  boxes,
  fitBoxMeshRef,
  cameraControlsRef,
  mutableState,
  animateColorChange,
  updateFitBoxMesh,
  updateModelsVisibility,
  modelMixers,
  animationsActions,
  updatePointer,
  updateSpherePosition,
  raycastObjects,
  pointer,
  raycaster,
  targetPositionForSphere,
  animateSphereToPosition,
} = stateManager

function onClickFunc(event: MouseEvent, cameraRef: any, sphereMeshRef: any) {
  event.preventDefault()
  updatePointer(event.clientX, event.clientY)
  updateSpherePosition()

  if (mutableState.toggleSwitch) return

  raycaster.setFromCamera(pointer, cameraRef.value)
  const intersects = raycaster.intersectObjects(raycastObjects, true)

  if (intersects.length > 0) {
    const intersection = intersects[0].object
    const intersectionIndex = (intersection as any).index
    mutableState.currentId = intersectionIndex
    updateModelsVisibility(intersectionIndex)
    updateFitBoxMesh({ scale: new Vector3(0.8, 0.8, 0.8) })

    cameraControlsRef.value?.rotate(0, 60 * MathUtils.DEG2RAD, true)
    updateFitBoxMesh({
      position: new Vector3(
        intersection.position.x,
        0.4,
        intersection.position.z
      ),
    })
    cameraControlsRef.value?.fitToBox(fitBoxMeshRef.value, true)

    if (cameraControlsRef.value) {
      cameraControlsRef.value.mouseButtons.left = 0
      cameraControlsRef.value.touches.one = 0
    }

    mutableState.toggleSwitch = true

    modelMixers.value.forEach((mixer) => mixer?.stopAllAction())
    const action = animationsActions.value[intersectionIndex][0]
    if (action) {
      action.reset().play()
    }
    mutableState.current = intersection.name
    const currentBox = boxes.find((box) => box.name === mutableState.current)
    if (currentBox) {
      animateColorChange(currentBox.color, currentBox.darkColor)
    }

    UIkit.slider('#slider-nav').show(intersectionIndex)

    setTimeout(() => {
      const targetPosition = targetPositionForSphere()
      animateSphereToPosition(sphereMeshRef.value!, targetPosition)
    }, 600)
  }
}

export const useOnClick = {
  onClickFunc,
}
