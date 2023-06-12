<template>
    <div style="margin-top: 16px">
        <Button @click="handleSelectAll(true)">全选</Button>
        <Button @click="handleSelectAll(false)">取消全选</Button>
    </div>
    <Table width="100%" border ref="selection" :columns="columns" :data="data"></Table>
    <Button>删除</Button>
    <Button @click="value = true">添加</Button>
    <div>
        <Drawer title="添加" v-model="value" width="720" :mask-closable="false" :styles="styles">
            <Form :model="formData">
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="电影名称" label-position="top">
                            <Input v-model="formData.name" placeholder="请输入电影名称" />
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="影厅" label-position="top">
                            <Select v-model="formData.owner" placeholder="请输入影厅信息">
                                <Option value="jobs">1号激光厅</Option>
                                <Option value="ive">2号激光厅</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="开始时间" label-position="top">
                            <Input v-model="formData.url" placeholder="请输入电影开始时间" />
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="时长" label-position="top">
                            <Input v-model="formData.approver" placeholder="请输入电影时长" />
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="票价" label-position="top">
                            <Input v-model="formData.approver" placeholder="票价" />
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="语言版本" label-position="top">
                    <Input v-model="formData.approver" placeholder="语言版本" />
                </FormItem>
            </Form>
            <div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="value = false">取消</Button>
                <Button type="primary" @click="value = false">提交</Button>
            </div>
        </Drawer>
    </div>
</template>
<script>
import { resolveComponent } from 'vue'
import {Button, DatePicker, Drawer, Form, FormItem, Row, Select, Table} from "view-ui-plus";
export default {
    components: {Select, DatePicker, FormItem, Row, Form, Drawer, Button, Table},
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
            ],
            //抽屉的数据
            value: false,
            styles: {
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: '53px',
                position: 'static'
            },
            formData: {
                name: '',
                url: '',
                owner: '',
                type: '',
                approver: '',
                date: '',
                desc: ''
            },
        }
    },
    methods: {
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        }
    }
}
</script>
<style scoped>
.demo-drawer-footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
}
</style>