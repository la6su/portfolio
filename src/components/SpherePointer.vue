<script setup lang="ts">
import { onMounted } from 'vue'
import { stateManager } from '@/stores/stateManager'
import { useRenderLoop } from '@tresjs/core'
// @ts-ignore
import FakeGlowMaterial from '@/lib/FakeGlowMaterial'
import {
	SphereGeometry,
	Mesh,
	FrontSide,
	Color,
	Quaternion
} from 'three'
import gsap from 'gsap'
const { onLoop } = useRenderLoop()
const { sphereMeshRef } = stateManager
const SPHERE_RADIUS = 0.04
const SPHERE_SEGMENTS = 20

const fgMaterial = new FakeGlowMaterial()
fgMaterial.uniforms.falloff.value = 1.4
fgMaterial.uniforms.glowColor.value = new Color('#e1ea94')
fgMaterial.uniforms.glowInternalRadius.value = 5.2
fgMaterial.uniforms.glowSharpness.value = 0
fgMaterial.uniforms.opacity.value = 1.0
fgMaterial.side = FrontSide

const sphereGeometry = new SphereGeometry(
	SPHERE_RADIUS,
	SPHERE_SEGMENTS,
	SPHERE_SEGMENTS
)
const sphereMaterial = fgMaterial
const sphereMesh = new Mesh(sphereGeometry, sphereMaterial)

const animateSphereMaterial = () => {
	gsap.to(fgMaterial.uniforms.glowInternalRadius, {
		value: 17.0, // Максимальное значение
		duration: 2,
		ease: 'power1.inOut',
		yoyo: true, // Анимация будет идти в обратном направлении
		repeat: -1,
		onUpdate: () => {
			fgMaterial.uniforms.glowInternalRadius.needsUpdate = true
		},
	})
}

const setSphereMeshRef = (el: Mesh | null) => {
	sphereMeshRef.value = el
}

onLoop(() => {

	if (stateManager.mutableState.toggleSwitch) {

		stateManager.headNodes.value.forEach((head: { lookAt: (arg0: any) => void; quaternion: { slerp: (arg0: any, arg1: number) => void } }) => {
			if (head && sphereMesh) {
				head.lookAt(sphereMesh.position)
				head.quaternion.slerp(new Quaternion(), 0.56)
			}
		})

		stateManager.eyeNodes.value.forEach(eye => {
			if (eye && sphereMesh) {
				eye.lookAt(sphereMesh.position)
				eye.quaternion.slerp(new Quaternion(), 0.28)
			}
		})
	}

})
onMounted(() => {
	animateSphereMaterial()
})
</script>

<template>
	<primitive :ref="setSphereMeshRef" :object="sphereMesh" :position="[0, 0, 0.5]"
		:visible="stateManager.mutableState.toggleSwitch" />
</template>
