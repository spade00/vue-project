<template>
    <div class="movie-library-bg">
        <Tabs type="card">
            <TabPane label="标签一"><movie-table></movie-table></TabPane>
            <TabPane label="标签二">标签二的内容</TabPane>
            <TabPane label="标签三">标签三的内容</TabPane>
        </Tabs>
    </div>
</template>

<script>
import {Icon, TabPane, Tabs, Upload} from "view-ui-plus";
import MovieTable from "@/components/backstage/component/ticketManagement/movieLibrary/component/movie-table.vue";

export default {
    name: "Movie_library",
    components: {MovieTable, TabPane, Tabs, Icon, Upload}
}
</script>

<style scoped>
.movie-library-bg{

}
</style>