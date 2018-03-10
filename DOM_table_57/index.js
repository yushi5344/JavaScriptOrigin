window.onload=function () {

    /**
     console.log(document.implementation.hasFeature('CSS','2.0'));//是否支持css2.0  true
     console.log(document.implementation.hasFeature('CSS','3.0'));//是否支持css3.0   true



     */

    var box=document.getElementById('box');
    console.log(box.style);
    console.log(box.style.color);
    console.log(box.style.backgroundColor);

    box.style.width='70px';
    box.style.height='100px';
    box.style.float='right';


    var style=window.getComputedStyle(box,null);
    console.log(style);
    console.log(style.borderBottom);
    console.log(style.fontSize);


}