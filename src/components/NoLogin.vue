<template>
<div class="noLogin">
    登录后可同步购物车中的商品
    <mt-button type="danger" size='small' >登录</mt-button>
    <div class="carIcon">
        <img :src="icons.empty_icon" alt="">
        <div>登录后可同步购物车中商品</div>
    </div>
</div>
    
</template>

<script>
import { icons } from '@/assets/index.js'
export default {
      data:function (){
          return{
              icons
          }
      }
}
</script>

<style lang="scss" scoped>
 .noLogin{
     height:2rem;
     width: 100%;
     line-height: 2rem;
     font-size: 0.54rem; 
     text-align: center;
     background: #fff;
     mt-button{
         margin-left:0.4rem;
         padding: 0 0.1333rem; 
     }
     .carIcon{
         height:6.6667rem ;
         text-align: center;
         padding: 2.6667rem 0;
         >img{
             width: 2.5rem;
         }
         
     }
 }

</style>
