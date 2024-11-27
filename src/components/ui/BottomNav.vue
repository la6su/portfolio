<script setup lang="ts">
import { computed } from 'vue'
import { stateManager } from '@/stores/stateManager'
//import { isAndroid, isIOS } from '@basitcodeenv/vue3-device-detect'

const { boxes } = stateManager

const currentBox = computed(() =>
  boxes.find(box => box.orderIndex === stateManager.mutableState.currentId)
)
// const devicePath = computed(() => {

//   if (isIOS) {
//     return currentBox.value?.iosPath
//   } else if (isAndroid) {
//     return currentBox.value?.androidPath
//   } else {
//     return currentBox.value?.iosPath
//   }
// })
</script>

<template>
  <div id="bottom-block" uk-scrollspy="target: [uk-scrollspy-class]; cls: uk-animation-fade; delay: 80;"
    class="uk-section uk-section-small uk-margin-remove-bottom uk-position-absolute uk-position-bottom uk-position-z-index">
    <div class="uk-container uk-position-bottom uk-container-expand">
      <div class="uk-grid uk-grid-collapse tm-grid-expand uk-grid-margin" uk-grid="">
        <div class="uk-width-expand uk-first-column uk-visible@m uk-margin-bottom">
          <div class="uk-margin" style="pointer-events: auto">
            <div class="uk-flex-middle uk-grid-collapse uk-child-width-auto uk-grid" uk-grid="">
              <div class="el-item uk-first-column uk-margin-right">
                <a uk-scrollspy-class href="https://itsalive.studio/" target="_blank" class="uk-icon-button"
                  uk-icon="itsar">
                  <img src="@/assets/logo.svg" alt="itsAr-logo" />
                </a>
              </div>
              <div class="el-item">
                <button class="el-content uk-button uk-button-secondary right-radius" uk-scrollspy-class
                  @click="stateManager.mutableState.showContacts = !stateManager.mutableState.showContacts">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-medium@m uk-margin-bottom">
          <div class="uk-margin" style="pointer-events: auto">
            <div class="uk-flex-middle uk-flex-center uk-grid-small uk-child-width-auto uk-grid" uk-grid="">
              <div class="el-item uk-first-column uk-margin-small-right uk-hidden@m">
                <a uk-scrollspy-class href="https://itsalive.studio/" target="_blank" class="uk-icon-button" uk-icon="">
                  <img src="@/assets/logo.svg" alt="itsAr-logo" />
                </a>
              </div>
              <div class="el-item uk-first-column uk-margin-small-right uk-hidden@m">
                <button uk-scrollspy-class class="uk-icon-button" uk-icon=""
                  @click="stateManager.mutableState.showContacts = !stateManager.mutableState.showContacts">
                  <svg width="26" height="26" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20"
                    style="enable-background:new 0 0 20 20;" xml:space="preserve">
                    <path stroke="#000000" fill="none" stroke-linecap="square" stroke-linejoin="bevel"
                      d="M5,1.1L2.4,11.2h5.5L4,18.9L17.7,7.5h-6.4L15,1.1H5z" />
                  </svg>
                </button>
              </div>
              <div v-if="currentBox" class="el-item">
                <AndroidView>
                  <a rel="ar" class="el-content button-styled uk-button uk-button-default uk-button"
                    :href="currentBox.androidPath">
                    start ar
                    <img src="@/assets/logo.svg" style="margin-left: 5px;" alt="itsAr-logo" />
                  </a>
                </AndroidView>
                <IOSView>
                  <a rel="ar" class="el-content button-styled uk-button uk-button-default uk-button"
                    :href="currentBox.iosPath">
                    start ar
                    <img src="@/assets/logo.svg" style="margin-left: 5px;" alt="itsAr-logo" />
                  </a>
                </IOSView>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-expand uk-margin-bottom uk-text-right@m uk-text-center uk-margin-small-top">
          <div v-if="currentBox" uk-scrollspy-class
            class="el-item uk-width-medium@m uk-margin-auto-left@m uk-margin-remove-right@m uk-margin-auto">
            <h4 class="uk-h5">{{ currentBox.description }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>