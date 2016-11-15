<template>
<div>
    <div class="view">
        <header  class="bar bar-header bar-calm">
            <h3 class="title">Demo List</h3>
        </header>
        <ul class="list list-wapper">
            <li class="item item-divider">
                弹层类组件
            </li>
            <router-link  class="item" tag="li" :to="{path:'/dialog'}" append>dialog</router-link>
        </ul>
    </div>
    <transition name="slide" mode="out-in">
        <keep-alive>
            <router-view class="view">
            </router-view>
        </keep-alive>
    </transition> 
    <!-- <router-link :to="'home'"  :to="{name:'user' path='home' params: {}, query:{}}  replace/append"  ></router-link>-->
    <!-- exact是否激活  tag 渲染标签 -->
</div>
</template>
<script lang="">
    export default {
      data () {
        return {
          transitionName: 'slide-left'
        }
      },
      watch: {
        '$route' (to, from) {
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
      }
  }
</script>
<style>
    .list-wapper{
        margin-top: 44px;
    }
</style>