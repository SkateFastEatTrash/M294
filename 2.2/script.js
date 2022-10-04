const name = ["Franz", "Jenny", "Karen", "Joseph", "Richard", "Florenze"];
console.log(name.sort())
const nameUpper = name.map((element) => {
    return element.toUpperCase();
});

function toCeasar(input){
    const characters = input.split("");
    const newCharacters = characters.map((characters) => {
        return String.fromCharCode((characters.charCodeAt(0) -65 + 13) % 26 + 65);
    })
    return newCharacters.join("");
}
console.log(toCeasar(nameUpper[0]))