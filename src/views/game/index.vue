<script setup>
import Ball from './components/Ball.vue'
import Brick from './components/Brick.vue'
import Bar from './components/Bar.vue'
import { useMouseInElement } from '@vueuse/core'
import { useBarStore } from '@/stores/bar'
import { watch, ref } from 'vue'

const barStore = useBarStore()

//获取鼠标相对位置
const target = ref(null)
const { elementX, isOutside } = useMouseInElement(target)

watch([elementX, isOutside], () => {
    //在外面则不执行
    if (isOutside.value) return
    if (elementX.value >= 75 && elementX.value <= 525)
        barStore.x = elementX.value - 75
})


</script>

<template>
    <div class="box" ref="target">
        <Brick></Brick>
        <Brick></Brick>
        <Brick></Brick>
        <Brick></Brick>
        <Brick></Brick>
        <Brick></Brick>
        <Brick></Brick>
        <Brick></Brick>
        <Brick></Brick>
        <Bar></Bar>
        <Ball></Ball>
    </div>
</template>

<style lang="css" scoped>
.box {
    width: 100%;
    height: 840px;
    position: relative;
    flex-wrap: wrap;
}
</style>