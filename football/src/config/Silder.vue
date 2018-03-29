<template>
  <div class="swiper-container"
       ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in slides">
        <router-link tag="div" :to="{name:'MatchDetails',params:{id:slide.id}}">
          <img :src="slide.img_url" alt="">
        </router-link>
      </div>
    </div>
    <div class="swiper-pagination"
         ref="pagination"></div>
  </div>
</template>

<script>
  export default {
    name: "silder",
    props: ["slides"],
    mounted() {
      //不要选用creater钩子，而是选用mounted;
      //否则Swiper不能生效，因为creater调用时元素还没有挂载到Dom上；
      new Swiper(this.$refs.slider, {
        pagination: this.$refs.pagination,
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
      })
    },
  }
</script>

<style scoped>

</style>
