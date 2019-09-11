var hours = prompt("Enter # of hours worked:");

var numHours = parseFloat(hours);//45.6

// Calculate and display gross,tax, nett pay.
// Based on:
// basic pay - 15/hours
// ot rate = 1.5 X
// tax Rate = 24%

// ot is calculated only after 40 hours

const basic = 15;
const otRate = 1.5;
const taxRate = 0.24;
const regHours = 40;
var gross, tax, nett;

if(numHours > regHours)
{
    gross = ((numHours - regHours) * otRate * basic) + (regHours * basic);
}
else
{
    gross = numHours * basic;
}
tax = gross * taxRate;
nett = gross - tax;

console.log("Gross: " + gross);
console.log("(-)Tax: " + tax);
console.log("Nett: " + nett);