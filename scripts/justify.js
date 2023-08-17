let isJustified = false;
document.getElementById("align-justify").addEventListener("click", function(){
    const imgIClicked = getValueOfId("align-justify");
    isJustified = !isJustified;
    if(isJustified){
        imgIClicked.style.border = "1px solid black";
        textarea.style.textAlign = 'justify';
        document.getElementById('align-left').style.border = "none";
        document.getElementById('align-center').style.border = "none";
        document.getElementById('align-right').style.border = "none";
    }
    else{
        imgIClicked.style.border = "none";
        textarea.style.textAlign = 'left';
    }
});