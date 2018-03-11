window.onload = function () {
    var input = document.getElementsByTagName('input')[0];
    var inputs = document.getElementsByTagName('input')[1];
    input.onclick = function () {
        box();
    };
    input.onmouseover=function () {
        alert('移动到上面执行');
    }
    input.onmouseout=function () {
        alert('鼠标离开时执行');
    }
    onkeydown=function () {
        alert('鼠标按下任意键');
    }
    onunload=function () {
        alert('卸载页面时执行');
    }
    inputs.onfocus=function () {
        console.log('获取焦点');
    }
}

function box() {
    alert('Lee');
}