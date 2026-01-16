var x = 15
var y = 2.5
console.log(x+y)
console.log("veni vici vidi")

var julius= Document.getElementById("hi")

julius.Innertext = "i love japan"

document.getElementById("calculateBtn").addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("input1").value) || 0;
    var num2 = parseFloat(document.getElementById("input2").value) || 0;
    var sum = num1 + num2;
    document.getElementById("result").innerText = "The sum is: " + sum;
    console.log(sum);
});