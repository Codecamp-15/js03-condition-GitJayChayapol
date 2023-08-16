let p = +prompt("What your point");

number = p >= 80 && p <=100
? 'A' 
: p >= 70 && p < 80
? 'B'
: p >= 60 && p < 70
? 'C'
: p >= 50 && p < 60
? 'D'
: p >= 0 && p < 50
? 'F'
: 'Invalid number'
alert (number);