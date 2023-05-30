<template>
    <div class="dialog-wrapper" v-if="isOpen">
        <div class="dialog-container">
            <div class="dialog-header">
                <h3>{{ title }}</h3>
                <button @click="$emit('close')">X</button>
            </div>
            <div class="dialog-body">
                <ul v-for="item in paginatedData">
                    <li>场次:{{item.StartTime}}</li>
                    <li>座位:[{{item.Col}},{{item.Row}}]</li>
                    <li>订单号:{{item.Id}}</li>
                </ul>
            </div>
            <div class="My-Pagination">
                <n-pagination v-model:page="data.currentPage" :page-count="pageCount" size="large"/>
            </div>
            <div class="dialog-footer">
                <button @click="$emit('close')">关闭</button>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, onMounted, reactive} from "vue";
import request from "@/utils/request";

export default {
    props: {
        order: Array,
        isOpen: Boolean
    },
    setup(props){
        const title = "订单详情"
        const data = reactive({
            currentPage:1,
            pageSize:4
        })
        const paginatedData = computed(()=>{
            const start = (data.currentPage - 1) * data.pageSize
            const end = start+data.pageSize
            return props.order.slice(start,end)
        })
        const pageCount = computed(()=>{
            return Math.ceil(props.order.length / data.pageSize)
        })
        return{
            title,
            paginatedData,
            pageCount,
            data,
        }
    }
};
</script>

<style>
.dialog-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog-container {
    width: 800px;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
}
.dialog-container ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
}

.dialog-header {
    background-color: #0078d4;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
}

.dialog-header h3 {
    margin: 0;
}

.dialog-header button {
    color: #fff;
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

.dialog-body {
    padding: 16px;
}

.dialog-footer {
    display: flex;
    justify-content: flex-end;
    padding: 8px 16px;
}

.dialog-footer button {
    color: #0078d4;
    background-color: transparent;
    border: 1px solid #0078d4;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
}
</style>
