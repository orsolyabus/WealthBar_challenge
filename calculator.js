document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");
  document.querySelector("#calculator-form").addEventListener("submit", event => {
    // get input data
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const currentTaxRate = formData.get("current-tax-rate");
    const retirementTaxRate = formData.get("retirement-tax-rate");
    const deposit = formData.get("deposit");
    const years = formData.get("years");
    const returnRate = formData.get("return-rate");
    const inflationRate = formData.get("inflation-rate");
    // calculate output
    const afterTaxDepositTFSA = calculateAfterTaxValue(currentTaxRate, deposit);
    const afterTaxDepositRRSR = deposit;
    const retirementSumTFSA = calculateFutureValue(returnRate, afterTaxDepositTFSA, years);
    const retirementSumRRSR = calculateFutureValue(returnRate, afterTaxDepositRRSR, years);
    const adjustedRetirementSumTFSA = calculatePresentValue(inflationRate, retirementSumTFSA, years);
    const adjustedRetirementSumRRSR = calculatePresentValue(inflationRate, retirementSumRRSR, years);
    const taxAtWithdrawalTFSA = 0;
    const taxAtWithdrawalRRSR = calculateTax(retirementTaxRate, retirementSumRRSR);
    const afterTaxRetirementSumTFSA = retirementSumTFSA;
    const afterTaxRetirementSumRRSR = calculateAfterTaxValue(retirementTaxRate, retirementSumRRSR);
    const adjustedAfterTaxRetirementSumTFSA = calculatePresentValue(inflationRate, afterTaxRetirementSumTFSA, years);
    const adjustedAfterTaxRetirementSumRRSR = calculatePresentValue(inflationRate, afterTaxRetirementSumRRSR, years);
    // display output
    
  })
});



// the brain

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
