
<template>
  <div class="loginheader"><p>用户登录</p></div>
  <el-form :model="form" label-width="auto" style="max-width: 100%">
    <el-form-item label="手机号码"  >
      <el-input v-model="form.phone" />
    </el-form-item>
    <el-form-item label="密码：" >
      <el-input v-model="form.password"  />
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
    <el-form-item >
      <el-button @click="goRegister">去注册</el-button>
    </el-form-item>
  </el-form>
  <foot></foot>
</template>
<script setup>
import { reactive } from 'vue'
import router from "@/router/router.js";
import Foot from "@/components/foot.vue";
import axios from "axios";
import {useUserStore} from "@/store/user.js";
const userStore = useUserStore();
const form = reactive({
  phone: '',
  password: ''
})
const onSubmit = async () =>
{
  try {
    const response = await axios.post("http://127.0.0.1:8081/user/login", {
      phone: form.phone,
      password: form.password,
    });
    console.log(response);
    const mess=response.data.messageee
    if (mess=== 'success') {
      alert("登录成功")
      userStore.setUserId(form.phone);
      alert(userStore.getUserId)
      router.push('/');
    } else {
      alert("登录失败")
    }
  } catch (error) {
    console.error(error); // 打印错误到控制台
    alert("登录失败了")
  }
}
const goRegister = () => {
  router.push('/register');
}
</script>
<style scoped>
.loginheader {
  width: 100%;
  height: 15vw;
  background: #00A1D7;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  margin-bottom: 1vw;
}

.loginheader p {
  color: white; /* 字体颜色为白色 */
  font-size: 6vw;
}
.el-form-item {
  padding: 10px;
}

.el-input {
  font-size: 30px;
  height: 50px;
}
.el-button {
  font-size: 20px;
  height: 80px;
  width: 100%;
}
</style>