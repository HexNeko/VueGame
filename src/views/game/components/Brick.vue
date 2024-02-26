<script setup>
import { ref, watch } from 'vue'
import { useBallStore } from '@/stores/ball.js'
import { useBrickStore } from '@/stores/brick.js'

const ballStore = useBallStore()
const brickStore = useBrickStore()

//申请一个砖块id
const id = brickStore.appendBrick()
//随机一个位置
const position = ref('')
const [x, y] = brickStore.getPos(id)
position.value = `left:${x}px; top: ${y}px;`
//监听有没有被触碰
let isTouch = false
watch(ballStore, (newValue, oldValue) => {
    if(isTouch) return
    let isTouchX = false
    let isTouchY = false
    //if(isTouch) return
    if (ballStore.x >= x - 50 && ballStore.x < x + 150) {
        if (ballStore.y >= y - 25 && ballStore.y <= y + 25) {
            isTouchX = true
        }
    }
    if (ballStore.y >= y - 50 && ballStore.y < y + 50) {
        if (ballStore.x >= x - 25 && ballStore.x <= x + 125) {
            isTouchY = true
        }
    }
    if (isTouchX && !isTouchY) {
        ballStore.turnX()
        isTouch = true
        brickStore.removeBrick(id)
        position.value = 'opacity: 0;'
    }
    if (!isTouchX && isTouchY) {
        ballStore.turnY()
        isTouch = true
        brickStore.removeBrick(id)
        position.value = 'opacity: 0;'
    }
})
//定时刷新

</script>

<template>
    <div class="brick" :style="position"></div>
</template>

<style>
.brick {
    width: 150px;
    height: 50px;
    background-image: url(@/assets/brick1.jpg);
    background-position: center center;
    background-size: cover;
    box-shadow: 0 0 6px;
    position: absolute;
}
</style>