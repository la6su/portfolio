<script setup lang="ts"></script>

<template>
	<button 
		uk-scrollspy-class
		id="main-toggle-button"
		class="el-content uk-button uk-button-text uk-position-z-index"
		style="pointer-events: auto"
	>
		<span
			class="uk-margin-small-right uk-icon-button uk-border-circle"
			uk-icon="arrow-left"
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
			>
				<polyline
					fill="none"
					stroke="#000"
					points="10 14 5 9.5 10 5"
				/>
				<line
					fill="none"
					stroke="#000"
					x1="16"
					y1="9.5"
					x2="5"
					y2="9.52"
				/>
			</svg> 
		</span>
		<span>return on the map</span>
	</button>
</template>