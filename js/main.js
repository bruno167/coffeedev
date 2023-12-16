const popup = document.querySelector(".popup-wrapper")
const closeButton = document.querySelector(".popup-close");
const popupClose = document.querySelector(".close");

function receitas(){
const cafeGelado = document.getElementById("cafeGelado");
cafeGelado.addEventListener("click", function()  {
    popup.style.display = "block";
    document.querySelector(".h2Js").innerHTML = "Café Gelado de Baunilha e Amêndoas🧊";
    document.querySelector(".pJs").innerHTML = "Descubra a perfeição gelada em cada gole com o nosso Café Gelado de Baunilha e Amêndoas. <br>Esta criação única da nossa cafeteria combina a robustez do café fresco com a suavidade da baunilha e a delicadeza das amêndoas, resultando em uma bebida refrescante e repleta de sabor.";
    document.querySelector(".pJs").innerHTML += "<h3><br>Ingredientes:<br></h3>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Café espresso forte</li>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Gelo</li> ";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Leite de amêndoas</li> ";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'> Xarope de baunilha</li>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Chantilly (opcional)</li> ";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Amêndoas torradas (para decorar)</li> ";
});
const cafeMocha = document.getElementById("cafeMocha");
cafeMocha.addEventListener("click", function() {
    popup.style.display = "block";
    
    document.querySelector(".h2Js").innerHTML = "Café Mocha 🍫☕️";
    document.querySelector(".receita-text").innerHTML += "<p>Mergulhe nos prazeres decadentes do nosso Mocha, uma obra-prima de café que combina a intensidade do espresso, a riqueza do chocolate e a indulgência do creme, tudo em um único copo. Cada gole é uma experiência luxuosa que desperta os sentidos e satisfaz os desejos mais refinados.</p>";
    document.querySelector(".receita-text").innerHTML += "<h3><br>Ingredientes:<br></h3>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Espresso duplo</li>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Chocolate meio amargo de alta qualidade</li>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Leite vaporizado e espumado</li>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Chantilly</li>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Raspas de chocolate para decorar</li>";
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