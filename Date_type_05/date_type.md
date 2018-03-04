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
  
  
  #Number类型
  Number类型包含两种数值，整形和浮点型。   
  由于保存浮点数值需要内存空间比整形数值大两倍，因此ECMAScript会自动将可以转换为整型的浮点数值转换成整型。   
  浮点数范围    
  
  
  	最大值   Number.MAX_VALUE
  	最小值   Number.MIN_VALUE
  	正无穷   Number.POSITIVE_INFINITY
  	负无穷   Number.NEGATIVE_INFINITY
  
  判断一个数值是否超过了规定范围
  
  	isFinite()
  
  ## NaN
  
  NaN即非数值，是一个特殊的值，这个数值用来表示本来要返回一个数值的操作未返回数值的情况。      
  可以通过Number.NaN得到，任何与NaN进行计算的结果必定是NaN。      
  
  判断一个数值是否是NaN
  
  	isNaN()
  
  处理整数时使用的函数   
  
  	parseInt()
  
  ECMAScript为parseInt()提供了第二个参数。用来解决各种进制的转换。