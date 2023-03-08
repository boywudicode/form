let name = prompt ("what is your name");
let message = "Welcome"
let newMessage = message + " " + name;
alert(newMessage);
let age = prompt ("How old are you")
const price = 50000
let discount, newPrice
function calDiscount(disc){
     discount = (disc)*price;
     newPrice = price - discount;
    alert(`Thank You ${name},You have a discount of ${discount}`);}
if (age<=13) {
    calDiscount(20/100)
}
else if (age<=18) {
  calDiscount(40/100)
}
else if (age<=30) {
    calDiscount(60/100)
}
else if (age<=65) {
   caldiscount(80/100)
}
else if(age>65) {
   calDiscount(100/100)
}