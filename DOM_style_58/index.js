window.onload=function () {
    var box=document.getElementById('box');
    var i=0;
    box.onclick=function () {
        box.className= i%2==1 ? 'aaa' : 'bbb';
        i++;
        console.log(i);
    }


}