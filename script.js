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
headerTitle.style = `text-align:center;
                    background: -webkit-linear-gradient(39deg, #e73785, #aee9f4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 50px`;
heroSection.style = `width : 60%;
                    margin: auto;
                    min-height: 500px;
                    background: #bdbcd8;
                    border-radius: 2rem;
                    box-shadow: 0px 0px 16px #726868;
                    display: flex;
                    flex-direction: column;
                    align-items: center`;
paragraph.style = `font-size: 35px;
                  color: #fff;
                  text-shadow: 0px 0px 10px #000;`;
input.style = `width: 70%;
              height: 60px;
              border: none;
              font-size: 20px;
              border-radius: 1rem;
              padding: 0 1.5rem;
              border-bottom: 2px solid #d66ba6;
              box-shadow: 0 2px 5px -3px #333;
              border-right: 3px solid #d66ba6;`;
sectionTwo.style = `width:75%;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 1rem;`;
leftBox.style = `width:50%`;
rightBox.style = `width:50%`;
pLeftBox.style = `font-size: 25px;
                  color: #fff;
                  text-shadow: 0px 0px 4px #000;`;
pRightBox.style.cssText = pLeftBox.style.cssText;
inputLeftBox.style = `width: 70%;
                      height: 40px;
                      padding: 0 1rem;
                      border-radius: 1rem;
                      border: none;
                      box-shadow: rgb(51 51 51) 0px 2px 5px -3px;`;
inputRightBox.style = `width: 70%;
                      height: 40px;
                      border: none;
                      background: #ffffff;
                      border-radius: 9px;
                      padding: 2px 5px;`;
btnChange.style = `color: #fff;
                  border: none;
                  background-image: linear-gradient(146deg, #c1adcf , #d66aa5);
                  font-size: 25px;
                  padding: 1rem 2rem;
                  border-radius: 1rem;
                  margin-top: 5rem;
                  box-shadow: 0px 2px 2px #90649a;`;

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
