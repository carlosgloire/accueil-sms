document.getElementById("openmenu").addEventListener("click", function() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("openmenu").style.display = "none";
    document.getElementById("closemenu").style.display = "block";
});

document.getElementById("closemenu").addEventListener("click", function(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("openmenu").style.display = "block";
    document.getElementById("closemenu").style.display = "none";
});
