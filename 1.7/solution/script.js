const name = prompt("Please enter your name here:");
const time = new Date().getHours();

if (time < 12){
    alert(`Guten Morgen ${name}`)
}
if (time > 12 & time < 13){
    alert(`Guten Mittag ${name}`)
}
if (time > 13 & time < 18){
    alert(`Guten Nachmittag ${name}`)
}
if (time > 18 & time < 24){
    alert(`Gute Nacht ${name}`)
}
