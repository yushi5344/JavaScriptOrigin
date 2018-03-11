window.onload=function () {
    /**
     *
     document.onmouseup=function (evt) {
        var e=evt;
        var key='';
        if(e.button==0){
            key='鼠标左键';
        }else if (e.button==1){
            key='鼠标中建';
        }else if (e.button==2){
            key='鼠标右建';
        }
        console.log(key);
    // document.onclick=function (evt) {
    //     var e=evt;
    //     console.log(e);
    // }
    }

     //键码  键盘上的任意键
     //字符编码:键盘上可以输出的字符的键

     //keydown和keyup使用keyCode
     document.onkeydown=function (evt) {
        alert(evt.keyCode);//a  65  A  65
    }

     document.onkeyup=function (evt) {
        console.log(evt.keyCode);
        }

     document.onkeypress=function (evt) {
        console.log(evt.charCode);
    }

     document.onclick=function (evt) {
       console.log(evt.target);//点击哪里，就可以得到哪里的DOM对象
    }
     */
    document.onclick=function () {
        alert('document');
    }
    document.documentElement.onclick=function () {
        alert('html');
    }
    document.body.onclick=function () {
        alert('body');
    }
    document.getElementById('box').onclick=function () {
        alert('div');
    }
    document.getElementsByTagName('input')[0].onclick=function (evt) {
        alert('input');
        evt.stopPropagation();//取消冒泡
    }

}
function box() {
    console.log(arguments,this);
}
