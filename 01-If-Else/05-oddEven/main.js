let num = prompt("What your number?");

if (num === null || num.trim === '' || isNaN(num)) {
    alert('Invalid Number');}
else if (num%2 == 0) {alert ("Even number")}
else {alert ("Odd number")}
