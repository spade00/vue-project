<template>
    <div>
        <TagSelect v-model="value">
            <TagSelectOption name="tag1" color="magenta">选项一</TagSelectOption>
            <TagSelectOption name="tag2" color="red">选项二</TagSelectOption>
            <TagSelectOption name="tag3" color="green">选项三</TagSelectOption>
            <TagSelectOption name="tag4" color="blue">选项四</TagSelectOption>
            <TagSelectOption name="tag5" color="purple">选项五</TagSelectOption>
            <TagSelectOption name="tag6" color="orange">选项六</TagSelectOption>
        </TagSelect>
    </div>
    <div>
        <v-chart className="chart" :option="option" style="height: 400px"/>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {TagSelect, TagSelectOption} from "view-ui-plus";
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
</script>

<style scoped>
.chart {
    height: 400px;
}
</style>