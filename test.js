


// var n = 7; 
// var sum = 0;

// for (var i = 1; i <= n; i++) {
// if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
// 	sum =sum + i;
// }
// }


// console.log("sum of n numbers for divisible by 3,5 or 7 is- " , sum);



function getMaxLength(arr, n) {

	var count = 0;

	
	var result = 0;

	for (var i = 0; i < n; i++) {

		if (arr[i] == 0)
			count = 0;

		
		else {
			
			count++;
			result = Math.max(result, count);
		}
	}

	return result;
}


var arr = new Array(1, 1, 0, 0,
	 1, 1);
var n = arr.length;
console.log(getMaxLength(arr, n));



