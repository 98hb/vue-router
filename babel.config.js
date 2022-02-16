module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //添加自动按需导入配置(方式1)
  "plugins": [
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }, 'vant'
    ]
  ]
}
