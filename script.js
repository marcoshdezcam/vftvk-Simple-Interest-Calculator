function showResults() {
  if (document.calculator.amount.value == 0) {
    alert("Please enter a positive amount.");
    document.calculator.amount.focus();
  } else if (document.calculator.amount.value < 0) {
    alert("Please enter a positive amount.");
    document.calculator.amount.focus();
  } else if (document.calculator.amount.value > 0) {
    let amount = parseInt(document.calculator.amount.value, 10);
    let interestRate = parseFloat(document.calculator.interestRate.value, 10);
    let noOfYears = parseInt(document.calculator.noOfYears.value, 10);
    let finalYear =
      parseInt(document.calculator.noOfYears.value, 10) +
      new Date().getFullYear();

    let results = document.getElementById("results");
    results.style.display = "block";
    results.innerHTML =
      "If you deposit <mark>" +
      amount +
      ", </mark><br>" +
      "at an interest rate of <mark>" +
      interestRate +
      "%</mark>,<br >" +
      "You will receive an amount of " +
      "<mark>" +
      computeInterest(amount, interestRate, noOfYears) +
      "</mark>,<br >" +
      "in the year <mark>" +
      finalYear +
      "</mark>";
  }
}

function computeInterest(amount, interestRate, noOfYears) {
  let profits = amount * (interestRate / 100) * noOfYears;
  return profits.toFixed();
}

function updateSliderPosition() {
  interestRate = document.calculator.interestRate.value;
  document.getElementById("percentageRate").innerHTML = interestRate + "%";
}
