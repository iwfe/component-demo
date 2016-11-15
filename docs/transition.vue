<template lang="html">
    <transition name="slide" mode="out-in">
        <keep-alive>
            <router-view class="view">
            </router-view>
        </keep-alive>
    </transition>  
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
