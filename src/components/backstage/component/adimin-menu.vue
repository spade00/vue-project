<template>
    <div class="Admin-NavigationBar">
        <RadioGroup v-model="theme">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
        </RadioGroup>
        <Menu :theme="theme" active-name="1" @on-select="handleSelect">
            <MenuGroup title="统计">
                <MenuItem name="1">
                    <Icon type="md-chatbubbles"></Icon>
                    财务管理
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="md-chatbubbles"></Icon>
                    票房统计
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="md-chatbubbles"></Icon>
                    评分统计
                </MenuItem>
            </MenuGroup>
            <MenuGroup title="票务管理">
                <MenuItem name="4">
                    <Icon type="md-document" />
                    排片
                </MenuItem>
                <MenuItem name="5">
                    <Icon type="md-chatbubbles" />
                    导入电影库
                </MenuItem>
                <MenuItem name="6">
                    <Icon type="md-chatbubbles" />
                    退票服务
                </MenuItem>
                <MenuItem name="7">
                    <Icon type="md-chatbubbles"></Icon>
                    座位信息
                </MenuItem>
            </MenuGroup>
            <MenuGroup title="用户管理">
                <MenuItem name="8">
                    <Icon type="md-heart" />
                    用户订单管理
                </MenuItem>
                <MenuItem name="9">
                    <Icon type="md-leaf" />
                    用户信息管理
                </MenuItem>
            </MenuGroup>
            <MenuGroup title="员工管理">
                <MenuItem name="10">
                    <Icon type="md-heart" />
                    用户订单管理
                </MenuItem>
            </MenuGroup>
        </Menu>
    </div>
    <div class="Admin-Content">
        <Arrange_film v-if="name === '4' "></Arrange_film>
        <Movie_library v-else-if="name === '5'"></Movie_library>
        <Ticket v-else-if="name==='6'"></Ticket>
        <Seat v-else-if="name === '7'"></Seat>
        <ChartCom v-else-if="name === '1'"></ChartCom>
    </div>
</template>
<script>
import {Icon, MenuGroup, MenuItem, Radio, RadioGroup,Menu} from "view-ui-plus";
import {ref} from "vue";
import Arrange_film from "@/components/backstage/component/Arrange_film/Arrange_film.vue";
import Upload from "@/components/backstage/component/Arrange_film/component/Upload.vue";
import Movie_library from "@/components/backstage/component/movieLibrary/Movie_library.vue";
import Seat from "@/components/backstage/component/Seat/Seat.vue";
import Ticket from "@/components/backstage/component/Ticket/Ticket.vue";
import ChartCom from "@/components/backstage/component/Statistical/ChartCom.vue";
export default {
    components: {
        ChartCom,
        Ticket, Seat, Movie_library, Upload, Arrange_film, Menu, Icon, MenuItem, MenuGroup, Radio, RadioGroup},
    setup(){
        let name = ref("1")
        const theme = ref("light")
        const handleSelect = (data)=>{
            name.value = data
        }
        return{
            theme,
            name,
            handleSelect
        }
    },
}
</script>
<style scoped>
.Admin-Content{
    width: 100%;
}
</style>
