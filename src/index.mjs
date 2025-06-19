import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Day-2 Javascript Operator</h1>
`;

// Income and expenses

let income = 50000;
let rent = 5000;
let food = 2000;
let travel = 1500;

// Display values
document.querySelector("#incom").textContent = income;
document.querySelector(".rentExpance").textContent = rent;
document.querySelector(".foodExpance").textContent = food;
document.querySelector(".travelExpance").textContent = travel;

// Calculate total expenses and savings (actual calculations)
let totalExpenses = rent + food + travel;
let savings = income - totalExpenses;

console.log(savings);
// Display calculations

document.querySelector(".totalSaving").textContent = savings;

// EMI Calculoter
let LoanAmount = 50000;
let interestRate = 12;
let loanTerm = 1;
let monthlyInterest = LoanAmount / 12 / 100;
let emi =
  (LoanAmount *
    monthlyInterest *
    Math.pow(1 + monthlyInterest, loanTerm * 12)) /
  (Math.pow(1 + monthlyInterest, loanTerm * 12) - 1);
console.log(emi);
