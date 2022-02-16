<template>
  <div>
    <van-button type="primary" @click="btnFn">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <!-- <van-dialog v-model="show" title="标题" show-cancel-button>
      <img style="width: 100%" src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
    </van-dialog> -->
  </div>
</template>

<script>
// 方式2:手动 按需引入
// import Button from "vant/lib/button";(方式2)
// import "vant/lib/button/style";(方式2)
//
// // 局部注册Dialog
import { Dialog } from "vant";
//
// 目标：点击事件触发弹框
// 1. 找到vant文档
// 2. 引入
// 3. 再恰当时机,调用此函数(还可以用组件的方法) btnFn

export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  methods: {
    btnFn() {
      Dialog({
        message: "提示",
        showCancelButton: true,
        cancelButtonColor: "gray",
      });
    },
  },
};
</script>

<style>
</style>