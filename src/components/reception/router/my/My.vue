<template>
    <div class="my-bg">
        <div class="head">
            <div class="my-info">
                <div class="headPortrait"><h3>头像</h3></div>
                <div>
                    <div><h2 style="color: white">用户名</h2></div>
                    <input placeholder="个性签名">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {Avatar, Space} from "view-ui-plus";

export default {
    components: {Avatar, Space},
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
.head{
    background-image: url("src/assets/bg.jpg");
    height: 300px;
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
    width: 100px;
    height: 100px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: coral;
 }
 .headPortrait h3{
     color: white;
 }
</style>
