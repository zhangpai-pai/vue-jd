<template>
    <div>    
        <div class="goods" v-for ='(val,idx) in orderArr' :key='idx' >
            <div @touchstart = 'start' @touchend = 'end(idx)'>
                <img :src="val.src" alt=""> 
                <div class="desc" v-text="val.desc">球</div>
                <div class="count" v-text="val.current_price">11</div>
            </div>
        </div>
         <div class="footer">
          <span>合计:<span v-text="total">22222</span></span>
          <mt-button type="danger" @click="submit" >去结算</mt-button>
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["orderArr"]),
    // 计算总价格
    total() {
      let t = 0;
      this.orderArr.map(ele => {
        t += ele.current_price;
      });
      return t;
    }
  },
  methods: {
    ...mapMutations(["updateOrderArr"]),
    submit() {
      this.$messagebox
          .confirm("确认结算")
          .then(action => {
            if (action === "confirm") {
              this.updateOrderArr({ type: "deleteAll" });
               console.log("付款成功，等候发货");
            }
          })
          .catch(() => {
            console.log("取消支付");
          });
   
    },
    start() {
      this.startTime = Date.now();
    },
    end(idx) {
      // 用touch事件、时间戳来模拟长按事件

      if (Date.now() - this.startTime > 1000) {
        // 添加一个用户提示框
        this.$messagebox
          .confirm("你确定要删除这个订单吗?")
          .then(action => {
            if (action === "confirm") {
              // 执行删除
              console.log(idx);
              // 构造一个payload，type表示是删除一个商品
              this.updateOrderArr({ type: "delete", index: idx });
            }
          })
          .catch(() => {
            console.log("不删除");
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.goods {
  overflow: auto;
  > div {
    display: flex;
    justify-content: space-around;
    height: 2rem;
    margin: 0.1333rem 0;
    line-height: 2rem;
    border: 0.0267rem #cdcdcd solid;
    img {
      width: 2rem;
      text-align: center;
    }
    .count {
      width: 2rem;
      font-size: 1rem;
      text-align: center;
    }
    .desc {
      width: 3rem;
      height: 2rem;
      font-size: 0.6rem;
      text-align: center;
      overflow: hidden;
    }
  }
}
.footer {
  background: #90a0a0;
  height: 1.4667rem;
  width: 10rem;
  line-height: 1.4667rem;
  color: #fff;
  position: fixed;
  bottom: 1.7rem;
  button {
    position: absolute;
    right: 0.1333rem;
    bottom: 0.1333rem;
  }
}
</style>
