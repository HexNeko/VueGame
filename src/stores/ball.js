import { defineStore } from "pinia"
import { ref } from 'vue'
import { useUserStore } from './user'

export const useBallStore = defineStore('ball', () => {
    const userStore = useUserStore()
    const x = ref(250)
    const y = ref(650)
    let [vx, vy] = [5, -5]
    const turnX = () => {
        vx = -vx
    }
    const turnY = () => {
        vy = -vy
    }
    const nextPos = () => {
        if (x.value <= 0 || x.value >= 550) {
            turnX()
        }
        if (y.value <= 0) {
            turnY()
        }
        if (y.value > 780) {
            //触底
            x.value = 250
            y.value = 720
            vx = 5
            vy = -5
            userStore.hp--
            if (userStore.hp <= 0) {
                userStore.over()
            }
        }
        x.value += vx
        y.value += vy
        
    }
    return {
        x,
        y,
        nextPos,
        turnX,
        turnY
    }
})