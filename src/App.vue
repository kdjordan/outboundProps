<template>
	<div>
		<router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
    </router-view>
		<transition name="fade">
			<div v-if="store.modalOpen">
				<TheModal />
			</div>
		</transition>
	</div>
</template>

<script setup>
	import TheModal from '@/components/TheModal.vue';
	import { useModalStore } from '@/stores/modal';
  
	const store = useModalStore();
</script>

<style lang="scss">
@import '@/scss/_base.scss';

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease-in-out;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
