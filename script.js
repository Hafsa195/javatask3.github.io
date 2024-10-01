function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  // Test the function
  let number1 = 10;
  let number2 = 20;
  console.log("The greater number is: " + findGreaterNumber(number1, number2));