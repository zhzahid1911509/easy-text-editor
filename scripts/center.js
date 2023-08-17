let isCenterAligned = false;
document.getElementById("align-center").addEventListener("click", function(){
    
    const imgIClicked = getValueOfId("align-center");
    isCenterAligned = !isCenterAligned;
    if(isCenterAligned){
        imgIClicked.style.border = "1px solid black";
        textarea.style.textAlign = 'center';
        document.getElementById('align-left').style.border = "none";
        document.getElementById('align-right').style.border = "none";
        document.getElementById('align-justify').style.border = "none";
    }
    else{
        imgIClicked.style.border = "none";
        textarea.style.textAlign = 'left';
    }
});