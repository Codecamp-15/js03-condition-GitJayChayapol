let p = +prompt("What your point");
if (p === null || p.trim === '' || isNaN(p)) {
    alert('Invalid Number');}
else if (p >= 80 && p <=100){alert ("A");}
else if (p >= 70 && p < 80){alert("B");}
else if (p >= 60 && p < 70){alert("C");}
else if (p >= 50 && p < 60){alert("D");}
else if (p > 0 && p < 50) {alert("F")}
else {alert("Invalid number")};