<template>
    <div class="main">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "@/components/reception/main/Header/Header.vue";

export default {
    components: {Header},
}
</script>
<style scoped>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
