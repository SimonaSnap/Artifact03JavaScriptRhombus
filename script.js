var body = document.body;
var create = document.createElement("button")
create.textContent = "Create Rhombus"
body.appendChild(create);

var pSideM = document.getElementById('sideM').value;
var pColorChoice1 = document.getElementById('colorChoice1').value;
var pColorChoice2 = document.getElementById('colorChoice2').value;
var pSymbol = document.getElementById('symbol').value;

create.onclick = function createRhombus(pSideM, pColorChoice1, pColorChoice2, pSymbol) {
    //console.log("clicked");
    upRight(pSideM, pColorChoice1, pColorChoice2, pSymbol);
    downRight(pSideM, pColorChoice1, pColorChoice2, pSymbol);
}

function upRight(pSideM, pColorChoice1, pColorChoice2, pSymbol){
    var sideM = document.createElement("span");
    var uR = document.getElementById("upRight")
    var dL = document.getElementById("downLeft");
    console.log(sideM);
    for (i=0;i<pSideM;i++){
        //Create each line on the Rhombus
        for(j=0;j<=i;j++){
            //Is the position even or odd so we change the color
            if (j%2){
                sideM.style.color = pColorChoice1;
                sideM.textContent = pSymbol;
            }
            else {
                sideM.style.color = pColorChoice2;
                sideM.textContent = pSymbol;
            }
            console.log(sideM);
        }
        uR.append(sideM);
        dL.append(sideM);
    }
}

function downRight(pSideM, pColorChoice1, pColorChoice2, pSymbol){
    var sideM = document.createElement("span"); 
    var dR = document.getElementById("downRight");
    var uL = document.getElementById("upLeft");
    for (i=pSideM;i > 0;i--){
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
        
        dR.append(sideM);
        uL.append(sideM);
    }
}

