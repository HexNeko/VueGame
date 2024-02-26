<script setup>
import { ref } from 'vue'
import { useBallStore } from '@/stores/ball.js'

const ballStore = useBallStore()
const position = ref('')

//定时刷新
setInterval(() => {
    ballStore.nextPos()
    position.value = `left:${ballStore.x}px; top: ${ballStore.y}px;`
}, 20);
</script>

<template>
    <div class="ball" :style="position"></div>
</template>

<style>
.ball {
    width: 50px;
    height: 50px;
    background-image: url(@/assets/ball.jpg);
    background-position: center center;
    background-size: cover;
    box-shadow: 0 0 6px;
    position: absolute;
    border-radius: 25px;
}
</style>