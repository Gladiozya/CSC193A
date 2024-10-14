
function clickingHello() {
    alert("Hello World");
  }

function clickBig(){
    document.getElementById("TextBox").style.fontSize = "24pt";
}

function Fancify(){
    document.getElementById("TextBox").style.fontWeight = "bold";
    document.getElementById("TextBox").style.color = "blue";
    document.getElementById("TextBox").style.textDecoration="underline";

}

function Borify(){
    document.getElementById("TextBox").style.fontWeight = "normal";
    document.getElementById("TextBox").style.color = "black";
    document.getElementById("TextBox").style.textDecoration="none";
    document.getElementById("TextBox").style.fontSize = "initial";

}

function clickMoo(){
    document.getElementById("TextBox").style.textTransform="uppercase";
    
    var orginalText=document.getElementById("TextBox");
    var parts=orginalText.value.split(".");
    var newText=parts.join("-Moo");
    orginalText.value=newText;
    
}
