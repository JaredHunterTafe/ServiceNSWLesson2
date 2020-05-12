// for (let i = 0; i < 5; i ++){
// console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     if (i == 3) {
//       continue;
//     }
//     console.log(i);
//   }

let i = 3
while (true) {
  if (i == 7) {
    continue;
    i++;
  } else if (i == 9) {
    break;  
  }
  console.log(i);
  i++;
}
