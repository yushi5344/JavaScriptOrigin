window.onload=function () {
    var box=document.getElementById('box');
    //box.onclick=toBlue;
}
// function toBlue() {
//     this.className='toBlue';
// }
// function toRed() {
//     this.className='toRed';
// }
// function addEvent(obj,type,fn) {
//
// }
//W3C自带的两个添加事件和删除事件
window.addEventListener('load',function () {
    alert('Lee');
},false);
//W3C可以设置冒泡和捕获
