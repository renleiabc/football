<template>
  <div class="macth-items">
    <h1>{{heading}}</h1>
    <div class="match"
         v-for="match in matchs"
        @click = "$emit('select',match)">
      <div class="cover">
        <img :src="match.img_url"/>
      </div>
      <div class="title">{{ match.title }}</div>
      <div class="authors">{{ match.slogan}}</div>
    </div>
  </div>
</template>
<style>
</style>

<script>
  export default {
    name: "match-list",
    props: ['heading', 'matchs'],
  }
</script>

