<template>
    <div>   
       <buttonBur index='2'></buttonBur>
       <cateNav></cateNav>
       <cateList></cateList>
    </div>    
</template>

<script>
import buttonBur from "@/components/ButtonBar.vue";
import cateNav from "./Cate_nav.vue";
import cateList from "./CateList.vue";
export default {
  name: "home",
  components: {
    buttonBur,
    cateNav,
    cateList
  }
};
</script>

<style scoped>
</style>