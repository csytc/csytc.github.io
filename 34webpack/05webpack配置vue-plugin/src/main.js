import { add, mul } from "./JS/mathUtils.js";
console.log(add(10, 20));
console.log(mul(10, 20));

//依赖css文件
require("./css/normal.css");
//依赖less文件
require("./css/special.less");
//使用vue进行开发
import Vue from "vue";
import App from "./vue/App.vue"
new Vue({
    el: "#app",
    template: "<App/>", //template会替换掉#app里面的模板,使用的是名字为APP的组件
    components: {
        App
    }
})

document.write("<button>按钮2</button>");
document.write("<h1>csy</h1>")