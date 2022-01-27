// funçao para criptografar
function criptografar(entrada){
    let entradaTextoArray = [];
    entradaTextoArray = entrada.split("");   // separa letras
    let saidaCriptografada = "";
    
    for(let i = 0; i < entradaTextoArray.length; i++ ) {
      if(entradaTextoArray[i] == "a"){
        saidaCriptografada += "ai"; 
      }
      else if(entradaTextoArray[i] == "e"){
        saidaCriptografada += "enter"; 
      }
      else if(entradaTextoArray[i] == "i"){ 
          saidaCriptografada += "imes";
      }
      else if ( entradaTextoArray[i] == "o"){
          saidaCriptografada += "ober"; 
      }
      else if( entradaTextoArray[i] == "u"){
          saidaCriptografada += "ufat"; 
      }
      else {
            saidaCriptografada += entradaTextoArray[i];
  
          }
    }
    
    return saidaCriptografada;
    
  }
  
  //chamando a função e
  function chamarcriptografar(){
    var msg = document.getElementById("msg");
    var form = document.querySelector('#form');
    var cripto = document.querySelector('#botao-cripto');
    var descriptografar = document.querySelector('#botao-descripto');
    var texto_input = document.querySelector(".texto-input").value;
    var resultado = criptografar(texto_input);
    msg.value = resultado;
  
    console.log(resultado);
  
  
  }
  //botão copiar
  function copy() {
    let copyText = document.querySelector('#msg')
    copyText.select()
    document.execCommand('copy')
    copyText.value = ''
  }
  //console.log(criptografar('quero dormir'))
  ///mostra(criptografar("quero dormir"));
  
  ///mostra(decode("vaiimes tobermair nober cufat"));
  