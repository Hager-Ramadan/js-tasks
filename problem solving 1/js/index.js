//1 ==================================================

// var x=prompt('Enter Number')
// console .log(x)

//2 ==================================================

// var x=+prompt('Enter Number')
// if (x % 3===0 && x % 4===0){
//    console .log('Yes')  
// }
// else{
//     console.log('No');}

//3 ==================================================

// var x=+prompt('Enter Number1')
// var y=+prompt('Enter Number2')
// if (y>x){
//     console .log(y)
// }
// else if (x>y) {
//     console .log(x)   
// }

//4 ==================================================

// var x=+prompt('Enter Number')
// if (x<0){
//      console .log('Number is Negative')
//     }
// else if (x>0){
//           console .log('Number is Possitive') }

//5 ==================================================

// var x=+prompt('Enter Number1')
// var y=+prompt('Enter Number2')
// var z=+prompt('Enter Number3')

// if (x>y && x>z) {
//     console .log('Max Number:'+ x);
    
// }
// else if (y>x && y>z){
//     console.log('Max Number:'+ y);
// }
// else {
//     console.log('Max Number:'+ z);
// }
// if (x<y && x<z) {
//     console .log('Min Number:'+ x);
    
// }
// else if (y<x && y<z){
//     console.log('Min Number:'+ y);
// }
// else {
//     console.log('Min Number:'+ z);
// }

//6 ==================================================

// var x=+prompt('Enter Number')

// if (x % 2==0) {
//     console.log('even');
    
// }
// else if (x % 2==1) {
//      console.log('odd');
//     }

//7 ==================================================

// var x=prompt('Enter character')

// if (x==='a' || x==='e' ||x==='o' || x==='i'|| x==='u') {
//     console.log('vowel');
    
// }
// else{
//     console.log('Consonant');
// }

//8 ==================================================

// var x=+prompt('Enter Number')
// for(var i=1 ; i<=x ; i+=1 ){
//     console.log(i);
// }

//9 ==================================================

// var x=+prompt('Enter Number')

// for (var i=1 ; i<=12 ; i+=1){
//   if (x*i) {
//     console.log(x*i);
    
//   }
// }

//10 ==================================================

// var x=+prompt('Enter Number')
// for (var i=1 ; i<=x ; i++){
//     if (i % 2===0) {
//         console.log(i); 
//     }
// }


//11 ==================================================

// var x=+prompt('Enter Number1')
// var y=+prompt('Enter Number2')


// if (x**y) {
//     console.log(x**y);
    
// }

//12 ==================================================

// var a=+prompt('Enter Marks of one subject')
// var b=+prompt('two subject')
// var c=+prompt('three subject')
// var d=+prompt('four subject')
// var e=+prompt('five subject')
// var Total=a+b+c+d+e
// var average=Total/5
// var Percentage=(Total/500)*100

// if (Total) {
//     console.log('Total Marks='+ Total);
// }

// if (average) {
//     console.log('average Marks='+ average);
 
// }

// if (Percentage) {
//     console.log('Percentage='+ Percentage);
   
// }


//13 ==================================================

// var a=+prompt('Enter Number of Month')
// console.log('Number of Month:'+ a);

// if (a==1 || a==3 || a==5 || a==7 || a==9 || a==11 || a==12) {
//     console.log('Days in Month:'+ 31);
    
// }
// else if (a==4 || a==6 || a==8|| a==10) {
//     console.log('Days in Month:'+ 30);
    
// }
// else if (a==2) {
//     console.log('Days in Month:'+ 28);
    
// }

//14 ==================================================

// var a=+prompt('Enter Marks of Physics')
// var b=+prompt('Marks of Chemistry')
// var c=+prompt('Marks of Biology')
// var d=+prompt('Marks of Mathematics')
// var e=+prompt('Marks of Computer')
// var Percentage = ((a+b+c+d+e)/300)*100

