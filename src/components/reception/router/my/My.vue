<template>
    <div class="sidebar-box">
        <div class="sidebar">
            <ul>
                <li v-for="(item,index) in menuItems" :key="item.id">
                    <h2 @click="SwitchMenu(index)">{{ item.title }}</h2>
                </li>
            </ul>
            <Button @click="sign_out">退出登录</Button>
        </div>
        <div v-if="Switch===1" class="sidebar-content-1">
            <h3 style="color: red">我的订单</h3>
            <div class="order-detail" v-for="item in paginatedData">
                <div>
                    <table>
                        <thead>
                        <tr>
                            <td>支付订单</td>
                            <td>创建时间</td>
                            <td>影票数量</td>
                            <td>总价</td>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {{ item.PaymentId }}
                                </td>
                                <td>{{item.PaymentTime}}</td>
                                <td>{{item.Number}}</td>
                                <td style="color: red"><h2>￥{{item.Amount}}</h2></td>
                                <td><Button @click="order_Details(item.PaymentId)">详情</Button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div v-else class="sidebar-content-2">
            <h3 style="color: red">基本信息</h3>
            <div class="Base-info">
                <div class="head-picture">
                    <img src="../../../../assets/movie/016e956198c8e811013f01cd96a1e6.jpg@1280w_1l_2o_100sh.jpg" alt="HeadPicture">
                </div>
                <div class="info-details">
                </div>
            </div>
        </div>
    </div>
    <div class="My-Pagination">
        <n-pagination v-model:page="order.currentPage" :page-count="pageCount" size="large"/>
    </div>
    <div>
        <diaglog :order="order.order" :is-open="isOpen" @close="closeDialog"></diaglog>
    </div>
</template>

<script>
import {computed, onMounted, reactive, ref} from 'vue';
import router from "@/router";
import Movie_store from "@/Store";
import request from "@/utils/request";
import Diaglog from "@/components/reception/router/my/component/diaglog.vue";
//pinia

export default {
    components: {Diaglog},
    setup() {
        const store = Movie_store()

        const order_id = ref()
        let isOpen = ref(false)

        let Switch = ref(1)
        const menuItems = reactive([
            {
                id: 1,
                title: '我的订单',
                link: '/',
            },
            {
                id: 2,
                title: '基本信息',
                link: '/about',
            },
        ]);
        const order = reactive({
            data:[
                // PaymentId   string `db:"id"`
	              // PaymentTime string `db:"payment_time"`
	              // Amount      string `db:"amount"`
	              // Number      string `db:"number"`
            ],
            currentPage:1,//当前页
            pageSize:5,//每页显示数据条数
            order:[]
        })
        const paginatedData = computed(() => {//每页内容
            const start = (order.currentPage - 1) * order.pageSize
            const end = start + order.pageSize
            return order.data.slice(start, end)//截取数组一部分，返回一个新数组
        })
        const pageCount = computed(() => {//计算页数
            return Math.ceil(order.data.length / order.pageSize)//向上取整
        })
        const sign_out = ()=>{
            localStorage.removeItem("jwt")
            localStorage.removeItem("Login_state")
            store.activeIndex = 0//导航栏状态
            router.push("/")
        }
        const SwitchMenu = (index)=>{
            console.log(index)
            if (index===0){
                Switch.value = 1
            }else{
                Switch.value = 0
            }
        }
        const order_Details = (id)=>{
            request.get("/Item/my/order",{
                id:id
            }).then(res=>{
                console.log(res.data)
                order.order.length = 0
                console.log(order.order)
                order.order.push(...JSON.parse(res.data))
            }).catch(error=>{
                console.log(error)
            })
            isOpen.value = true
        }
        function closeDialog(){
            isOpen.value = false
        }
        onMounted(()=>{
            if (localStorage.getItem("Login_state")===null){
                router.push("/login")
            }
            request.get("/Item/my",{
                id:localStorage.getItem("Login_state")
            }).then(res=>{
                console.log(res.data)
                order.data.push(...JSON.parse(res.data))
            }).catch(error=>{
                console.log(error)
                alert("登录状态异常，重新登录")
                localStorage.removeItem("jwt")
                localStorage.removeItem("Login_state")
                router.push("/Login")
            })
        })
        return {
            menuItems,
            Switch,
            SwitchMenu,
            order,
            paginatedData,
            pageCount,
            sign_out,
            order_Details,
            isOpen,
            closeDialog,
            order_id
        };
    }
};
</script>

<style scoped>

.order-detail{
    border: #dddddd 2px solid;
    margin-bottom: 20px;
    border-radius: 45px;
    width: 50%;
}
.order-detail:hover{
    transform: translateX(10px);
}
.order-detail ul{
    list-style: none;
    margin: 0;
    border-bottom: #dddddd 2px solid;
}
.Base-info{
    display: flex;
}
.info-details{
    margin-left: 40px;
}
.info-details form{
    display: flex;
}
.sidebar-content-1{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: 20px;
}
.sidebar-content-1 table{
    width: 100%;
    border-spacing: 10px;
    text-align: center;
    Button{
        margin: 0;
    }
}
.sidebar-content-1  Button{
    margin: 0;
}
.sidebar-content-2{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
}
.sidebar-content-2 img{
    width: 350px;
    height: 350px;
}
.sidebar-box{
    width: 100%;
    height: 900px;
    display: flex;
}
.sidebar {
    width: 200px;
    height: 100%;
    background-color: #eee;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

.sidebar li {
    padding: 10px;
}
</style>
