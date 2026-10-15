function correct(string)
{
  // your code here
  let char = string.split("");
​
  for (let i = 0; i < char.length; i++) {
    if (char[i] === "5") {
      char[i] = "S";
    } else if (char[i] === "0") {
      char[i] = "O";
    } else if (char[i] === "1") {
      char[i] = "I";
    }
  }
​
  return char.join("");
  
}