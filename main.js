let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = false;

let runnersAge = 18;

if (runnersAge > 18 && earlyRegister === true) {
  raceNumber += 1000;
} 

if (runnersAge > 18) {
  console.log(`You will race at 9:30 am.\nYour race number is: ${raceNumber}`);
} else if (runnersAge > 18 && earlyRegister === false) {
  console.log(`You will race at 11 am.\nYour race number is: ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`You will race at 12:30 pm.\nYour race number is: ${raceNumber}`)
} else {
  console.log('You need to go to registration desk.')
}