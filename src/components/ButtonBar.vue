<template>
<div class="btn">
        <router-link to='/home' tag='span' >
        <img :src="buttonBarOn.src1" alt="" v-if='index== 1'> 
        <img :src="buttonBarOff.src1" alt="" v-else>
        </router-link>
        <router-link to='/cata' tag='span'> 
        <img :src="buttonBarOn.src2" alt="" v-if='index== 2'> 
        <img :src="buttonBarOff.src2" alt="" v-else> 
        </router-link>
        <router-link to='/jdm' tag='span' >
        <img :src="buttonBarOn.src3" alt="" v-if='index== 3'> 
        <img :src="buttonBarOff.src3" alt="" v-else> 
        </router-link>
        <router-link to='/cart' tag='span' ><img :src="buttonBarOff.src4" alt=""> 
        </router-link>
        <router-link to='/mine' tag='span' >
        <img :src="buttonBarOff.src5" alt=""  v-if='index == 5'> 
        <img :src="buttonBarOff.src5" alt="" v-else> 
        </router-link>
  </div>  
</template>
<script>
import { buttonBarOff }  from '@/assets/index.js'
import { buttonBarOn }  from '@/assets/index.js'
export default {
    name:'ButtonBar',
    props:['index'],
    data: function () {
        return{
            buttonBarOff,
            buttonBarOn
        } 
    }
}
</script>
<style lang='scss' scoped>
    .btn{
        z-index: 9999;
        height:1.6rem;
        line-height: 1.6rem;
        width: 10rem;
        border-top:0.0133rem solid #eeeeee;
        background: #fff;
        position: fixed;
        left: 0;bottom: 0;
     span{
         width: 20%;
         img{
             width: 20%;
         }
     }
    }
</style>
