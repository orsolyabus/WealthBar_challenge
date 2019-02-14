// given
// currentTaxRate
// futureTaxRate
// deposit
// years
// returnRate
// inflationRate

// calculate
// # afterTaxValue // deposit - tax based on current tax rate, TFSA
// # futureValue // net deposit , years, return rate, inflation rate
// # withdrawalTax // based on future tax rate, RRSP
// # afterTaxFutureValue

function calculateTax(rate, amount){
  return (rate/100)*amount
}

function calculateAfterTaxValue(rate, amount){
  return amount - calculateTax(rate, amount)
}

function calculateFutureValue(rate, amount, years) {
  return Math.round(amount*(1+rate/100)**years)
}

function calculatePresentValue(inflationRate, amount, years){
  return Math.round(amount/((1+inflationRate/100)**years))
}

function calculateRealValue(returnRate, inflationRate, amount, years){
  return Math.round(amount*((1+returnRate/100)/(1+inflationRate/100))**years)
}

module.exports = {
  calculateTax,
  calculateAfterTaxValue,
  calculateFutureValue,
  calculatePresentValue,
  calculateRealValue
}