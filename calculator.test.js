const { calculateTax } = require("./calculator")

console.log("testing 'calculateTax'")
const currentTaxRate = 40;
const deposit = 1000;
const tax = calculateTax(currentTaxRate, deposit)
assertEqual(tax, 400)


function assertEqual( check , base){
  if (check === base){
    console.log("passed")
  } else {
    console.log(`failed, expected ${base}, got ${check}`)
  }
}