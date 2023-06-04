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
        <div class="summary">
            <v-chart className="chart" :option="option" style="height: 400px;width: 100%"/>
        </div>
        <div class="scroll">
            <Scroll :on-reach-top="handleReachTop" height="800">
                <Card dis-hover v-for="(item, index) in list" :key="index" style="margin: 32px 0">
                    <img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large">
                    <h3>A high quality UI Toolkit based on Vue.js</h3>
                </Card>
            </Scroll>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {Card, Scroll, TagSelect, TagSelectOption} from "view-ui-plus";
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

const list = ref( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
function handleReachTop(){

}

</script>

<style scoped>
.summary{
    height: 400px;
    width: 40%;
    border: #3f414d 2px solid;
}
.scroll{
    width: 60%;
    height: 800px;
}
.pf{
    display: flex;
}
</style>