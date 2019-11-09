<template>
<div class="box">
    <div class="banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item><img :src="banner.img1" alt=""></mt-swipe-item>
            <mt-swipe-item><img :src="banner.img2" alt=""></mt-swipe-item>
            <mt-swipe-item><img :src="banner.img3" alt=""></mt-swipe-item>
            <mt-swipe-item><img :src="banner.img4" alt=""></mt-swipe-item>
            <mt-swipe-item><img :src="banner.img5" alt=""></mt-swipe-item>  
        </mt-swipe>
    </div>
</div>   
</template>

<script>
import { banner } from "@/assets/index.js";
export default {
  data: function() {
    return {
      banner
    };
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 10rem;
  height: 3.8rem;
  background: #8e4a01;
  padding-top: 0.2rem;
  margin-top: 1.1733rem;
  overflow: hidden;
  .banner {
    margin-left: 0.33rem;
    width: 9.3333rem;
    height: 3.7333rem;
    border-radius: 0.5rem;
    background: rgba(142, 74, 1, 1);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
