<script setup>
import {defineComponent} from "vue";
import {NButton} from 'naive-ui'
import { ref } from 'vue'
import axios from "axios";
const Scenic = ref('')
let Data = ref('')
import * as Json from "naive-ui/es/input-number/src/utils";
function query(){
  axios({
    baseURL:'',
    url:'/base/hello1',
    params:{
      name:Scenic.value
    }
  },res=>{
    console.log(res.data)
  }).catch(function (error){
    console.log(error)
  }).then(function (response){
    Data = JSON.parse(response.data)
    console.log(Data)
  })
}
</script>

<template>
  <div class="Bdy">
    <div class="sou">
      <input v-model="Scenic" @keydown.enter="query">{{Scenic}}
    </div>
    <ul v-if="Data.length">
      <li v-for="item in Data">
        {{item.Name}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.Bdy{
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>