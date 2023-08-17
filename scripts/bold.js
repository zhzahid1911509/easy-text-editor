let countB = 0;

//make text bold
document.getElementById("bold-text").addEventListener("click", function(){
    countB++;
   
    const imgBClicked = getValueOfId("bold-text");
    if(countB%2 != 0){
        imgBClicked.style.border = "1px solid black";
        textarea.style.fontWeight = "bold";
    }
    else{
        imgBClicked.style.border = "none";
        textarea.style.fontWeight = "normal";
    }
    
});