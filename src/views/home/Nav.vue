<template>
    <div class="nav">
        <mt-swipe :auto="0">
         <mt-swipe-item >
             <div v-for='(val,idx) in cateArr1' :key='idx' class="var-con">
                 <img :src="val.src" alt="">
                 <span v-text ='val.cate'></span>
             </div>
         </mt-swipe-item>
         <mt-swipe-item>
              <div v-for='(val,idx) in cateArr2' :key='idx' class="var-con">
                 <img :src="val.src" alt="">
                 <span v-text ='val.cate'></span>
              </div> 
         </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { cates } from "@/assets/index.js";
export default {
  data: function() {
    return {
      cates
    };
  },
  computed: {
    cateArr1() {
      return this.cates.slice(0, 10);
    },
    cateArr2() {
      return this.cates.slice(10);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 10rem;
  height: 4.2667rem;
  margin-top: 0.2667rem;
  .var-con {
    height: 2rem;
    float: left;
    width: 2rem;
    box-sizing: border-box;
  }
  img {
    width: 1.0667rem;
    margin-left: 0.4rem;
  }
  span {
    display: block;
    font-size: 0.28rem;
    text-align: center;
  }
}
</style>

