function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;


function reverseString(string){
    return string.split('').reverse().join('');
}

module.exports = reverseString;