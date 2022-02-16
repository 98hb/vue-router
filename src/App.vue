<template>
  <div>
    <van-button type="primary" @click="btnFn">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名测试"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码测试"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
// 方式2:手动 按需引入
// import Button from "vant/lib/button";(方式2)
// import "vant/lib/button/style";(方式2)
//
// // 局部注册Dialog// @click="btnFn"
import { Dialog } from "vant";

// 目标：点击事件触发弹框
// 1. 找到vant文档
// 2. 引入
// 3. 再恰当时机,调用此函数(还可以用组件的方法) btnFn

export default {
  methods: {
    onSubmit(values) {
      //表单提交事件,values收集表单里的值
      console.log("submit", values);
    },
    btnFn() {
      Dialog({
        message: "提示",
        showCancelButton: true,
        cancelButtonColor: "gray",
      });
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style>
</style>