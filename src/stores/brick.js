import { defineStore } from "pinia"
import { useUserStore } from "./user"
import { ref } from 'vue'

export const useBrickStore = defineStore('brick', () => {
    const userStore = useUserStore()
    const brickArr = ref([])
    const pos =
        [
            [[50, 50], [220, 50], [390, 50], [50, 200], [220, 200], [390, 200], [50, 350], [220, 350], [390, 350]],
            [[50, 50], [220, 50], [390, 50], [50, 200], [220, 200], [390, 200], [50, 350], [220, 350], [390, 350]],
            [[50, 50], [220, 150], [390, 50], [50, 200], [220, 200], [390, 200], [50, 350], [220, 350], [390, 350]],
            [[50, 50], [220, 250], [390, 50], [50, 200], [220, 200], [390, 200], [50, 350], [220, 350], [390, 350]]
        ]
    const removeAll = () => {
        brickArr.value = []
    }
    const removeBrick = (id) => {
        brickArr.value[id] = false
        for (let i = 0; i < 9; i++) {
            if (brickArr.value[i]) return
        }
        brickArr.value = []
        userStore.nextStage()
    }
    const appendBrick = () => {
        brickArr.value.forEach(function (item, index) {
            console.log(item)
            if (!item) {
                item = true
                return index
            }
        })
        brickArr.value.push(true)
        return brickArr.value.length - 1
    }
    const getPos = (id) => {
        console.log('stage', userStore.stage)
        return pos[userStore.stage][id]
    }
    return {
        appendBrick,
        removeBrick,
        removeAll,
        getPos,
    }
})