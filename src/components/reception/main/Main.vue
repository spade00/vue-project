<template>
    <div class="main">
        <Header></Header>
        <router-view></router-view>
        <div class="GlobalFooter">
            <GlobalFooter class="" :links="links" :copyright="copyright" />
        </div>
    </div>
</template>

<script>
import Header from "@/components/reception/main/Header/Header.vue";
import {GlobalFooter} from "view-ui-plus";

export default {
    components: {GlobalFooter, Header},
    setup(){
        return {
            links: [
                {
                    key: '帮助',
                    title: '帮助',
                    href: 'https://www.iviewui.com',
                    blankTarget: true
                },
                {
                    key: 'github',
                    icon: 'logo-github',
                    href: 'https://github.com/view-design/ViewUIPlus',
                    blankTarget: true
                },
                {
                    key: '条款',
                    title: '条款',
                    href: '',
                    blankTarget: true
                }
            ],
            copyright: 'Copyright © 2022 View Design All Rights Reserved'
        }
    }
}
</script>
<style scoped>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.GlobalFooter{
    width: 100%;
    background-color: #262426;
    position: relative;
    bottom: -20px;
}
</style>
