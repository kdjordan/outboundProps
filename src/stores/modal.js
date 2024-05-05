import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {

  state: () => ({
    isModalContact: false,
    modalOpen: false,
    homeSelection: {
        home: '',
        option: ''
      }
  }),
  getters: {
    getIsModalContact: state => state.isModalContact,
    getModalOpen: state => state.modalOpen,
    getHomeSelection: state => state.homeSelection
  }
})
