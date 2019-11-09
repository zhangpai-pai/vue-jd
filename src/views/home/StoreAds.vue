<template>
<div>
    <span>东家小院</span>
 <div class="ads_box" v-for="(val,idx) in adArr" :key='idx'>  
       <div class="ads">
        <div class="ads_box_top1" v-if="val.type === 1">
            <div v-text="val.list[0].title"></div>
            <div v-text="val.list[0].desc"></div>
        </div>
        <div class="ads_box_top2" v-else>
            <div>
               <div v-text="val.list[0].title"></div>
               <div v-text="val.list[0].desc"></div>
            </div>
            <div >
                <div v-text="val.list[1].title"></div>
                <div v-text="val.list[1].desc"></div>
            </div>
        </div>

        <div class="ads_box_bottom">
            <div>
                <img :src="val.list[0].src" alt="">
            </div>
            <div>
                <img :src="val.list[1].src" alt="">
            </div>
        </div>
    </div>
 </div>
</div>  
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
    computed:{
        ...mapState(['adArr'])
    },
    mounted() {
        if(this.adArr.length === 0){
            this.getAds()
        }
    },
    methods:{
        ...mapActions(['getAds'])
    }

}
</script>

<style lang="scss" scoped>
   span{
       font-size: 0.4rem;
       text-align: center;
       font-weight: bold;
       display: block;
   }
   .ads{
       background-color: white;
       width: 4.69rem;
       height: 3.2rem;
       padding: .19rem;
       box-sizing: border-box;
       overflow: hidden;
       float: left;
       margin: 0.0667rem;
    //    border: 0.0667rem solid #cdcdcd;
          
           .ads_box_top1{
               text-align: left;
                >div:first-child {
                    font-size: .22rem;
                    color: rgba(25, 123, 251, 1);
                }
                >div:nth-child(2) {
                    color: #666771;
                    font-size: .32rem;
                }
           }
            .ads_box_top2 {
                display: flex;
                text-align: left;
                > div {
                    flex: 1;
                    > div:nth-child(1) {
                        display: block;
                        font-size: .43rem;
                        color: black;
                    }
                    > div:nth-child(2) {
                        font-size: .32rem;
                        color: #666771;
                    }
                }
            }
           .ads_box_bottom{
               display: flex;
                > div {
                  flex: 1;
                  text-align: center;
                  vertical-align: middle;
                  height: 100%;
                    > img {
                        width: 1.6rem;
                        height: 1.6rem;
                        display: inline-block;
                        margin-top: .19rem;
                    }
                }
            }
                          
           
        
    }


</style>

