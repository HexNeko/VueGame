import { defineStore } from "pinia"
import { ref } from 'vue'

export const useBarStore = defineStore('bar', () => {
    const x = ref(250)
    const y = ref(750)
    return {
        x,
        y,
    }
})