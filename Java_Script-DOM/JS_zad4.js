function funkcija4() {
    var x=document.getElementById("MojDiv");
    if (x.style.visibility === "unset") {
        x.style.visibility = "hidden";
    }
    else {
        x.style.display = "hidden";
    }
}
function funckija5() {
    var y=document.getElementById("MojDiv");
    if (y.style.visibility === "hidden"){
        y.style.visibility = "unset";
    }
    else{
        y.style.visibility = "unset";
    }
}