<style scoped>
.rate-demo {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.details{
    display: flex;
    align-items: center;
}
.text{
    margin: 10px;
    text-align: left;
}
.Order{
    margin: 20px;
}
</style>
<template>
    <div class="Order" v-for="(item,index) in paginatedData">
        <Card style="width:100%">
            <template #title>
                <Icon type="ios-film-outline"></Icon>
                {{item.payment_time}}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;订单号{{item.payment_id}}</span>
            </template>
            <template #extra>
                <a href="#" @click.prevent="remove_order(index)">
                    <Icon type="md-trash" />
                </a>
            </template>
            <div class="order-content">
                <div class="details">
                    <img src="src/assets/movie/fb73869a3390fa281e395ba5f89fe7142e4ab.jpg" alt="海报" width="100">
                    <div class="text">
                        <h3>{{item.title}}</h3>
                        <p>{{item.cinema}}</p>
                        <p>{{ item.screens }}    {{item.row}}排{{item.col}}座</p>
                        <h3 style="color: red">{{ item.date }}</h3>
                    </div>
                </div>
                <h3 style="color: red">
                    ￥{{item.prince}}
                </h3>
                <div>
                    {{ item.state }}
                </div>
                <div>
                    <Button @click="order_details(item.payment_id)">查看详情</Button>
                </div>
            </div>
        </Card>
    </div>
    <div>
        <Page :model-value="order_info.currentPage" :page-size="3" :total="order_info.data.length"></Page>
    </div>
</template>
<script>
import {Button, Card, Icon, Page, Rate} from "view-ui-plus";
import {computed, reactive} from "vue";
import router from "@/router";

export default {
    components: {Page, Button, Rate, Icon, Card},
    setup(){
        const order_info = reactive({
            data:[
                {
                    payment_id:"123456789",
                    payment_time:"2023-05-01 22:37:20",
                    title:"天空之城",
                    cinema:"鞍山影院",
                    screens:"5号激光厅",
                    row:"1",
                    col:"1",
                    prince:24,
                    date:"2023年10月01日",
                    state:"出票成功"
                },
                {
                    payment_id:"123456",
                    payment_time:"2023-05-01 22:37:20",
                    title:"天空之城",
                    cinema:"鞍山影院",
                    screens:"5号激光厅",
                    row:"1",
                    col:"1",
                    prince:24,
                    date:"2023年10月01日",
                    state:"出票成功"
                },
                {
                    payment_id:"1234567",
                    payment_time:"2023-05-01 22:37:20",
                    title:"天空之城",
                    cinema:"鞍山影院",
                    screens:"5号激光厅",
                    row:"1",
                    col:"1",
                    prince:24,
                    date:"2023年10月01日",
                    state:"出票成功"
                },
                {
                    payment_id:"12345678",
                    payment_time:"2023-05-01 22:37:20",
                    title:"天空之城",
                    cinema:"鞍山影院",
                    screens:"5号激光厅",
                    row:"1",
                    col:"1",
                    prince:24,
                    date:"2023年10月01日",
                    state:"出票成功"
                },
                {
                    payment_id:"00005678900",
                    payment_time:"2023-05-01 22:37:20",
                    title:"天空之城",
                    cinema:"鞍山影院",
                    screens:"5号激光厅",
                    row:"1",
                    col:"2",
                    prince:30,
                    date:"2023年10月01日",
                    state:"出票成功"
                },
                {
                    payment_id:"1234560000",
                    payment_time:"2023-05-01 22:37:20",
                    title:"天空之城",
                    cinema:"鞍山影院",
                    screens:"5号激光厅",
                    row:"1",
                    col:"3",
                    prince:50,
                    date:"2023年10月01日",
                    state:"出票成功"
                },
            ],
            currentPage:1,//当前页
            pageSize:3,//每页显示数据条数
        })
        const paginatedData = computed(() => {//每页内容
            const start = (order_info.currentPage - 1) * order_info.pageSize
            const end = start + order_info.pageSize
            return order_info.data.slice(start, end)//截取数组一部分，返回一个新数组
        })
        const pageCount = computed(() => {//计算页数
            return Math.ceil(order_info.data.length / order_info.pageSize)//向上取整
        })
        const remove_order = (index)=>{
            alert("是否删除，此操作不可逆")
            order_info.data.splice(index,1)
        }
        function order_details(payment_id){
            router.push({
                path:"/order_detail",
                query:{
                    payment_id:payment_id
                }
            })
        }
        return{
            order_info,
            paginatedData,
            pageCount,
            remove_order,
            order_details
        }
    }
}
</script>
