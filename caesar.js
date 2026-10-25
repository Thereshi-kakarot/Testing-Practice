function caesarCipher(string, shiftFactor) {
    

    if(!/[a-z]/.test(string)) {
        return string;
    }
    let position = string.charCodeAt(0) - "a".charCodeAt(0);

    let shiftedPosition = (position + shiftFactor) % 26;

    return String.fromCharCode(shiftedPosition + "a".charCodeAt(0));
} 

module.exports = caesarCipher;