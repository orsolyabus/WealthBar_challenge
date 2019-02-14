// given
// currentTaxRate
// futureTaxRate
// deposit
// years
// returnRate
// inflationRate

// calculate
// afterTaxDeposit // deposit - tax based on current tax rate, TFSA
// futureValue // net deposit , years, return rate, inflation rate
// withdrawalTax // based on future tax rate, RRSP
// afterTaxFutureValue

function calculateTax(rate, amount){
  return (rate/100)*amount
}

module.exports = {calculateTax}