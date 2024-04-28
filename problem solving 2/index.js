// answer sheet 1

// 1 ========================================

// let text=prompt('Enter name')

// function name(text) {
// let text= text.split('').reverse().join('')
// console.log(text);}
// name(text)


// 2==========================================

// var text1=prompt('Enter text')
// var text2=prompt('Enter text')

// function equal() {
//     text3=text1.toLowerCase()
//     text4=text2.toLowerCase()

// if (text3==text4) {
//     console.log(true);

// }
// else{
//     console.log(false);
// }
// }
// equal(text1,text2)

// 3==========================================


// var text1=prompt('Enter text')

// function uppercase() {
// let text2= text1.toUpperCase()
// let text3= text1.toLowerCase()

// if (text1==text2) {
//     console.log(true);


// }
// else if (text1==text3) {
//         console.log(false);
//     }


// }
// uppercase(text1)


// 4==========================================
// (first solution)


// let text=prompt('Enter text')
// let position1=prompt('Enter num')
// let position2=prompt('Enter num')


// function name() {
//     let text1=text.slice(position1, position2)
//     console.log(text1);

// }
// name(text,position1,position2)


// (second solution)


// let text=prompt('Enter text')
// let position1=prompt('Enter num')
// let position2=prompt('Enter num')


// function name() {
//     let text1=text.substring(position1, position2)
//     console.log(text1);

// }
// name(text,position1,position2)

// 5==========================================

// let first_name=prompt('Enter your first name:')
// let mid_name=prompt('Enter your second name:')
// let third_name=prompt('Enter your third name:')

// function names() {
//     let all=[first_name ,mid_name ,third_name].join(' ')
//     console.log(all);

// }
// names(first_name,mid_name,third_name)

// 6==========================================

// let text=prompt('Enter name')

// function name() {
// let text1= text.split('').reverse().join('')
// if (text1==text) {
//     console.log(true);

// }
// else{
//     console.log(false);
// }

// }
// name(text)


// 7==========================================

// let text=prompt('Enter text')

// function str() {

//     let text1=text.trim()
//     console.log(text1);

// }
// str(text)

// 8==========================================


// let text=prompt('Enter address')

// function url() {

//     let text1=text.startsWith('ww.')
//     let text2=text.endsWith('.eraa')
//     let text3=(text1&&text2 )
// console.log(text3);


// }

// url(text)

// 9==========================================

// let text=prompt('Enter text')

// function name() {

//     let text1=text.replaceAll('o','').replaceAll('O','')
//     console.log(text1);

// }
// name(text)

// 10==========================================

// let first=prompt('Enter text')
// let second=prompt('Enter text')
// let third=prompt('Enter text')

// function text() {
//     let text1=first.includes(second && third)
// console.log(text1);


// }
// text(first,second,third)


// answer sheet 2

// 1==========================================
// let num1=prompt('Enter text')
// let num2=prompt('Enter text')

// function name() {
//     let num3=num1.includes(15)
//     let num4=num2.includes(15)
//     let sum=((+num1)+(+num2)).toString().includes(15)
//      console.log(num3||num4||sum);

// }
// name(num1,num2)

// 2==========================================

// let num1=+prompt('Enter text')

// function name() {

//    let num= Math.sqrt(num1)

//     if (num1==num*num) {
//         console.log(true);

//     }
//     else{
//         console.log(false);
//     }

// }
// name(num1)

// 3==========================================

// let num1=prompt('Enter number')
// let num2=prompt('Enter number')
// let num3=prompt('Enter number')
// let num4=prompt('Enter number')
// let num5=prompt('Enter number')
// function name() {


// let num=[num1,num2,num3,num4,num5]
// let index=num.indexOf('0')+1

// console.log(index);

//     }

// name(num1,num2,num3,num4,num5)


// 4==========================================

//    let x=prompt('Enter Letter')
// function Letter() {
//     let a=x.toLowerCase()
//     let b=x.toUpperCase()

