<template>
    <div><Button @click="$router.go(-1)">返回</Button></div>
    <div class="movie-theater-details-bg">
        <div class="movie-theater-details">
            <div class="movie-theater-poster">
                <img :src="movie_theater.poster" alt="影院" />
            </div>
            <div class="movie-theater-info">
                <h1 class="movie-theater-title">{{ movie_theater.title }}</h1>
                <h2 class="movie-theater-description">
                    海城市中街北路万和城6楼
                    <br>
                    电话：0412-3385858
                </h2>
                <div class="movie-theater-rating">
                    影院服务-----------------------
                    <ul class="movie-theater-server">
                        <li v-for="item in 6">
                            <div class="movie-theater-server-left">退</div>未取票用户放映前60分钟可退票
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="movie-session-info">
        <div class="movie-session-title">
            <h1>{{store.movie_detail.name}}</h1>
            <div class="movie-session-title-details">
                <p>{{store.movie_detail.Duration}}分钟</p>
            </div>
        </div>
        <div class="pay-tick-box">
            <table>
                <thead>
                <tr>
                    <th><h2>放映时间</h2></th>
                    <th><h2>语言版本</h2></th>
                    <th><h2>放映厅</h2></th>
                    <th><h2>售价</h2></th>
                    <th><h2>在线选座</h2></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in session_info">
                    <td>
                        <h2>{{item.Start_time}}</h2>
                         {{item.End_time}}散场
                    </td>
                    <td>{{item.Language_ver}}</td>
                    <td>{{item.Hall_name}}</td>
                    <td style="color: red"><h2>￥{{item.Price}}元</h2></td>
                    <td><Button @click="pay(index)">在线选座</Button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {onMounted, reactive} from 'vue';
import router from "@/router";
import {useRoute} from "vue-router";
import request from "@/utils/request";
import Movie_store from "@/Store"
export default {
    setup() {
        const store = Movie_store()

        const route = useRoute()//接收参数
        const movie_theater = reactive({
            title: '鞍山影院',
            poster: 'src/assets/movie/016e956198c8e811013f01cd96a1e6.jpg@1280w_1l_2o_100sh.jpg',
        });
        const session_info = reactive([])
        onMounted(()=>{
            request.get("/Item/sessionData",{
                id:route.query.movie_id
            }).then(res=>{
                session_info.push(...JSON.parse(res.data))
            }).catch(err=>{
                console.log(err)
            })
        })
        const pay = (index)=>{
            store.$patch((state)=>{
                state.Id_info.movie_id = session_info[index].Movie_id
                state.Id_info.hall_id = session_info[index].Hall_id
                state.Id_info.session_id = session_info[index].Id

                state.movie_detail.hall_name = session_info[index].Hall_name
                state.movie_detail.Price = session_info[index].Price
                state.movie_detail.Language_ver = session_info[index].Language_ver
                state.movie_detail.Start_time = session_info[index].Start_time
            })
            router.push({
                path:'/pay/details'
            })
        }
        return {
            movie_theater,
            session_info,
            pay,
            store
        };
    },
};
</script>

<style>
.movie-session-title{
    margin-top: 50px;
}
.movie-theater-details-bg{
    padding-top: 50px;
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: space-around;
    background-color: lightblue;
}
.movie-theater-details {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
}

.movie-theater-poster {
    width: 700px;
    height: auto;
    margin-right: 40px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.movie-theater-poster img {
    width: 100%;
    height: 100%;
}

.movie-theater-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.movie-theater-title {
    font-size: 36px;
    margin-bottom: 10px;
    margin-top: 0;
}

.movie-theater-description {
    margin-bottom: 10px;
    margin-top: 0;
}

.movie-theater-rating {
    font-size: 18px;
    margin-bottom: 20px;
}
.movie-theater-server{
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 5px;

}
.movie-theater-server li{
    display: flex;
    align-items: flex-end;
    font-size: 15px;
}
.movie-theater-server-left{
    border: black 2px solid;
    width: 70px;
    text-align: center;
    margin:0 10px 5px 0;
}
.movie-session-info{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 50px;
}
.pay-tick-box{
    display: flex;
    justify-content: center;
}
.pay-tick-box table{
    width: 100%;
    border-spacing: 10px;
    text-align: center;
}
.Ticket-information li{
    margin: 0 30px 0 0;
}
</style>
