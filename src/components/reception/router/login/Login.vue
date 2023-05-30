<template>
    <div>
        <Button>切换至管理员登录</Button>
    </div>
    <div class="bg">
        <div>
            <img src="../../../../assets/Logo.jpg" alt="Logo">
        </div>
        <div class="login-container">
            <h1>登录</h1>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="username">用户名：</label>
                    <input type="text" id="username" v-model.trim="username" required>
                </div>
                <div class="form-group">
                    <label for="password">密码：</label>
                    <input type="password" id="password" v-model.trim="password" required>
                </div>
                <Button type="submit" @click="onLogin">登录</Button>
                <Button type="">注册</Button>
            </form>
        </div>
    </div>
</template>

<script>
import {onBeforeMount, onMounted, ref} from 'vue';
import router from "@/router";
import request from "@/utils/request";
import axios from "axios";
import {Button} from "view-ui-plus";

export default {
    components: {Button},
    setup() {
        const username = ref('');
        const password = ref('');
        const id = ref()
        const onLogin = async ()=>{
            const result = await login(username,password,id)
            if (result){
                await router.push({
                    path:'/my',
                    query:{
                        id:id.value
                    }
                })
            }else{
                localStorage.removeItem("jwt")
                localStorage.removeItem("Login_state")
            }
        }
        return {
            username,
            password,
            onLogin
        }
    },

}

async function login(username, password ,id) {
    try {
        const response = await request.get('/Item/login', {
            username:username.value,
            password:password.value
        });
        const token = response.data.token;
        localStorage.setItem('jwt', token); // 将token保存在本地存储中
        id.value = response.data.id
        localStorage.setItem('Login_state',id.value)
        return true; // 登录成功
    } catch (error) {
        console.error(error);
        return false; // 登录失败
    }
}
</script>

<style>
.bg{
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 300px;
    max-width: 400px;
    margin-left: 50px;
    padding: 20px;
    border: 5px solid #ddd;
    border-radius: 5px;
}

.form-group {
    margin-bottom: 10px;
}

label {
    display: inline-block;
    width: 80px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #0069d9;
}
</style>