//     if (a==x) {
//         console.log(b);

//     }
//     else if (b==x) {
//          console.log(a);
//     }

// }
// Letter(x)


// 5==========================================

// let first=+prompt('Enter num')
// let second=+prompt('Enter num')
// function name() {
// let sum =0

// for (let i =first; i < second; i++) {

//     if(i%2 === 1)
// sum=i+sum


// }

// console.log(sum);
// }
// name(first,second)

// 6==========================================

// let num = + prompt('Enter num')
// let nums = []

// function luckyday() {

//     for (let i = 1; i <= num; i++) {

//         nums.push(prompt('Enter num'))
//     }

//     if (nums.includes('4') || nums.includes('7')) {

//         console.log('It’s your lucky day');
//     } else {
//         console.log('It’s not your lucky day');
//     }


// }
// luckyday(num, nums)

// 7==========================================
// let num=+prompt('Enter num')

// function name() {

//     for (let  i= 1;  i<=num; i++) {
//         if (num%i==0) {
//             console.log(i);

//         }


//     }
// }
// name(num)

// 8==========================================
// let n =+prompt("enter a random number")

// function getPrimes(n) {
//     for (let i = 0; i <= n ; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }
// function isPrime(n) {
//     if (n<2) {
//         return false
//     }

//     for (let i = 2; i < n; i++){
//         if (n % i==0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(getPrimes(n));
// 9==========================================

// let first=+prompt('Enter num')
// function name() {
//     let sum=0
//     let even=0
//     let odd=0
//     for (let i = 1; i <=first; i++) {
//         let a=+prompt('Enter num')
//         sum=a+sum

// if (a%2==0) {

// even++

// }
//          if (a%2==1) {

//             odd++
//         }

//     }

//     console.log('sum:'+sum);
//     console.log('even:'+even);
//     console.log('odd:'+odd)
// }

// name(first)

// 10==========================================
// let x = +prompt("Enter a number ");
// let arr = [];
// function PUM(x) {
//     for (let i = 1; i <= x * 4; i++) {
//         if (i % 4 == 0) {
//             arr.push("PUM\n");
//         } else {
//             arr.push(i + " ");
//         }
//     }
//     return arr.join("");
// }
// console.log(PUM(x));
// 11==========================================

// let num1=+prompt('Enter num')
// let num2=+prompt('Enter num')


// function determine() {
//     let deter=num1*num2

// if (deter<0) {
//         console.log('Negative');

//     }
//     else if (deter>0) {
//         console.log('Positive');

//     }
//     else if (deter==0) {
//         console.log('zero');
//     }


// }
// determine(num1,num2)

// 12==========================================

// let grade=+prompt('Enter a grade for the exam:')
// let projects=+prompt('Enter number of completed projects:')

// function finalGrade(){


// if (grade<=100) {


//     if (grade>=90 && projects>=10) {
//         console.log(100);

//     }
//     else if (grade>=75 && projects>=5 && grade<90) {
//         console.log(90);


//     }
//     else if (grade>=50 && projects>=2 && grade<75) {
//         console.log(75);


//     }
//     else if (grade<50 && projects<2) {
//         console.log(0);


//     }

// }

// }
// finalGrade(grade,projects)

// answer sheet 3

// 1==========================================

// let num=prompt('Enter a Number')

// function LeftNum() {

//     let left=num.split('').shift(1)

//     console.log(left);


// }LeftNum()

// 2==========================================


// function type(num) {

//     let positive=0
//     let negative=0
//     let even=0
//     let odd=0


//     for (let i = 0; i <= num.length; i++) {


//     if (num[i]>0) {

//         positive++

//     }
//     if(num[i]<0) {

//         negative++


//     }

//     if (num[i]%2==0) {

//         even++


//     }
//     if (num[i]%2!==0 && i!==0) {

//         odd++

//     }
//     }

//     console.log('positive:'+positive);
//     console.log('negative:'+negative);
//     console.log('even:'+even);
//     console.log('odd:'+odd);

