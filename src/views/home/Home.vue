<template>
    <div>
        <buttonBar index='1'></buttonBar>
        <sosoBar></sosoBar>
        <banner></banner>
        <nav1></nav1>
        <ads></ads>
        <skill></skill>
        <storeAds></storeAds>
        <div class="rcmd">
            <rcmd></rcmd>
        </div>
    </div>          
</template>

<script>
import buttonBar from "@/components/ButtonBar.vue";
import sosoBar from "./SosoBar.vue";
import banner from "./Banner.vue";
import nav1 from "./Nav.vue";
import ads from "./Banner-ads.vue";
import skill from "./Skill.vue";
import storeAds from "./StoreAds.vue";
import rcmd from "./Rcmd.vue";
import { mapActions } from "vuex";
import BScroll from "@better-scroll/core";
export default {
  name: "home",
  data: function() {
    return {
      page: 1
    };
  },
  components: {
    buttonBar,
    sosoBar,
    banner,
    nav1,
    ads,
    skill,
    storeAds,
    rcmd
  },
  mounted() {
    let bs = new BScroll(".rcmd", {
      probeType: 3,
      pullUpLoad: true
    });
    bs.on("scroll", () => {
      console.log("scroll");
    });
    bs.on("scrollEnd", () => {
      console.log("scroll end");
      //    this.page++
      this.getRcmd();
    });
  },
  methods: {
    ...mapActions(["getRcmd"])
  }
};
</script>

<style scoped>
</style>