<template>
    <div class="my-bg">
        <div class="my-head">
            <div class="my-info">
                <div class="headPortrait"><h3>头像</h3></div>
                <div>
                    <div><h3 style="color: black">用户名</h3></div>
                    <input placeholder="个性签名">
                </div>
            </div>
        </div>
        <div class="my-content">
            <Tabs>
                <TabPane label="订单" icon="logo-apple">标签一的内容</TabPane>
                <TabPane label="影票" icon="logo-windows">标签二的内容</TabPane>
                <TabPane label="安全" icon="logo-tux">标签三的内容</TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>

import {Avatar, Space, TabPane, Tabs} from "view-ui-plus";

export default {
    components: {TabPane, Tabs, Avatar, Space},
    setup() {
        return {
        };
    }
};
</script>

<style scoped>
.my-bg{
    width: 80%;
    height: 900px;
}
.my-head{
    height: 200px;
    display: flex;
    flex-direction: column-reverse;
}
.my-info{
    margin: 20px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.headPortrait{
    width: 150px;
    height: 150px;
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: coral;
    margin: 10px;
 }
 .headPortrait h3{
     color: white;
 }
</style>
