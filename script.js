var create = document.createElement("button")
create.onclick = createRhombus(document.getElementById('sideM').value,
    document.getElementById('colorChoice1').value,
    document.getElementById('colorChoice2').value,
    document.getElementById('symbol').value);
create.textContent = "Create Rhombus"

body.appendChild(create);

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upRight(pHeight, pColorEven, pColorOdd, pSymbol);
downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=0;i<pHeight;i++){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<=i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
rLine +="<p>";
//Create each line on the Rhombus
for(j=0;j<i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("downRight").innerHTML = rLine;
}