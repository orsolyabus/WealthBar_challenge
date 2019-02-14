const { 
  calculateTax, 
  calculateAfterTaxValue, 
  calculateFutureValue,
  calculatePresentValue,
  calculateRealValue
} = require("./calculator")
{
  console.log("testing 'calculateTax'")
  const currentTaxRate = 40;
  const deposit = 1000;
  const tax = calculateTax(currentTaxRate, deposit)
  assertEqual(tax, 400)
}

{
  console.log("testing 'calculateAfterTaxValue'")
  const currentTaxRate = 40;
  const deposit = 1000;
  const afterTaxValue = calculateAfterTaxValue(currentTaxRate, deposit)
  assertEqual(afterTaxValue, 600)
}

{
  console.log("testing 'calculateFutureValue'")
  const currentReturnRate = 6;
  const deposit = 1000;
  const years = 20;
  const futureValue = calculateFutureValue(currentReturnRate, deposit, years)
  assertEqual(futureValue, 3207)
}

{
  console.log("testing 'calculatePresentValue'")
  const inflationRate = 3;
  const deposit = 1000;
  const years = 20;
  const presentValue = calculatePresentValue(inflationRate, deposit, years)
  assertEqual(presentValue, 554)
}

{
  console.log("testing 'calculateRealValue'")
  const returnRate = 6;
  const inflationRate = 3;
  const deposit = 1000;
  const years = 20;
  const presentValue = calculateRealValue(returnRate, inflationRate, deposit, years)
  assertEqual(presentValue, 1776)
}

function assertEqual( check , base){
  if (check === base){
    console.log("passed")
  } else {
    console.log(`failed, expected ${base}, got ${check}`)
  }
}