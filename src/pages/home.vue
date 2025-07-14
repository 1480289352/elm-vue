<script setup>
import {useUserStore} from "@/store/user.js";
import Foot from "@/components/foot.vue";
const user=useUserStore();
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <div class="location">
        <div class="icon">
          <i class="fa-solid fa-location-dot"></i>
          <div class="icon-text">饿了么</div>
        </div>
        <div class="location-text">
          云南大学呈贡校区力行楼<i class="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div class="search">
        <div class="search-panel">
          <i style="flex:0 0 6vw; padding-left: 3vw; font-size: 4vw;color: #17BAF9;" class="fa-solid fa-expand"></i>
          <input style="flex:6;" type="text"  placeholder="请输入要查询的商品"/>
          <div style="flex:0 0 17vw" class="search-button" onclick="searchClick()">搜索</div>
        </div>
      </div>
    </div>
    <div class="foodType">
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class01.jpg">
        <p>美食外卖</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class02.jpg">
        <p>超市便利</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class03.jpg">
        <p>水果鲜花</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class04.jpg">
        <p>买菜</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class05.jpg">
        <p>买药</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class06.jpg">
        <p>甜品饮品</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class07.jpg">
        <p>天天爆红包</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class08.jpg">
        <p>0元领水果</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class09.jpg">
        <p>跑腿</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class10.jpg">
        <p>天天特价</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class11.jpg">
        <p>借钱</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class12.jpg">
        <p>粥粉面点</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class13.jpg">
        <p>宠物用品</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class14.jpg">
        <p>奶茶果汁</p>
      </div>
      <div class="foodTypeItem">
        <img src="../img/TypeImg/class15.jpg">
        <p>全部</p>
      </div>
    </div>
    <div class="banner">
      <div class="banner_left">
        <div class="banner_left_top">
          <img src="../img/TypeImg/banner-left-top.jpg"/>
          <p>饿小宝:</p>
          <p class="title">在线拼单</p>
        </div>
        <div class="banner_left_content">
          <div class="banner_left_content_left">
            <p class="title">一起来嗨</p>
            <div class="banner_left_content_left_button">去看看</div>
          </div>
          <div class="banner_left_content_right">

            <img src="../img/TypeImg/bannerLeft-Right.png" />
          </div>
        </div>
      </div>
      <div class="banner_right">
        <div class="banner_right_item">
          <p class="title">晚餐聚会</p>
          <img src="../img/BannerImg/banner01.jpg">
          <p class="remark">一起吃好点</p>
        </div>
        <div class="banner_right_item">
          <p class="title">学生福利</p>
          <img src="../img/BannerImg/banner02.jpg">
          <p class="remark">最高省912</p>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="recommendItem selected">换换口味</div>
      <div class="recommendItem">天天爆红包</div>
      <div class="recommendItem">减配送费</div>
      <div class="recommendItem">学生特价</div>
      <i class="fa-solid fa-bars"></i>
    </div>
    <div class="foodList" >
      <div class="foodItem">
        <div class="foodLeft">
          <div style="display: flex;flex-direction: column">
            <img class="img_top" src="../img/img/super_member.png"/>
            <img class="img_logo" src="../img/img/sj04.png"/>
          </div>
        </div>
        <div class="foodRight" >
          <div class="shopTitle">米村拌饭·鲜香牛油（云南大学店）</div>
          <div class="message1">
            <p>4.7分</p>
            <p>月售300+</p>
            <p>30分钟  3.9km</p>
          </div>
          <div class="message2">
            <p>起送¥20  配送¥3.5</p>
            <p>蜂鸟准时送达</p>
          </div>
          <div class="message3">
            <p>🔥8元无门槛</p>
            <p>20减15|38减18</p>
            <p>▽</p>
          </div>
        </div>
      </div>
     <div class="foodItem">
        <div class="foodLeft">
          <div style="display: flex;flex-direction: column">
            <img class="img_top" src="../img/img/super_member.png"/>
            <img class="img_logo" src="../img/img/sj01.png"/>
          </div>
        </div>
        <div class="foodRight" >
          <div class="shopTitle">东北饺子·量大好吃（云南大学店）</div>
          <div class="message1">
            <p>4.7分</p>
            <p>月售200+</p>
            <p>31分钟  4.1km</p>
          </div>
          <div class="message2">
            <p>起送¥0  配送¥5</p>
            <p>蜂鸟准时送达</p>
          </div>
          <div class="message3">
            <p>🔥5元无门槛</p>
            <p>20减12|38减18</p>
            <p>▽</p>
          </div>
        </div>
      </div>
      <div class="foodItem">
        <div class="foodLeft">
          <div style="display: flex;flex-direction: column">
            <img class="img_logo" src="../img/img/sj02.png"/>
          </div>
        </div>
        <div class="foodRight" >
          <div class="shopTitle">小锅饭·正宗美味（云南大学店）</div>
          <div class="message1">
            <p>4.3分</p>
            <p>月售400+</p>
            <p>20分钟  2.9km</p>
          </div>
          <div class="message2">
            <p>起送¥10  配送¥2.5</p>
            <p>蜂鸟准时送达</p>
          </div>
          <div class="message3">
            <p>🔥3元无门槛</p>
            <p>20减15|38减20</p>
            <p>▽</p>
          </div>
        </div>
      </div>
      <div class="foodItem">
        <div class="foodLeft">
          <div style="display: flex;flex-direction: column">
            <img class="img_logo" src="../img/img/sj08.png"/>
          </div>
        </div>
        <div class="foodRight" >
          <div class="shopTitle">水果捞·自选水果小料（云南大学店）</div>
          <div class="message1">
            <p>4.9分</p>
            <p>月售700+</p>
            <p>10分钟  1.9km</p>
          </div>
          <div class="message2">
            <p>起送¥0  配送¥1.5</p>
            <p>蜂鸟准时送达</p>
          </div>
          <div class="message3">
            <p>🔥1元无门槛</p>
            <p>20减5|38减18</p>
            <p>▽</p>
          </div>
        </div>
      </div>
      <div class="foodItem">
        <div class="foodLeft">
          <div style="display: flex;flex-direction: column">
            <img class="img_logo" src="../img/img/sj05.png"/>
          </div>
        </div>
        <div class="foodRight" >
          <div class="shopTitle">申记串道（云南大学店）</div>
          <div class="message1">
            <p>4.6分</p>
            <p>月售350+</p>
            <p>30分钟  4.0km</p>
          </div>
          <div class="message2">
            <p>起送¥10  配送¥3.5</p>
            <p>蜂鸟准时送达</p>
          </div>
          <div class="message3">
            <p>🔥2元无门槛</p>
            <p>20减8|38减18</p>
            <p>▽</p>
          </div>
        </div>
      </div>
      <div class="foodItem">
        <div class="foodLeft">
          <div style="display: flex;flex-direction: column">
            <img class="img_logo" src="../img/img/sj06.png"/>
          </div>
        </div>
        <div class="foodRight" >
          <div class="shopTitle">半亩粮田（云南大学店）</div>
          <div class="message1">
            <p>4.7分</p>
            <p>月售300+</p>
            <p>30分钟  3.9km</p>
          </div>
          <div class="message2">
            <p>起送¥20  配送¥3.5</p>
            <p>蜂鸟准时送达</p>
          </div>
          <div class="message3">
            <p>🔥8元无门槛</p>
            <p>20减5|38减18</p>
            <p>▽</p>
          </div>
        </div>
      </div>
      <div class="foodItem">
        <div class="foodLeft">
          <div style="display: flex;flex-direction: column">
            <img class="img_top" src="../img/img/super_member.png"/>
            <img class="img_logo" src="../img/img/sj07.png"/>
          </div>
        </div>
        <div class="foodRight" >
          <div class="shopTitle">茶兮·喝好茶（云南大学店）</div>
          <div class="message1">
            <p>4.9分</p>
            <p>月售900+</p>
            <p>15分钟  1.9km</p>
          </div>
          <div class="message2">
            <p>起送¥10  配送¥2.5</p>
            <p>蜂鸟准时送达</p>
          </div>
          <div class="message3">
            <p>🔥2元无门槛</p>
            <p>20减1|38减8</p>
            <p>▽</p>
          </div>
        </div>
      </div>
    </div>
    <div>&nbsp;</div>
  </div>
  <foot></foot>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;

}

