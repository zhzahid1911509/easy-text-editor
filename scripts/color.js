const colorInput = getValueOfId("text-color");

document.getElementById("text-color").addEventListener("input", function(){
    if(colorInput.value == ""){
        textarea.style.color = "black";
    }  
    textarea.style.color = colorInput.value;
});