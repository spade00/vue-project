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
.Order_bg{
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: space-between;
}
.order_paging{
    display: flex;
    justify-content: center
}
</style>
<template>
    <div class="Order_bg">
        <div>
            <div class="Order" v-for="(item,index) in paginatedData">
                <Card style="width:100%">
                    <template #title>
                        <Icon type="ios-film-outline"></Icon>
                        {{}}
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;订单号{{item.PaymentId}}</span>
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
                                <h3>{{item.Title}}</h3>
                                <p>鞍山影院</p>
                                <p>{{ item.Halls }}    票X{{item.Number}}</p>
                                <h3 style="color: red">{{ item.Data }}</h3>
                            </div>
                        </div>
                        <h3 style="color: red">
                            ￥{{item.Prices}}
                        </h3>
                        <div>
                            出票成功
                        </div>
                        <div>
                            <Button @click="order_details(item.payment_id)">查看详情</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        <div class="order_paging">
            <n-pagination v-model:page="order_info.currentPage" :page-count="pageCount" size="large"/>
        </div>
    </div>
</template>
<script>
import {Button, Card, Icon, Page, Rate} from "view-ui-plus";
import {computed, onMounted, reactive} from "vue";
import router from "@/router";
import request from "@/utils/request";

export default {
    components: {Page, Button, Rate, Icon, Card},
    setup(){
        const order_info = reactive({
            data:[
                {
                    PaymentId:"123456789",
                    PaymentTime:"2023-05-01 22:37:20",
                    Title:"天空之城",
                    Halls:"5号激光厅",
                    Number:"4",
                    Prices:120,
                    Data:"2023年10月01日",
                    state:"出票成功"
                }
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
        onMounted(()=>{
            if (localStorage.getItem("Login_state")===null){
                router.push("/login")
            }
            request.get("/Item/my",{
                id:localStorage.getItem("Login_state")
            }).then(res=>{
                order_info.data.push(...JSON.parse(res.data))
                console.log(order_info.data)
            }).catch(error=>{
                console.log(error)
                alert("登录状态异常，重新登录")
                localStorage.removeItem("jwt")
                localStorage.removeItem("Login_state")
                router.push("/Login")
            })
        })
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
