<template>
    <h3>每月的销售额如下</h3>
  <v-chart class="Overall" :option="option"></v-chart>
    <div class="card-content">
        <Card class="card1" style="width:50%;height: 600px">
            <h2>用户增长情况</h2>
            <v-chart :option="option2" style="height: 300px"></v-chart>
        </Card>
        <Card class="card2" style="width:50%;height: 600px">
            <h2>截至目前</h2>
            <v-chart :option="option1" style="height: 300px"></v-chart>
            <div>
                <h3>总销售额：1000000</h3>
                <h3>总用户数量：20000</h3>
                <h3>总员工数量：3000</h3>
                <h3>总电影数量：2000</h3>
            </div>
        </Card>
    </div>
</template>

<script>

import {reactive} from "vue";
import {Card} from "view-ui-plus";
export default {
    components: {Card},
    setup(){
       const option =reactive( {
           xAxis: {
               data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
           },
           yAxis: {},
           series: [
               {
                   type: 'bar',
                   data: [230000, 240000, 180000, 250000, 270000, 280000, 250000],
                   itemStyle:{
                       barBorderRadius:5,
                       color:"red"
                   }
               }
           ]
       });
    const option1 = reactive({
        tooltip: {//工具提示（鼠标悬停提示）
            trigger: "item",
            formatter: "{b} : {c} ({d}%)"
        },
        series: [
            {
                type: 'pie',
                data: [
                    {
                        value: 20000,
                        name: '观众数量'
                    },
                    {
                        value: 3000,
                        name: '员工数量'
                    },
                    {
                        value: 4000,
                        name: '电影数量'
                    }
                ],
            }
        ]
    });
    const option2 = reactive({
        xAxis: {
            data: ['一月', '二月', '三月', '四月', '五月']
        },
        yAxis: {},
        tooltip: {//工具提示（鼠标悬停提示）
            trigger: "item",
            formatter: "{b} : {c} (人)"
        },
        series: [
            {
                data: [100, 2200, 2800, 4300, 20000],
                type: 'line',
                stack: 'x',
                areaStyle:{}
            }
        ]
    })
    return{
        option,
        option1,
        option2
      }
    }
}
</script>

<style scoped>
.Overall{
    width: 100%;
    height: 300px;
}
.card-content{
    display: flex;
}
</style>