// Task1=================================
// function num(arr,new_arr,result) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>16) {
//         new_arr.push(arr[i])
//         result.push(arr[i]+4)
//        }
//     }

//      console.log(new_arr);
//      console.log(result);

// }
// num([20,40,16,18],[],[])

// Task2=================================

// let game = prompt('Enter rock or paper or scissors')

// function games() {
//     let choose = Math.floor((Math.random() * 3) + 1)
//     let rock = 1
//     let paper = 2
//     let scissors = 3


//     if ((game == 'rock' && choose == rock) || (game == 'paper' && choose == paper) || (game == 'scissors' && choose == scissors)) {
//         console.log(`your choose:${game}\n his choose:${game}\n final:Draw`);
//     } else if ((game == 'rock' && choose == scissors)) {
//         console.log(`your choose:${game}\n his choose:scissors\n final:u are a winner`);

//     } else if ((game == 'scissors' && choose == paper)) {
//         console.log(`your choose:${game}\n his choose:paper\n final:u are a winner`);

//     } else if ((game == 'paper' && choose == rock)) {
//         console.log(`your choose:${game}\n his choose:rock\n final:u are a winner`);


//     } else if ((game == 'scissors' && choose == rock)) {
//         console.log(`your choose:${game}\n his choose:rock\n final:u are a loser`);

//     } else if ((game == 'paper' && choose == scissors)) {
//         console.log(`your choose:${game}\n his choose:scissors\n final:u are a loser`);

//     } else if ((game == 'rock' && choose == paper)) {
//         console.log(`your choose:${game}\n his choose:paper\n final:u are a loser`);

//     }


// }
// games(game)
