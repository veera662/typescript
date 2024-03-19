
type Combinable =number| string;

type ConversionDescriotor  ='as-number'| 'as-text';

function combine(
    input1: Combinable ,
    input2: Combinable,
    resultType: ConversionDescriotor
  ) {
    let result;
    if (typeof input1 === "number" || typeof input2 === "number" || resultType === 'as-number') {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    
   
    return result;
  }