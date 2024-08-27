function encriptarTexto() {
  let encriptarTexto = document.getElementById("cajaTexto1").value; 
  let textoEncriptado = encriptarTexto.replace(/a/g, "ai")
                                      .replace(/e/g, "enter")
                                      .replace(/i/g, "imes")
                                      .replace(/o/g, "ober")
                                      .replace(/u/g, "ufat");

  console.log(textoEncriptado);
  cajaTextoResultado.value = textoEncriptado;
}

function descifrarTexto() {

   let textoEncriptado = document.getElementById("cajaTexto1").value; 

  let descifrarTexto = textoEncriptado.value; 
  let textoDescifrado = textoEncriptado.replace(/enter/g, "e") 
                                      .replace(/imes/g, "i") 
                                      .replace(/ober/g, "o") 
                                      .replace(/ufat/g, "u") 
                                      .replace(/ai/g, "a");

  console.log(textoDescifrado);
  cajaTextoResultado.value = textoDescifrado;
}


