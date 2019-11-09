<template>
<div class="header">
    <i class="fa fa-bars" @touchstart = "tap">
      <div v-if="show">
        <p>suna</p>
        <p @click.stop = "exit">退出</p>        
      </div>
    </i>
    <div class="soso">
        <div>JD</div>
        <i class="fa fa-search"></i>
        <input type="text" placeholder="美的饮水机">   
    </div>
    <router-link to='/login' tag='span'>登录</router-link>
</div>    
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    tap() {
      this.show = true;
    },
    exit() {
      this.show = false;
      this.$messagebox
        .confirm("你确定要退出吗?")
        .then(() => {
          localStorage.removeItem("login");
          location.reload(true);
          window.confirm("退出成功");
        })
        .catch(() => {
          console.log("取消退出");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 10rem;
  height: 1.1733rem;
  line-height: 1.1733rem;
  color: #fff;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: space-between;
  box-sizing: border-box;
  background: rgba(142, 74, 1, 1);
  z-index: 9999;
  > i {
    padding: 0.1333rem 0 0 0.3rem;
    position: relative;
    > div {
      position: absolute;
      font-size: 0.4rem;
      background: rgba(142, 74, 1, 0.6);
    }
  }
  > div {
    height: 0.8rem;
    width: 7rem;
    margin: 0.2667rem;
    border-radius: 0.5333rem;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    > div {
      height: 0.6rem;
      line-height: 0.6rem;
      width: 1rem;
      color: #f23030;
      padding-left: 0.1333rem;
      margin: 0.1333rem 0.1333rem 0 0.1333rem;
      display: block;
      //  padding-bottom: 10px;
      font-size: 0.5rem;
      border-right: 1px silver solid;
    }
    > i {
      height: 0.4rem;
      line-height: 0.9rem;
      font-size: 0.5rem;
      width: 0.8rem;
      display: block;
      color: silver;
      padding-left: 0.1333rem;
    }
    > input {
      width: 4rem;
      display: inline-block;
      border: 0;
      outline: none;
    }
  }
  > span {
    font-size: 14px;
    padding: 0.1667rem 0.2667rem 0 0;
  }
}
</style>

