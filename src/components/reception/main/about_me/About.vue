<template>
    <div>
        <Divider>404</Divider>
        <Exception type="404" img-color redirect="/" />
    </div>
</template>
<script>
import {Divider, Exception} from "view-ui-plus";

export default {
    components: {Exception, Divider}

}
</script>