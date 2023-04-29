// program to display the sum of natural numbers

// take input from the user
const prompt = require("prompt-sync")({sigint:true})
// const number = parseInt(prompt('Enter a 10 integer numbers: '));

// let sum = 0;
// var arr=[10];
// var sum=0; 
// object={};
// var ele = parseInt(prompt('Enter a 10 integer numbers: '));

// looping from i = 1 to number
// in each iteration, i is increased by 1
// for (var i = 0; i <=arr.length; i++) {
//     console.log(arr[i]);
//     object[i]=arr[i];
//     sum += arr[i];
// }

// console.log('The sum of numbers:', sum);

// int i,arr[10],sum=0; 
 
// printf("Enter 10 elements:"); 
// for(i=0;i<10;++i) 
//     scanf("%d",&arr[i]); 

// for(i=0;i<10;++i) 
//     sum=sum+arr[i]; 
// printf("Sum of numbers is:%d",sum); 





var sum=0;
var array=[1,3,4];
// var array = parseInt(prompt('Enter a 10 integer numbers: '));
for(var i=0;i<array.length;i++){
    sum=sum+array[i];
}
console.log('The sum of numbers:', sum);

