window.onload=function () {
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
}