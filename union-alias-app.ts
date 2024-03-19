

function addNum(n1: number, n2: number) {
  return n1 + n2;
}


function printResults(num:number) : void{
    console.log('Result :'+num);
}

function addAndHandler(n1: number, n2: number,cb:(num:number)=>void) {
    const result= n1 + n2;
    cb(result);
  }
printResults(addNum(5,12));

//let combineValues: Function;
let combineValues: (a:number,b:number) => number;
combineValues =addNum;

//combineValues =printResults;
console.log(combineValues(8,11))
addAndHandler(10,20, (result)=>{
console.log(result)
});
