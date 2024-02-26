import router from "@/router"
import { defineStore } from "pinia"
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const hp = ref(5)
    const stage = ref(0)
    const over = () => {
        alert('游戏结束!')
        router.push('/')
    }
    const nextStage = () => {
        if (stage.value <= 3) {
            alert('下一关')
            stage.value++
            router.push('/')
        }
        else {
            alert('已经通关')
            router.push('/')
        }
    }
    return {
        stage,
        hp,
        nextStage,
        over
    }
})