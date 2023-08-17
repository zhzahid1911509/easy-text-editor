const fontInput = getValueOfId("font-size");

document.getElementById("font-size").addEventListener("input", function(){
    if(fontInput.value == ""){
        textarea.style.fontSize = '10px';
    }  
    textarea.style.fontSize = fontInput.value + 'px';
});