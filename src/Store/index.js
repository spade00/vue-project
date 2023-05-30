import {defineStore} from "pinia";

export default defineStore('Movie',{//id,数据仓库名
    persist:{
        enabled: true,//开启数据持久化
        strategies: [
            {
                key: 'mykey',//给一个要保存的名称
                storage: localStorage,//sessionStorage / localStorage 存储方式
            }
        ]
    },
    state:()=>{
        return {
            activeIndex:0,
            Id_info:{
                movie_id:0,
                hall_id:0,
                order_id:0,
                payment_id:0,
                seat_id:0,
                session_id:0,
                user_id:0
            },
            movie_detail:{
                name:"",
                Duration:0,
                hall_name:"",
                Start_time:"",
                Language_ver:"",
                Price:""
            }
        }
    }
})