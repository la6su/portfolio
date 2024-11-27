<script setup lang="ts"></script>

<template>
	<div id="pageLoader" class="el-item">
		<div class="uk-position-center uk-text-center">
			<div class="loader">
				<svg width="26" height="26" version="1.1" xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20"
					style="enable-background:new 0 0 20 20;" xml:space="preserve">
					<path stroke="#fff" fill="none" stroke-linecap="square" stroke-linejoin="bevel"
						d="M5,1.1L2.4,11.2h5.5L4,18.9L17.7,7.5h-6.4L15,1.1H5z" />
				</svg>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.loader::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 2px;
	border: 2px solid #fff;
	background-color: transparent;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	animation: rotate 0.5s linear infinite;
}

@keyframes moveX {

	0%,
	25% {
		background-position: 10px bottom
	}

	75%,
	100% {
		background-position: -30px bottom;
	}
}

@keyframes rotate {

	0%,
	25% {
		transform: translate(-50%, -50%) rotate(0deg)
	}

	75%,
	100% {
		transform: translate(-55%, -55%) rotate(90deg)
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>