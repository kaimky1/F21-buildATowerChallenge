// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.

const build = (num) => {
    let tower = [];
    let star = '*';
    for(i = 0 ; i < num; i++){
        tower.push(star);
        star += '*' + '*' ;
      for(j = 0; j < i; j++){
          tower[j] = ' ' + tower[j] + ' ';
      }
   }
    return tower;
}

// console.log(build(4));
// build(4);
// build(5);

// const myArr = ['abc', 'def','ghi'];
// const r = myArr.map((elem, i) => elem.split('').map((_, a) => myArr[a][i]).join(' ')).join('\n');
// console.log(r);


// const tower = (num) => {
//     for(var i = 1; i <= num; i++){
//         var str = ''
//     for (var j = 1; j <= (num * 2 - 1); j++) {
//         if (j >= num + 1 - i && j <= num - 1 + i) {
//             str += '*'
//     }
//      else {
//         str += ' ' 
//     }
// } 
// console.log(str)
//     }
// }
// tower(3)
