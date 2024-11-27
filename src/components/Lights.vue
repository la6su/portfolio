<script setup lang="ts">
import { shallowRef } from 'vue'
//import { vLightHelper } from '@tresjs/core'
const PointLightRef = shallowRef()
const MainLightRef = shallowRef()
const SecondLightRef = shallowRef()
const ThirdLightRef = shallowRef()

</script>

<template>
	<TresAmbientLight :intensity="0.15" />
	<!-- <TresSpotLight :args="['#ffffff', 10]" :distance="4" :decay="0.75"
		:position="[stateManager.fitBoxMeshRef.value?.position.x ?? 0, 2.64, stateManager.fitBoxMeshRef.value?.position.z ?? 0]"
		:scale="[0.35, 0.35, 0.35]" :angle="Math.PI / 5" :penumbra="0.75"
		:lockAt="stateManager.fitBoxMeshRef.value?.position" /> -->
	<TresDirectionalLight ref="MainLightRef" :position="[-1, 4, 2.3]" :lockAt="[0, 0, 0]" :intensity="0.46"
		color="#ffffff" :shadow-mapSize-width="1024" :shadow-mapSize-height="1024" :shadow-camera-far="10"
		:shadow-camera-near="0.1" :shadow-camera-left="-10" :shadow-camera-right="10" :shadow-radius="6"
		:shadow-bias="-0.000001" cast-shadow />

	<TresDirectionalLight ref="SecondLightRef" :position="[0, 4, -2.4]" :lockAt="[0, 0, 0]" :intensity="0.24"
		color="#f2f2f2" :shadow-mapSize-width="1024" :shadow-mapSize-height="1024" :shadow-camera-far="10"
		:shadow-camera-near="0.1" :shadow-camera-left="-10" :shadow-camera-right="10" :shadow-radius="6"
		:shadow-bias="-0.000001" />

	<TresDirectionalLight ref="ThirdLightRef" color="#ffffff" :intensity="0.24" :position="[2, 3, 3]"
		:shadow-mapSize-width="1024" :shadow-mapSize-height="1024" :shadow-camera-far="50" :shadow-camera-left="-10"
		:shadow-camera-right="10" :shadow-camera-top="10" :shadow-camera-bottom="-10" :shadow-bias="-0.000001" />

	<TresPointLight ref="PointLightRef" color="#FF3F00" :scale="[0.35, 0.35, 0.35]" :intensity="0.35"
		:position="[-2.4, 2.4, 2.6]" :distance="4" :decay="100" :shadow-mapSize-width="1024" :shadow-mapSize-height="1024"
		:shadow-camera-far="50" :shadow-camera-left="-10" :shadow-camera-right="10" :shadow-camera-top="10"
		:shadow-camera-bottom="-10" :shadow-bias="-0.000001" />

</template>
