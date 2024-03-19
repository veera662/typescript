console.log("TWelcome Veera   ..");

function add(n1: number, n2: number) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input");
  }
  return n1 + n2;
}


function add1(n1: number, n2: number,showResult: boolean) {
   const output=n1+n2;
   if (showResult) {
     console.log(resultPhrase+output);
   }
   else{
      return  output;
   }
 }
const number1 = 5;
const number2 = 2.8;
const printResult= true;
const resultPhrase= " Result is : "
add1(number1,number2,printResult);

//const result = add(number1, number2);
//console.log(result);
