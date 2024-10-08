const content = document.querySelector(".content");

console.log("content", content);

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

  return temp;
};

const div11 = addStyleToDiv("7");
const div12 = addStyleToDiv("8");
const div13 = addStyleToDiv("9");
const div21 = addStyleToDiv("4");
const div22 = addStyleToDiv("5");
const div23 = addStyleToDiv("6");
const div31 = addStyleToDiv("1");
const div32 = addStyleToDiv("2");
const div33 = addStyleToDiv("3");
const div41 = addStyleToDiv("0");
const div42 = addStyleToDiv("C", "#DCDCDC");
const div43 = addStyleToDiv("=", "#DCDCDC");

const input = document.createElement("input");
input.setAttribute("id", "calc-input");
input.setAttribute("placeholder", "Enter a number");
input.setAttribute("maxlength", "2");
input.style.display = "flex";
input.style.margin = "50px";
input.style.width = "200px";
input.style.height = "30px";

console.log("input", input);

const firstDiv = document.createElement("div");
firstDiv.style.display = "flex";
firstDiv.style.gap = "15px";
firstDiv.appendChild(div11);
firstDiv.appendChild(div12);
firstDiv.appendChild(div13);

const secondDiv = document.createElement("div");
secondDiv.style.display = "flex";
secondDiv.style.gap = "15px";
secondDiv.style.marginTop = "15px";
secondDiv.appendChild(div21);
secondDiv.appendChild(div22);
secondDiv.appendChild(div23);

const thirdDiv = document.createElement("div");
thirdDiv.style.display = "flex";
thirdDiv.style.gap = "15px";
thirdDiv.style.marginTop = "15px";
thirdDiv.appendChild(div31);
thirdDiv.appendChild(div32);
thirdDiv.appendChild(div33);

const fourthDiv = document.createElement("div");
fourthDiv.style.display = "flex";
fourthDiv.style.gap = "15px";
fourthDiv.style.marginTop = "15px";
fourthDiv.appendChild(div41);
fourthDiv.appendChild(div42);
fourthDiv.appendChild(div43);

const finalDiv = document.createElement("div");
finalDiv.appendChild(input);
finalDiv.appendChild(firstDiv);
finalDiv.appendChild(secondDiv);
finalDiv.appendChild(thirdDiv);
finalDiv.appendChild(fourthDiv);

content.appendChild(finalDiv);
