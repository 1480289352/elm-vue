<template>
  <div class="wrapper">
    <div class="header">
      <p>全部</p>
      <p>待付款</p>
      <p>待确认</p>
      <p>待派送</p>
      <p>待评论</p>
    </div>
    <div class="orederList">
      <div v-for="(item, index) in orderList" :key="index" class="orderItem">
        <div class="message1">
          <img class="img_logo" :src="item.businessImg" />
          <p>{{ item.businessName }}</p>
          <p>订单号:{{ item.orderId }}</p>
        </div>
        <div class="message2">
          <p>{{ item.businessExplain }}</p>
          <p>¥ {{ item.orderPrice }}</p>
        </div>
        <div class="message3">
          <p>{{ item.orderTime }}</p>
          <div v-if="item.orderState === 1">
            <p>已支付</p>
          </div>
          <div v-else>
            <p>未支付</p>
          </div>
        </div>
        <div class="message4">
          <p>删除订单</p>
          <p>再来一单</p>
        </div>
      </div>
      <div class="more">
        <p>加载更多></p>
      </div>
    </div>
  </div>
  <foot></foot>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Foot from "@/components/foot.vue";
import {useUserStore} from "@/store/user.js";
const user=useUserStore();
const orderList = ref([]);

const fetchOrderList = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8083/order/orderlist',
        {'userid':user.getUserId});
    orderList.value = response.data.data;
    console.log(orderList.value);
  } catch (error) {
    console.error('获取订单列表失败', error);
  }
};

onMounted(() => {
  fetchOrderList();
});
</script>
<style scoped>
/* 样式部分保持不变 */
.wrapper {
  width: 100%;
  height: 100%;
  background-color: floralwhite;
}
.wrapper .header {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper .header p {
  margin-right: 3vw; /* 给元素之间添加间隔 */
  font-size: 5vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如 normal, bold, bolder 等 */
  color: black; /* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
.wrapper .header p:first-child {
  border-bottom: red 3px solid;
}
.wrapper .orederList {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper .orederList .orderItem {
  border-radius: 10px;
  width: 95%;
  margin-top: 3vw;
  display: flex;
  flex-direction: column;
  background-color: white;
}
.wrapper .orederList .orderItem .message1 {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.wrapper .orederList .orderItem .message1 img {
  margin-left: 3vw;
  width: 12vw;
}
.wrapper .orederList .orderItem .message1 p:nth-child(2) {
  margin-left: 3vw; /* 给元素之间添加间隔 */
  font-size: 3vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如 normal, bold, bolder 等 */
  color: black; /* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
.wrapper .orederList .orderItem .message1 p:last-child {
  margin-left: 14vw; /* 给元素之间添加间隔 */
  font-size: 3vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如 normal, bold, bolder 等 */
  color: black; /* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
.wrapper .orederList .orderItem .message2 {
  display: flex;
  flex-direction: row;
}
.wrapper .orederList .orderItem .message2 p:first-child {
  margin-left: 3vw; /* 给元素之间添加间隔 */
  font-size: 3vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如 normal, bold, bolder 等 */
  color: #9F9F9F; /* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
.wrapper .orederList .orderItem .message2 p:last-child {
  margin-left: 14vw; /* 给元素之间添加间隔 */
  font-size: 3vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如 normal, bold, bolder 等 */
  color: black; /* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
.wrapper .orederList .orderItem .message3 {
  margin-top: -3vw;
  display: flex;
  flex-direction: row;
}
.wrapper .orederList .orderItem .message3 p:first-child {
  margin-left: 3vw; /* 给元素之间添加间隔 */
  font-size: 3vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如 normal, bold, bolder 等 */
  color: #9F9F9F; /* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
.wrapper .orederList .orderItem .message3 p:last-child {
  margin-left: 45vw; /* 给元素之间添加的间隔 */
  font-size: 3vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如 normal, bold, bolder 等 */
  color: red; /* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
.wrapper .orederList .orderItem .message4 {
  display: flex;
  flex-direction: row;
}
.wrapper .orederList .orderItem .message4 p:first-child {
  border: red 1px solid;
  border-radius: 5px;
  padding: 3px;
  margin-left: 55vw; /* 给元素之间添加间隔 */
  font-size: 3vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如 normal, bold, bolder 等 */
  color: red; /* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
.wrapper .orederList .orderItem .message4 p:last-child {
  border: red 1px solid;
  border-radius: 5px;
  padding: 3px;
  margin-left: 5vw; /* 给元素之间添加间隔 */
  font-size: 3vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如 normal, bold, bolder 等 */
  color: red; /* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
.wrapper .more {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper .more p {
  font-size: 5vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如 normal, bold, bolder 等 */
  color: #9F9F9F; /* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
</style>