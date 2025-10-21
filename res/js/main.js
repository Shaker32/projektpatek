const draven = document.getElementById("draven");
const counter = document.getElementById("counter");

let numberOfDravens = 0;
//.onclick - na kliknuti
// () => arrow funkce
// {} - scope
draven.onclick = () => {
    //zvednout cislo o 1
numberOfDravens += 2;

    //zobrazit v odstavci
    counter.innerText = "dravens:" + numberOfDravens;
}  