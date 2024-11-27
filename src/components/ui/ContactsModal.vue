<script setup lang="ts">
import { stateManager } from '@/stores/stateManager'
</script>
<template>
    <Transition name="fade">
        <div id="contacts-section" class="
        uk-width-1-1
        uk-height-viewport
        uk-section 
        uk-section 
        uk-flex uk-flex-middle
        uk-position-fixed">
            <div class="uk-container uk-container-xsmall uk-position-relative">
                <button
                    class="uk-modal-close-default uk-icon uk-icon-button uk-border-circle uk-close uk-close-large uk-position-top-right uk-margin-right"
                    type="button" uk-close="" aria-label="Close"
                    @click="stateManager.mutableState.showContacts = !stateManager.mutableState.showContacts">
                </button>
                <div class="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-medium-top">
                    <div class="uk-width-1-1">
                        <div class="uk-margin uk-text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="272" height="54" viewBox="0 0 1367 272"
                                fill="none">

                                <path
                                    d="M608.695 187.657L640.291 71.2496H696.832L728.428 187.657H696.832L691.011 164.376H646.111L640.291 187.657H608.695ZM652.763 137.768H684.36L674.382 99.52H662.741L652.763 137.768Z"
                                    fill="white" />
                                <path
                                    d="M739.192 187.657V71.2496H797.396C811.254 71.2496 822.451 75.1853 830.988 83.0566C839.635 90.8171 843.959 100.462 843.959 111.992C843.959 126.959 836.198 138.6 820.677 146.914L844.79 187.657H811.531L790.744 152.735H769.957V187.657H739.192ZM769.957 124.464H796.564C801.331 124.464 805.156 123.245 808.039 120.806C810.921 118.367 812.362 115.429 812.362 111.992C812.362 108.555 810.921 105.618 808.039 103.178C805.156 100.739 801.331 99.52 796.564 99.52H769.957V124.464Z"
                                    fill="white" />
                                <path
                                    d="M874.782 173.023C862.587 160.939 856.489 146.416 856.489 129.453C856.489 112.491 862.587 98.0233 874.782 86.05C887.088 73.9658 902.609 67.9236 921.345 67.9236C940.081 67.9236 955.547 73.9658 967.742 86.05C980.048 98.0233 986.201 112.491 986.201 129.453C986.201 146.416 980.048 160.939 967.742 173.023C955.547 184.996 940.081 190.983 921.345 190.983C902.609 190.983 887.088 184.996 874.782 173.023ZM897.897 105.34C891.911 111.438 888.917 119.476 888.917 129.453C888.917 139.431 891.911 147.469 897.897 153.566C903.884 159.664 911.7 162.713 921.345 162.713C930.99 162.713 938.806 159.664 944.793 153.566C950.779 147.469 953.773 139.431 953.773 129.453C953.773 119.476 950.779 111.438 944.793 105.34C938.806 99.2428 930.99 96.194 921.345 96.194C911.7 96.194 903.884 99.2428 897.897 105.34Z"
                                    fill="white" />
                                <path
                                    d="M1001.93 141.094V71.2496H1032.7V140.263C1032.7 147.247 1034.64 152.735 1038.52 156.726C1042.4 160.717 1047.67 162.713 1054.32 162.713C1060.97 162.713 1066.24 160.717 1070.12 156.726C1074 152.735 1075.94 147.247 1075.94 140.263V71.2496H1106.7V141.094C1106.7 156.172 1101.99 168.256 1092.57 177.347C1083.14 186.438 1070.39 190.983 1054.32 190.983C1038.24 190.983 1025.49 186.438 1016.07 177.347C1006.65 168.256 1001.93 156.172 1001.93 141.094Z"
                                    fill="white" />
                                <path
                                    d="M1127.49 187.657V71.2496H1164.9L1205.65 144.42H1207.31L1204.82 129.453V71.2496H1235.58V187.657H1198.16L1157.42 114.487H1155.76L1158.25 129.453V187.657H1127.49Z"
                                    fill="white" />
                                <path
                                    d="M1257.24 187.657V71.2496H1302.31C1321.49 71.2496 1337.07 76.8482 1349.04 88.0455C1361.01 99.1319 1367 112.935 1367 129.453C1367 145.972 1361.01 159.83 1349.04 171.027C1337.07 182.114 1321.49 187.657 1302.31 187.657H1257.24ZM1288.01 159.387H1302.14C1312.45 159.387 1320.44 156.726 1326.09 151.404C1331.75 146.083 1334.57 138.766 1334.57 129.453C1334.57 120.141 1331.75 112.824 1326.09 107.502C1320.44 102.181 1312.45 99.52 1302.14 99.52H1288.01V159.387Z"
                                    fill="white" />
                                <path
                                    d="M207.846 197.496C160.645 197.496 152.364 156.919 152.364 156.919H183.831C183.831 156.919 187.972 170.997 207.846 170.997C220.267 170.997 225.236 166.028 225.236 161.06C225.236 142.842 156.504 153.607 156.504 111.374C156.504 92.328 173.894 74.938 204.534 74.938C249.251 74.938 255.047 111.374 255.047 111.374H223.58C223.58 111.374 221.095 101.437 204.534 101.437C192.94 101.437 188.8 105.577 188.8 109.718C188.8 127.936 257.531 117.171 257.531 159.403C257.531 179.278 240.97 197.496 207.846 197.496Z"
                                    fill="white" />
                                <path
                                    d="M79.5682 194.184V106.406H43.1321V78.2511H146.644V106.406H110.208V194.184H79.5682Z"
                                    fill="white" />
                                <path d="M0 194.184V78.2511H30.6394V194.184H0Z" fill="white" />
                                <path d="M378.386 6L360.345 16.5549L433.636 141.828L451.677 131.273L378.386 6Z"
                                    fill="url(#paint0_linear_1145_10)" />
                                <path
                                    d="M433.649 131.246L360.348 255.835L378.363 266.434L451.664 141.845L433.649 131.246Z"
                                    fill="url(#paint1_linear_1145_10)" />
                                <path
                                    d="M585.728 125.723L442.644 126.073L442.695 146.974L585.779 146.625L585.728 125.723Z"
                                    fill="url(#paint2_linear_1145_10)" />
                                <path
                                    d="M508.784 11.2708H374.181C371.192 11.2708 368.433 12.8635 366.941 15.4512L299.641 132.02C298.149 134.608 298.149 137.793 299.641 140.381L366.941 256.95C368.433 259.537 371.196 261.13 374.181 261.13H508.784C511.773 261.13 514.532 259.537 516.024 256.95L583.323 140.381C584.816 137.793 584.816 134.608 583.323 132.02L516.024 15.4512C514.532 12.8635 511.769 11.2708 508.784 11.2708Z"
                                    stroke="white" stroke-width="20.9017" stroke-miterlimit="10" />
                                <path
                                    d="M392.985 86.4804L391.25 167.219C391.216 168.859 392.738 170.089 394.333 169.714L435.234 160.077L423.401 209.421C422.341 213.832 428.088 216.533 430.811 212.906L502.191 117.773C503.601 115.899 501.89 113.287 499.608 113.825L455.569 124.201L472.03 69.7984C472.59 67.9484 470.934 66.187 469.054 66.6298L394.918 84.0964C393.803 84.3591 393.012 85.34 392.986 86.4844L392.985 86.4804Z"
                                    fill="#CBCBCB" />
                                <path
                                    d="M297.231 136.199L442.657 136.537M513.611 11.2708L442.654 136.539L513.611 261.13"
                                    stroke="white" stroke-width="20.9017" stroke-miterlimit="10" />
                                <defs>
                                    <linearGradient id="paint0_linear_1145_10" x1="489.359" y1="242.431" x2="488.411"
                                        y2="18.0682" gradientUnits="userSpaceOnUse">
                                        <stop />
                                        <stop offset="0.834767" stop-color="white" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1145_10" x1="573.07" y1="130.853" x2="351.283"
                                        y2="131.04" gradientUnits="userSpaceOnUse">
                                        <stop />
                                        <stop offset="0.853129" stop-color="white" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1145_10" x1="442.634" y1="136.365" x2="585.769"
                                        y2="136.365" gradientUnits="userSpaceOnUse">
                                        <stop />
                                        <stop offset="0.837691" stop-color="white" />
                                    </linearGradient>
                                </defs>

                            </svg>
                        </div>
                        <h2 class="contacts-heading uk-h3 uk-margin-medium uk-text-center"> We create immersive AR
                            experiences that
                            seamlessly blend digital content with the physical environment </h2>
                        <div class="uk-margin uk-width-medium uk-margin-auto uk-text-center">
                            <div class="uk-grid uk-child-width-1-3 uk-flex-middle uk-grid-divider uk-grid-match"
                                uk-grid="">
                                <div class="uk-first-column">
                                    <div class="el-item uk-panel uk-margin-remove-first-child">

                                        <span class="el-image uk-icon" uk-icon="width: 40; height: 40;">
                                            <svg width="40" height="40" viewBox="0 0 20 20">
                                                <path
                                                    d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z">
                                                </path>
                                                <path
                                                    d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z">
                                                </path>
                                                <rect x="13" y="4" width="5" height="1.4"></rect>
                                            </svg></span>
                                    </div>
                                </div>
                                <div>
                                    <div class="el-item uk-panel uk-margin-remove-first-child">
                                        <span class="el-image uk-icon" uk-icon="width: 40; height: 40;">
                                            <svg width="40" height="40" viewBox="0 0 20 20">
                                                <path
                                                    d="m10,1.09C5.08,1.09,1.09,5.08,1.09,10s3.99,8.91,8.91,8.91,8.91-3.99,8.91-8.91S14.92,1.09,10,1.09Zm4.25,5.8c-.03.36-.23,1.62-.44,2.99-.31,1.93-.64,4.04-.64,4.04,0,0-.05.59-.49.7s-1.16-.36-1.29-.46c-.1-.08-1.93-1.24-2.6-1.8-.18-.15-.39-.46.03-.82.93-.85,2.04-1.91,2.7-2.58.31-.31.62-1.03-.67-.15-1.83,1.26-3.63,2.45-3.63,2.45,0,0-.41.26-1.19.03-.77-.23-1.67-.54-1.67-.54,0,0-.62-.39.44-.8h0s4.46-1.83,6-2.47c.59-.26,2.6-1.08,2.6-1.08,0,0,.93-.36.85.52Z">
                                                </path>
                                            </svg></span>
                                    </div>
                                </div>
                                <div>
                                    <div class="el-item uk-panel uk-margin-remove-first-child">
                                        <span class="el-image uk-icon" uk-icon="width: 40; height: 40;">
                                            <svg width="40" height="40" viewBox="0 0 20 20">
                                                <polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5">
                                                </polyline>
                                                <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z">
                                                </path>
                                            </svg></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="uk-panel uk-text-lead uk-margin-medium uk-width-xlarge@s uk-margin-auto uk-text-center">
                            Write to us with any questions you may have, we will be happy to answer and
                            help.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>
<style lang="less" scoped>
#contacts-section {
    z-index: 1000;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
}
</style>