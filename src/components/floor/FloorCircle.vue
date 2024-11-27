<script setup lang="ts">

import { ShaderMaterial, Vector3 } from "three"


const props = defineProps<{
  position: [x: number, y: number, z: number]
}>()
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float opacity;
  uniform float circleRadius;
  uniform float fadeWidth;
  uniform vec3 circleColor;
  varying vec2 vUv;

  void main() {
    vec2 centeredUv = vUv - 0.5;
    float dist = length(centeredUv);
    
    float circleMask = 1.0 - smoothstep(circleRadius - fadeWidth, circleRadius, dist);
    
    vec3 finalColor = circleColor;
    float alpha = circleMask * opacity;
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`

const customCircleMaterial = new ShaderMaterial({
  uniforms: {
    opacity: { value: 0.88 },
    circleRadius: { value: 0.3 },
    fadeWidth: { value: 0.6 },
    circleColor: { value: new Vector3(1, 1, 1) } // Белый цвет по умолчанию
  },
  vertexShader,
  fragmentShader,
  transparent: true
})
</script>

<template>
  <TresMesh name="floorCircle" :position="position" :rotation="[-Math.PI / 2, 0, 0]">
    <TresPlaneGeometry :args="[6, 6, 1, 1]" />
    <TresShaderMaterial :vertexShader="vertexShader" :fragmentShader="fragmentShader"
      :uniforms="customCircleMaterial.uniforms" transparent :depthWrite="false" />
  </TresMesh>
</template>