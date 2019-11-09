<template>
<div class="login">
    <h2>登录页面</h2>
    <div class="user">
        <input type="text" placeholder="用户名/邮箱/手机号" v-model='user'>
    </div>
    <div class="pass">
        <input type="text" placeholder="请输入密码" v-model="pass">
    </div>
    <div class="submit" @click ='login'>登录</div>
    <div class="fastSub">一键登录</div>
    <div class="more">
        <span>短信验证码</span>
        <span>手机快速注册</span>
    </div>
</div>
</template>

<script>

export default {
    data(){
        return{
            user:"",
            pass:''
        }
    },
    methods: {
        login() {
            let res = {
                user:this.user,
                pass:this.pass,
                isLogin: 1
            }
            localStorage.setItem('login', JSON.stringify(res))
            setTimeout(() => {
                this.$router.replace('/')
                window.confirm("登录成功")
             },1000)
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  h2 {
    text-align: center;
    font-size: 0.3733rem;
    margin: 0.2667rem auto;
  }
  div {
    width: 9.6rem;
    height: 1.33rem;
    line-height: 1.33rem;
    text-align: center;
    margin-bottom: 0.2667rem;
    font-size: 16px;
    &:nth-child(4) {
      color: #fff;
      border-radius: 0.6667rem;
      background: #f10000;
    }
    &:nth-child(5) {
      color: #f10000;
      border-radius: 0.6667rem;
      border: #f10000 1px solid;
    }
    &:nth-child(6) {
      display: flex;
      justify-content: space-between;
      font-size: 0.1867rem;
      color: rgba($color: #000000, $alpha: 0.4);
    }

    input {
      width: 100%;
      height: 100%;
      border: none;
      border-bottom: 1px #969799 solid;
      outline: none;
    }
  }
}
</style>

