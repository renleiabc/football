<!--
 * @Author: renlei
 * @Date: 2018-10-29 17:27:33
 * @LastEditors: renlei
 * @LastEditTime: 2019-10-22 17:40:28
 * @Description: 
 -->
<!--/Home.vue-->
<template>
  <div>
    <div class="section">
      <!--赛事推荐-->
      <slide-list :slides="slides"></slide-list>
      <!--快讯-->
    </div>
    <div class="section">
      <match-list :matchs="latstUpdated"
                  heading="精彩赛事"
                  @select="preview($event)">
      </match-list>
    </div>
    <div class="section">
      <match-list :matchs="recommended"
                  heading="球星专区"
                  @select="preview($event)">
      </match-list>
    </div>
    <modal-dd ref="dia"
              @dialogOpen="changeOpen($event)"
              @dialogClose="changeClose($event)">
      <div slot="heading"></div>
      <div>
        <div v-if="selected">
          <h2 class="dialog-title">{{ selected.title }}</h2>
          <div class="dialog-img">
            <img :src="selected.img_url"
                 alt="">
          </div>
          <h2 class="explain">{{selected.explain}}</h2>
          <div v-if="selected.content">
            <div v-for="groups in selected.content">
              <div v-for="(group,key) in groups"
                   class="dialog-group">
                <span class="dialog-key">{{key}}</span>
                <div class="dialog-value">
                  <span v-for="value in group">
                    {{value}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal-dd>
  </div>
</template>
<style>
@import "../assets/style/home.css";
</style>
<script>
import MatchList from "../config/MatchList.vue"
import SlideList from "../config/Silder.vue"
import ModalDd from "../config/dd.vue"
import data from "../assets/js/home.js"
export default {
  name: 'swiper',
  data() {
    return {
      announcement: "",
      selected: undefined,
      slides: [],
      latstUpdated: [],
      recommended: [],
    }
  },
  created() {
     console.log(JSON.stringify(data));
    this.slides = data.slides;
    this.latstUpdated = data.latstUpdated;
    this.recommended = data.recommended;
  },
  components: { MatchList, SlideList, ModalDd },
  methods: {
    preview(match) {
      this.selected = match;
      this.$refs.dia.open();
    },
    changeOpen(val) {
      console.log(val)
    },
    changeClose(val) {
      console.log(val)
    }
  }
}
</script>
