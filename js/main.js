const popup = document.querySelector(".popup-wrapper")
const closeButton = document.querySelector(".popup-close");
const popupClose = document.querySelector(".close");

function receitas(){
const cafeGelado = document.getElementById("cafeGelado");
cafeGelado.addEventListener("click", function()  {
    popup.style.display = "block";
    document.querySelector(".h2Js").innerHTML = "Café Gelado de Baunilha e Amêndoas🧊";
   content = document.querySelector(".pJs").innerHTML = "Descubra a perfeição gelada em cada gole com o nosso Café Gelado de Baunilha e Amêndoas. <br>Esta criação única da nossa cafeteria combina a robustez do café fresco com a suavidade da baunilha e a delicadeza das amêndoas, resultando em uma bebida refrescante e repleta de sabor.";
   content = document.querySelector(".pJs").innerHTML += "<h3>Ingredientes:</h3>";
   content = document.querySelector(".pJs").innerHTML += "<p class = 'ingredientes'> Café espresso forte</p>";
   content = document.querySelector(".pJs").innerHTML += "<p class = 'ingredientes'>Gelo</p> ";
   content = document.querySelector(".pJs").innerHTML += "<p class = 'ingredientes'>Leite de amêndoas</p> ";
   content = document.querySelector(".pJs").innerHTML += "<p class = 'ingredientes'> Xarope de baunilha</p>";
   content = document.querySelector(".pJs").innerHTML += "<p class = 'ingredientes'>Chantilly (opcional)</p> ";
   content = document.querySelector(".pJs").innerHTML += "<p class = 'ingredientes'>Amêndoas torradas (para decorar)</p> ";
});
const cafeMocha = document.getElementById("cafeMocha");
cafeMocha.addEventListener("click", function() {
    popup.style.display = "block";
    document.querySelector(".h2Js").innerHTML = "Café Mocha 🍫☕️";
    document.querySelector(".pJs").innerHTML = "<br>240ml de café<br> chocolate <br> leite <br> açúcar";
});
}
function popClose(){
closeButton.addEventListener("click", function() {
    popup.style.display = "none";
});
popupClose.addEventListener("click", function() {
    popup.style.display = "none";
});
}

popClose();
receitas();