// if (Percentage >=90 ) {
//    console.log('Percentage='+ Percentage+'%'+ ':Grad A');
// }
// else if (Percentage >=80 ) {
//    console.log('Percentage='+ Percentage+'%'+ ':Grad B');
// }
// else if (Percentage >=70 ) {
//    console.log('Percentage='+ Percentage+'%'+ ':Grad C');
// }
// else if (Percentage >=60 ) {
//    console.log('Percentage='+ Percentage+'%'+ ':Grad D');
// }
// else if (Percentage >=50 ) {
//    console.log('Percentage='+ Percentage+'%'+ ':Grad E');
// }
// else if (Percentage <50 ) {
//    console.log('Percentage='+ Percentage+'%'+ ':Grad F');
// }

//15 ==================================================


// var a=+prompt('Enter Number of Month')
// switch (a) {
//       case 1:console.log('Days in Month:'+ 31);
//         break
//      case 3:console.log('Days in Month:'+ 31);
//         break
//          case 5:console.log('Days in Month:'+ 31);
//         break
//          case 7:console.log('Days in Month:'+ 31);
//         break
//          case 9:console.log('Days in Month:'+ 31);
//         break
//          case 11:console.log('Days in Month:'+ 31);
//         break
//          case 12:console.log('Days in Month:'+ 31);
//         break
//          case 4:console.log('Days in Month:'+ 30);
//         break
//          case 6:console.log('Days in Month:'+ 30);
//         break
//          case 8:console.log('Days in Month:'+ 30);
//         break
//          case 10:console.log('Days in Month:'+ 30);
//         break

//         case 2: console.log('Days in Month:'+ 28);
// break
// default: console.log('this is invalid');

    
// }

//16 ==================================================

// var x=prompt('Enter character')

// switch (x) {
//     case 'a':console.log('vowel');
        
//         break;
//     case 'e':console.log('vowel');
        
//         break;
//     case 'o':console.log('vowel');
        
//         break;
//     case 'i':console.log('vowel');
        
//         break;
//     case 'u':console.log('vowel');
        
//         break;

//     default: console.log('Consonant')
//         break;
// }

//17 ==================================================

//  var x=+prompt('Enter Number1')
//  var y=+prompt('Enter Number2')

//  switch (x)  {
//     case x:
//         if (x>y) {
//             console.log( 'max number:'+x);
            
//         }
//         break
 
//  }

//  switch (y) {
//     case (y):
//         if (y>x) {
//             console.log('max number:'+y);
            
//         }
        
//         break;
 

 
// }

//18 ==================================================

// var x=+prompt('Enter Number')

// switch (x) {
//     case x: 
//     if (x%2==0) {
//         console.log('Even Number:'+x);
        
//     }
        
//         break

// }
//  switch (x) {
//     case x:
//         if (x%2==1) {
//          console.log('odd Number:'+x);
//     }
        
//         break;

//  }

//19 ==================================================

// var x=+prompt('Enter Number')

// switch (x) {
//     case x:
//         if (x>0) {
//             console.log('Number is Positive:'+ x);
            
//         }
        
//         break;
// }
// switch (x) {
//     case x:
//         if (x<0) {
//             console.log('Number is Negative:'+ x);
            
//         }
        
//         break;
// }
// switch (x) {
//     case x:
//         if (x==0) {
//             console.log('Number is Zero');
            
//         }
        
//         break;
// }

//20 ==================================================

//   var x=+prompt('Enter Number1')
//   var y=prompt('Enter operator')
//   var z=+prompt('Enter Number2')

//   switch (y) {
//     case '+': console.log(x+z);
        
//         break;
//     case '-': console.log(x-z);
        
//         break;
//     case '*': console.log(x*z);
        
//         break;
//     case '/':
//         if (z==0) {
//             console.log('can not solve');
            
//         }
//          console.log(x/z);
        
//         break;
//        case '**':
//         console.log(x**z);
//   }