/*顶部样式*/
/*logo样式*/
.wrapper .header {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
}

.wrapper .header .location {
  width: 100%;
  height: 12vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #17BAF9;
}

.wrapper .header .location .icon {
  display: flex;
  font-size: 8vw;
  padding-left: 3vw;
  flex: 4;
}

.wrapper .header .location .icon .icon-text {
  margin-left: 3vw;
}

.wrapper .header .location .location-text {
  display: flex;
  justify-content: flex-end;
  padding-right: 2vw;
  flex: 5;
  font-size: 4.5vw;
}

/*search样式*/
.wrapper .header .search {
  width: 100%;
  height: 10vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.wrapper .header .search .search-panel {
  background-color: white;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 4px solid #17BAF9;
  height: 8vw;
  border-radius: 25px;
  color: #9F9F9F;
}

.wrapper .header .search .search-panel input {
  outline: none;
  border: none;
  color: #9F9F9F;
  font-size: 4vw;
}

.wrapper .header .search .search-panel .search-button {
  cursor: pointer;
  height: 8vw;
  border-radius: 25px;
  background-color: #17BAF9;
  color: white;
  font-size: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
}


/*foodType样式*/
.wrapper .foodType {
  margin-top: 23vw;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  height: 45vw;
}

.wrapper .foodType .foodTypeItem {
  display: flex;
  flex-direction: column;
  height: 15vw;
  width: 18vw;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}

.wrapper .foodType .foodTypeItem img {
  width: 12vw;
  height: 8vw;
}

.wrapper .foodType .foodTypeItem p {
  font-size: 3.2vw;
  color: #666666;
  margin-top: 0.1vw;
}

/*广告样式*/
.wrapper .banner {
  width: 100%;
  display: flex;
}

.wrapper .banner .banner_left {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.wrapper .banner .banner_left .banner_left_top{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vw;
}
.wrapper .banner .banner_left .banner_left_top img{
  width: 5vw;
  height: 5vw;
}


.wrapper .banner .banner_left .banner_left_content{
  display: flex;
  width: 100%;
  height: 13vw;
}
.wrapper .banner .banner_left .banner_left_content .banner_left_content_left{
  flex: 7;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  display: flex;
}
.wrapper .banner .banner_left .banner_left_content .banner_left_content_left .title{
  font-size: 3.3vw;
  font-weight: bolder;
  font-style: normal;
  justify-content: center;
  align-items: center;
}
.wrapper .banner .banner_left .banner_left_content .banner_left_content_left .banner_left_content_left_button{
  cursor: pointer;
  height: 3vw;
  width: 10vw;
  background-color: #CEFEFF;
  color: white;
  font-size: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper .banner .banner_left .banner_left_content .banner_left_content_right{
  flex: 7;
  justify-content: center;
  align-items: center;
  display: flex;
}
.wrapper .banner .banner_left .banner_left_content .banner_left_content_right img{
  width: 14vw;
  height: 14vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper .banner .banner_left .banner_left_top p{
  font-size: 3.7vw;
  font-style: italic;
}

.wrapper .banner .banner_left .banner_left_top.title {
  font-size: 3.3vw;
  font-weight: bolder;
  margin-bottom: 0.2vw;
}
.wrapper .banner .banner_right {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .banner .banner_right .banner_right_item {
  flex: 5;
  height: 18vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrapper .banner .banner_right .banner_right_item .title{

  font-size: 3.3vw;
  font-weight: bolder;
  margin-bottom: 0.2vw;
}

.wrapper .banner .banner_right .banner_right_item img {
  width: 10vw;
  height: 10vw;
  margin-top: 0.5vw;
}

.wrapper .banner .banner_right .banner_right_item .remark{
  margin-top: 0.5vw;
  font-size: 2.3vw;
  color: #999999;
}

/*recommend样式*/
.wrapper .recommend{
  margin-top: 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

}
.wrapper .recommend .recommendItem{
  color:#666666;
  font-size: 3.2vw;
}
.wrapper .recommend i{
  color:#666666;
  font-size: 3.2vw;
}
.wrapper .recommend .selected{
  color:#00A1D7;
  font-weight: bolder;
  font-size: 3.2vw;
}

/*食品列表样式*/
.wrapper .foodList{
  margin-bottom: 14vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.wrapper .foodList .foodItem{
  display: flex;
  width: 90%;
  flex-direction: row;
  margin-top: 6vw;
  background-color: aliceblue;
  border-radius: 10px; /* 输入框圆角 */
  height: 300px;
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
  margin-left: 2vw;
}
.wrapper .foodList .foodItem .foodLeft .img_logo{
  width:25vw;
  margin-top: -2vw;
  z-index: 10;
}



.wrapper .foodList .foodItem .foodRight{
  display: flex;
  flex-direction: column;
  flex: 7;
  justify-content: flex-start;
}

.wrapper .foodList .foodItem .foodRight .shopTitle{
  margin-top: 3vw;
  width: 54vw;
  font-size: 4vw;
  font-weight: bolder;
  font-style: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.wrapper .foodList .foodItem .foodRight .message1{
  margin-top: -2vw;
  flex-direction: row;
}

.wrapper .foodList .foodItem .foodRight .message1 p {
  display: inline-block; /* 使<p>元素水平排列 */
  margin-right: 2vw; /* 给元素之间添加间隔 */
}

.wrapper .foodList .foodItem .foodRight .message1 p:first-child {
  font-size: 4vw;
  font-weight: bold; /* 为第一个<p>设置粗体 */
  color: darkorange; /* 为第一个<p>设置颜色 */
}
.wrapper .foodList .foodItem .foodRight .message1 p:nth-child(2){
  font-style: italic; /* 为第二个<p>设置斜体 */
  color: #9F9F9F; /* 为第二个<p>设置颜色 */
  font-size: 3vw;
}
.wrapper .foodList .foodItem .foodRight .message1 p:last-child {
  margin-left: 6vw;
  font-style: italic; /* 为第三个<p>设置斜体 */
  color: #9F9F9F; /* 为第三个<p>设置颜色 */
  font-size: 3vw;
}
.wrapper .foodList .foodItem .foodRight .message2{
  margin-top: -7vw;
  flex-direction: row;
}

.wrapper .foodList .foodItem .foodRight .message2 p {
  display: inline-block; /* 使<p>元素水平排列 */
  margin-right: 2vw; /* 给元素之间添加间隔 */
}

.wrapper .foodList .foodItem .foodRight .message2 p:first-child {
  font-size: 3vw;
  font-style: italic; /* 为第一个<p>设置斜体 */
  color: #9F9F9F; /* 为第一个<p>设置颜色 */
}
.wrapper .foodList .foodItem .foodRight .message2 p:last-child {
  border: #9F9F9F 1px solid;
  border-radius: 5px; /* 输入框圆角 */
  padding: 2.5px;
  margin-left: 5vw;
  font-weight: bold; /* 为第二个<p>设置粗体 */
  color: #17BAF9; /* 为第二个<p>设置颜色 */
  font-size: 3.5vw;
}
.wrapper .foodList .foodItem .foodRight .message3{
  margin-top: -5vw;
  flex-direction: row;
}

.wrapper .foodList .foodItem .foodRight .message3 p {
  display: inline-block; /* 使<p>元素水平排列 */
  margin-right: 2vw; /* 给元素之间添加间隔 */
}

.wrapper .foodList .foodItem .foodRight .message3 p:first-child {
  border: peru 1px solid;
  border-radius: 5px; /* 输入框圆角 */
  padding: 3px;
  font-size: 3vw;
  font-style: italic; /* 为第一个<p>设置斜体 */
  color: peru; /* 为第一个<p>设置颜色 */
}
.wrapper .foodList .foodItem .foodRight .message3 p:nth-child(2) {
  border: brown 1px solid;
  border-radius: 5px; /* 输入框圆角 */
  padding: 3px;
  margin-left: 2vw;
  font-style: italic; /* 为第二个<p>设置斜体 */
  color: brown; /* 为第二个<p>设置颜色 */
  font-size: 3.5vw;
}
</style>