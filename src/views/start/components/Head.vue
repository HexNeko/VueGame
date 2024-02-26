<script setup>
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

const userStore = useUserStore()

</script>

<template>
    <div class="head">
        <p>stage:{{ userStore.stage }} hp:{{ userStore.hp }}</p>
    </div>
</template>

<style lang="css" scoped>
.head {
    width: 100%;
    height: 60px;
    background-color: #5C9696;
    align-self: start;
    text-align: center;
}
</style>