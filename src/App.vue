<template>
  <div id="app">
    <!-- <transition name="fade"> -->
      <router-view></router-view>
    <!-- </transition> -->
    <transition name="fade">
      <div v-if="store.modalOpen">
        <TheModal />
      </div>
    </transition >
  </div>
</template>

<script setup>

import TheModal from '@/components/TheModal.vue'
import { useModalStore } from '@/stores/modal';

const store = useModalStore();


</script>

<style lang="scss">
@import '@/scss/_base.scss';
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>
