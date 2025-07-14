<template>
  <div class="wrapper">
    <div class="header">
      <p>商家列表</p>
    </div>
    <div class="business">
      <h1>{{ item.businessName }}</h1>
      <img :src="item.businessImg" />
      <div class="price-info">
        <p>起送价格: ¥{{ item.starPrice }} | 配送价格: ¥{{ item.deliveryPrice }}</p>
      </div>
      <p class="explain">{{ item.businessExplain }}</p>
    </div>
    <div class="foodList">
      <div v-for="(item, index) in foodList" :key="index" class="foodItem">
        <div class="foodLeft">
          <div style="display: flex; flex-direction: column">
            <img class="img_logo" :src="item.foodImg"/>
          </div>
        </div>
        <div class="foodMiddle">
          <div class="foodName">{{ item.foodName }}</div>
          <div class="message1">
            <p>¥{{ item.foodPrice }}</p>
          </div>
          <div class="message2">
            <p>{{ item.foodExplain }}</p>
          </div>
        </div>
        <div class="foodRight">
          <div class="quantity-controls">
            <button @click="decrementQuantity(item)">-</button>
            <span>{{ item.quantity || 0 }}</span>
            <button @click="incrementQuantity(item)">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="total-price">
        <p>总价: ¥{{ calculateTotalPrice() }}</p>
      </div>
      <div class="pay-button">
        <button @click="finishpay">去支付</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import {useUserStore} from "@/store/user.js";
const user=useUserStore();
const route = useRoute();
const foodList = ref([]);
const item = JSON.parse(route.params.item);

const fetchShopDetail = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8082/bus/businessDetail',
        {'businessid':item.businessId,
        });
    console.log(response);
    foodList.value = response.data.data;
  } catch (error) {
    console.error('获取商家详情失败', error);
  }
};

const incrementQuantity = (item) => {
  if (!item.quantity) {
    item.quantity = 1;
  } else {
    item.quantity++;
  }
};

const decrementQuantity = (item) => {
  if (item.quantity && item.quantity > 0) {
    item.quantity--;
  }
};

const calculateTotalPrice = () => {
  let total = 0;
  foodList.value.forEach(item => {
    if (item.quantity) {
      total += item.foodPrice * item.quantity;
    }
  });
  return total;
};

const finishpay = async () => {
  try {
    // 构建请求体
    const items= []
    // 构建 items 数组，包含 foodId 和 quantity
    foodList.value.forEach(item => {
      if (item.quantity) {
          items.push({
          foodId: item.foodId,
          quantity: item.quantity
        });
      }
    });
    const response = await axios.post('http://127.0.0.1:8083/order/insorder',
        {'userId': user.getUserId,
      'businessId': item.businessId,
      'totalPrice': calculateTotalPrice(),
        'items':items
          });
    console.log({'userId': user.getUserId,
      'businessId': item.businessId,
      'totalPrice': calculateTotalPrice(),
      'items':items
    })
    console.log('交易成功');
    alert('交易成功')
  } catch (error) {
    console.error('交易失败', error);
  }
};

onMounted(() => {
  fetchShopDetail();
});
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
.wrapper .header{
  height: 16vw;
  background-color: #17BAF9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper .header p{
  font-family: '宋体', sans-serif; /* 设置字体族 */
  font-size: 25px; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如normal, bold, bolder等 */
  color: white;/* 设置字体颜色 */
  letter-spacing: 4px; /* 设置字符间距 */
}
.wrapper .business{
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.wrapper .business h1{
  width: 100%;
  text-align: center;
}
.wrapper .business img{
  width: 30vw;
  height: 30vw;
  margin: 10px 0;
}
.wrapper .business .price-info {
  width: 100%;
  text-align: center;
  font-size: 2vw;
  margin-top: -1vw;
}
.wrapper .business .explain {
  width: 100%;
  text-align: center;
  font-size: 2vw;
  margin-top: -1vw;
}
.wrapper .foodList {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper .foodList .foodItem {
  display: flex;
  width: 95%;
  margin-bottom: 10px;
  overflow: hidden;
}
.wrapper .foodList .foodItem .foodLeft {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper .foodList .foodItem .foodLeft .img_logo {
  width: 20vw;
  height: 20vw;
}
.wrapper .foodList .foodItem .foodMiddle {
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.wrapper .foodList .foodItem .foodMiddle .foodName {
  font-size: 3vw;
  font-weight: bold;
}
.wrapper .foodList .foodItem .foodMiddle .message1 {
  font-size: 2vw;
  color: #666;
}
.wrapper .foodList .foodItem .foodMiddle .message2 {
  font-size: 2vw;
  color: #666;
}
.wrapper .foodList .foodItem .foodRight {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper .foodList .foodItem .foodRight .quantity-controls {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.wrapper .foodList .foodItem .foodRight .quantity-controls button {
  border: none;
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 5vw;
}
.wrapper .foodList .foodItem .foodRight .quantity-controls span {
  font-size: 5vw;
  margin: 0 10px;
}
.wrapper .footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 12vw;
}
.wrapper .footer .total-price {
  flex: 3;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vw;;
}
.wrapper .footer .pay-button {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.wrapper .footer .pay-button button {
  border: none;
  background-color: #17BAF9;
  color: blue;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 4vw;
}
</style>