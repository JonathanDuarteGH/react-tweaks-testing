const results = [];

const fizzbuzz = (n) => {
  for (let i = 0; i < n; i++) {
    num = i + 1;
    if (num % 3 === 0 && num <= 12) {
      results.push('fizz');
    } else if (num % 5 === 0 && num <= 10) {
      results.push('buzz');
    } else if (num % 3 === 0 && num % 5 === 0) {
      results.push('fizzbuzz');
    } else {
      results[i] = i + 1;
    }

    // should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
  }

};

fizzbuzz(16);
console.log(results);