import {createRouter, createWebHashHistory} from 'vue-router'
import Panel from "@/components/reception/main/panel/Panel.vue";
import Login from "@/components/reception/router/login/Login.vue";
import Details from "@/components/reception/router/details/Details.vue";
import Pay from "@/components/reception/router/pay/Pay.vue";
import Pay_Details from "@/components/reception/router/pay_details/Pay_Details.vue"
import My from "@/components/reception/router/my/My.vue";
import Admin from "@/components/backstage/Admin.vue";
import Arrange_film from "@/components/backstage/component/ticketManagement/Arrange_film/Arrange_film.vue";
import Seat_Details from "@/components/backstage/component/ticketManagement/Seat/component/Seat_Details.vue";
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:Panel,
            meta:{
                isLogin:false,
                user:'user'
            }
        },
        {
            path:"/details",
            name:"details",
            component:Details,
            meta:{
                isLogin:false,
                user:'user'
            }
        },
        {
            path:"/login",
            component:Login,
            meta:{
                isLogin:false,
                user:'user'
            }
        },
        {
            path:"/pay",
            name:'pay',
            component:Pay,
            meta:{
                isLogin:false,
                user:'user'
            }
        },
        {
            path:"/pay/details",
            component:Pay_Details,
            meta:{
                isLogin:true,
                user:'user'
            }
        },
        {
            path:"/my",
            name:'my',
            component:My,
            meta:{
                isLogin:true,
                user:'user'
            }
        },
        {
            path:"/admin",
            name:"admin",
            component:Admin,
            meta:{
                user:"admin"
            },
        },
        {
            path:"/seat",
            component:Seat_Details
        }
    ]
});

export default router