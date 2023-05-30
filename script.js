document.getElementById("encryptBtn").addEventListener("click", function() {
  var inputText = document.getElementById("inputText").value;
  if (validateInput(inputText)) {
    var encryptedText = customEncrypt(inputText);
    document.getElementById("encryptedText").value = encryptedText;
    document.getElementById("inputText").value = "";
  } else {
    alert("Ingrese solo las letras 'e', 'i', 'a', 'o', 'u'");
    document.getElementById("inputText").value = "";
    document.getElementById("encryptedText").value = "";
  }
});

document.getElementById("decryptBtn").addEventListener("click", function() {
  var encryptedText = document.getElementById("encryptedText").value;
  if (validateInput(encryptedText)) {
    var decryptedText = customDecrypt(encryptedText);
    document.getElementById("decryptedText").value = decryptedText;
  } else {
    alert("Ingrese solo las letras 'enter', 'imes', 'ai', 'ober', 'ufat'");
    document.getElementById("inputText").value = "";
    document.getElementById("encryptedText").value = "";
  }
});

function validateInput(text) {
  var validCharacters = /^[eiAaOoUu]*$/;
  return validCharacters.test(text);
}

function customEncrypt(text) {
  var encryptedText = text;

  encryptedText = encryptedText.replace(/e/g, "enter");
  encryptedText = encryptedText.replace(/i/g, "imes");
  encryptedText = encryptedText.replace(/a/g, "ai");
  encryptedText = encryptedText.replace(/o/g, "ober");
  encryptedText = encryptedText.replace(/u/g, "ufat");

  return encryptedText;
}

function customDecrypt(encryptedText) {
  var decryptedText = encryptedText;

  decryptedText = decryptedText.replace(/enter/g, "e");
  decryptedText = decryptedText.replace(/imes/g, "i");
  decryptedText = decryptedText.replace(/ai/g, "a");
  decryptedText = decryptedText.replace(/ober/g, "o");
  decryptedText = decryptedText.replace(/ufat/g, "u");

  return decryptedText;
}
