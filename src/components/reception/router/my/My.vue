<template>
    <div class="my-bg">
        <Menu :theme="theme" active-name="0" @on-select="handleSelect">
            <RadioGroup v-model="theme">
                <Radio label="light"></Radio>
                <Radio label="dark"></Radio>
            </RadioGroup>
            <MenuItem name="0">
                <Icon type="md-chatbubbles"></Icon>
                我的订单
            </MenuItem>
            <MenuItem name="1">
                <Icon type="md-chatbubbles"></Icon>
                我的信息
            </MenuItem>
        </Menu>
        <div class="Admin-Content">
            <h1 v-if="name === '0'" style="margin-left: 20px;color: red">我的订单</h1>
            <h1 v-if="name === '1'" style="margin-left: 20px;color: red">我的信息</h1>
            <Order v-if="name === '0'"></Order>
            <MyInfo v-if="name === '1'"></MyInfo>
        </div>
    </div>
</template>
<script>
import {Icon, MenuGroup, MenuItem, Radio, RadioGroup, Menu, Page} from "view-ui-plus";
import {ref} from "vue";
import Order from "@/components/reception/router/my/component/Order.vue";
import MyInfo from "@/components/reception/router/my/component/MyInfo.vue";
export default {
    components: {
        Page,
        MyInfo,
        Order, Menu, Icon, MenuItem, MenuGroup, Radio, RadioGroup},
    setup(){
        let name = ref("0")
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
.my-bg{
    display: flex;
    width: 70%;
    height: 100vh;
}
.Admin-Content{
    width: 80%;
}
</style>