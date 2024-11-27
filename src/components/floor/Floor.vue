<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useTexture } from "@tresjs/core"
import { RepeatWrapping, SRGBColorSpace, ShaderMaterial, Vector2, LinearFilter } from "three"
import gsap from 'gsap'
import { stateManager } from '@/stores/stateManager'
import vertexShader from './shaders/vertex.vs'
import fragmentShader from './shaders/fragment.fs'
const pTexture = await useTexture({
	map: '/pattern.png'
})
pTexture.map.colorSpace = SRGBColorSpace
pTexture.map.wrapS = RepeatWrapping
pTexture.map.wrapT = RepeatWrapping
// Увеличиваем количество повторений текстуры
pTexture.map.repeat.set(10, 10)
pTexture.map.minFilter = LinearFilter
pTexture.map.magFilter = LinearFilter

const floorRef = ref(null)
// Создаем пользовательский материал
const customMaterial = new ShaderMaterial({
	uniforms: {
		tDiffuse: { value: pTexture.map },
		opacity: { value: 1 },
		edgeWidth: { value: 0.5 },
		repeat: { value: new Vector2(3, 3) }
	}
})

const animateFloor = (show: boolean) => {
	if (floorRef.value && customMaterial.uniforms) {

		gsap.to(customMaterial.uniforms.opacity, {
			value: show ? 1 : 0,
			duration: 0.4,
			ease: 'power2.inOut'
		})
	}
}
watch(() => stateManager.mutableState.toggleSwitch, (newValue) => {
	animateFloor(!newValue)
})
onMounted(() => {
	// Инициализация начального состояния
	if (customMaterial.uniforms) {
		customMaterial.uniforms.opacity.value = stateManager.mutableState.toggleSwitch ? 0 : 1
	}
})
</script>

<template>
	<TresMesh name="Floor" ref="floorRef" receive-shadow :position="[0, 0.004, 0]" :rotation="[-Math.PI / 2, 0, 0]">
		<TresPlaneGeometry :args="[9, 9, 1, 1]" />
		<TresShaderMaterial :vertexShader="vertexShader" :fragmentShader="fragmentShader"
			:uniforms="customMaterial.uniforms" :depthWrite="false" transparent />
	</TresMesh>
</template>