<template>
  <div>
    <tabs></tabs>
    <transition name="slide-fade">
      <!-- 用router-view渲染视图 -->
    <router-view></router-view>
    </transition>
  </div>

</template>
<style>
  .slide-fade-enter-active{
    transition: all .3s ease;
  }
  .slide-fade-leave-active{
    transition:all .3s cubic-bezier(1.0,0.5,0.8,1.0);
  }
  .slide-fade-enter,.slide-fade-leave-active{
    transform:translateX(-430px);
    opacity: 0;
  }
</style>
<script>
  import Tabs from "./tabs.vue"
  export default {
    components: { Tabs }
  }
</script>
