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
//even
sideM.innerHTML +="<span style='color:" + pColorChoice1 + ";'>" + pSymbol +"</span>";
else
//odd
sideM.innerHTML +="<span style='color:" + pColorChoice2 + ";'>" + pSymbol +"</span>";

}
console.log(sideM);

}

var uR = document.getElementById("upRight")
uR.append(sideM);

}

function downRight(pSideM, pColorChoice1, pColorChoice2, pSymbol){
var sideM ="";
for (i=sideM;i > 0;i--){
sideM = document.createElement("p"); 
sideM.textContent = "";
//Create each line on the Rhombus
for(j=0;j<i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
sideM.innerHTML +="<span style='color:" + pColorChoice1 + ";'>" + pSymbol +"</span>";
else
//odd
sideM.innerHTML +="<span style='color:" + pColorChoice2 + ";'>" + pSymbol +"</span>";

}
sideM +="</p>";
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