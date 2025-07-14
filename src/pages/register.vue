
<template>
  <div class="registerheader"><p>用户注册</p></div>
  <el-form :model="form" label-width="auto" style="max-width: 100%">
    <el-form-item label="手机号码">
      <el-input v-model="form.phone" />
    </el-form-item>
    <el-form-item label="密码：">
      <el-input v-model="form.password"  />
    </el-form-item>
    <el-form-item label="确认密码：">
      <el-input v-model="form.confirmPassword"  />
    </el-form-item>
    <el-form-item label="用户姓名：">
      <el-input v-model="form.username"  />
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="form.sex" placeholder="请选择你的性别">
        <el-option label="男" value="1" />
        <el-option label="女" value="0" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="subregister">注册</el-button>
    </el-form-item>
  </el-form>
  <foot></foot>
</template>
<script setup>
import { reactive } from 'vue'
import router from "@/router/router.js";
import Foot from "@/components/foot.vue";
import axios from "axios";
// do not use same name with ref
const form = reactive({
  phone: '',
  password: '',
  confirmPassword: '',
  username:'',
  sex:'',
})
const subregister = async () =>
  {
    try {
      const response = await axios.post("http://127.0.0.1:8081/user/register", {
        phone: form.phone,
        password: form.password,
        username: form.username,
        sex:form.sex
      });
      console.log(response);
      const mess=response.data.messageee
      if (mess=== 'success') {
        alert("注册成功")
        router.push('/login');
      } else {
        alert("注册失败")
      }
    } catch (error) {
      console.error(error); // 打印错误到控制台
      alert("注册失败")
    }
  }

</script>
<style scoped>
.registerheader {
  width: 100%;
  height: 15vw;
  background: #00A1D7;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  margin-bottom: 1vw;
}

.registerheader p {
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
.el-select {
  font-size: 50px;
  height: 50px;
}
.el-button {
  font-size: 20px;
  height: 80px;
  width: 100%;
}
</style>