<script setup>
import { ref, watch } from 'vue'
import { useBallStore } from '@/stores/ball.js'
import { useBarStore } from '@/stores/bar.js'


const ballStore = useBallStore()
const barStore = useBarStore()

//更新位置
const position = ref('')

//移动
watch(barStore, () => {
    position.value = `left: ${barStore.x}px;`
})

//碰撞
watch(ballStore, () => {
    let isTouchX = false
    let isTouchY = false
    //if(isTouch) return
    if (ballStore.x >= barStore.x - 50 && ballStore.x < barStore.x + 150) {
        if (ballStore.y >= barStore.y && ballStore.y <= barStore.y + 25) {
            isTouchX = true
        }
    }
    if (ballStore.y >= barStore.y - 25 && ballStore.y < barStore.y + 50) {
        if (ballStore.x >= barStore.x - 25 && ballStore.x <= barStore.x + 125) {
            isTouchY = true
        }
    }
    if (isTouchX && !isTouchY) {
        ballStore.turnX()
    }
    if (!isTouchX && isTouchY) {
        ballStore.turnY()
    }
})

</script>

<template>
    <div class="bar" :style="position"></div>
</template>

<style>
.bar {
    width: 150px;
    height: 25px;
    background-image: url(@/assets/ball.jpg);
    background-position: center center;
    background-size: cover;
    box-shadow: 0 0 6px;
    position: absolute;
    left: 225px;
    top: 750px;
}
</style>