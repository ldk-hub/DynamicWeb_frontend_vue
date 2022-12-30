const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../src/main/resources/static/vue",  // vue를 빌드 한 경로지정
  indexPath: "../static/index.html",    // vue의 SPA를 보여줄 페이지 경로 지정
  devServer: {
    proxy: 'http://localhost:9091' // 백엔드 서버와 프록시를통해 데이터를 주고받음.
  }
})
