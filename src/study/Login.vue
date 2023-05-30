<template>
  <div class="bg">
    <div class="Background">
      <form action="http://localhost:8090/hello" class="FORM" method="post">
        <table class="TABLE" >
          <tr>
            <td><h1>Login登录</h1></td>
          </tr>
          <tr>
            <td><input type="text" name="user" class="A1" placeholder="请输入用户名"></td>
          </tr>
          <tr>
            <td><input type="password" name="pwd" class="A1" placeholder="请输入密码"></td>
          </tr>
          <tr>
            <td><input type="submit" name="登录" class="A2"><input type="reset" name="取消" class="A2"></td>
          </tr>
        </table>
      </form>
    </div>
    <div class="zhuce">
      <button><router-link to="/register">注册</router-link></button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.bg{
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.Background{
  display: flex;
  background: #b6b6b657;
  align-items: center;
  width: 400px;
  height: 400px;
  justify-content: space-around;
}
.TABLE{
  text-align: center;
}
.A1{
  border: 2px white solid;
  border-radius: 10px;
  width: 200px;
  height: 30px;
}
.A2{
  margin: 5px;
  border: 2px white solid;
  border-radius: 10px;
  width: 90px;
  height: 30px;
}
.zhuce{
  position: absolute;
  top: 10px;
  right: 50px;
}
.zhuce button{
  border-radius: 10px;
}
</style>