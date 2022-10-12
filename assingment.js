function isPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
  
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(7));


function IsPalindrome(num) {
    var num = num.toString();
    var newNum = "";
    for (var i = num.length - 1; i >= 0; i--) {
        newNum += num[i];

    }
    return num === newNum;

}
for (var i =0; i <= 100; i++)
if(isPrime(i) && IsPalindrome(i)){
    console.log(i)
}

