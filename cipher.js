const cipher = {
  encode: function (offset, string) {
    const offsetVazio = !offset
    const offsetString = typeof offset != "number"
    if (offsetVazio || offsetString) {
      throw new TypeError
    }

    let resultEncode = "";
    const charCodeAtletraAmaiuscula = "A".charCodeAt()

    for (let i = 0; i < string.length; i++) {

      let encode = string.charCodeAt(i)
      if (encode >= 65 && encode <= 90) {
        encode = ((encode - 65 + offset) % 26) + 65
      } else if (encode >= 97 && encode <= 122) {
        encode = ((encode - 97 + offset) % 26) + 97
      }

      resultEncode += String.fromCharCode(encode);
    }
    return resultEncode;
  },




  decode: function (offset, string) {

    const offsetVazio = !offset
    const offsetString = typeof offset != "number"
    if (offsetVazio || offsetString) {
      throw new TypeError
    }




    let resultDecode = "";

    for (let i = 0; i < string.length; i++) {

      let decode = string.charCodeAt(i)
      if (decode >= 65 && decode <= 90) {
        decode = ((decode - 90 - offset) % 26) + 90
      } else if (decode >= 97 && decode <= 122) {
        decode = ((decode - 122 - offset) % 26) + 122
      }

      resultDecode += String.fromCharCode(decode);
    }
    return resultDecode;
  },


}


export default cipher;


