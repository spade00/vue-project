<template>
    <div style="margin-top: 16px">
        <Button @click="handleSelectAll(true)">全选</Button>
        <Button @click="handleSelectAll(false)">取消全选</Button>
    </div>
    <Table width="100%" border ref="selection" :columns="columns" :data="data"></Table>
    <Button>删除</Button>
    <Button>添加</Button>
</template>
<script>
import { resolveComponent } from 'vue'
import {Button, Table} from "view-ui-plus";
export default {
    components: {Button, Table},
    data () {
        return {
            columns: [
                {
                    type: 'selection',
                    width: 100,
                    align: 'center',
                    fixed: 'left'
                },
                {
                    title: '电影名称',
                    key: 'movie_name',
                    width: 200,
                    fixed: 'left'
                },
                {
                    title: '影厅名称',
                    key: 'hall_name',
                    width: 200
                },
                {
                    title: '开始时间',
                    key: 'start_time',
                    width: 200,
                },
                {
                    title: '结束时间',
                    key: 'end_time',
                    width: 200
                },
                {
                    title: '票价',
                    key: 'price',
                    width: 200
                },
                {
                    title: '语言版本',
                    key: 'language',
                    width: 200
                },
            ],
            data: [
                {
                    movie_name:"铃芽之旅",
                    hall_name:"1号激光厅",
                    start_time:"2023-04-09 18:39:06",
                    end_time:"2023-04-09 19:39:16",
                    price:"30",
                    language:"国语2D"
                },
                {
                    movie_name:"铃芽之旅",
                    hall_name:"1号激光厅",
                    start_time:"2023-04-10 18:39:06",
                    end_time:"2023-04-10 19:39:16",
                    price:"30",
                    language:"国语2D"
                },
                {
                    movie_name:"铃芽之旅",
                    hall_name:"1号激光厅",
                    start_time:"2023-04-11 18:39:06",
                    end_time:"2023-04-11 19:39:16",
                    price:"30",
                    language:"国语2D"
                },
                {
                    movie_name:"铃芽之旅",
                    hall_name:"1号激光厅",
                    start_time:"2023-04-19 18:39:06",
                    end_time:"2023-04-19 19:39:16",
                    price:"30",
                    language:"国语2D"
                },
            ]
        }
    },
    methods: {
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        }
    }
}
</script>
