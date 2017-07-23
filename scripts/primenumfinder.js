//first prime finder function - inefficient
function findPrime1(max) {
  var primelist = []
  for (var x = 2; x <= max; x++) {
    var isprime = x
    for (var i = 2; i <= isprime; i++) {
      if (i == isprime) {
        primelist.push(isprime)
      }
      if (isprime % i == 0) {
        break
      }
    }
  }
  return primelist
}

// myPrimeList = findPrime(50)
// console.log(myPrimeList)
//
//
// var array = [2,3,4,5,6,7,8,9,10]

// Prime finder using Sieve of Eratosthenes algorithm - ineffecient method
function findPrime2(max) {
  var arr = []
  for (var i = 2; i <= max; i++) {
    arr.push(i)
  }
  // console.log("Prime Array: " + arr)
  for (var i = 0; i < (Math.ceil(Math.sqrt(max))); i++) {
    for (var j = arr[i];arr[i]*j <= arr[arr.length -1]; j++) {
      // console.log("we are at number :" + arr[i] )
      // var multval = arr[i]*j
      // console.log("multiple is:" + multval)
      var multiple = arr.indexOf(arr[i]*j)
      // console.log("multiple index is :" + multiple)
      if (multiple != -1) {
        arr.splice(multiple,1)
        // console.log("removed " + multiple + "new array :" + arr)
      }
    }
  }
  return arr
}

//new prime finder without manipulating an array.
//function determing if an imput number is prime.
function isPrime(num){
  if (num != 2 && num % 2 === 0) return false;
  for (var i = 3; i <= Math.sqrt(num); i += 2) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

//generates a prime list from 2 - max using isPrime() function
function primeList(max) {
  var primelist = []
  for (var i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primelist.push(i);
    }
  }
  return primelist;
}

//new prime list function using Sieve of Eratosthenes algorithm - efficient 
function findPrime3(max) {
  var numList = []
  for (var i = 0; i <= max; i++) {
    numList.push(true);
  }
  //turn all even index to false
  for (var i = 4; i < numList.length; i+=2) {
    numList[i] = false;
  }
  for (var i = 3; i < Math.sqrt(numList.length); i+=2) {
    for (var j = i; i * j < numList.length; j++) {
      numList[i * j] = false
    }
  }
  var primeList = []
  for (var i = 2; i < numList.length; i++) {
    if (numList[i]) {
      primeList.push(i);
    }
  }
  return primeList;
}
