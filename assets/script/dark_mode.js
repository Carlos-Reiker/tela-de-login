/*function toggleDarkLight() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}*/
function darkMode() {
    var checkBox = document.getElementById('check');

        if(checkBox.checked == true){
            document.body.style.backgroundColor = "#0b090d";
        }else{
            document.body.style.backgroundColor = "#C1CBD6";
        }
}