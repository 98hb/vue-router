<template>
  <div>
    <div class="footer_wrap">
      <span @click="btn('/find', 'Find')">发现音乐</span>
      <span @click="btn('/my', 'My')">我的音乐</span>
      <span @click="btn('/part', 'Part')">朋友</span>
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
// 语法:
// this.$router.push({//都去 router/index.js定义 方法1
// path:"路由路径"
// })
// this.$router.push({//都去 router/index.js定义 方法2
// name:"路由名"
// })
//注意:
// 虽然用name跳转,但是url的hash值还是切换path路径值
// 场景:
// 方便修改:name路由名(在页面上看不见随便定义)
// path可以在url的hash值看到(尽量符合组内规范)
export default {
  methods: {
    btn(targetPath, targetName) {
      this.$router.push({
        // path: targetPath,// 方式1:path跳转 路由路径跳转
        name: targetName, //方式2:name跳转 路由名跳转
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