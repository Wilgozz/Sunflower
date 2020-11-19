
$(document).ready(function(){

    $("#finalizarCompra").click(function(){
        window.location.href = "paginaCartao.html"
    });

    $("#compraFinalizada").click(function(){
        alert("Compra aprovada com sucesso!");
    });

});



function addCarrinho (produto, preco){
  
    // Pega a lista já cadastrada, se não houver vira um array vazio
    var lista_produtos = JSON.parse(localStorage.getItem('lista-produtos') || '[]');
    // Adiciona pessoa ao cadastro
    lista_produtos.push({
        produto: produto,
        preco: preco
    });

    // Salva a lista alterada
    localStorage.setItem("lista-produtos", JSON.stringify(lista_produtos));

    console.log('Salva com sucesso.');

    alert("Produto adicionado ao carrinho com sucesso!");

}