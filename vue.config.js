const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:9999",
        changeOrigin: true,
        pathRewrite: {
          "^/api/v1": "",
        },
      },
    },
  },
});
