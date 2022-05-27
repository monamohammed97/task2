// create Elemet
let headerTitle = document.createElement("h1");
let heroSection = document.createElement("section");
let paragraph = document.createElement("p");
let input = document.createElement("input");
let sectionTwo = document.createElement("section");
let leftBox = document.createElement("section");
let pLeftBox = document.createElement("p");
let inputLeftBox = document.createElement("input");
let rightBox = document.createElement("section");
let pRightBox = document.createElement("p");
let inputRightBox = document.createElement("input");
let btnChange = document.createElement("button");


// add Attribute (calss or name ... etc) to elements
heroSection.className = "container";
paragraph.id = "textFromInput";
let attributOfInput = {
  id: "input",
  value: "Mona",
  placeholder: "Type your name ..!",
};
Object.keys(attributOfInput).forEach((attr) =>
  input.setAttribute(attr, attributOfInput[attr])
);
let attrInputLeftBox = {
  id: "fontSize",
  placeholder: "24px",
  type: "number",
};
Object.keys(attrInputLeftBox).forEach((attr) =>
  inputLeftBox.setAttribute(attr, attrInputLeftBox[attr])
);
let attrInputRightBox = {
  id: "fontColor",
  type: "color",
  value: "#D17EB2",
};
Object.keys(attrInputRightBox).forEach((attr) =>
  inputRightBox.setAttribute(attr, attrInputRightBox[attr])
);
sectionTwo.id = "sectionTwo";
leftBox.id = "leftBox";
rightBox.id = "rightBox";
pLeftBox.className = "paragraph";
pRightBox.className = "paragraph";
btnChange.id = "changeText";

// create TextNode
let textHeaderTitle = document.createTextNode("Welcome to Task2 React.js");
let textParagraph = document.createTextNode("Type your name ..!");
let paragLeftBox = document.createTextNode("Font Size :");
let paragRigtBox = document.createTextNode("Font Color :");
let textBtnChange = document.createTextNode("Change Now !");

// set style to element
heroSection.className = "heroSection"
sectionTwo.className ="sectionTwo";
leftBox.className = "w-50";
rightBox.className = "w-50";
pLeftBox.className = "paragraph";
pRightBox.style.cssText = pLeftBox.style.cssText;
inputLeftBox.className = "inputLBox";
inputRightBox.className = "inputRBox"

// append text to elemet
headerTitle.append(textHeaderTitle);
paragraph.append(textParagraph);
pLeftBox.append(paragLeftBox);
pRightBox.append(paragRigtBox);
leftBox.append(pLeftBox);
rightBox.append(pRightBox);
leftBox.append(inputLeftBox);
rightBox.append(inputRightBox);
btnChange.append(textBtnChange);

// apped Array of elemets to body
let arrayOfElement = [headerTitle, heroSection];
let elementsOfSection = [paragraph, input, sectionTwo, btnChange];
let elementsOfSectionTwo = [leftBox, rightBox];

arrayOfElement.forEach((elemet) => document.body.append(elemet));
elementsOfSection.forEach((elemet) =>
  document.querySelector("section").append(elemet)
);
elementsOfSectionTwo.forEach((elemet) =>
  document.getElementById("sectionTwo").append(elemet)
);
