<template>
    <Tabs value="name1">
        <TabPane label="文件导入" name="name1">
            <Upload></Upload>
        </TabPane>
        <TabPane label="手动输入" name="name2">
            <ManuallyEnter></ManuallyEnter>
        </TabPane>
        <TabPane label="查看历史记录" name="name3">
            <div>
                <Space size="large" wrap>
                    <DatePicker type="date" placeholder="查看一天的记录" style="width: 200px" />
                    <DatePicker type="daterange" placement="bottom-end" placeholder="查看多天的记录" style="width: 200px" />
                </Space>
            </div>
        </TabPane>
    </Tabs>
</template>
<script>
import {DatePicker, Space, TabPane, Tabs} from "view-ui-plus";
import Upload from "@/components/backstage/component/ticketManagement/Arrange_film/component/Upload.vue";
import ManuallyEnter from "@/components/backstage/component/ticketManagement/Arrange_film/component/ManuallyEnter.vue";

export default {
    components: {DatePicker, Space, ManuallyEnter, Upload, TabPane, Tabs}

}
</script>
<style>
</style>
