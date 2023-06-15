<template>
    <div class="about-bg">
        <Divider>404</Divider>
        <Exception type="404" img-color @click="store.activeIndex=0"/>
    </div>
</template>
<script>
import {Divider, Exception} from "view-ui-plus";
import Movie_store from "@/Store";

export default {
    components: {Exception, Divider},
    setup(){
        const store = Movie_store()



        return {
            store
        }
    }
}
</script>
<style scoped>
.about-bg{
    height: 100vh;
}
</style>