const popup = document.querySelector(".popup-wrapper")


function receitas(){
const cafeGelado = document.getElementById("cafeGelado");
cafeGelado.addEventListener("click", function()  {
    popup.style.display = "block";
    document.querySelector(".h2Js").innerHTML = "Café Gelado de Baunilha e Amêndoas🧊";
    document.querySelector(".receita-text").innerHTML = "Descubra a perfeição gelada em cada gole com o nosso Café Gelado de Baunilha e Amêndoas. <br>Esta criação única da nossa cafeteria combina a robustez do café fresco com a suavidade da baunilha e a delicadeza das amêndoas, resultando em uma bebida refrescante e repleta de sabor.";
    document.querySelector(".receita-text2").innerHTML = "<h3><br>Ingredientes:<br></h3>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Café espresso forte</li>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Gelo</li> ";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Leite de amêndoas</li> ";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'> Xarope de baunilha</li>";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Chantilly (opcional)</li> ";
    document.querySelector(".pJs").innerHTML += "<li class = 'ingredientes'>Amêndoas torradas (para decorar)</li> ";
    stop
});
const cafeMocha = document.getElementById("cafeMocha");
cafeMocha.addEventListener("click", function() {
    popup.style.display = "block";
    document.querySelector(".h2Js").innerHTML = "Café Mocha 🍫☕️";
    document.querySelector(".receita-text").innerHTML = "<p>Mergulhe nos prazeres decadentes do nosso Mocha, uma obra-prima de café que combina a intensidade do espresso, a riqueza do chocolate e a indulgência do creme, tudo em um único copo. Cada gole é uma experiência luxuosa que desperta os sentidos e satisfaz os desejos mais refinados.</p>";
    document.querySelector(".receita-text2").innerHTML = "<h3><br>Ingredientes:<br></h3>";
    document.querySelector(".pJs1").innerHTML = "<li class= 'ingredientes'>Espresso duplo</li>";
    document.querySelector(".pJs2").innerHTML = "<li class= 'ingredientes'>Chocolate meio amargo de alta qualidade</li>";
    document.querySelector(".pJs3").innerHTML = "<li class= 'ingredientes'>Leite vaporizado e espumado</li>";
    document.querySelector(".pJs4").innerHTML = "<li class= 'ingredientes'>Chantilly</li>";
    document.querySelector(".pJs5").innerHTML = "<li class= 'ingredientes'>Raspas de chocolate para decorar</li>";
    stop
});
const chaSerenidade = document.getElementById("chaSerenidade");
chaSerenidade.addEventListener("click", function() {
    popup.style.display = "block";
    document.querySelector(".h2Js").innerHTML = "Chá Serenidade Floral🌸";
    document.querySelector(".receita-text").innerHTML = "<p>Explore a tranquilidade em cada gole com o nosso Chá Serenidade Floral, uma infusão meticulosamente preparada para proporcionar uma experiência revigorante e reconfortante. Delicadamente equilibrado com uma mistura de flores e ervas selecionadas, este chá é um convite para um momento de serenidade em meio ao seu dia movimentado.</p>";
    document.querySelector(".receita-text2").innerHTML = "<h3><br>Ingredientes:<br></h3>";
    document.querySelector(".pJs1").innerHTML = "<li class= 'ingredientes'>Chá de camomila de alta qualidade</li>";
    document.querySelector(".pJs2").innerHTML = "<li class= 'ingredientes'>Flores de lavanda</li>";
    document.querySelector(".pJs3").innerHTML = "<li class= 'ingredientes'>Pétalas de rosa</li>";
    document.querySelector(".pJs4").innerHTML = "<li class= 'ingredientes'>Menta fresca</li>";
    document.querySelector(".pJs5").innerHTML = "<li class= 'ingredientes'>Mel orgânico</li>";
});
const cappuccino = document.getElementById("cappuccino");
cappuccino.addEventListener("click", function() {
    popup.style.display = "block";
    document.querySelector(".h2Js").innerHTML = "Capuccino Artesanal";
    document.querySelector(".receita-text").innerHTML = "<p>Renda-se ao prazer inigualável do nosso Capuccino Artesanal, uma mistura irresistível de espresso encorpado, leite vaporizado cremoso e uma pitada de cacau delicado. Cada gole é uma viagem sensorial que desperta os sentidos e proporciona uma experiência de café que transcende as expectativas.</p>";
    document.querySelector(".receita-text2").innerHTML = "<h3><br>Ingredientes:<br></h3>";
    document.querySelector(".pJs1").innerHTML = "<li class= 'ingredientes'>Espresso duplo</li>";
    document.querySelector(".pJs2").innerHTML = "<li class= 'ingredientes'>Leite integral vaporizado e espumado</li>";
    document.querySelector(".pJs3").innerHTML = "<li class= 'ingredientes'>Cacau em pó de alta qualidade</li>";
    document.querySelector(".pJs4").innerHTML = "<li class= 'ingredientes'>Açúcar mascavo (opcional)</li>";
    document.querySelector(".pJs5").innerHTML = "<li class= 'ingredientes'>Canela em pó (para decorar)</li>";
});
const chocolateQuente = document.getElementById("hotChocolate");
chocolateQuente.addEventListener("click", function() {
    popup.style.display = "block";
    document.querySelector(".h2Js").innerHTML = "Chocolate quente";
    document.querySelector(".receita-text").innerHTML = "<p>Entregue-se ao aconchego e à indulgência com o nosso Chocolate Quente. Uma experiência inigualável que combina a suavidade do chocolate premium, a cremosidade do leite e um toque de especiarias cuidadosamente selecionadas. Este é o convite perfeito para um momento de conforto e prazer.</p>";
    document.querySelector(".receita-text2").innerHTML = "<h3><br>Ingredientes:<br></h3>";
    document.querySelector(".pJs1").innerHTML = "<li class= 'ingredientes'>Chocolate amargo</li>";
    document.querySelector(".pJs2").innerHTML = "<li class= 'ingredientes'>Leite integral</li>";
    document.querySelector(".pJs3").innerHTML = "<li class= 'ingredientes'>Creme de leite fresco</li>";
    document.querySelector(".pJs4").innerHTML = "<li class= 'ingredientes'>Extrato de baunilha</li>";
    document.querySelector(".pJs5").innerHTML = "<li class= 'ingredientes'>Canela em pó</li>";
    document.querySelector(".pJs6").innerHTML = "<li class= 'ingredientes'>Marshmallows ou chantilly</li>";
});
const pinkLemonade = document.getElementById("pinkLemonade");
pinkLemonade.addEventListener("click", function() {
    popup.style.display = "block";
    document.querySelector(".h2Js").innerHTML = "pink Lemonade";
    document.querySelector(".receita-text").innerHTML = "<p>Desperte seus sentidos com a nossa Limonada Rosa Refrescante, uma mistura deliciosa que combina a acidez cítrica dos limões frescos com a doçura sutil das frutas vermelhas. Esta bebida vibrante é a escolha perfeita para refrescar o paladar em dias ensolarados, oferecendo um toque de elegância e sabor.</p>";
    document.querySelector(".receita-text2").innerHTML = "<h3><br>Ingredientes:<br></h3>";
    document.querySelector(".pJs1").innerHTML = "<li class= 'ingredientes'>Suco fresco de limão</li>";
    document.querySelector(".pJs2").innerHTML = "<li class= 'ingredientes'>Xarope de framboesa ou morango</li>";
    document.querySelector(".pJs3").innerHTML = "<li class= 'ingredientes'>Açúcar</li>";
    document.querySelector(".pJs4").innerHTML = "<li class= 'ingredientes'>Gelo</li>";  
    document.querySelector(".pJs5").innerHTML = "<li class= 'ingredientes'>Fatias de limão e framboesas para decorar</li>";
    document.querySelector(".pJs6").innerHTML = "<li class= 'ingredientes'>Folhas de hortelã fresca (opcional)</li>";
});
}
function popClose(){
    const closeButton = document.querySelector(".popup-close");
    const popupClose = document.querySelector(".close");
closeButton.addEventListener("click", function() {
    popup.style.display = "none";
});
popupClose.addEventListener("click", function() {
    popup.style.display = "none";
});
}

popClose();
receitas();