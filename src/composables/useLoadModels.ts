import { shallowRef } from 'vue'
import gsap from 'gsap'
import { GLTFLoader, DRACOLoader } from 'three/examples/jsm/Addons.js'
import {
  AnimationMixer,
  AnimationAction,
  Object3D,
  Material,
  MeshStandardMaterial,
} from 'three'
import type { Box } from '@/stores/boxesObject'

export function useLoadModels() {
  const models = shallowRef<Array<Object3D | null>>([])
  const modelMixers = shallowRef<Array<AnimationMixer | null>>([])
  const animationsActions = shallowRef<Array<AnimationAction[]>>([])
  const materials: Material[] = []
  const headNodes = shallowRef<Array<Object3D>>([])
  const eyeNodes = shallowRef<Array<Object3D>>([])

  const setSpecificFrame = (action: AnimationAction, frame: number) => {
    action.play().paused = true
    action.time = frame / 30
    action.syncWith(action)
  }

  const createLoader = () => {
    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')
    loader.setDRACOLoader(dracoLoader)
    return loader
  }

  const loadModelFromCache = async (file: string) => {
    try {
      const cache = await caches.open('models-cache')
      const cachedResponse = await cache.match(file)

      if (cachedResponse) {
        const blob = await cachedResponse.blob()
        const objectURL = URL.createObjectURL(blob)
        return { url: objectURL, fromCache: true }
      }
    } catch (error) {
      console.warn(`Failed to load model from cache: ${error}`)
    }
    return { url: file, fromCache: false }
  }

  const loadModel = (loader: GLTFLoader, file: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      loader.load(
        file,
        (gltf) => resolve(gltf),
        (xhr) => {
          // console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
          // console.log(
          //   `${file}: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}% loaded`
          // )
        },
        (error) => reject(error)
      )
    })
  }

  const processModel = (model: Object3D, box: Box, index: number): Object3D => {
    model.visible = true
    const mixer = new AnimationMixer(model)
    modelMixers.value[index] = mixer

    model.position.set(
      index === 3
        ? box.position.x + 0.25
        : index === 2
          ? box.position.x - 0.2
          : box.position.x,
      index === 8 ? -0.05 : index === 5 ? -0.25 : 0,
      index === 11
        ? box.position.z - 0.5
        : index === 3
          ? box.position.z + 0.25
          : index === 5
            ? box.position.z - 0.5
            : box.position.z
    )
    model.scale.setScalar(box.modelScale)
    model.traverse((node: any) => {
      if (node.isMesh) {
        node.castShadow = true
        node.frustumCulled = false
      }

      if (node.material) {
        node.material.transparent = true
        node.material.opacity = 0
        materials.push(node.material)
      }

      if (node.name === 'head01_mob') {
        headNodes.value.push(node)
      }
      if (
        node.name === 'FACIAL_R_Eye_mob' ||
        node.name === 'FACIAL_L_Eye_mob'
      ) {
        eyeNodes.value.push(node)
      }
    })
    return model
  }

  const loadModels = async (
    scene: Object3D,
    boxes: Box[],
    onProgress?: (progress: number) => void
  ) => {
    const loader = createLoader()
    const totalModels = boxes.length
    let loadedModels = 0
    const newModels: Array<Object3D | null> = new Array(totalModels).fill(null)
    const isOnline = navigator.onLine
    try {
      const loadPromises = boxes.map(async (box, index) => {
        let { url, fromCache } = await loadModelFromCache(box.modelPath)

        if (!fromCache && !isOnline) {
          console.warn(
            `Model ${box.modelPath} not found in cache and device is offline`
          )
          return index
        }

        let gltf

        try {
          gltf = await loadModel(loader, url)
        } catch (error) {
          console.error(`Failed to load model: ${box.modelPath}`, error)
          return index
        }

        const processedModel = processModel(gltf.scene, box, index)
        newModels[index] = processedModel

        const actions = gltf.animations.map((clip: any) =>
          modelMixers.value[index]!.clipAction(clip)
        )
        animationsActions.value[index] = actions

        if (actions[1]) {
          actions[1].play()
        } else if (actions[0]) {
          setSpecificFrame(actions[0], 160)
        }

        loadedModels++
        if (onProgress) {
          onProgress((loadedModels / totalModels) * 100)
        }

        if (!fromCache && isOnline) {
          console.log(`Caching model ${box.modelPath} for future use.`)
          try {
            const cache = await caches.open('models-cache')
            const response = await fetch(box.modelPath)
            if (response.ok) {
              await cache.put(box.modelPath, response)
            } else {
              console.warn(
                `Failed to cache model: ${box.modelPath}. Status: ${response.status}`
              )
            }
          } catch (error) {
            console.error(`Error caching model ${box.modelPath}:`, error)
          }
        }

        return index
      })

      await Promise.all(loadPromises)

      // Обновляем models реактивно
      models.value = newModels

      // Добавляем все модели в сцену после загрузки
      newModels.forEach((model) => {
        if (model) scene.add(model)
      })

      gsap.to(materials, {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        onUpdate: () => {
          materials.forEach((material) => {
            if (material instanceof MeshStandardMaterial) {
              material.needsUpdate = true
            }
          })
        },
      })

      console.log(
        'All models have been loaded and added to the scene successfully.'
      )
    } catch (error) {
      console.error('Error loading models:', error)
    }
  }
  const updateModelsVisibility = (currentId: number | null) => {
    models.value.forEach((model, index) => {
      if (model) {
        model.visible = currentId === null ? true : index === currentId
      }
    })
  }

  return {
    models,
    loadModels,
    modelMixers,
    animationsActions,
    headNodes,
    eyeNodes,
    updateModelsVisibility,
    setSpecificFrame,
  }
}
