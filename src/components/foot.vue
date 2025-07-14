<template>
  <div class="footer">
    <div>
      <router-link to="/">
        <el-icon><ElemeFilled /></el-icon>
        <p>首页</p>
      </router-link>
    </div>
    <div>
      <router-link to="/businesslist">
        <el-icon><Shop /></el-icon>
        <p>商家</p>
      </router-link>
    </div>
    <div>
      <router-link to="/orderlist">
        <el-icon><List /></el-icon>
        <p>订单</p>
      </router-link>
    </div>
    <div>
      <router-link to="/login">
        <el-icon><Stamp /></el-icon>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

</script>
<style scoped>
.footer {
  color: black;
  width: 100%;
  height: 14vw;
  border-top: solid 1px #DDD;
  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer div {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding-top: 4vw;
}
.footer div p {
  color: black;
  font-size: 2.8vw;
}
.footer div i {
  color: black;
  font-size: 6vw;
}
</style>