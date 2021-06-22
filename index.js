import cipher from './cipher.js';

function encode(e) {
e.preventDefault();
  let offset = Number(document.getElementById("keynumber").value);
  

  let string = document.getElementById("mensagem").value;
  
  document.getElementById("resultado").value = cipher.encode(offset, string);
  
  
}

function decode(e) {
e.preventDefault();
  let offset = Number(document.getElementById("keynumber").value);
  let string = document.getElementById("mensagem").value;
  document.getElementById("resultado").value = cipher.decode(offset, string);

}

let btnEncode = document.getElementById("encodebutton");
btnEncode.addEventListener("click", encode);

let btnDecode = document.getElementById("decodebutton");
btnDecode.addEventListener("click", decode);


