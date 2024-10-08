const content = document.querySelector(".content");

console.log("content", content);

const addStyleToDiv = (text) => {
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
  temp.style.backgroundColor = "pink";

  return temp;
};

const div11 = addStyleToDiv("0");
const div12 = addStyleToDiv("1");
const div13 = addStyleToDiv("2");
const div21 = addStyleToDiv("3");
const div22 = addStyleToDiv("4");
const div23 = addStyleToDiv("5");
// const div31 = addStyleToDiv("6");

const firstDiv = document.createElement("div");
firstDiv.style.display = "flex";
firstDiv.style.gap = "15px";
firstDiv.appendChild(div11);
firstDiv.appendChild(div12);
firstDiv.appendChild(div13);

content.appendChild(firstDiv);
