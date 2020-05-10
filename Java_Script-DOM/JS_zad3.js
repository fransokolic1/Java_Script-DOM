var boje = ["lightblue", "black"],
    index = 0;
function funckija3() {
    document.getElementById("pTag").style.background = boje[index];
    index = (index + 1) % boje.length;
}