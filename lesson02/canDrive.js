const firstName = "Ashcon";
const lastName = "Minoo";
const age = 25;
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
  }
}