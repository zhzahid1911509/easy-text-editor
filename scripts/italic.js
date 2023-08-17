let countI = 0;

//make text italic
document.getElementById("italic-text").addEventListener("click", function(){
    countI++;
    const imgIClicked = getValueOfId("italic-text");
    if(countI%2 != 0){
        imgIClicked.style.border = "1px solid black";
        textarea.style.fontStyle = "italic";
    }
    else{
        imgIClicked.style.border = "none";
        textarea.style.fontStyle = "normal";
    }
});