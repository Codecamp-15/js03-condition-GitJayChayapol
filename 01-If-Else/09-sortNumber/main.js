// let numa = +prompt("number1");
// let numb = +prompt("number2");
// let numc = +prompt("number3");

// if (numa > numb) {
//   if (numb > numc) alert(numa + "," + numb + "," + numc);
//   else if (numc > numb) {
//     if (numc > numa) alert(numc + "," + numa + "," + numb);
//   } else if (numa > numc) alert(numa + "," + numc + "," + numb);
// } else if (numb > numa) {
//   if (numa > numc) alert(numb + "," + numa + "," + numc);
//   else if (numc > numa) {
//     if (numc > numb) alert(numc + "," + numb + "," + numa);
//   } else alert(numc + "," + numb + "," + numa);
// }

// #############################################
let x = Number(prompt("Enter number 1"));
let y = +prompt("Enter number 2");
let z = +prompt("Enter number 3");

// // Case 1 : x มากสุุด
// // Case 2 : y มากสุุด
// // Case 3 : z มากสุุด

// if (x > y > z) {
//   console.log(`MAX = ${x}`);
// } else if (y > x && y > z) {
//   console.log(`MAX = ${y}`);
// } else if (z > x && z > y) {
//   console.log(`MAX = ${z}`);
// }
// ############################################

//#############################################
// let max;

// if (x > y > z) {
//     max = x;
//   } else if (y > x && y > z) {
//     max = y;
//   } else if (z > x && z > y) {
//     max = z;
//   }
//###########################################

let max;
let mid;
let min;

if (x > y > z) {
  max = x;
  if (y > z) {
    mid = y;
    min = z;
  } else {
    mid = z;
    min = y;
  }
} else if (y > x && y > z) {
  max = y;
  if (x > z) {
    mid = x;
    min = z;
  } else {
    mid = z;
    min = x;
  }
} else if (z > x && z > y) {
  max = z;
  if (x > y) {
    mid = x;
    min = z;
  } else {
    mid = y;
    min = x;
  }
}
console.log(`${max} : ${mid} : ${min}`);
