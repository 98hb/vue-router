<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
// 方式2:手动 按需引入
import Button from "vant/lib/button";
import "vant/lib/button/style";
export default {
  components: {
    //手动注册组件名
    // VanButton: Button,
    // 形同方式
    [Button.name]: Button,
  },
};
</script>

<style>
</style>