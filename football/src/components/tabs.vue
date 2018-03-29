<template>
  <div class="tabs">
    <ul>
      <!--使用router-link指向定义的path-->
      <router-link :to="{name:'Home'}" tag = 'li' exact replace>
        <div class="tabs-ico"></div>
        <div class="tabs-text">首页</div>
      </router-link>
      <router-link :to="{name:'Match'}" tag = 'li'>
        <div class="tabs-ico"></div>
        <div class="tabs-text">赛事</div>
      </router-link>
      <router-link :to="{name:'Star'}" tag = 'li'>
        <div class="tabs-ico"></div>
        <div class="tabs-text">球星</div>
      </router-link>
      <router-link :to="{name:'Me'}" tag = 'li'>
        <div class="tabs-ico"></div>
        <div class="tabs-text">我</div>
      </router-link>
    </ul>
  </div>
</template>
<style scoped>
  @import "../assets/style/tabs.css";
</style>
<script>

</script>
