window.onload=function () {
    var box=document.getElementById('box');
    var i=0;
    box.onclick=function () {
        box.className= i%2==1 ? 'aaa' : 'bbb';
        i++;
        console.log(i);
    }

    // var sheet=document.getElementsByTagName('link')[0];
    var sheet=document.styleSheets[0];
    // console.log(sheet);
    // console.log(sheet.addRule());
    var cssRule=sheet.cssRules;
    console.log(cssRule[0]);
    console.log(cssRule[0].cssText)
    console.log(sheet.href);
    sheet.deleteRule(0);
    console.log(cssRule);
}