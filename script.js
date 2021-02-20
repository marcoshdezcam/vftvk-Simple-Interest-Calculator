function showResults() {
  let amount = parseInt(document.calculator.amount.value, 10);
  let interestRate = parseInt(document.calculator.interestRate.value, 10);
  let noOfYears = parseInt(document.calculator.noOfYears.value, 10);
  let finalYear =
    parseInt(document.calculator.noOfYears.value, 10) +
    new Date().getFullYear();

  let results = document.getElementById("results");
  results.style.display = "block";
  results.innerHTML =
    "If you deposit " +
    amount +
    "<br >" +
    "at an interest rate of " +
    interestRate +
    "%" +
    "<br >" +
    "You will receive an amount of " +
    computeInterest(amount, interestRate, noOfYears) +
    "<br >" +
    "in the year " +
    finalYear;
}

function validateAmount() {
  let amount = document.calculator.amount.value;
  if (amount == "") {
    alert("Please provide an amount");
  }
}

function computeInterest(amount, interestRate, noOfYears) {
  for (let i = 0; i < noOfYears; i++) {
    amount = amount * (interestRate / 100) + amount;
  }
  return amount;
}

function updateSliderPosition() {
  interestRate = document.calculator.interestRate.value;
  document.getElementById("percentageRate").innerHTML = interestRate + "%";
}
