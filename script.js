const content = document.querySelector(".content");

const addStyleToDiv = (text, color) => {
  const temp = document.createElement("div");
  temp.style.width = "80px";
  temp.style.height = "60px";
  temp.style.border = "2px solid";
  temp.style.padding = "5px";
  temp.style.textAlign = "center";
  temp.style.alignContent = "center";
  temp.style.fontWeight = "bold";
  temp.style.fontFamily =
    "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
  temp.innerHTML = text;
  temp.style.backgroundColor = color ? color : "#FFF0F5";
  temp.style.cursor = "pointer";
  temp.style.fontSize = "50px";

  return temp;
};

const div11 = addStyleToDiv("7");
div11.setAttribute("id", "seven");
const div12 = addStyleToDiv("8");
div12.setAttribute("id", "eight");
const div13 = addStyleToDiv("9");
div13.setAttribute("id", "nine");
const div14 = addStyleToDiv("/", "#DCDCDC");
div14.setAttribute("id", "divide");
const div21 = addStyleToDiv("4");
div21.setAttribute("id", "four");
const div22 = addStyleToDiv("5");
div22.setAttribute("id", "five");
const div23 = addStyleToDiv("6");
div23.setAttribute("id", "six");
const div24 = addStyleToDiv("x", "#DCDCDC");
div24.setAttribute("id", "multiply");
const div31 = addStyleToDiv("1");
div31.setAttribute("id", "one");
const div32 = addStyleToDiv("2");
div32.setAttribute("id", "two");
const div33 = addStyleToDiv("3");
div33.setAttribute("id", "three");
const div34 = addStyleToDiv("+", "#DCDCDC");
div34.setAttribute("id", "add");
const div41 = addStyleToDiv("0");
div41.setAttribute("id", "zero");
const div42 = addStyleToDiv("C", "#DCDCDC");
div42.setAttribute("id", "clear");
const div43 = addStyleToDiv("-", "#DCDCDC");
div43.setAttribute("id", "minus");
const div44 = addStyleToDiv("=", "#DCDCDC");
div44.setAttribute("id", "equal");

const input = document.createElement("input");
input.setAttribute("id", "calc-input");
input.setAttribute("placeholder", "Enter a number");
input.setAttribute("type", "number");
input.setAttribute("maxlength", "2");
input.setAttribute("value", "");
input.style.display = "flex";
input.style.margin = "50px";
input.style.marginLeft = "100px";
input.style.width = "200px";
input.style.height = "30px";
input.style.border = "2px solid";

const firstDiv = document.createElement("div");
firstDiv.style.display = "flex";
firstDiv.style.gap = "15px";
firstDiv.appendChild(div11);
firstDiv.appendChild(div12);
firstDiv.appendChild(div13);
firstDiv.appendChild(div14);

const secondDiv = document.createElement("div");
secondDiv.style.display = "flex";
secondDiv.style.gap = "15px";
secondDiv.style.marginTop = "15px";
secondDiv.appendChild(div21);
secondDiv.appendChild(div22);
secondDiv.appendChild(div23);
secondDiv.appendChild(div24);

const thirdDiv = document.createElement("div");
thirdDiv.style.display = "flex";
thirdDiv.style.gap = "15px";
thirdDiv.style.marginTop = "15px";
thirdDiv.appendChild(div31);
thirdDiv.appendChild(div32);
thirdDiv.appendChild(div33);
thirdDiv.appendChild(div34);

const fourthDiv = document.createElement("div");
fourthDiv.style.display = "flex";
fourthDiv.style.gap = "15px";
fourthDiv.style.marginTop = "15px";
fourthDiv.appendChild(div41);
fourthDiv.appendChild(div42);
fourthDiv.appendChild(div43);
fourthDiv.appendChild(div44);

const finalDiv = document.createElement("div");
finalDiv.appendChild(input);
finalDiv.appendChild(firstDiv);
finalDiv.appendChild(secondDiv);
finalDiv.appendChild(thirdDiv);
finalDiv.appendChild(fourthDiv);

content.appendChild(finalDiv);

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const finalBtn = document.querySelector("#equal");
const calcInput = document.querySelector("#calc-input");
const clear = document.querySelector("#clear");

zero.addEventListener("click", (e) => {
  const newVal = calcInput.value.toString().concat(zero.innerHTML);
  calcInput.setAttribute("value", newVal);
});

one.addEventListener("click", (e) => {
  const newVal = calcInput.value.toString().concat(one.innerHTML);
  calcInput.setAttribute("value", newVal);
});

two.addEventListener("click", (e) => {
  const newVal = calcInput.value.toString().concat(two.innerHTML);
  calcInput.setAttribute("value", newVal);
});

three.addEventListener("click", (e) => {
  const newVal = calcInput.value.toString().concat(three.innerHTML);
  calcInput.setAttribute("value", newVal);
});

four.addEventListener("click", (e) => {
  const newVal = calcInput.value.toString().concat(four.innerHTML);
  calcInput.setAttribute("value", newVal);
});

five.addEventListener("click", (e) => {
  const newVal = calcInput.value.toString().concat(five.innerHTML);
  calcInput.setAttribute("value", newVal);
});

six.addEventListener("click", (e) => {
  const newVal = calcInput.value.toString().concat(six.innerHTML);
  calcInput.setAttribute("value", newVal);
});

seven.addEventListener("click", (e) => {
  const newVal = calcInput.value.toString().concat(seven.innerHTML);
  calcInput.setAttribute("value", newVal);
});

eight.addEventListener("click", (e) => {
  const newVal = calcInput.value.toString().concat(eight.innerHTML);
  calcInput.setAttribute("value", newVal);
});

nine.addEventListener("click", (e) => {
  const newVal = calcInput.value.toString().concat(nine.innerHTML);
  calcInput.setAttribute("value", newVal);
});
