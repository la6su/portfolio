<script setup lang="ts">

import { TresCanvas } from '@tresjs/core'
import { stateManager } from '@/stores/stateManager'
import TopSliderNav from '@/components/ui/TopSliderNav.vue'
import MainContent from '@/components/ui/MainContent.vue'
import BottomNav from '@/components/ui/BottomNav.vue'
import Scene3D from '@/components/Scene3D.vue'
import ContactsModal from '@/components/ui/ContactsModal.vue'

const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let tid: any
  return function (...args: any[]) {
    const ctx = self
    tid && clearTimeout(tid)
    tid = setTimeout(() => {
      callback.apply(ctx, args)
    }, delay)
  }
}

const _ = (window as any).ResizeObserver;
(window as any).ResizeObserver = class ResizeObserver extends _ {
  constructor(callback: (...args: any[]) => void) {
    callback = debounce(callback, 20)
    super(callback)
  }
}
</script>

<template>
  <div v-show="stateManager.mutableState.toggleSwitch">
    <ContactsModal v-show="stateManager.mutableState.showContacts" />
    <TopSliderNav />
    <MainContent />
    <BottomNav />
  </div>
  <TresCanvas v-bind="stateManager.gl" ref="thisRendererRef" window-size stencil>

    <Scene3D />


  </TresCanvas>

</template>