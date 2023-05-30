<template>
    <div class="Admin-bg">
        <adimin-menu></adimin-menu>
    </div>
</template>
=
<script>

import AdiminMenu from "@/components/backstage/component/adimin-menu.vue";

export default {
    components: {AdiminMenu},
}
</script>

<style scoped>
.Admin-bg{
    display: flex;
    width: 100%;
    height: 50vw;
}
</style>