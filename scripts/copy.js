document.getElementById("copyButton").addEventListener("click", function() {
    var textarea = document.getElementById("text-editor");
    textarea.select();
    document.execCommand("copy");
    alert("Text copied to clipboard: ");
});