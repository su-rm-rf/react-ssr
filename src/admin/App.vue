<script lang="ts" setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from '@/components/Header'
  import Menu from '@/components/Menu'
  import Footer from '@/components/Footer'
</script>

<template>
  <div class="app">
    <Header />
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
</template>

<style lang="scss">
  
</style>