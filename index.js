function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for(let x of str.split('')) {
        if(vowels.includes(x)) vowelsCount++;
    }
    
    
    return vowelsCount;
  }

  console.log(getCount('dale'));


  function squareSum(numbers) {
      return numbers.reduce((acc, curr) => acc + curr ** 2, 0);
  }


  function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
  }

  // var isSquare = function(n){
  //   if (n < 0) return false;
  //   return !Math.sqrt(n).toString().includes('.');
  // }

  var isSquare = function(n) {
    return Math.sqrt(n) % 1 === 0;
  }

  function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    const a = Math.sqrt(sq);
    return a % 1 === 0 ? (a+1) ** 2 : -1;
  }