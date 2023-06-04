<template>
    <div class="chagnci">
        <h2>请选择场次</h2>
        <Space size="large" wrap>
            <TimePicker type="timerange" placement="bottom-end" placeholder="please click this" style="width: 168px" />
        </Space>
    </div>
    <div class="Order-bg">
        <div class="Orders">
            <div class="Order-poster">
                <img src="../../../../../../assets/movie/fb73869a3390fa281e395ba5f89fe7142e4ab.jpg" alt="海报">
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
                        <h3>影院 : 万和国际影城</h3>
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
        </div>
        <div class="seats-container">
            <div class="seat_demo">
                <div class="seat" style="background-color: red"><h4>已售</h4></div>
                <div class="seat"><h4>未售</h4></div>
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
    </div>
</template>

<script>
import {onBeforeMount, onMounted, reactive} from 'vue';
import Movie_store from "@/Store";
import {Space, TimePicker} from "view-ui-plus";

export default {
    components: {TimePicker, Space},
    setup() {

        const store = Movie_store()

        const rowCount = 10;
        const seatsPerRow = 10;
        const tags = reactive([])
        const seat_info = reactive({
            info:{
                seat:[
                    {
                        row:1,
                        col:2
                    }
                ]
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
        // 点击座位时触发的方法，切换座位的选中状态
        return {
            rowCount,
            seatsPerRow,
            selectedSeats,
            unavailableSeats,
            tags,
            seat_info,
            store
        };
    },
};
</script>

<style>
.chagnci{
    margin: 20px 0 20px 0;
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
    align-items: stretch;
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
