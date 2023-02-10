var body = document.body;
var create = document.createElement("button")
create.textContent = "Create Rhombus"
body.appendChild(create);

var pSideM = document.getElementById('sideM').value;
var pColorChoice1 = document.getElementById('colorChoice1').value;
var pColorChoice2 = document.getElementById('colorChoice2').value;
var pSymbol = document.getElementById('symbol').value;

function upRight(pSideM, pColorChoice1, pColorChoice2, pSymbol){
var sideM = document.createElement("p");
sideM.textContent = "";
for (i=0;i<pSideM;i++){
//Create each line on the Rhombus
for(j=0;j<=i;j++){

//Is the position even or odd so we change the color
if (j%2)
if (j%2){
    sideM.style.color = pColorChoice1;
    sideM.textContent = pSymbol;
}
else {
    sideM.style.color = pColorChoice2;
    sideM.textContent = pSymbol
}

var uR = document.getElementById("upRight")
uR.append(sideM);

}

function downRight(pSideM, pColorChoice1, pColorChoice2, pSymbol){
var sideM ="";
for (i=sideM;i > 0;i--){
sideM = document.createElement("span"); 
sideM.textContent = "";
//Create each line on the Rhombus
for(j=0;j<i;j++){

//Is the position even or odd so we change the color
if (j%2){
    sideM.style.color = pColorChoice1;
    sideM.textContent = pSymbol;
}
else {
    sideM.style.color = pColorChoice2;
    sideM.textContent = pSymbol
}
console.log(sideM);

}


var dR = document.getElementById("upRight")
dR.append(sideM);
}

create.onclick = function createRhombus(pSideM, pColorChoice1, pColorChoice2, pSymbol) {
console.log("clicked");
upRight(pSideM, pColorChoice1, pColorChoice2, pSymbol);
downRight(pSideM, pColorChoice1, pColorChoice2, pSymbol);
}