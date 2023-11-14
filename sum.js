// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.

// take in an unlimited number of command line arguments
const args = process.argv.slice(2);
// Edge case: How many arguments are passed => we need at least 2

console.log('args:', args);

if (args.length < 2) {
  console.error('Please, input at least 2 numbers');

  // readability and intent
  process.exit();
}

const sum = function (numbers) {
  // accumulator
  let total = 0;

  // iterate through the args
  for (let i = 0; i < numbers.length; i++) {
    // add the args together to have the sum
    // converting to a number => typecasting into a number

    const convertedNum = Number(numbers[i]);

    if (Number.isInteger(convertedNum)) {
      total += convertedNum; // => total = total + args[i]
    }
    // Edge case: if we don't have number => output error message
    if (isNaN(convertedNum)) {
      console.error('Please, input only numbers!');
      // stop the execution here
      process.exit();
    }
  }

  // Edge case: Make sure that all arguments are numbers. Remove any none integer.

  // console.log('args:', args[i], 'type:', typeof args[i], 'total:', total);
  return total;
};

// for (let arg of args) {
//   console.log('arg:', arg);
// }


const result = sum(args);

console.log(result)