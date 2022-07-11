// // 1
// for(let i = 1; i<=50;i++){
//     console.log(i);
// }
// console.log('------')
// for(let i = 35; i>=8;i--){
//     console.log(i)
// }

// // 2
// let i = 89;
// while (i >= 11) {
// document.write(`${i} </br>`)
//     i--;
// }

// // 3
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// // 4
// let str = '12345';
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j <= +str[i]; j++) {
//         sum += j;
//     }
//     console.log(sum);
//     sum = 0;
// }

// // 5
// for (let i = 8; i <= 56; i += 2) {
//     console.log(i);
// }

// let i = 8;
// while (i <= 56) {
//     console.log(i);
//     i += 2;
// }

// // 6
// let pr = 0;
// for (let i = 1; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         pr = i * j;
//         console.log(`${i} * ${j} == ${pr}`);
//         pr = 0;
//     }
//     console.log('----------');
// }

// // 7
// let num = 0,
//     n = 1000;
// while (n >= 50) {
//     n /= 2;
//     console.log(n);
//     num++;
// }
// console.log(`Количество итераций = ${num}`);

// // 8
// let n = 0, sum = 0;
// let ch = prompt( "Введите число");

// while ((ch != 0) && (ch != '')) {
// n = n + 1;
// sum = sum + +ch;
// ch = prompt( "Введите ещё число" );
// }

// console.log( "Чисел введено: " + n ); 
// console.log( "Сумма чисел: " + sum );
// console.log( "Среднее арифметическое: " + (sum/n) );

// // 9
// let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
//     min = 100000,
//     max = 0;
// let arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
//     if (+arr[i] > max) {
//         max = +arr[i];
//     }
//     else if (+arr[i] < min) {
//         min = +arr[i];
//     }
// }
// console.log(`Min = ${min}, Max = ${max}`);

// // 10
// let number = prompt("Введите число"),
//     sum = 0,
//     n = 0,
//     reverse = '';
// console.log(`Число = ${+number}`);
// for (let i = 0; i < number.length; i++) {
//     console.log(+number[i]);
//     sum += +number[i];
//     n++;
// }
// console.log(`Количество цифр в числе = ${n}`);
// console.log(`Summa = ${sum}`);
// reverse = number.split('').reverse().join('');
// console.log(`Перевернутое число = ${reverse}`);