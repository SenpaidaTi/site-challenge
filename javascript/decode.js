//  criando o decodificador de mensagem
var decodificacao ={
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u',
  }

  function decode(textoEncryptado){
    const regex_keys = /ai|enter|imes|ober|ufat/gi;
    const regex_caracters = /(?:^|\s)\S/g;
  
    return textoEncryptado.replace(regex_keys, (item) => {
      let it = decodificacao[item];
      let itemLista = it.replace(regex_caracters , function(elemento) { 
        return elemento.toLowerCase();
      });
      return itemLista;
    });
  }

  function chamardescripto(){
    var msg = document.getElementById("msg");
    var texto_input = document.querySelector(".texto-input").value;
    var resultado = decode(texto_input);
    msg.value = resultado;
  }