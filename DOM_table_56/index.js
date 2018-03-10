window.onload=function () {

    /**
     *
     //使用dom创建一个表格
     var table=document.createElement('table');
     table.border=1;
     table.setAttribute('width',300);

     var caption=document.createElement('caption');
     table.appendChild(caption);
     var captionText=document.createTextNode('人员表');
     caption.appendChild(captionText);

     var thead=document.createElement('thead');
     table.appendChild(thead);

     var tr=document.createElement('tr');
     thead.appendChild(tr);

     var th=document.createElement('th');
     tr.appendChild(th);
     th.appendChild(document.createTextNode('数据1'));

     document.body.appendChild(table);


     //使用DOM获取表格数据
     var table=document.getElementsByTagName('table')[0];
     console.log(table.children[2].children[1].children[1].innerHTML);
     */

    var table=document.getElementsByTagName('table')[0];
    console.log(table.caption.innerHTML);
    console.log(table.tHead);
    console.log(table.tBodies[0]);
    console.log(table.rows.length);
    console.log(table.tBodies[0].rows[0]);
    console.log(table.tBodies[0].rows[1].cells[1].innerHTML);
    table.deleteCaption();
    table.tBodies[0].deleteRow(1);
    table.




}