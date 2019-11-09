<template>
<div class="ads">
    <img :src="ads.ad1" alt="">
    <img :src="ads.ad2" alt="">
    <img :src="ads.ad3" alt="">
</div>   
</template>

<script>
import { ads } from "@/assets/index.js";
export default {
  data: function() {
    return {
      ads
    };
  }
};
</script>

<style lang="scss" scoped>
.ads {
  width: 100%;
  height: 2.67rem;
  overflow: hidden;
  img {
    float: left;
    width: 33.333%;
    height: 100%;
    border: 0;
  }
}
</style>

