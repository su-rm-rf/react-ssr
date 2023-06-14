<script lang="ts" setup>
  import { ref } from 'vue'

  const { handleSignout } = defineProps(['handleSignout'])

  const user:any = ref(JSON.parse(localStorage.token))
  const roles = { 0: '超级管理员', 1: '管理员', 2: '用户' }

  const signout = () => {
    const token = ''
    localStorage.token = token
    handleSignout(token)
  }
</script>

<template>
  <div class="header">
    欢迎~ <em>{{ roles[user.level] }}</em>{{ user.username }}
    <button @click="signout">退出</button>
  </div>
</template>

<style lang="scss">
  .header {
    text-align: right;
  }
</style>