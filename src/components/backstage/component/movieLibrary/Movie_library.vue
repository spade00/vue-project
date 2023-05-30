<template>
    请将电影文件放入下面的框中
    <div class="upload">
        <Upload
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="150" style="color: #3399ff"></Icon>
                <p>点击或者将文件拖拽至此</p>
            </div>
        </Upload>
    </div>
</template>

<script>
import {Icon, Upload} from "view-ui-plus";

export default {
    name: "Movie_library",
    components: {Icon, Upload}
}
</script>

<style scoped>

</style>