// }
// type([5, 9, -2, 0, 4, -8, -13, -20])

// 3==========================================

// function integer(arr) {

//    let New_arr=arr.filter(n => n >=0|| n<=0 )

// console.log(New_arr);


// }
// integer([1, NaN, 2, 'a', 'aba'])

// 4==========================================
// function mySlice(str, start, end) {
//     if (end === undefined) {
//         end = str.length;
//     }

//     let newStr = '';
//     for (let i = start; i < end; i++) {
//         newStr += str[i];
//     }
//     console.log(newStr);

// }
// mySlice('hager', 1)

// 5==========================================

// function max(arrays) {
//      let New_arr=[Math.max(...arrays[0]),Math.max(...arrays[1]),Math.max(...arrays[2])]

// console.log(New_arr);

// }

// max([[1,2,3,4],[45,73,12],[13,13,10]])

// 6==========================================

// let str=prompt('Enter a word')
// function print() {
//     if (str.length<=10) {
//         console.log(str);

//     }
//     else{
//         let abbrev=str[0]+(str.length-2)+(str[str.length-1])
//         console.log(abbrev);
//     }

// }
// print(str)


// 7==========================================
// let str=prompt('Enter your word')

// function isGood() {
//     let char1, char2, cnt1 = 0, cnt2 = 0;
//     for (let i = 0; i < 4; i++) {
//         if (str[i] === char1)
//             cnt1++;
//         else if (str[i] === char2)
//             cnt2++;
//         else if (char1 == undefined) {
//             char1 = str[i];
//             cnt1++;
//         } else if (char2 == undefined) {
//             char2 = str[i];
//             cnt2++;
//         }
//     }

//     if (cnt1 === 2 && cnt2 === 2) {
//         return true
//     } else {
//         return false
//     }

// }

// console.log(isGood(str));

// 8==========================================
// function whoWinXO(xo) {
//     if (
//         (xo[0][0] === xo[0][1] && xo[0][1] === xo[0][2]) ||
//         (xo[0][0] === xo[1][0] && xo[1][0] === xo[2][0]) ||
//         (xo[0][0] === xo[1][1] && xo[1][1] === xo[2][2])
//     ) {
//         console.log(xo[0][0]);
//     } else if (
//         (xo[1][0] === xo[1][1] && xo[1][1] === xo[1][2]) ||
//         (xo[0][1] === xo[1][1] && xo[1][1] === xo[2][1]) ||
//         (xo[0][2] === xo[1][1] && xo[1][1] === xo[2][0])
//     ) {
//         console.log(xo[1][1]);
//     } else if (
//         (xo[2][0] === xo[2][1] && xo[2][1] === xo[2][2]) ||
//         (xo[0][2] === xo[1][2] && xo[1][2] === xo[2][2])
//     ) {
//         console.log(xo[2][2]);
//     }
// }

// whoWinXO([
//     ["X", "O", "X"],
//     ["O", "O", "O"],
//     ["X", "X", "O"],
// ]);
// 9==========================================

// function index(arr,character) {
//    let  first=arr.indexOf(character)
//    let  last=arr.lastIndexOf(character)
//     console.log([first,last]);


// }
// index(['h', 'e', 'l', 'l', 'o'],'l')
// 10==========================================
// function isThereIsSum(arr, n) {
//     for (let i = 0; i < arr.length; i++) {

//         let sum = 0;
//         for (let j = i; j < arr.length; j++) {
//             sum += arr[j];
//             if (sum === n) {
//                 return true;
//             }
//         }
//     }

//     return false;
// }

// let num = prompt('Please enter number of elements')
// let arr = [];
// for (let i = 0; i < num; i++) {
//     let x = prompt('Enter arr number');
//     arr.push(x);
// }

// let n = prompt('Enter number you want')
// console.log(arr, n);

// console.log(isThereIsSum([1, 2, 3, 4, 5], 2));
// console.log(isThereIsSum([1, 2, 3, 4, 5], 10));
