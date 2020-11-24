let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*你好，我叫浙江彭于晏
*接下来我要展示我的前端功底
*首先我要准备一个div
*/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/*接下来我把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
*/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦是阴阳形成的
*一黑一白,背景渐变：css gradient background generator
*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个小圆圈,伪元素，伪元素里面不能有伪元素*/
#div1::before{
  width:100px;
  height:100px;
  transform:translateX(50%);
  top:0px;
  background:#000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  transform:translateX(50%);
  bottom:0px;
  background:#fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

let string2 = "";
console.log(string.length);
let n = 0;
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      //如果是回车，就不要照搬
      string2 += "<br>"; //变成回车
    } else if (string[n] === " ") {
      string2 += "&nbsp;"; //变成空格
    } else {
      //如果不是回车
      string2 += string[n];
    } //简化
    //string2 += string[n] === "\n"? "<br>":string[n];
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 10000);
    html.scrollTo(0, 10000);
    console.log(string2);
    if (n < string.length - 1) {
      n += 1;
      //不是最后一个
      step();
    } else {
      //n是最后一个
    }
  }, 50);
};

step();
