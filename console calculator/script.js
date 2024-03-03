let a, b, operation, result;


//if  operatiors are not inputted correctly prompt again
while (isNaN(a)) {
  a = parseFloat(prompt("Enter A"));
}

while (isNaN(b)) {
  b = parseFloat(prompt("Enter B"));
}

//if math operatiors are not inputted correctly prompt again
while (!["*", "/", "-", "+"].includes(operation)) {
  operation = prompt("Enter the operation (* / - +)");
}


//swtich each case
switch (operation) {
  case "*":
    result = a * b;
    alert("The result of multiplication is: " + result);
    break;
  case "/":
    result = a / b;
    alert("The result of division is: " + result);
    break;
  case "-":
    result = a - b;
    alert("The result of subtraction is: " + result);
    break;
  case "+":
    result = a + b;
    alert("The result of addition is: " + result);
    break;
}