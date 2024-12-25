let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));

 //Compare two numbers and check if one of them is 100 or their sum is 100.

function compare()
{
  if(a === 100 || b === 100)
  {
    return "One of the numbers is 100.";
  } 
  else if(a + b === 100)
  {
    return "The sum of the two numbers is 100.";
  } 
  else 
  {
    return "The sum of the two numbers is not 100.";
  }
}


  const result = compare();
  document.getElementById('demo').innerHTML = result;
