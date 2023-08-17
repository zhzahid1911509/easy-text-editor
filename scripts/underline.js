let countU = 0;

//make text underlined

document.getElementById("underline-text").addEventListener("click", function(){
    countU++;
    const imgIClicked = getValueOfId("underline-text");
    if(countU%2 != 0){
        imgIClicked.style.border = "1px solid black";
        textarea.style.textDecoration = "underline";
    }
    else{
        imgIClicked.style.border = "none";
        textarea.style.textDecoration = "none";
    }
});