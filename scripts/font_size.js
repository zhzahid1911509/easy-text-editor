document.getElementById("font-size").addEventListener("input", function(){
    const fontInput = getValueOfId("font-size");
    textarea.style.fontSize = fontInput.value + 'px';  
});