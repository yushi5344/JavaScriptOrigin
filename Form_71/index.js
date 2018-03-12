window.onload=function () {

    /**
     *
     //三种获取表单的方式
     var form=document.getElementById('myForm');
     var forms=document.getElementsByTagName('form')[0];
     var formss=document.forms[0];
     console.log(form);
     console.log(forms);
     console.log(formss);
     //组织提交
     console.log(form.elements);
     console.log(form.length);
     console.log(form.elements.length)
     */


    //在html中input有value属性，textarea没有value属性
    //在js中 textarea有value值

    var fm=document.getElementById('myForm');
    // var content=document.getElementsByName('content');
    var user=fm.elements['content'];

    // user.focus();//焦点
    user.select();
    console.log(user.value);


}