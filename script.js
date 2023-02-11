var body = document.body;
var create = document.createElement("button")
create.textContent = "Create Rhombus"
body.appendChild(create);

var pSideM = document.getElementById('sideM').value;
var pColorChoice1 = document.getElementById('colorChoice1').value;
var pColorChoice2 = document.getElementById('colorChoice2').value;
var pSymbol = document.getElementById('symbol').value;
var uR = document.getElementById("upRight")
var dL = document.getElementById("downLeft");
var dR = document.getElementById("downRight");
var uL = document.getElementById("upLeft");

function upRight(pSideM, pColorChoice1, pColorChoice2, pSymbol){
    var sideM = document.createElement("span");
    console.log(sideM);
    for (let i=0; i<=pSideM; i++) {
        sideM.style.backgroundColor = pColorChoice1;
        sideM.textContent = pSymbol;
        console.log(sideM);
        if(i%2 == 0){
            sideM.style.backgroundColor = pColorChoice1;
            sideM.textContent = pSymbol;
        }
        else {
            sideM.style.backgroundColor = pColorChoice2;
            sideM.textContent = pSymbol;
            console.log(sideM);
        }
        uR.appendChild(sideM);
        dL.appendChild(sideM);
    }
}

function downRight(pSideM, pColorChoice1, pColorChoice2, pSymbol){
    var sideM = document.createElement("span"); 
    
    for (let i=0; i<=pSideM; i++) {
        if(i%2 == 0){
            sideM.style.backgroundColor = pColorChoice1;
            sideM.textContent = pSymbol;
            
        }
        else {
            sideM.style.backgroundColor = pColorChoice2;
            sideM.textContent = pSymbol;
        }
        dR.appendChild(sideM);
        uL.appendChild(sideM);
    }
}

create.onclick = function createRhombus(pSideM, pColorChoice1, pColorChoice2, pSymbol) {
    //console.log("clicked");
    upRight(pSideM, pColorChoice1, pColorChoice2, pSymbol);
    downRight(pSideM, pColorChoice1, pColorChoice2, pSymbol);   
}