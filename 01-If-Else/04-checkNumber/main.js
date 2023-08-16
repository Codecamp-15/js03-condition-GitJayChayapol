let num = prompt("What your number?");

// if(number > 0) {alert ("Positive")
// }
// else if (number == 0) {alert ("Zero")}
// else if (number < 0) {alert ("Negative")}
// else alert("Invalid number");

if (num === null || num.trim === '' || isNaN(num)) {
    alert('Invalid Number');}
else if(num > 0) {alert ("Positive")
}
else if (num == 0) {alert ("Zero")}
else {alert ("Negative")}
    