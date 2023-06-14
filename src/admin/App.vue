<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'

  import Header from '@/components/common/Header'
  import Menu from '@/components/common/Menu'
  import Footer from '@/components/common/Footer'
  import Signin from '@/components/common/Signin'

  const router = useRouter()
  let token:any = ref(localStorage.token)

  const signinCb = (params) => {
    token.value = params
    router.replace('/')
  }
  const signoutCb = (params) => {
    token.value = params
    router.replace('/signin')
  }
</script>

<template>
  <div>
    <div class="app" v-if="token">
      <Header :handleSignout="signoutCb" />
      <div class="body">
        <Menu />
        <div class="main_body">
          <div class="section">
            <router-view />
          </div>
          <Footer />
        </div>
      </div>
    </div>
    <div v-else>
      <Signin :handleSignin="signinCb" />
    </div>
  </div>
</template>

<style lang="scss">
  
</style>