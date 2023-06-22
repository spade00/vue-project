<template>
  <div class="order-detail-bg">
      <div class="order-detail-status">
          <h1>订单完成</h1>
      </div>
      <h3>订单编号:{{$route.query.payment_id}}</h3>
      <Table :columns="table.columns" :data="table.data"></Table>
      <div class="order-detail-theFooter">
          <div>
              <h1>中影国际影城</h1>
              <p>
                  地址：站前街道二街万熹购物公园七层
              </p>
              <p>
                  电话：0412-2200668
              </p>
          </div>
          <div>
              总价:<h1 style="color: red">￥72</h1>
          </div>
      </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {Table} from "view-ui-plus";
import {onMounted, reactive, ref} from "vue";
import request from "@/utils/request";

export default {
    name: "Order_detail",
    components: {Table},
    setup(){
        const route = useRoute()
        const table = reactive({
            columns:[
                {
                    title: '影片',
                    align:"center",
                    key: 'Title'
                },
                {
                    title: '时间',
                    align:"center",
                    key: 'Data'
                },
                {
                    title: '影院',
                    align:"center",
                    key: 'address',
                },
                {
                    title: '位置',
                    align:"center",
                    children:[
                        {
                            title:"影厅",
                            align:"center",
                            key:'Halls'
                        },
                        {
                            title: "座位",
                            align:"center",
                            children:[
                                {
                                    title:"行",
                                    align:"center",
                                    key:'Col'
                                },
                                {
                                    title:"列",
                                    align:"center",
                                    key: "Row"
                                }
                            ]
                        }
                    ]
                }
            ],
            data:[
                {
                    Title: '《天空之城》',
                    Data: '2016-10-03',
                    Col:"1",
                    Row:"1",
                    Halls:"5号激光厅",
                    OrderId:"123",
                }
            ]
        })
        onMounted(()=>{
            request.get("/Item/my/order",{
                id:route.query.payment_id
            }).then(res=>{
                console.log(res.data)
                table.data = JSON.parse(res.data)
            }).catch(err=>{
                console.log(err)
            })
        })
        return {
            table
        }
    }
}
</script>

<style scoped lang="scss">
.order-detail-bg{
    width: 80%;
    height: 100vh;
}
.order-detail-status{
    width: 100%;
    height: 100px;
    background-color: lawngreen;
    margin: 50px 0 50px 0;
    display: flex;
    align-items: center;
    h1{
        margin-left: 50px;
    }
}
.order-detail-theFooter{
  display: flex;
  justify-content: space-between;
  margin: 50px 0 50px 0;
}
</style>