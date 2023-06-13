<template>
  <div class="order-detail-bg">
      <div class="order-detail-status">
          <h1>订单完成</h1>
      </div>
      {{$route.query.payment_id}}
      <Table :columns="columns" :data="data"></Table>
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

export default {
    name: "Order_detail",
    components: {Table},
    setup(){
        const route = useRoute()
        return {
            columns: [
                {
                    title: '影片',
                    key: 'name'
                },
                {
                    title: '时间',
                    key: 'age'
                },
                {
                    title: '影院',
                    key: 'address'
                },
                {
                    title: '座位',
                    key: 'seat'
                }
            ],
            data: [
                {
                    name: '《天空之城》',
                    age: '2016-10-03',
                    address: '中影国际影城',
                    seat: '5号激光厅  6排7座'
                },
                {
                    name: '《天空之城》',
                    age: '2016-10-03',
                    address: '中影国际影城',
                    seat: '5号激光厅  6排7座'
                },
                {
                    name: '《天空之城》',
                    age: '2016-10-03',
                    address: '中影国际影城',
                    seat: '5号激光厅  6排8座'
                },
                {
                    name: '《天空之城》',
                    age: '2016-10-03',
                    address: '中影国际影城',
                    seat: '5号激光厅  6排9座'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.order-detail-bg{
    width: 80%;
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