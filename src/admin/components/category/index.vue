<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  import axios from 'axios'

  const router = useRouter()

  let list = ref([])
  axios.get('http://localhost:7570/admin/category/list').
    then(res => {
      console.log(res.data)
      list.value = res.data
    })
  
  const detail_row = (id) => {
    router.push(`/category/${ id }`)
  }
  const delete_row = (id) => {
  }
</script>

<template>
  <div>
    <ul class="category_list">
      <li class="category_list_header">
        <label>二级品类ID</label>
        <label>二级品类名称</label>
        <label>一级品类价格</label>
        <label>一级品类名称</label>
        <label>操作</label>
      </li>
      <li v-for="item in list" class="category_list_row">
        <ul>
          <li v-for="item2 in item.category2s">
            <span>{{ item2.id }}</span>
            <span>{{ item2.name }}</span>
            <span>{{ item2.price }}</span>
            <span>{{ item.name }}</span>
            <span>
              <button @click="detail_row(item2.id)">查看</button>
              <button @click="delete_row(item2.id)">删除</button>
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .category_list {
    text-align: center;
    &_header {
      display: flex;
      justify-content: space-around;
      label {
        width: 100%;
        color: #99f;
        line-height: .6rem;
      }
    }
    &_row {
      ul {
        li {
          display: flex;
          justify-content: space-around;
          span {
            width: 100%;
            line-height: .6rem;
          }
        }
      }
    }
  }
</style>