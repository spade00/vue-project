<template>
    <div class="web_back"><Button type="primary" ghost @click="$router.go(-1)"><Icon type="ios-arrow-back" /></Button></div>
    <div class="Order-bg">
        <div class="seats-container">
            <div class="seat_demo">
                <div class="seat" style="background-color: red"><h4>已售</h4></div>
                <div class="seat" style="background-color: green"><h4>已选</h4></div>
                <div class="seat"><h4>可选</h4></div>
            </div>
            <div class="seats-header">屏幕</div>
            <div class="seats-body">
                <div v-for="(row, rowIndex) in rowCount" :key="rowIndex" class="row">
                    <h3>{{rowIndex}}</h3>
                    <div v-for="(seat, seatIndex) in seatsPerRow" :key="seatIndex" class="seat" :class="{ selected: selectedSeats[rowIndex][seatIndex],
                     unavailable: unavailableSeats.detail[rowIndex][seatIndex] }" @click="toggleSeat(rowIndex, seatIndex)">
                    </div>
                </div>
            </div>
        </div>
        <div class="Orders">
            <div class="Order-poster">
                <img src="../../../../assets/movie/fb73869a3390fa281e395ba5f89fe7142e4ab.jpg" alt="海报">
                <div class="Order-movie-title">
                    <h1>{{store.movie_detail.name}}</h1>
                    <p>
                        类型:爱情、动画
                        <br>
                        时长:{{store.movie_detail.Duration}}分钟
                    </p>
                </div>
            </div>
            <div class="Order-info">
                <ul>
                   <li>
                       <h3>影院 : 鞍山影城</h3>
                   </li>
                    <li>
                        <h3>影厅 : {{ store.movie_detail.hall_name }}</h3>
                    </li>
                    <li>
                        <h3>版本 : {{ store.movie_detail.Language_ver }}</h3>
                    </li>
                    <li>
                        <h3>场次 : {{ store.movie_detail.Start_time }}</h3>
                    </li>
                    <li>
                        <h3>票价 : ￥{{ store.movie_detail.Price }}/张</h3>
                    </li>
                </ul>
            </div>
            <div>
                座位:
                <div>
                    <span v-for="(tag, index) in tags" class="tag" @click="removeTag(index)">{{ tag.row }},{{tag.seat}}</span>
                </div>
            </div>
            <div class="Order-pay">
                <Button @click="pay">确认选座</Button>
            </div>
        </div>
    </div>
</template>

<script>
import {onBeforeMount, onMounted, reactive} from 'vue';
import {useRoute} from "vue-router";
import request from "@/utils/request";
import Movie_store from "@/Store";
import {Button, Icon} from "view-ui-plus";

export default {
    components: {Icon, Button},
    setup() {

        const store = Movie_store()

        const rowCount = 10;
        const seatsPerRow = 10;
        const tags = reactive([])
        const route = useRoute()
        const seat_info = reactive({
            info:{
                seat:[]
            }
        })
        // 初始化座位状态
        let selectedSeats = reactive(Array(rowCount).fill("").map(() => Array(seatsPerRow).fill(false)));
        let unavailableSeats = reactive({
            detail:Array(rowCount).fill("").map((_, rowIndex) => {
                return Array(seatsPerRow).fill("").map((_, seatIndex) => {
                    return seat_info.info.seat.some(seat => seat.Row === rowIndex && seat.Col === seatIndex);
                });
            })
        });
        console.log(typeof(unavailableSeats))
        onMounted(()=>{
            request.get("/Item/seat",{
                id:store.Id_info.hall_id,
                start_time:store.movie_detail.Start_time
            }).then(res=>{
                console.log(res.data)
                seat_info.info.seat.push(...JSON.parse(res.data))
                console.log(seat_info.info.seat)
                unavailableSeats.detail = Array(rowCount).fill("").map((_, rowIndex) => {
                    return Array(seatsPerRow).fill("").map((_, seatIndex) => {
                        return seat_info.info.seat.some(seat => seat.Row === rowIndex && seat.Col === seatIndex);
                    });
                });
            }).catch(err=>{
                console.log(err)
                localStorage.removeItem("jwt")
                localStorage.removeItem("Login_state")
                alert("请登录")
            })
        })
        // 点击座位时触发的方法，切换座位的选中状态
        const toggleSeat = (row, seat) => {
            if (!unavailableSeats.detail[row][seat]) {
                selectedSeats[row][seat] = !selectedSeats[row][seat];
                const newItem = {
                    row:row,
                    seat:seat
                }
                if (selectedSeats[row][seat]){
                    tags.push(newItem)
                }else{
                    tags.splice(tags.findIndex(tags=>tags.row===row && tags.seat===seat),1)
                }
                //console.log(row,seat)行，列
            }
            console.log(tags)
        };
        const removeTag = (index) => {
            selectedSeats[tags[index].row][tags[index].seat] = !selectedSeats[tags[index].row][tags[index].seat];
            tags.splice(index, 1);
        };

        const pay = ()=>{
            if (localStorage.getItem("Login_state") ===null){
                alert("请先登录")
                //转跳login页面
            }else {
                if (tags.length !==0) {


                    request.put("/Item/pay", {
                        //支付订单(先执行得到一个支付id)
                        amount: tags.length * store.movie_detail.Price,
                        //修改座位
                        seats: tags,//得到4个座位id
                        start_time:store.movie_detail.Start_time,//开始时间
                        hall_id:store.Id_info.hall_id,//hall_id

                        //修改订单信息
                        user_id:localStorage.getItem("Login_state"),
                        session_id:store.Id_info.session_id,
                        status: "已售",
                    }).then(res => {
                        console.log(res)
                        alert("支付成功")
                    }).catch(error => {
                        console.log(error)
                        alert("支付失败")
                    })
                }else {
                    alert("请选择座位")
                }
            }
        }
        return {
            rowCount,
            seatsPerRow,
            selectedSeats,
            unavailableSeats,
            toggleSeat,
            tags,
            removeTag,
            seat_info,
            pay,
            store
        };
    },
};
</script>

<style scoped>
.web_back{
    position: absolute;
    left: 10px;
    top: 10px;
}
.seat_demo{
    display: flex;
    margin-bottom: 50px;
    text-align: center;
}
.seat_demo h4{
    margin-top: 10px;
}
.Order-bg{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
}
.Orders{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: #dddddd 5px solid;
    width: 400px;
}
.Order-poster{
    display: flex;
}
.Order-movie-title{
    margin-left: 20px;
}
.Order-info ul{
    list-style: none;
    margin: 30px 0 30px 0;
    padding: 0;
}
.Order-info li,h3{
    margin: 5px;
}
.Order-pay{
    text-align: center;
}
.seats-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.seats-header {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.seats-body {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
.row h3{
    margin-right: 20px;
}

.seat {
    width: 40px;
    height: 40px;
    background-color: #ccc;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 5px;
}

.seat.selected {
    background-color: green;
}

.seat.unavailable {
    background-color: red;
    cursor: not-allowed;
}
.tag {
    display: inline-block;
    margin: 4px;
    padding: 2px;
    background-color: #eee;
    border-radius: 4px;
    cursor: pointer;
}
</style>
