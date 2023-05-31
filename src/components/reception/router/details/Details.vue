<template>
    <div class="movie-details-bg">
        <div class="web_back"><Button @click="$router.go(-1)"><Icon type="ios-arrow-back" /></Button></div>
        <div class="movie-details">
            <div class="movie-poster">
                <img :src="movie.details.Poster" alt="影片海报" />
            </div>
            <div class="movie-info">
                <h1 class="movie-title">{{ movie.details.Title }}</h1>
                <p class="movie-description">{{ movie.details.Description }}</p>

                <div class="movie-rating">
                    <span>评分：</span>
                    <span>{{ movie.details.Rating }}</span>
                </div>

                <ul class="cast-list">
                    <li><h3>主演:</h3></li>
                    <li>{{ movie.details.Cast }}</li>
                </ul>
                <div class="buy-tickets">
                    <div>
                        想看
                        <Rate v-model="WantToSee" icon="ios-heart" :count="1" clearable></Rate>
                        评分
                        <Rate v-model="Score" clearable allow-half></Rate>
                    </div>
                    <div>
                        <Button @click="pay(movie)">立即购票</Button>
                        <Button>写影评</Button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="movie-plot">
        <h2>剧情简介</h2>
        <p>{{ movie.details.Plot }}</p>
    </div>
</template>

<script>
import {onMounted, reactive, ref} from 'vue';
import router from "@/router";
import {useRoute} from "vue-router";
import Request from "@/utils/request";
import Movie_store from "@/Store";
import {Button, Icon, Rate} from "view-ui-plus";
export default {
    components: {Icon, Rate, Button},
    setup() {
        const route = useRoute()//接收参数
        const store = Movie_store()//（全局变量）
        const Score = ref(0)//评分
        const WantToSee = ref(0)//想看
        let movie = reactive({
            details:{}
        });
        onMounted(()=>{
            Request.get("/Item/detailsData",{
                id: route.query.movie_id
            }).then(res=>{
                movie.details = JSON.parse(res.data)
                store.$patch((state)=>{
                    state.movie_detail.name = movie.details.Title
                    state.movie_detail.Duration = movie.details.Duration
                })
                console.log(res.data.Title)
                console.log(store.movie_detail)
            })
        })
        console.log(movie.details)
        const pay = (movie)=>{
            router.push({
                path:"/pay",
                query:{
                    movie_id : route.query.movie_id
                }
            })
        }
        return {
            movie,
            pay,
            route,
            Score,
            WantToSee,
        };
    }
};
</script>

<style scoped>
.web_back{
    position: absolute;
    left: 10px;
    top: 10px;
}
.movie-details-bg{
    padding-top: 50px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    background-color: lightblue;
}
.movie-details {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
}

.movie-poster {
    width: 300px;
    height: 450px;
    margin-right: 40px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.movie-poster img {
    width: 100%;
    height: 100%;
}

.movie-info {
    flex: 1;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

.movie-title {
    font-size: 36px;
    margin-bottom: 10px;
    margin-top: 0;
}

.movie-description {
    font-size: 18px;
    color: #777;
    margin-bottom: 20px;
}

.movie-rating {
    font-size: 24px;
    margin-bottom: 20px;
}

.movie-plot h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.cast-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.cast-list li {
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 14px;
}

.cast-list li:last-child {
    margin-right: 0;
}
.buy-tickets{
    display: flex;
    flex-direction: column;
}
.buy-tickets button{
    margin-right: 20px;
}
</style>
