<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import axios from 'axios'

  const { handleSignin } = defineProps(['handleSignin'])

  const user = reactive({
    username: '',
    password: '',
  })
  let errmsg:any = ref('')

  const signin = () => {
    console.log(user)
    if (user.username && user.password) {
      axios.post('http://localhost:7570/admin/user/signin', {
        username: user.username,
        password: user.password,
      }).then(res => {
        const token = res.data
        if (token) {
          localStorage.token = JSON.stringify(token)
          handleSignin(token)
        } else {
          errmsg.value = '用户名或密码错误'
        }
      })
    } else {
      errmsg.value = '用户名或密码不能为空'
    }
  }
  
  // import img from '@/assets/FE.png'
  // const img = require('@/assets/FE.png')
</script>

<template>
  <div class="signin">
    <!-- <img :src="img" /> -->
    <div class="signin_box">
      <div class="errmsg">{{ errmsg }}</div>
      <div>
        <label>用户名：</label>
        <input type="text" v-model="user.username" />
      </div>
      <div>
        <label>密码：</label>
        <input type="password" v-model="user.password" />
      </div>
      <div class="button">
        <button @click="signin">登录</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .signin {
    width: 100vw;
    height: 100vh;
    background: url('~@/assets/FE.png') 100% no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    &_box {
      width: 20vw;
      div {
        height: .8rem;
        line-height: .8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.errmsg {
          color: #f00;
          font-size: .28rem;
        }
        &.button {
          margin: .4rem;
          justify-content: center;
          button {
            width: 80%;
            line-height: .6rem;
            background: #fa9;
            border: none;
            color: #fff;
          }
        }
      }
    }
  }
</style>