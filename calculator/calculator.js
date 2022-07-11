
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();    
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      if (e.target.tagName === "FORM"){
        update();       
        }
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").defaultValue = "10000";
  document.getElementById("loan-years").defaultValue = "5";
  document.getElementById("loan-rate").defaultValue = "7";
}


// Get the current values from the UI
// Update the monthly payment
function update() {
  calculateMonthlyPayments(getCurrentUIValues());
  updateMonthly();
}

function zeroDecimal (num) {
  let decimal = num.split(".");
  if (decimal[1].length === 1){
    decimal[1] = decimal[1] + "0";
    return decimal[0]+ "." + decimal[1];
    }
  else 
  return num;
  
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayments(values) {
    let i = (values.rate/100) / 12;
    let dividend =  (values.amount * i);
    let n = values.years * 12;
    let divisor = (1 - Math.pow((1 + i), -n));
    let monthlyPayments = Math.round((dividend/divisor)*100) / 100;
    monthlyPayments = monthlyPayments.toString();
    monthlyPayments = zeroDecimal(monthlyPayments);
    console.log("monthlyPayments : "+ monthlyPayments);
    return monthlyPayments;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly() {
  const  monthlyInput = document.getElementById("monthly-payment");
  monthlyInput.innerText = "$" + calculateMonthlyPayments(getCurrentUIValues());
}

