//first prime finder function - inefficient
function findPrime1(max) {
  var primelist = []
  for (let x = 2; x <= max; x++) {
    var isprime = x
    for (let i = 2; i <= isprime; i++) {
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
  for (let i = 2; i <= max; i++) {
    arr.push(i)
  }
  // console.log("Prime Array: " + arr)
  for (let i = 0; i < (Math.ceil(Math.sqrt(max))); i++) {
    for (let j = arr[i];arr[i]*j <= arr[arr.length -1]; j++) {
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
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

//generates a prime list from 2 - max using isPrime() function
//can find primes from 1 - 100,000,000 in ~ 152.24s.
function primeList(max) {
  console.time()
  var primelist = []
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primelist.push(i);
    }
  }
  console.timeEnd();
  return primelist;
}

//generates a prime list containing n number of primes.
function nPrimeList(n) {
  var primelist = []
  for (let i = 2; primelist.length < n; i++) {
    if (isPrime(i)) {
      primelist.push(i);
    }
  }
  return primelist;
}

//return the nth prime starting at 2.
function findNthPrime(n) {
  return nPrimeList(n).pop();
}

//new prime list function using Sieve of Eratosthenes algorithm - efficient
//can find primes from 1 - 100,000,000 in ~ 8.39s.
function primeListNew(max) {
  console.time();
  var numList = [];
  for (let i = 0; i <= max; i++) {
    numList.push(true);
  }
  //turn all even index to false
  for (let i = 4; i < numList.length; i+=2) {
    numList[i] = false;
  }
  for (let i = 3; i < Math.sqrt(numList.length); i+=2) {
    for (let j = i; i * j < numList.length; j++) {
      numList[i * j] = false;
    }
  }
  var primeList = []
  for (let i = 2; i < numList.length; i++) {
    if (numList[i]) {
      primeList.push(i);
    }
  }
  console.timeEnd();
  return primeList;
}

//Optimized the SoE algorithm function
//can find primes from 1 - 100,000,000 in < 5s.
function primeListSoE(max) {
  console.time();
  var numList = [];
  for (let i = 0; i <= max; i++) {
    numList.push(true);
  }
  //turn all even index to false
  for (let i = 4; i < numList.length; i+=2) {
    numList[i] = false;
  }
  for (let i = 3; i < Math.sqrt(numList.length); i+=2) {
    if (numList[i] != false) {
      for (let j = i; i * j < numList.length; j+=2) {
        numList[i * j] = false;
      }
    }
  }
  // var primeList = [];
  // for (let i = 2; i < numList.length; i++) {
  //   if (numList[i]) {
  //     primeList.push(i);
  //   }
  // }

  console.timeEnd();
  // return primeList;
  while (numList[numList.length - 1] === false) {
    numList.pop();
  }
  return numList.length - 1;
}


//prime finder using iterative Sieve
//not as effecient as the SoE function
//first create the primelist object with property = prime, value = the prime's next multiple
function primeIterative(max) {
  var primeObj = {2:4};
  for (let i = 3; i <= max; i+=2) {
    var pointer = false;
    // Object.keys(primeObj).forEach(key => {
    //   if (primeObj[key] === i) {
    //     primeObj[key] += +key;
    //     pointer = true;
    //   }
    // });
    for (let j in primeObj) {
      if (primeObj[j] === i) {
        primeObj[j] += +j*2;
        pointer = true;
      }
    }
    if (!pointer) {
      primeObj[i] = i * i;
    }
  }
  // var primeList = [];
  // for (let k in primeObj) {
  //   primeList.push(k);
  // }
  return primeObj;
}
