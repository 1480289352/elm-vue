
<template>
  <div class="wrapper">
    <div class="header">
      <p>商家列表</p>
    </div>
    <div class="foodList" >
      <div v-for="(item, index) in foodList" :key="index" class="foodItem" @click="goToShopDetail(item)">
      <div class="foodLeft">
      <div style="display: flex; flex-direction: column">
        <img class="img_logo" :src="item.businessImg"/>
      </div>
    </div>
      <div class="foodRight">
        <div class="shopTitle">{{ item.businessName }}</div>
        <div class="message1">
          <p>¥{{ item.starPrice }}起送 | ¥{{ item.deliveryPrice }}配送</p>
        </div>
        <div class="message2">
          <p>{{ item.businessExplain }}</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  <foot></foot>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import Foot from '@/components/foot.vue';

const foodList = ref([]);
const router = useRouter();

const fetchFoodList = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8082/bus/businessList');
    console.log(response);
    foodList.value = response.data.data;
  } catch (error) {
    console.error('获取商家列表失败', error);
  }
};

const goToShopDetail = (item) => {
  // 将 item 序列化为 JSON 字符串传递
  const serializedItem = JSON.stringify(item);
  router.push({ name: 'BusinessDetail', params: { item: serializedItem } });
};

// 调用函数获取商家列表
fetchFoodList();
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

/*食品列表样式*/
.wrapper .foodList{
  margin-bottom: 12vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.wrapper .foodList .foodItem{
  border: #cccccc 1px solid;
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: aliceblue;
}
.wrapper .foodList .foodItem .foodLeft{
  display: flex;
  flex-direction: column;
  flex:4;
  justify-content: center;
  align-items: center;
}


.wrapper .foodList .foodItem .foodLeft .img_top{
  width:5vw;
  z-index: 99;
  margin-bottom:-2.5vw ;
  margin-left: 22vw;
  border-radius: 200px; /* 输入框圆角 */
}
.wrapper .foodList .foodItem .foodLeft .img_logo{
  width:25vw;
  margin-top: -0.5vw;
  z-index: 10;
  height: 20vw;
}



.wrapper .foodList .foodItem .foodRight{
  display: flex;
  flex-direction: column;
  flex: 7;
  justify-content: flex-start;
}

.wrapper .foodList .foodItem .foodRight .shopTitle{
  margin-top: 4vw;
  width: 54vw;
  font-size: 4vw;
  font-weight: bolder;
  font-style: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.wrapper .foodList .foodItem .foodRight .message1{
  margin-top: 2vw;
  display: flex;
}

.wrapper .foodList .foodItem .foodRight .message1 p {
  font-family: '宋体', sans-serif; /* 设置字体族 */
  font-size: 3vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如normal, bold, bolder等 */
  color: #9F9F9F;/* 设置字体颜色 */
  letter-spacing: 0.2vw; /* 设置字符间距 */
}


.wrapper .foodList .foodItem .foodRight .message2{
  margin-top: -2vw;
  display: flex;
}

.wrapper .foodList .foodItem .foodRight .message2 p {
  font-family: '宋体', sans-serif; /* 设置字体族 */
  font-size: 3vw; /* 设置字体大小 */
  font-weight: normal; /* 设置字体粗细，如normal, bold, bolder等 */
  color: #9F9F9F;/* 设置字体颜色 */
  letter-spacing: 0.2vw; /* 设置字符间距 */
}


</style>