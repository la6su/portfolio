<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

import PageLoader from '@/components/ui/PageLoader.vue'
//import MainScene from '@/components/MainScene.vue'
const TheExpiriense = defineAsyncComponent(() => import('@/components/TheExpiriense.vue'))
</script>

<template>

  <Suspense>
    <TheExpiriense />
    <template #fallback>
      <PageLoader />
    </template>
  </Suspense>

</template>
