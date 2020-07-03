//I added input to this one, the only other way I know how to do input is doing it through the terminal with node.js

let firstName = prompt("Please enter your first name");
let lastName = prompt("Please enter your last name");
let age = prompt("Please enter your age");
const drivingAge = 16;
const difference = age - drivingAge;

if (age >= drivingAge) {
    if ( difference > 1) {
      console.log(firstName +" " + lastName +", you've been driving for about " + difference + " years!");
  } else if (difference == 1) {
      console.log(firstName +" " + lastName +", you've been driving for about a year!");
  } else if (difference == 0) {
      console.log(firstName +" " + lastName +", you've been driving for less than a year!");
  }
} else if (age < drivingAge) {
  for (let i=5; i>=0; i--) {
    console.log(i);
    // countDown(i);
  }
}

// function countDown(value) {
//   setTimeout(function () {
//     console.log(value);
//   }, 1000);
// }

//failed countdown code
