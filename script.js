function createRhombus(heightValue, firstColor, secondColor, symbolValue) {
    upRight(heightValue, firstColor, secondColor, symbolValue);
    downRight(heightValue, firstColor, secondColor, symbolValue);
}
    
function upRight(heightValue, firstColor, secondColor, symbolValue){
    var rLine ="";
    for (i=0; i<heightValue; i++){
        rLine +="<p>";
        for(j=0;j<=i;j++){
            if (j%2) {
                rLine +="<span style='color:" + firstColor + ";'>" + symbolValue +"</span>";
            }
            else {
                rLine +="<span style='color:" + secondColor + ";'>" + symbolValue +"</span>";
            }
        }
        rLine +="</p>";
    }
    document.getElementById("upRight").innerHTML = rLine;
}
    
function downRight(heightValue, firstColor, secondColor, symbolValue){
    var rLine ="";
    for (i=heightValue;i > 0;i--){
        rLine +="<p>";
        for(j=0;j<i;j++){
            if (j%2) {
                rLine +="<span style='color:" + firstColor + ";'>" + symbolValue +"</span>";
            }
            else {
                rLine +="<span style='color:" + secondColor + ";'>" + symbolValue +"</span>";
            }
        }
        rLine +="</p>"; 
    }
    document.getElementById("downRight").innerHTML = rLine;
}