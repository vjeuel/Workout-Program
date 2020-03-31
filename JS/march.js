var month = ["March"]
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var m1 = new Date("March 1, 2020");

document.getElementById("m1").innerHTML = days[m1.getDay()];