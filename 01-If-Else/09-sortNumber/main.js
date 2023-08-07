let numa = +prompt('number1');
let numb = +prompt('number2');
let numc = +prompt('number3');


if (numa > numb) {
    if (numb > numc)
    alert (numa + "," + numb + "," + numc);
    else if (numc > numb) {
        if (numc > numa) 
        alert(numc + "," + numa + "," + numb)}
        else alert (numa + "," + numc + "," + numb)
}
else if (numb > numa) {
    if (numa > numc)
    alert (numb + "," + numa + "," + numc);
    else if (numc > numa) {
        if (numc > numb) 
        alert(numc + "," + numb + "," + numa)}
        else alert (numc + "," + numb + "," + numa)
}