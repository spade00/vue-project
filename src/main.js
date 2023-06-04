import { createApp } from 'vue'
import {createPinia} from "pinia";
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import './assets/main.css'
import router from "./router.js";
import 'vfonts/Lato.css'
import naive from "naive-ui";
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
const pinia = createPinia()

import 'echarts'
import ECharts from "vue-echarts";

pinia.use(piniaPersist)
const app = createApp(App).use(router)
app.use(naive)
app.use(pinia)
app.use(ViewUIPlus)
app.component('v-chart',ECharts)
app.mount('#app')