<script setup lang="ts">

import { Vector3 } from 'three'
import { stateManager } from '@/stores/stateManager'
import { useSelectBox } from '@/composables/useSelectBox'
const { boxes } = stateManager
const { selectBoxFunc, setActiveNav } = useSelectBox

const selectBox = (boxName: string, boxIndex: number, boxPosition: Vector3) => {
  selectBoxFunc(boxName, boxIndex, boxPosition)
  setActiveNav(boxIndex)
}
</script>

<template>
  <header uk-scrollspy="cls: uk-animation-slide-right;" class="tm-navbar-container" uk-sticky="media: 960">
    <div id="slider-nav" class="uk-slider-container {!@slidenav: outside} uk-margin uk-slider"
      uk-slider="center: 1; active: first">
      <div class="uk-position-relative">
        <ul style="pointer-events: auto" class="uk-slider-items uk-grid uk-grid-match">
          <li v-for="box in boxes" :key="box.orderIndex">
            <div
              class="el-item prevent-select uk-panel uk-flex uk-flex-column uk-flex-top uk-margin-remove-first-child">
              <h3 class="el-title uk-heading-xlarge uk-margin-top uk-margin-remove-bottom">
                <a class="uk-link-reset stroke" :class="[
                  { 'uk-slide-active uk-active nostroke': stateManager.mutableState.current === box.name },
                ]" @click="selectBox(box.name, box.orderIndex, box.position)">
                  {{ box.name }}
                </a>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>