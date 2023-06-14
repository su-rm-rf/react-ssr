<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import axios from 'axios'

  const route = useRoute()
  const router = useRouter()

  const { id } = route.params

  let detail = ref([])
  axios.get(`http://localhost:7570/admin/category/detail/${ id }`).
    then(res => {
      console.log(res.data)
      detail.value = res.data
    })
</script>

<template>
  <div>
    <ul>
      <li>{{ detail.id }}</li>
      <li>{{ detail.name }}</li>
      <li>{{ detail.price }}元</li>
      <li>{{ detail.id_1 }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
  
</style>