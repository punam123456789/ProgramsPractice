


// var n = 7; 
// var sum = 0;

// for (var i = 1; i <= n; i++) {
// if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
// 	sum =sum + i;
// }
// }


// console.log("sum of n numbers for divisible by 3,5 or 7 is- " , sum);


// ***********************************************************************************************
// function getMaxLength(arr, n) {

// 	var count = 0;

	
// 	var result = 0;

// 	for (var i = 0; i < n; i++) {

// 		if (arr[i] == 0)
// 			count = 0;

		
// 		else {
			
// 			count++;
// 			result = Math.max(result, count);
// 		}                                                                                                                                                                                                                                                                                                                                                   
// 	}

// 	return result;
// }


// var arr = new Array(1, 1, 0, 0, 1, 1);
// var n = arr.length;
// console.log(getMaxLength(arr, n));


// *******************************************************************************************
// var trunc=(s,k)=>{
// 	var count = 0;
// 	for(var i=0;i<s.length;i++){
// 		if(s[i]===' ') 
// 		{
// 			count++;
// 		}
// 		if(count === k){
// 			s=s.slice(0,i)
// 		}
// 	}
// 	return s;

// }
// console.log(trunc('hello how are you all',4));

//*************************************************************************
// var array =[66,3,55,9,8];
// var minvalue = array[0]; 
// for (var i = 0; i < array.length; i++) {
//     if(array[i]<minvalue)
//     {
//         minvalue = array[i];
//     }

// }
//   console.log(minvalue);


// *******************************************************************************
// var arr=[111,2,3,6,4,5,999]
// var maxvalue=arr[0];
// // function maxarrlen(arr){
//     for(i=0; i<arr.length; i++){
//         if(arr[i]>maxvalue){
//             maxvalue = arr[i]
//         } 
//    }
// //    console.log(maxvalue); 


// // maxarrlen(arr);
// console.log(maxvalue);

// var array=[1,2,3,4,5,6,7,8,9,10]
// var givannum = 5;
// var newarray = []
// function findnums(array){
//     for(var i=0; i<array.length; i++){
//         if(array[i]>givannum){
//             newarray.push(array[i])
//         }
//     }
//     return (newarray)
// }
// console.log(findnums(array));

// var arr1=[1,2,3,4,5,6,7,8,9,10,15]
// var arr2=[2,4,6,8,10,12,13,14,15]
// var newarray=[]
// function commonelements(arr1,arr2){
//     for(var i=0; i<arr1.length; i++){
//         for(var j=0; j<arr2.length; j++){
//             if(arr1[i]==arr2[j]){
//                 newarray.push(arr1[i])
//             }
//         }

//     }
//     console.log(newarray);
// }
// commonelements(arr1,arr2)


// var array1=[100,200,300,400,500,600]
// var array2=[300,400,500,700]
// var newar=[]
// function findsimilar(array1, array2){
//     for(i=0; i<array1.length; i++){
//         if(array2.includes(array1[i])){
//             newar.push(array1[i])
//         }
//     }
//     return newar;
// }
// console.log(findsimilar(array1,array2));


// var arr=[1,2,3,4,5];
// var newArray = [];
// function fun(arr) {
//     for(var i=arr.length-1; i>=0; i--){
//         newArray.push(arr[i])
//     }
//     console.log(newArray);
// }
// fun(arr);



// var array=[34,54,65,23,5,676,32,34]
// var target=66;
// var flag=false;
// for(i=0; i<array.length; i++){
//     for(j=i+1; j<array.length; j++){
//         if(array[i] + array[j] == target){
//             flag=true
//             console.log(array[i],array[j]);
//         }
//     }
// }
// if(!flag){
//     console.log("not found");
// }


var array=[34,45,65,23,10,67,34,39];
var target=67;
var flag=false;
for(var i=0;i<array.length;i++){
    if(array[i]==target){
        flag=true;
    }
  
}
if(flag==true){
    console.log("found");
}
else{
    console.log("not fount");
}
