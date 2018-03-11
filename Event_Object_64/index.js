window.onload=function () {
    // document.onclick=function (evt) {
    //     var e=evt;
    //     console.log(e);
    // }

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

    }
}
function box() {
    console.log(arguments,this);
}
