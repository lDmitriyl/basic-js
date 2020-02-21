class VigenereCipheringMachine {
    arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    constructor(type) {
        this.type = type == false ? 'reverse' : 'direct';
    }

    encrypt(message,key) {
        if(message === undefined || key === undefined)
          throw new Error("parameter has not been given");
        message = String(message.toUpperCase());
        if(message.match(/[a-z]/gi) == null) return message;
        key = key.repeat(Math.ceil(message.match(/[a-z]/gi).length / key.length)).toUpperCase();
        let array = [];
        for(let i = 0, j = 0; i < message.length; i++){
          if (message[i].match(/[a-z]/gi)){ 
            this.arr.indexOf(message[i]) + this.arr.indexOf(key[j]) > 25 ? array.push(this.arr[this.arr.indexOf(message[i]) + this.arr.indexOf(key[j]) - 26]) : array.push(this.arr[this.arr.indexOf(message[i]) + this.arr.indexOf(key[j])]);
            j++;
          }else{
            array.push(message[i]);
          }
        }
        return this.type == 'direct' ? array.join('') : array.reverse().join('');
    }

    decrypt(encryptedMessage,key) {
        if(encryptedMessage === undefined || key === undefined)
          throw new Error("parameter has not been given");  
        if(encryptedMessage.match(/[a-z]/gi) == null) return encryptedMessage;
        key = key.repeat(Math.ceil(encryptedMessage.match(/[a-z]/gi).length / key.length)).toUpperCase();
        let array = [];
        for(let i = 0, j = 0; i < encryptedMessage.length; i++){
          if (encryptedMessage[i].match(/[a-z]/gi)){
            this.arr.indexOf(encryptedMessage[i]) + this.arr.length - this.arr.indexOf(key[j]) > 25 ? array.push(this.arr[this.arr.indexOf(encryptedMessage[i]) + this.arr.length - this.arr.indexOf(key[j]) - 26]) : array.push(this.arr[this.arr.indexOf(encryptedMessage[i]) + this.arr.length - this.arr.indexOf(key[j])]);
              j++
          }else{
            array.push(encryptedMessage[i]);
          }
        }
        return this.type == 'direct' ? array.join('') : array.reverse().join('');
    }
    
}

module.exports = VigenereCipheringMachine;
