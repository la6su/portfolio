<script setup lang="ts">
import { computed } from "vue"
import { stateManager } from '@/stores/stateManager'
import TogleBackButton from './TogleBackButton.vue'
const { boxes } = stateManager
import { useHandleToggle } from '@/composables/useHandleTogle'
import { useSelectBox } from '@/composables/useSelectBox'
const { selectBoxFunc } = useSelectBox
const { handleToggle } = useHandleToggle
const mainStyle = computed(() => ({
  boxShadow: `0 0 280px ${stateManager.mutableState.selectedDarkColor} inset`
}))
</script>

<template>
  <main id="tm-main" :style="mainStyle" uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: 80;">
    <div class="uk-section uk-section-small" uk-height-viewport="offset-bottom: true;">
      <div class="tm-header-placeholder uk-margin-remove-adjacent" style="height: 100px">
      </div>
      <div class="uk-container uk-container-expand">
        <TogleBackButton @click="handleToggle" />
        <div class="uk-width-medium uk-margin-top">
          <nav class="navButtons uk-position-z-index">
            <button v-for="box in boxes" :key="box.orderIndex" uk-scrollspy-class
              class="uk-button uk-button-link uk-text-left uk-transition-toggle uk-link-toggle" :class="[
                { active: stateManager.mutableState.current === box.name },
              ]" uk-transition-toggle="mode: hover" @click="selectBoxFunc(box.name, box.orderIndex, box.position)">
              {{ box.name }}
              <picture class="avatar-pic uk-position-absolute">
                <img :src="box.imageSrc" width="120px" height="120px" alt="" class="el-image uk-transition-fade" />
              </picture>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>