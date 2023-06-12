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
    <div class="Order" v-for="(item,index) in order_info">
        <Card style="width:100%">
            <template #title>
                <Icon type="ios-film-outline"></Icon>
                2023-06-02
                <span>&nbsp;&nbsp;&nbsp;&nbsp;订单号123456789</span>
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
                        <h3>{{item.data.title}}</h3>
                        <p>{{item.data.cinema}}</p>
                        <p>{{ item.data.screens }}    {{item.data.row}}排{{item.data.col}}座</p>
                        <h3 style="color: red">{{ item.data.date }}</h3>
                    </div>
                </div>
                <h3 style="color: red">
                    ￥{{item.data.prince}}
                </h3>
                <div>
                    {{ item.data.state }}
                </div>
                <div>
                    <Button>查看详情</Button>
                </div>
            </div>
        </Card>
    </div>
</template>
<script>
import {Button, Card, Icon, Rate} from "view-ui-plus";
import {reactive} from "vue";

export default {
    components: {Button, Rate, Icon, Card},
    setup(){
        const order_info = reactive([
            {
                data:{
                    title:"天空之城",
                    cinema:"鞍山影院",
                    screens:"5号激光厅",
                    row:"1",
                    col:"1",
                    prince:24,
                    date:"2023年10月01日",
                    state:"出票成功"
                }
            },
            {
                data:{
                    title:"天空之城",
                    cinema:"鞍山影院",
                    screens:"5号激光厅",
                    row:"1",
                    col:"2",
                    prince:30,
                    date:"2023年10月01日",
                    state:"出票成功"
                }
            },
            {
                data:{
                    title:"天空之城",
                    cinema:"鞍山影院",
                    screens:"5号激光厅",
                    row:"1",
                    col:"3",
                    prince:50,
                    date:"2023年10月01日",
                    state:"出票成功"
                }
            }
        ])
        const remove_order = (index)=>{
            alert("是否删除，此操作不可逆")
            order_info.splice(index,1)
        }
        return{
            order_info,
            remove_order
        }
    }
}
</script>
