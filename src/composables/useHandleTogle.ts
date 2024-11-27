import { stateManager } from '@/stores/stateManager'
import { Vector3, MathUtils } from 'three'

const {
  fitBoxMeshRef,
  cameraControlsRef,
  mutableState,
  animateColorChange,
  updateFitBoxMesh,
  updateModelsVisibility,
  modelMixers,
  animationsActions,
  setSpecificFrame,
} = stateManager
function toggle() {
  mutableState.toggleSwitch = !mutableState.toggleSwitch

  if (!mutableState.toggleSwitch) {
    animateColorChange('#585D6E', '#868DA4') // Default colors
  }
}
function handleToggle() {
  toggle()

  updateFitBoxMesh({
    scale: new Vector3(1.8, 1.8, 1.8),
    position: new Vector3(
      fitBoxMeshRef?.value?.position.x,
      1.08,
      fitBoxMeshRef?.value?.position.z
    ),
  })

  if (cameraControlsRef.value) {
    cameraControlsRef.value.fitToBox(fitBoxMeshRef.value, true)
    cameraControlsRef.value.rotate(0, -30 * MathUtils.DEG2RAD, true)
  }

  setTimeout(() => {
    updateModelsVisibility(null)
    adjustControlsForToggle(cameraControlsRef?.value)
  }, 400)

  // Плавно останавливаем все текущие анимации
  const fadeDuration = 0.3
  animationsActions.value.forEach((actions, index) => {
    const mixer = modelMixers.value[index]
    if (mixer) {
      // Плавно останавливаем все текущие анимации
      actions.forEach((action) => {
        if (action && action.isRunning()) {
          action.fadeOut(fadeDuration)
        }
      })

      // Ждем окончания затухания перед выполнением нового действия
      setTimeout(() => {
        mixer.stopAllAction()
        if (actions[1]) {
          actions[1].reset().fadeIn(fadeDuration).play()
        } else if (actions[0]) {
          setSpecificFrame(actions[0], 160)
        }
      }, fadeDuration * 100)
    }
  })
}

function adjustControlsForToggle(controls: any) {
  if (controls) {
    controls.mouseButtons.left = 2
    controls.touches.one = 64
  }
}

export const useHandleToggle = {
  handleToggle,
}
