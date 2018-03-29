<template>
  <div class="detail">
    <div class="backTo" v-show="isShow">
        <span  v-on:click="back">
          返回
        </span>
    </div>
    <h1>{{name}}</h1>

  </div>
</template>
<style scoped>
  .content {
    margin: 0;
    height: 100%;
  }

  .detail {
    height: 100%;
    width: 100%;
    text-align: left;
  }

  .link-back {
    background: limegreen;
    display: inline-block;
    height: 40px;
    width: 60px;
    line-height: 40px;
    text-align: center;
    border-radius: 10px;
  }
</style>
<script type="text/javascript">
  export default{
    data(){
      return {
        name: "",
        isShow: false,
      }
    },
    methods: {
      back(){
        this.$router.go(-1);//返回上一层；
      },
      newpage:function(){
        this.myrouter=this.$route.path;
        console.log(this.myrouter);
        if(this.myrouter == '/home'){
            this.isShow = false;
        }else{
            this.isShow = true;
        }
      }
    },
    created (){
      const bookID = this.$route.params.id;
      this.name = bookID;
      console.log(bookID);
      this.newpage();//调用；
    },
    watch: {
        '$route'(to,from){
            console.log(to)
        }
    }
  }
</script>
