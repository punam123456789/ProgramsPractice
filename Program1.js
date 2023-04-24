function test37() 
{
    var x;
  if (x % 3 == 0 || x % 5 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test37(19));
console.log(test37(14));
console.log(test37(10));