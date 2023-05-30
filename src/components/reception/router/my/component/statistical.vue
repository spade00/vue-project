<style>
.demo-Circle-custom h1{
    color: #3f414d;
    font-size: 28px;
    font-weight: normal;
}
.demo-Circle-custom p{
    color: #657180;
    font-size: 14px;
    margin: 10px 0 15px;
}
.demo-Circle-custom span{
    display: block;
    padding-top: 15px;
    color: #657180;
    font-size: 14px;
}
.demo-Circle-custom span:before{
    content: '';
    display: block;
    width: 50px;
    height: 1px;
    margin: 0 auto;
    background: #e0e3e6;
    position: relative;
    top: -15px;
}
.demo-Circle-custom span i{
    font-style: normal;
    color: #3f414d;
}
</style>
<template>
    <Circle
            :size="250"
            :trail-width="4"
            :stroke-width="5"
            :percent="75"
            stroke-linecap="square"
            stroke-color="#43a3fb">
        <div class="demo-Circle-custom">
            <h1>42,001,776</h1>
            <p>消费人群规模</p>
            <span>
                总占人数
                <i>75%</i>
            </span>
        </div>
    </Circle>
</template>
<script>
import {Circle} from "view-ui-plus";

export default {
    components: {Circle}

}
</script>
