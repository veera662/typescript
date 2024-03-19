function combine(
  input1: number | string,
  input2: number | string,
  resultType: string
) {
  let result;
  if (typeof input1 === "number" || typeof input2 === "number" || resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  
 
  return result;
}

const combineAges = combine(30, 25, "as-number");
console.log(combineAges);

const CombineNames = combine("Max", " Anna", "as-text");
