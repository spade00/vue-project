<template>
    <div class="Navigation" v-if="$route.path==='/' || $route.path==='/my'">
        <div class="menu">
            <ul>
                <li v-for="(item, index) in items" :key="index" :class="{ active: isActive(index) }" @click="setActive(index)">
                    <h2>{{ item }}</h2>
                </li>
            </ul>
        </div>
        <div class="login">
            <n-avatar round size="large" @click="login">登录</n-avatar>
        </div>
        <div class="search-box">
            <input type="text" placeholder="请输入关键词">
            <button @click="">搜索</button>
        </div>
    </div>
    <div class="content" v-if="store.activeIndex===0 && $route.path==='/'">
        <Panel :movie="movie"></Panel>
    </div>
    <div class="content" v-else-if="store.activeIndex===1 && $route.path==='/'">
        <Classification></Classification>
    </div>
    <div class="content" v-else-if="store.activeIndex===2 && $route.path==='/'">
        <About></About>
    </div>
</template>

<script>
import {reactive, onMounted, onUpdated} from 'vue';
import router from "@/router";
import Panel from "@/components/reception/main/panel/Panel.vue";
import Classification from "@/components/reception/main/classification/Classification.vue";
import request from "@/utils/request";
import Movie_store from "@/Store";
import {useRoute} from "vue-router";
import About from "@/components/reception/main/about_me/About.vue";
//pinia
export default {
    components: {About, Classification, Panel},
    setup() {

        const store = Movie_store()

        const state = reactive({
            items: ['首页', '电影', '关于我们'],
        });


        const state1 = reactive({
            movies: [],
        });
        onMounted(  ()=>{
             request.get('/Item/getData',{
            }).then(res=>{
                state1.movies.push(...JSON.parse(res.data))
            }).catch(error =>{
                console.log(error)
            })
        });
        const isActive = (index) => store.activeIndex === index;

        const setActive = (index) => {
            store.activeIndex = index;
            router.push('/')
        };
        const login = ()=>{
            store.activeIndex = 3;
            const Login_state = localStorage.getItem("Login_state")
            console.log(Login_state)
            if (Login_state !== null){
                router.push({
                    path: '/my',
                    query: {
                        id: Login_state
                    }
                })
            }else {
                router.push("/login")
            }
        }
        return {
            items: state.items,
            state,
            isActive,
            setActive,
            login,
            movie:state1.movies,
            store
        };
    },
};
</script>

<style>
.Navigation{
    margin-top: 20px;
}
.content{
    display: flex;
    flex-direction: column;
    width: 80%;
}
.menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu li {
    display: inline-block;
    margin-right: 100px;
    cursor: pointer;
}

.menu li.active {
    color: red;
}
.menu{
    display: flex;
    justify-content: center;
}

.login{
    position: absolute;
    top: 10px;
    right: 40px;
    cursor: pointer;
}

.search-box {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    top: 15px;
    right: 100px;
}

.search-box input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-box button {
    margin-top: 0;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}
</style>
