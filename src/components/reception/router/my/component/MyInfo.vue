<template>
    <div class="MyInfo_bg">
        <div class="headPortrait">
            <Card style="width:320px">
                <div style="text-align:center">
                    <img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" alt="头像">
                </div>
            </Card>
            <Button type="primary" ghost size="large">更改头像</Button>
            <h3>支持JPG,JPEG,PNG格式,且文件需小于1M</h3>
        </div>
        <div>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="名称" prop="name">
                    <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="mail">
                    <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                </FormItem>
                <FormItem label="城市" prop="city">
                    <Select v-model="formValidate.city" placeholder="Select your city">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="性别" prop="gender">
                    <RadioGroup v-model="formValidate.gender">
                        <Radio label="男">男</Radio>
                        <Radio label="女">女</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="兴趣" prop="interest">
                    <CheckboxGroup v-model="formValidate.interest">
                        <Checkbox label="吃"></Checkbox>
                        <Checkbox label="睡"></Checkbox>
                        <Checkbox label="跑步"></Checkbox>
                        <Checkbox label="电影"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="个性签名" prop="desc">
                    <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
import {
    Button, Card,
    Checkbox,
    CheckboxGroup,
    DatePicker,
    Form,
    FormItem, Input,
    Radio,
    RadioGroup,
    Row,
    Select,
    TimePicker
} from "view-ui-plus";

export default {
    components: {
        Card,
        Button,
        Input, Row, Select, Form, DatePicker, TimePicker, RadioGroup, Radio, CheckboxGroup, Checkbox, FormItem},
    data () {
        return {
            formValidate: {
                name: '',
                mail: '',
                city: '',
                gender: '',
                interest: [],
                date: '',
                time: '',
                desc: ''
            },
            ruleValidate: {
                name: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                mail: [
                    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                ],
                city: [
                    { required: true, message: 'Please select the city', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: 'Please select gender', trigger: 'change' }
                ],
                interest: [
                    { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                ],
                date: [
                    { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                ],
                time: [
                    { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>
<style scoped lang="scss">
.MyInfo_bg{
    display: flex;
    align-items: center;
    width: 100%;
}
.headPortrait{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px 0 10px;
    button{
      margin: 20px 0 20px 0;
    }
}
</style>
