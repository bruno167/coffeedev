const cafeMocha = document.getElementById("cafeMocha");
const cafeGelado = document.getElementById("cafeGelado");
const popup = document.querySelector(".popup-wrapper")
const closeButton = document.querySelector(".popup-close");
const popupClose = document.querySelector(".close");

cafeGelado.addEventListener("click", function()  {
    popup.style.display = "block";
    content = document.querySelector(".h2Js").innerHTML = "Café gelado 🧊";
    content = document.querySelector(".pJs").innerHTML = "café <br> Leite <br> ";
});


cafeMocha.addEventListener("click", function() {
    popup.style.display = "block";
    content = document.querySelector(".h2Js").innerHTML = "Café Mocha 🍫☕️";
    content = document.querySelector(".pJs").innerHTML = "<br>240ml de café<br> chocolate <br> leite <br> açúcar";
})

closeButton.addEventListener("click", function() {
    popup.style.display = "none";
})
popupClose.addEventListener("click", function() {
    popup.style.display = "none";
})


