

$(document).ready(function(){

    var lista_produtos = JSON.parse(localStorage.getItem('lista-produtos') || '[]');

    text = " ";
    for (i = 0; i < lista_produtos.length; i++) { 
        text += "<li class='list-group-item'>" + lista_produtos[i].produto + " - R$ " + lista_produtos[i].preco + 
        "<button class='btn btn-outline-danger btn-sm float-right' onclick='removerCarrinho("+ i + ") '> Remover do Carrinho </button>" + "</li>";
    }

    $( ".listaDoCarrinho" ).append(text);    


    
  });

  function removerCarrinho (posicao){
    var lista_produtos = JSON.parse(localStorage.getItem('lista-produtos') || '[]');
    lista_produtos.splice(posicao, 1);
    localStorage.setItem("lista-produtos", JSON.stringify(lista_produtos));
    location.reload();
  }

  //teste.splice(posicao do item ,  quantos items quer remover)