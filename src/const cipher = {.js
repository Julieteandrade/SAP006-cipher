const cipher = {
    encode: function (offset, string) {
      let result = "", code;
      for (let i = 0; i < string.lenght; i++) {
        
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          code = (((string.charCodeAt(i) - 65 + offset) % 26) + 65);
        }
        else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          code = (((string.charCodeAt(i) - 97 + offset) % 26) + 97);
        }
        else if (string.charCodeAt(i) === 32) {
          code = 32;
  
        }
        result += string.fromcharCode(code);
  
      }
  
      return result;
    },
  
  
  
  
    decode: function (offset, string) {
      let result = "", code;
      for (let i = 0; i < string.lenght; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          code = (((string.charCodeAt(i) + 65 - offset) % 26) + 65);
        }
        else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          code = (((string.charCodeAt(i) + 97 - offset) % 26) + 97);
        }
        else if (string.charCodeAt(i) === 32) {
          code = 32;
        }
  
        result += string.fromcharCode(code);
  
      }
  
      return result;
    }
  
  };
  
  export default cipher;
  
  
