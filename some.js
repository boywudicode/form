let name = prompt ("what is your name");
let message = alert("welcome");
let age = prompt ("How old are you")
let price = 50000
if (age<=13) {
    let discount = (20/100)*price
    let newPrice = price - discount
    alert(`Thank You ${name},You have a discount of ${discount}`);
}
else if (age<=18) {
    discount = 40/100*price
    newPrice = price - discount
    alert(`Thank You ${name},You have a discount of ${discount}`);
}
else if (age<=30) {
    discount = 60/100*price
    newPrice = price - discount
    alert(`Thank You ${name},You have a discount of ${discount}`);
}
else if (age<=65) {
    discount = 80/100*price
    newPrice = price - discount
    alert(`Thank You ${name},You have a discount of ${discount}`);
}
else (age>65) {
    discount = 100/100*price
    newPrice = price - discount
    alert(`Thank You ${name},You have a discount of ${discount}`);
}