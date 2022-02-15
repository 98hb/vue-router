<template>
  <div>
    <div class="footer_wrap">
      <span @click="btn('/find', 'Find')">发现音乐</span>
      <span @click="btn('/my', 'My')">我的音乐</span>
      <span @click="oneBtn">朋友--小传</span>
      <span @click="twoBtn">朋友--小智</span>
    </div>
    <div class="top">
      <!-- 7. 设置挂载点 - 当url的hash值路径切换,
      显示规则里对应的组件到这 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 目标:编程式导航 - js方式跳转路由
//方式1:
// params => $route.params.参数名
// 方式2:
// query =>$route.query.参数名
// 重要:path会自动忽略params
// 推荐：name+query方式传参
// 注意:如果当前url上"hash值和?参数"与你要跳转的"hash值和?参数"一致，
// 爆出冗余导航的问题，不会跳转路由
export default {
  methods: {
    btn(targetPath, targetName) {
      this.$router.push({
        // path: targetPath,// 方式1:path跳转 路由路径跳转
        name: targetName, //方式2:name跳转 路由名跳转
        /* query: {
          name: "你懂",
        },
        params: {
          username: "你好",
        }, */
      });
    },
    oneBtn() {
      this.$router.push({
        name: "Part",
        params: {
          username: "小传",
        },
      });
    },
    twoBtn() {
      this.$router.push({
        name: "Part",
        query: {
          name: "小智",
        },
      });
    },
  },
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>