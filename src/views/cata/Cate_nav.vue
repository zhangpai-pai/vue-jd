<template>
<div>
    <div class="cate_nav"  >
        <span v-for="(val,idx) in cateArr" :key='idx' v-text='val.cate' @touchstart='toSkit(idx)' :class="{'on':index == idx}">热门推荐</span>     
    </div>
</div>   
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data: function() {
    return {
      index: 0
    }
  },
  computed: {
    ...mapState(["cateArr","cateGroup"])
  },
  mounted() {
    this.getCates();
  },

  methods:{
    ...mapMutations(['updateCateGroup']),
    ...mapActions(["getCates"]),
    toSkit(idx) {
     
      this.index = idx;
      this.updateCateGroup(idx)
    }
  }
}
</script>

<style lang="scss" scoped>
.cate_nav {
  width: 2.2667rem;
  height: 15.6rem;
  position: fixed;
  left: 0;
  top: 0;
  border: 0.0133rem solid #eeee;
  overflow: scroll;
  > span {
    height: 1.3333rem;
    line-height: 1.3333rem;
    width: 100%;
    display: block;
    font-size: 0.3733rem;
    text-align: center;
    border-bottom: 0.0133rem solid #fff;
    color: #978d8d;
  }
  .on {
    color: orange;
  }
}
</style>

