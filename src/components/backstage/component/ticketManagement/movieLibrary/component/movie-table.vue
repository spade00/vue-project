<template>
  <div class="movie-table-bg">
      <Table :columns="table.columns" :data="table.data"></Table>
  </div>
</template>

<script>
import {Table} from "view-ui-plus";
import {reactive} from "vue";

export default {
    name: "movie-table",
    components: {Table},
    setup(){
        const table = reactive({
            columns:[
                {
                    title:'电影名',
                    key:'title',
                    width: 100,
                    fixed: 'left'
                },
                {
                    title:'id',
                    key:'id'
                },
                {
                    title:'海报',
                    key:'poster',
                    tooltip:true
                },
                {
                    title:'电影描述',
                    key:'description',
                    tooltip:true
                },
                {
                    title:'评分',
                    key:'rating'
                },
                {
                    title:'剧情描述',
                    key:'plot',
                    tooltip:true
                },
                {
                    title:'演员',
                    key:'cast'
                },
                {
                    title:'分类',
                    key:'categories'
                },
                {
                    title:'时长',
                    key:'duration'
                },
            ],
            data:[
                {
                    id:"1",
                    title:"寻龙传说",
                    poster:"src/assets/movie/fb73869a3390fa281e395ba5f89fe7142e4ab.jpg",
                    description:"一部史诗般的武侠电影，讲述了一个英雄与恶魔的故事。",
                    rating:"9",
                    plot:"在九州大地上，恶魔肆虐，人民饱受其害。英雄为了拯救百姓，开始了一场冒险旅程。",
                    cast:"张三、李四、王五",
                    categories:"爱情",
                    duration:"100"
                }
            ]
        })
        return{
            table
        }
    }
}
</script>

<style scoped>
.movie-table-bg{
    width: 80%;
}
</style>