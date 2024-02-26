<script setup>
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { useBrickStore } from '@/stores/brick';

const click = () => {
    const userStore = useUserStore()
    userStore.stage = 0
    userStore.hp = 5
    const useBrick = useBrickStore()
    useBrick.removeAll()
    router.push('/')
}
</script>

<template>
    <div class="head">
        <button class="button" @click="click()">返回首页</button>
    </div>
</template>

<style lang="css" scoped>
.head {
    width: 100%;
    height: 60px;
    background-color: #5C9696;
    align-self: end;
    text-align: center;
}
</style>