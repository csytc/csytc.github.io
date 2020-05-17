let name = "小民"
let age = 18;
let flag = true;

function sum(sum1, sum2) {
    return sum1 + sum2;
}
if (flag) {
    console.log(sum(20, 30))
}
//1.导出方式一
export {
    flag,
    sum

}
//2.导出方式2
export var num1 = 1000;
export var height = 1.88

//导出函数/类
export function mul(num1, num2) {
    return num1 * num2
}
export class Person {
    name = "csy"
    run() {

    }
}
/*export default
某些情况下，一个模块中包含某个功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名 
default 只能导出一个*/
const address = "北京市";
export default address