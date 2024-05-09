<template>
	<div>
		<router-view v-slot="{ Component, route }">
			<transition name="fade">
				<component :is="Component" :key="route.path" />
			</transition>
		</router-view>
	</div>
</template>

<style lang="scss">
	@import '@/scss/_base.scss';
	@import '@/scss/_animations.scss';
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
