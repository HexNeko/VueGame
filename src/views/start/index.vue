<script setup>
import Head from './components/Head.vue'
import Foot from './components/Foot.vue'
import router from '@/router';
import { useUserStore } from '@/stores/user'


const userStore = useUserStore()
const click = () => {
    userStore.stage = 1
    router.push('game')
}
</script>

<template>
    <div class="content">

        <Head></Head>
        <RouterView :key="$route.fullPath"></RouterView>
        <button class="button" v-if="userStore.stage < 1" @click="click()" type="primary">开始游戏</button>
        <button class="button" v-if="userStore.stage > 1" @click="click()" type="primary">下一关</button>
        <Foot></Foot>

    </div>
</template>

<style lang="css" scoped>
.content {
    margin: 0 auto;
    height: 960px;
    width: 600px;
    display: flex;
    position: relative;
    background-image: url(@/assets/background.jpg);
    background-position: center center;
    background-size: cover;
    flex-wrap: wrap;
}

.button {
    margin: 0 auto;
    height: 50px;
}
</style>