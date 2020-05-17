//导入{}中定义的变量
import { flag, sum } from "./aaa.js";
if (flag) {
    console.log("小民是天才")
    console.log(sum(20, 30))
}
//直接导入export定义的变量
import { num1, height } from "./aaa.js"
console.log(num1, height)
    //直接导入export的function
import { mul, Person } from "./aaa.js"
const p = new Person();
console.log(p.name)

//导入默认
import addr from "./aaa.js";
console.log(addr)
    //全部统一导入
import * as aaa from "./aaa.js"; //aaa就是自定义的对象名
console.log(aaa.flag);