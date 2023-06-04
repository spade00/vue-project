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
    <div class="Order" v-for="item in 6">
        <Card style="width:100%">
            <template #title>
                <Icon type="ios-film-outline"></Icon>
                2023-06-02
                <span>&nbsp;&nbsp;&nbsp;&nbsp;订单号123456789</span>
            </template>
            <template #extra>
                <a href="#" @click.prevent="">
                    <Icon type="md-trash" />
                </a>
            </template>
            <div class="order-content">
                <div class="details">
                    <img src="src/assets/movie/fb73869a3390fa281e395ba5f89fe7142e4ab.jpg" alt="海报" width="100">
                    <div class="text">
                        <h3>《天空之城》</h3>
                        <p>鞍山影院</p>
                        <p>5号激光厅    6排7座</p>
                        <h3 style="color: red">周日 6月4日 12：00</h3>
                    </div>
                </div>
                <h3 style="color: red">
                    ￥24
                </h3>
                <div>
                    出票成功
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

export default {
    components: {Button, Rate, Icon, Card},
    setup(){

        return{

        }
    }
}
</script>
