//selectors
const initialNumber = document.querySelector("#IntialValue");
const finalValue    = document.querySelector("#finalValue");
const convert       = document.querySelector("#convert");
const swap          = document.querySelector("#swap");
const reset         = document.querySelector("#Reset");
const input         = document.querySelector("#input"); 
const output        = document.querySelector("#output");

convert.addEventListener("click",function(){
    const Intial = initialNumber.value;
    const final =  finalValue.value;
    // console.log(IntialIdx,finalIdx);

    var inputvalue = input.value;
    var ans = convertBase(Intial,final,inputvalue);
    
    output.value = ans;
    
})

function convertBase(fromBase, toBase, num) {
    console.log(fromBase)
  let d = parseInt(num, fromBase) // converting number into base10
  let res = d.toString(toBase) // converting base10 to required base
  return res 
  }

  swap.addEventListener("click",()=>{
    let temp = initialNumber.value;
    initialNumber.value = finalValue.value;
    finalValue.value = temp;
    let temp1 = input.value;
    input.value = output.value;
    output.value = temp1;
    console.log(input.value,final.value);
  })

  reset.addEventListener("click",()=>{
    if (input.value !="" && output.value !="") {
      input.value = "";
      output.value = "";
  }
  })

