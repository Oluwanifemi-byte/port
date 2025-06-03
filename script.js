function encrypt() {
	var message = document.getElementById('message').value;
	var encryptedMessage='"';

   for (var i = 0; i <message.length; i++) {
  var asciiValue = message.charCodeAt(i);
  // Add encryption logic here
  encryptedMessage +=String.fromCharCode(asciiValue + 1);//Example:shift each character by 1 position
   }

   document.getElementById('encryptedMessage').value=encryptedMessage;
}

function decrypt() {
	var encryptedMessage=
   document.getElementById('encryptedMessage').value;
    var decryptedMessage='"';

    for (var i = 0; i < encryptedMessage.length; i++) {
    	var asciiValue = encryptedMessage.charCodeAt(i);
    	// Add decryption logic here
    	decryptedMessage += String.fromCharCode(asciiValue- 1);//Example:shift each character back by 1 position
    }
 
 document.getElementById('decryptedMessage').value=decryptedMessage;
}