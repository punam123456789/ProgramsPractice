var string = "hello";
var strLen = string.length;
var revStr = '';
for(var i = strLen-1;i>=0;i--)
{
    revStr = revStr+string[i] ;

}
console.log("reverse string is " +revStr);