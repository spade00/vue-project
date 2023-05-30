<template>
    <Header></Header>
    <router-view></router-view>
</template>

<script>
import Header from "@/components/reception/main/Header/Header.vue";

export default {
    components: {Header},
}
</script>
