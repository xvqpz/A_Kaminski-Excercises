let button = document.createElement("button");
button.innerText = "Spausk Mane!";
button.addEventListener("click", function (){
    alert("Sveiki atvyke i Javascript pasauli")
});

document.getElementById("button").appendChild(button);