<template>
<div>
    <div class="img"><img :src="icons.rcmdIcon" alt=""></div>
    <div class="rec" v-for='(val, idx) in rcmdArr' :key='idx' @touchstart = 'buy(idx)' >
       <img :src="val.src" alt="">
        <div v-text="val.desc" class="desc"></div>
         <div class="price">
            <span v-text="val.current_price"></span>
            <span>看相似</span>
         </div>
    </div>
</div>    
</template>

<script>
import { icons } from "@/assets/index.js";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data: function() {
    return {
      icons,
    };
  },
  computed: {
    ...mapState(["rcmdArr"])
  },
  mounted() {
    //   实现缓存
    if (this.rcmdArr.length === 0) {
      this.getRcmd();
    }
  },
  methods: {
    ...mapActions(["getRcmd"]),
    ...mapMutations(["updateOrderArr"]),
    buy(idx) {
      this.$messagebox
        .confirm("是否加入购物车")
        .then(action => {
          if (action === "confirm") {
            this.updateOrderArr({ type: "insert", orderArr:this.rcmdArr[idx] });
          } else {
            return;
          }
        })
        .catch(() => {
          console.log("没有加入购物车");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.img img {
  width: 100%;
}
.rec {
  padding: 0.1333rem;
  width: 4.7rem;
  height: 8rem;
  box-sizing: border-box;
  float: left;
  font-size: 0.4rem;
  border: 0.07rem solid #f6f6f6;
  overflow: hidden;

  img {
    width: 4.6rem;
    height: 4.6rem;
    margin-bottom: 0.2667rem;
  }
  .desc {
    font-size: 0.2133rem;
    margin-bottom: 0.2667rem;
  }
  .price {
    display: flex;
    justify-content: space-between;
    span {
      &:last-child {
        border: 0.0133rem #cdcdcd solid;
      }
    }
  }
}
</style>

