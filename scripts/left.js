let isLeftAligned = false;
document.getElementById("align-left").addEventListener("click", function(){
    const imgIClicked = getValueOfId("align-left");
    isLeftAligned = !isLeftAligned;
    if(isLeftAligned){
        imgIClicked.style.border = "1px solid black";
        textarea.style.textAlign = 'left';
        document.getElementById('align-center').style.border = "none";
        document.getElementById('align-right').style.border = "none";
    }
    else{
        imgIClicked.style.border = "none";  
    }
});