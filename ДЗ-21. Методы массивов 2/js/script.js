// let arr = ['a', 'b', 'c', 'd'];
// let result = arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3];
// console.log(result);


//task 2
// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + ', ' + arr[2] * arr [3];
// console.log(result);


//task 3
// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// console.log(arr[1][0]);


//task 4
// let obj = {
//     js:['jQuery', 'Angular'],
//     php:'hello',
//     css:'world'
// }
// console.log(obj.js[0]);


//task 5
// let arr = [];
// let sym = 'x';
// for (i=0; i <= 10; i++) {
//     arr.push(sym);
//     sym += 'x'
// }
// console.log(arr)


//task 6
// let arr = [];
// let sym = '';
// for (i=0; i < 8; i++) {
//     for (j = 0; j < i; j++) {        
//         sym += i
//     }
//     arr.push(sym);
// }
// console.log(arr);


//task 7
// let arr = [];
// function arrayFill (symbol, value) {
//     for (let i = 0; i < value; i++) {
// 		arr.push(symbol);
// 	}
//     return arr    
// }
// console.log(arrayFill ('x', 5));


//task 8

// let arr = [1, 2, 3, 4, 5]
// function arraySum(array){
// let sum = 0;
// for(let i = 0; i < array.length; i++){
//     sum += array[i];
//     if (sum === 10) {
//         alert ('Для суммы в 10 нужно ' + (i+1) + ' цифр')
//         break
//         }
//     }
//     console.log(sum);    
// }
// arraySum(arr);


//task 9

// let arr = [1, 2, 3, 4, 5]
// arr.sort(function (a,b){
//     return b - a
// }
// )
// console.log(arr); 


//task 10
// let arr = [[1, 2, 3], [4, 5], [6]]

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		sum += arr[i][j];
// 	}
// }
// console.log(sum);


//task 11

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let g = 0; g < arr[i][j].length; g++) {
            sum += arr[i][j][g];
        }
    }
}

console.log(sum);