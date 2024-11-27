<script setup lang="ts">
import { computed } from 'vue'
import { BackSide } from 'three'
import { RoundedBox } from '@tresjs/cientos'
import { stateManager } from '@/stores/stateManager'
import Floor from '@/components/floor/Floor.vue'
import FloorCircle from '@/components/floor/FloorCircle.vue'
import Lights from '@/components/Lights.vue'
const lightColor = computed(() => stateManager.mutableState.selectedLightColor)
const darkColor = computed(() => stateManager.mutableState.selectedDarkColor)

</script>
<template>
  <Lights />
  <!-- <TresFog :color="darkColor" :near="8" :far="10" /> -->
  <RoundedBox name="RoundedBox" :args="[14, 6, 14, 10, 3]" :position="[0, 3, 0]" receive-shadow>
    <TresMeshStandardMaterial :color="lightColor" :emissive="darkColor" :side="BackSide" />
  </RoundedBox>
  <Floor />
  <FloorCircle :position="[
    stateManager.fitBoxMeshRef.value?.position.x ?? 0,
    0.002,
    stateManager.fitBoxMeshRef.value?.position.z ?? 0
  ]" />


</template>