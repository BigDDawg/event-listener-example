var button = document.getElementById("button");

var backgroundDiv = document.getElementById("colorBackground");


button.addEventListener('click', function(event) {
    console.log('button is clicked!')
    alert("Button was Clicked");
    backgroundDiv.style.background = "#f3f3f3";
    backgroundDiv.style.padding = "40px";
    backgroundDiv.style.border = "5px solid red";
})