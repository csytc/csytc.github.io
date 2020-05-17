const path = require("path"); //依赖node来获取路径需要初始化 npm init生成package.json


/*局部安装webpack：
npm install webpack@3.6.0 --save-dev  
--save-dev 是开发时依赖，项目打包后不需要继续使用的
*/


//将入口文件和出口文件进行配置
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"), //resolve是将路径进行拼接
        filename: "bundle.js"
    }
}