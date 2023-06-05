<template>
    <div>
        <TagSelect v-model="value">
            <TagSelectOption name="tag1" color="magenta">今日票房前5</TagSelectOption>
            <TagSelectOption name="tag2" color="red">今日票房前10</TagSelectOption>
            <TagSelectOption name="tag3" color="green">今日票房前20</TagSelectOption>
        </TagSelect>
    </div>
    <br>
    <div class="pf">
        <div style="width: 100%;height: 900px">
            <div class="summary">
                <v-chart className="chart" :option="option" style="height: 400px;width: 100%"/>
            </div>
            <div class="summary">
                <v-chart className="chart" :option="option1" style="height: 400px;width: 100%"/>
            </div>
        </div>
        <div class="scroll">
            <Scroll :on-reach-bottom="handleReachTop" height="800">
                <Card class="scroll-card" dis-hover v-for="(item, index) in list" :key="index">
                    <div class="scroll-content">
                        <img alt="海报" src="src/assets/movie/fb73869a3390fa281e395ba5f89fe7142e4ab.jpg" height="150">
                        <div class="scroll-content-text">
                            <h3>电影{{item}}</h3>
                            <h4>今日票房：100000</h4>
                            <h4>总票房：1000000</h4>
                        </div>
                    </div>
                </Card>
            </Scroll>
        </div>
    </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {Card, Scroll, TagSelect, TagSelectOption} from "view-ui-plus";
import request from "@/utils/request";
const option = ref({
    title: {//标题
        text: "今日票房统计",
        left: "center"
    },
    tooltip: {//工具提示（鼠标悬停提示）
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {//图例
        orient: "vertical",
        left: "left",
        data: ["寻龙传说", "倩女幽魂", "阿凡达", "霸王别姬", "泰坦尼克号"]
    },
    series: [//数据、样式、标记
        {
            name: "票房",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                {value: 3350000, name: "寻龙传说"},
                {value: 3100000, name: "倩女幽魂"},
                {value: 2340000, name: "阿凡达"},
                {value: 1350000, name: "霸王别姬"},
                {value: 1548000, name: "泰坦尼克号"}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
});

const option1 = reactive({
    xAxis: {
        data: ['1月', '2月', '3月', '4月', '5月']
    },
    yAxis: {},
    series: [
        {
            data: [25000, 14000, 23000, 35000, 10000],
            type: 'line',
            areaStyle: {
                color: '#ff0',
                opacity: 0.5
            }
        }
    ]
})

const list = ref( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17])
function handleReachTop(){
    //发送请求获取更多数据
}

</script>

<style scoped>
.summary{
    height: 400px;
    width: 100%;
    border: #3f414d 2px solid;
}
.scroll{
    margin: 0 0 0 20px;
    width: 60%;
    height: 800px;
}
.pf{
    display: flex;
}
.scroll-content{
    display: flex;
}
.scroll-content-text{
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
</style>