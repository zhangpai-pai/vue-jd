<template>
<div>
    <div class="cateList" v-for="(val,idx) in cateGroup" :key='idx'>
        <div class="title" v-text = 'val.title'>热卖分类</div>
        <ul >
            <li v-for="(val1,idx1) in val.data" :key='idx1'>
                <img :src="val1.src" alt="">
                <span v-text = "val1.desc">说说</span>
            </li>
        </ul>
    </div>
</div>
    
</template>

<script>
import { icons } from "@/assets/index.js";
import { mapState} from "vuex";
export default {
  data: function() {
    return {
      icons
    };
  },
 
  computed: {
    ...mapState([ "cateGroup"])
  },
  
};
</script>
     
<style lang="scss" scoped>
.cateList {
  margin-left: 2.27rem;
  color: #333333;
  box-sizing: border-box;
  > .title {
    font-size: 0.3733rem;
    padding: 0.2333rem 0 0.2333rem 0.2333rem;
  }
  > ul {
    width: 7.7rem;
    background: #fff;
    margin: 0;
    padding: 0;
    > li {
      width: 33%;
      height: 2.6667rem;
      display: inline-block;
      list-style: none;
      > img {
        width: 1.6rem;
        height: 1.6rem;
      }
      > span {
        width: 1.6rem;
        text-align: center;
        font-size: 0.32rem;
        display: block;
      }
    }
  }
}
</style>
