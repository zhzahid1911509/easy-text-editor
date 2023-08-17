const fontInput = getValueOfId("font-size");

document.getElementById("font-size").addEventListener("input", function(){
    if(fontInput.value == ""){
        textarea.style.fontSize = '12pt';
    }  
    textarea.style.fontSize = fontInput.value + 'pt';
});