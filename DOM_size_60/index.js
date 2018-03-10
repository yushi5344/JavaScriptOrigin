window.onload=function () {
    var box=document.getElementById('box');
    console.log(box.style.height);
    console.log(box.style.width);
    var style=window.getComputedStyle;
    console.log(style);
    console.log(box.clientHeight);
    console.log(box.clientWidth);
    console.log(box.clientLeft);
    console.log(box.clientTop);



}