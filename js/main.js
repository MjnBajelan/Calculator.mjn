let num1 = document.querySelector("input#Num1");
console.log(Num1);
let num2 = document.querySelector("input#Num2");
console.log(Num2);
let sum = document.querySelector("div>button#sum");
console.log(sum);
let sub = document.querySelector("div>button#sub");
console.log(sub);
let mul = document.querySelector("div>button#mul");
console.log(mul);
let div = document.querySelector("div>button#div");
console.log(div);
sum.addEventListener("click", function () {
  document.querySelector("div.finaly>p").innerHTML =
    Number(Num1.value) + Number(Num2.value);
});
sub.addEventListener("click", function () {
  document.querySelector("div.finaly>p").innerHTML =
    Number(Num1.value) - Number(Num2.value);
});
mul.addEventListener("click", function () {
  document.querySelector("div.finaly>p").innerHTML =
    Number(Num1.value) * Number(Num2.value);
});
div.addEventListener("click", function () {
  document.querySelector("div.finaly>p").innerHTML =
    Number(Num1.value) / Number(Num2.value);
});
