//EX2 Total of any two numbers in an array equals given number
const findElements = (arr, total) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === total) {
          console.log([arr[i], arr[j]]);
          return [arr[i], arr[j]];
        }
      }
    }
    console.log("No combination to meet this total")
    return "No combination to meet this total"
  };
  findElements([1, 5, 4, 45, 2, 45, 43], 44);