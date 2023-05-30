<template>
  <div class="box">
    <div class="search">
      <n-auto-complete
          v-model:value="Searchvalue"
          :input-props="{
          autocomplete: 'disabled'
        }"
          :options="Searchoptions"
          placeholder="景点"
          size="large"
      />
    </div>
    <div class="photograph">
      <n-carousel
          effect="card"
          prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
          next-slide-style="transform: translateX(50%) translateZ(-800px);"
          style="height: 450px"
          :show-dots="false"
      >
        <n-carousel-item :style="{ width: '50%'}">
          <img
              class="carousel-img"
              src="../assets/01f6LOAX9QmI56yRKYAhv==BmhcrFMgtLbaDQxGKk6THt1514120109539compressflag.jpg"
          >
        </n-carousel-item>
        <n-carousel-item :style="{ width: '50%' }">
          <img
              class="carousel-img"
              src="../assets/441e13aef8edd94ebe4e1c665bf1f62e.jpg"
          >
        </n-carousel-item>
        <n-carousel-item :style="{ width: '50%' }">
          <img
              class="carousel-img"
              src="../assets/be049a68a045fa43ecc1044e5bbbd343.jpg"
          >
        </n-carousel-item>
      </n-carousel>
    </div>
    <div class="recommend">
      <h1 @click="shua">周边游</h1>
    </div>
    <div class="tuijain">
      <n-card title="卡片" hoverable:true v-for="item in data">
        <img class="card-img" :src="item.Picture">
        {{item.Name}}
      </n-card>
    </div>
  </div>
</template>

<script setup>
import {ref, computed,reactive, onUpdated, onMounted} from "vue";
import axios from "axios";
import {watch} from "vue";
//数据
let data = reactive([
  {
    Name:'千山',
    Province:'辽宁',
    Address:'千山区鞍羊线与东宁线交汇南670米',
    Grade:'3A',
    Start_timr:'2023-03-18 08:00:00',
    Picture:'src/assets/01f6LOAX9QmI56yRKYAhv==BmhcrFMgtLbaDQxGKk6THt1514120109539compressflag.jpg',
    End_time:'2023-03-18 00:00:00'
  }
])

let shua = (async () => {
  await axios({
    baseURL: '',
    url: '/api/hello1',
  }).then(res => {
    data = JSON.parse(res.data)
    console.log(data)
  }).catch(function (err) {
    console.log(err)
  })
})

const Searchvalue = ref('')
const Searchoptions =computed(()=>{
  return ["@gmail.com", "@163.com", "@qq.com"].map((suffix) => {
    const prefix = Searchvalue.value.split("@")[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix
    };
  })
})
</script>
<style scoped>
  .carousel-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .photograph{
    margin: 10px;
  }
  .search{
    border-radius: 10px;
    align-items: center;
  }
  .tuijain{
    display: flex;
  }
  .n-card {
    height: 300px;

  }
  .card-img{
    height: 300px;
  }
</style>