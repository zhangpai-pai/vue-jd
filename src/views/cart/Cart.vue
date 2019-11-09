<template>
    <div class="cart">
      <div class="head">购物车</div> 
       <buttonBur ></buttonBur>
       <div v-if="userInfo.user">
           <orderList  v-if="orderArr.length > 0"></orderList>
           <div v-else class="empty_car">购物车为空，请<a href="http://localhost:8080/#/home">首页-为你推荐</a>先挑选商品</div>
       </div>         
        <noLogin v-else></noLogin>     
    </div>
    
</template>

<script>
import buttonBur from "@/components/ButtonBar.vue";
import noLogin from "@/components/NoLogin.vue";
import orderList from "./OrderList.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    buttonBur,
    noLogin,
    orderList
  },
  computed: {
    ...mapState(["userInfo", "orderArr"])
  }
};
</script>

<style lang='scss' scoped>
.cart {
  background: rgba(247, 247, 247, 1);
  padding-top: 1.6rem;
  .head {
    background: #eb4f38;
    height: 1.4667rem;
    width: 10rem;
    text-align: center;
    line-height: 1.4667rem;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
  }
  .empty_car {
    font-size: 0.6rem;
    text-align: center;
  }
}
</style>