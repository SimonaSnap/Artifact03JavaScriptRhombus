var body = document.body;
var create = document.createElement("button")
create.textContent = "Create Rhombus"
body.appendChild(create);

var pSideM = document.getElementById('sideM').value;
var pColorChoice1 = document.getElementById('colorChoice1').value;
var pColorChoice2 = document.getElementById('colorChoice2').value;
var pSymbol = document.getElementById('symbol').value;

create.onclick = function createRhombus(pSideM, pColorChoice1, pColorChoice2, pSymbol) {
upRight(pSideM, pColorChoice1, pColorChoice2, pSymbol);
downRight(pSideM, pColorChoice1, pColorChoice2, pSymbol);
}

function upRight(pSideM, pColorChoice1, pColorChoice2, pSymbol){
var sideM ="";
for (i=0;i<pSideM;i++){
sideM +="<p>";
//Create each line on the Rhombus
for(j=0;j<=i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
sideM +="<span style='color:" + pColorChoice1 + ";'>" + pSymbol +"</span>";
else
//odd
sideM +="<span style='color:" + pColorChoice2 + ";'>" + pSymbol +"</span>";

}
sideM +="</p>";
// console.log(sideM);

}

document.getElementById("upRight").innerHTML = sideM;
}

function downRight(pSideM, pColorChoice1, pColorChoice2, pSymbol){
var sideM ="";
for (i=sideM;i > 0;i--){
sideM +="<p>";
//Create each line on the Rhombus
for(j=0;j<i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
sideM +="<span style='color:" + pColorChoice1 + ";'>" + pSymbol +"</span>";
else
//odd
sideM +="<span style='color:" + pColorChoice2 + ";'>" + pSymbol +"</span>";

}
sideM +="</p>";
// console.log(sideM);

}

document.getElementById("downRight").innerHTML = sideM;
}