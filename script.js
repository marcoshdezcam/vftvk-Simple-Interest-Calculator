function showResults() {
  let amount = parseInt(document.getElementById("amount").value, 10);
  let interestRate = parseInt(
    document.getElementById("interestRate").value,
    10
  );
  let noOfYears = parseInt(document.getElementById("noOfYears").value, 10);
  let finalYear =
    parseInt(document.getElementById("noOfYears").value, 10) +
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

function computeInterest(amount, interestRate, noOfYears) {
  for (let i = 0; i < noOfYears; i++) {
    amount = amount * (interestRate / 100) + amount;
  }
  return amount;
}

function percentageSlider() {
  value = document.getElementById("interestRate").value;
  document.getElementById("percentageRate").innerHTML = value + "%";
}
