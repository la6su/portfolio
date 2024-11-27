import { stateManager } from '@/stores/stateManager'
import { Vector3 } from 'three'
import UIkit from 'uikit'
const {
  boxes,
  sphereMeshRef,
  fitBoxMeshRef,
  cameraControlsRef,
  mutableState,
  animateColorChange,
  updateModelsVisibility,
  modelMixers,
  animationsActions,
  targetPositionForSphere,
  animateSphereToPosition,
} = stateManager
// Function to set active navigation
const setActiveNav = (index: number) => UIkit.slider('#slider-nav').show(index)
function selectBoxFunc(
  boxName: string,
  boxIndex: number,
  boxPosition: Vector3
) {
  mutableState.current = boxName
  mutableState.currentId = boxIndex
  setActiveNav(boxIndex)
  updateModelsVisibility(boxIndex)
  const selectedBox = boxes.find((box) => box.name === boxName)
  fitBoxMeshRef?.value?.position.set(boxPosition.x, 0.5, boxPosition.z)

  cameraControlsRef.value?.fitToBox(fitBoxMeshRef.value, true)
  if (selectedBox) {
    animateColorChange(selectedBox.color, selectedBox.darkColor)
  }
  modelMixers.value.forEach((mixer) => mixer?.stopAllAction())
  const action = animationsActions.value[boxIndex][0]
  if (action) {
    action.reset().play()
  }
  setTimeout(() => {
    // Анимация сферы
    const targetPosition = targetPositionForSphere()
    animateSphereToPosition(sphereMeshRef.value!, targetPosition)
  }),
    600
  600
}

export const useSelectBox = {
  selectBoxFunc,
  setActiveNav,
}
