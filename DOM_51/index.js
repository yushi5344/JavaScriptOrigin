window.onload=function () {
/**
 * 节点分为三类
 * 1.元素节点
 * 2.文本节点
 * 3.属性节点
 * 查找元素
 *DOM 操作必须等html文档加载完毕才能获取
 * 怎样获取
 * 1.把js文件放在html后面执行
 * 2.onload事件
 * var box=document.getElementById('box');
 // alert(box);
 // alert(box.innerHTML);//box内容
 // alert(box.tagName);//DIV
 // alert(box.id);
 // alert(box.title);
 // alert(box.style);
 // alert(box.className);

 var box=document.getElementById('box');
 // alert(box.innerHTML);
 box.innerHTML='<strong>婉转HTML</strong>';
 var li=document.getElementsByTagName('li');
 // alert(li[0]);//[object HTMLLIElement]
 console.log(li[0].innerHTML);
 //获取body标签
 var body=document.getElementsByTagName('body');
 console.log(body.length);
 var all=document.getElementsByTagName('*');
 console.log(all.length);
 var test=document.getElementsByName('test');
 console.log(test);
 console.log(box.getAttribute('name'));
 console.log(box.getAttribute('class'));
 console.log(box.getAttribute('onclick'));
 box.setAttribute('align','center');
 box.setAttribute('aaa','bbb');

 */

    var box=document.getElementById('box');
    console.log(box.nodeType);//1
    console.log(box.nodeName);//DIV
    console.log(box.nodeValue);//null
    console.log(box.childNodes);
    console.log(box.childNodes[0].nodeType)//3  文本节点


    var pox=document.getElementById('pox');
    // pox.innerHTML='<strong>Pox<strong/>';
    // pox.nodeValue='测试';//没出错，但是没有赋值上，nodevalue必须在当前节点上操作
    pox.childNodes[0].nodeValue='测试';
}
function test() {
    alert(1);
}