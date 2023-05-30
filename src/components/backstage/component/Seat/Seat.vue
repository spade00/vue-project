<template>
    <div>
        <h3>
            点击查看各影厅的详情
        </h3>
    </div>
    <br>
    <div>
        <Space size="large" wrap>
            <DatePicker size="large" type="date" placeholder="选择需要查看的日期的座位" />
        </Space>
    </div>
    <div class="seat-Thumbnail">
        <Card class="card" style="width:320px" v-for="i in 10">
            <div style="text-align:center" @click="detail">
                <img src="src/assets/movie/yingting.jpeg" width="280" alt="影厅">
                <h3>激光{{i}}号厅</h3>
            </div>
        </Card>
    </div>

</template>

<script>
import {Card, DatePicker, Space} from "view-ui-plus";
import router from "@/router";

export default {
    name: "Seat",
    components: {DatePicker, Space, Card},
    setup(){
        const detail = ()=>{
            router.push('/seat')
        }
        return{
            detail
        }
    }
}
</script>

<style scoped>
.seat-Thumbnail{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.card{
    margin: 10px;
    border: whitesmoke 2px solid;
    cursor: pointer;
}
</style>