<template>
    <div class="skillBox">
        <div class="header">
             <span>京东秒杀</span>
             <span>10点场</span>
             <span class="time">
                定时器
             </span>
        </div>
        <div class="bottom">
             <div class="skillCom">
                  <div class="goods" v-for='(val,idx ) in skillArr' :key='idx' >
                  <img :src="val.src" alt="">
                  <span v-text="val.current_price"></span>
                 <del>
                      <span v-text="val.original_price"></span>
                 </del>
              </div>
             </div>
        </div>
    </div>
    
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
         ...mapState(['skillArr'])   
    },
    mounted() {
        if(this.skillArr.length === 0){
            this.getSkillGoods()
        }
       
    },
    methods: {
        ...mapActions(['getSkillGoods'])
    }

}
</script>

<style lang="scss" scoped>
.skillBox{
     height:4.5rem;
     width: 10rem;
     font-size: 0.4rem;
     background: #fff;
     .header{
         height: 1.0667rem;
         line-height: 1.0667rem;
     }
    .bottom{
    height: 3.5rem;
    width: 10rem;
    overflow: auto;
    >.skillCom{
        height: 3.5rem;
        width: 25rem;
        >.goods{
          width: 2rem;
          height:3rem;
          float: left;
          margin: 0.1333rem ;
        img{
            width: 2rem;
            height: 2rem;
        }
        span{
            display: block;
            text-align: center;
        }
        .time{
            width: 3.04rem;
            height: 1.0667rem;
            border: 0.0133rem solid #cdcdcd;

        }
        }
    }
}
}

</style>

