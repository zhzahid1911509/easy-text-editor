
let isRightAligned = false;
document.getElementById("align-right").addEventListener("click", function(){
    const imgIClicked = getValueOfId("align-right");
    isRightAligned = !isRightAligned;
    if(isRightAligned){
        imgIClicked.style.border = "1px solid black";
        textarea.style.textAlign = 'right';
        document.getElementById('align-left').style.border = "none";
        document.getElementById('align-center').style.border = "none";
        document.getElementById('align-justify').style.border = "none";
    }
    else{
        imgIClicked.style.border = "none";
        textarea.style.textAlign = 'left';
    }
});