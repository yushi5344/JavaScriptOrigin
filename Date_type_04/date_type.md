# typeof返回数据类型
typeof操作符用来检测变量的数据类型，对于值或者变量使用typeof操作符会返回如下字符串

    字符串       描述
    undefined   未定义
    boolean     布尔值
    string      字符串
    number      数值
    object      对象或null
    function    函数

# Undefined类型

Undefined类型只有一个值，即特殊的undefined,在使用var声明变量，但没有对其初始化时，这个变量的值就是undefined。

# Null类型
Null类型是一个只有一个值的数据类型，即特殊的值null，它表示一个空对象引用，而typeof操作费检测null时会返回object。  
undefined是派生自null的，因为ECMA-262规定它们的相等性检测为true。

# Boolean类型
Boolean类型有两个值，True和False,而true不一定等于1，FALSE不一定等于0，JavaScript是区分大小写的，True或者False或者其他都不是Boolean类型的值。    
ECMAScript规定所有类型的值都有与这两个Bo olean值等价的值。     
以下是其他类型转换成Boolean类型检测   

	数据类型       转换为true  转换为false
	Boolean		  true        false
	String       任何非空字符   空字符串
	Number       任何非零字值   0和NaN
	Object       任何对象       null
    Undefined                 undefined
  