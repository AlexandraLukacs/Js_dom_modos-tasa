/* Fogjuk meg az azon nevezetű elemet */
const azonELEM = document.getElementById("azon")
const azonELEM2 = document.querySelector("#azon")
console.log(azonELEM) /* Típusa HTML elem */
console.log(azonELEM2) /* Típusa HTML elem */
console.log(typeof azonELEM) /* Tpusa HTML elem */

azonELEM.innerHTML="Alakul a JS!"

/* kartya elemek elérése */

const kartyaELEM = document.getElementsByClassName("kartya")
console.log(kartyaELEM) /* Típusa HTML collection, lista */
/* A 2. kártyába szeretnék beírni */
kartyaELEM[1].innerHTML="Beleírrtunk a második kártyába!"

const kartyaELEM2 = document.querySelector(".kartya")
console.log(kartyaELEM2) /* Az első ilyen HTML elemet kapjuk */

const kartyaELEM3 = document.querySelectorAll(".kartya")
console.log(kartyaELEM3) /* nodelist - lista */

/* 3. divet akarom elérni, írjunmk bele vmit */
kartyaELEM3[2].innerHTML+="<p>hozzáírunk valamit</p>"

/* Fogjuk meg a button gombot */
const buttonELEM = document.querySelectorAll("button")[0]
console.log(buttonELEM)

/* Kattintsunk rá a gombra, ráteszünk egy eseménykezelőt */
buttonELEM.addEventListener("click",gombraKattint)
/* Ez a függvény csak egy referncia, hivatkozás a függvényre */
function gombraKattint(){
    //alert("Hurrá, rákattintottál a gombra!")
    /* Ha rákattintunk a gombra, akkor az első kártyába
    kerüljön hozzá a 4. kártya tartalma is */
    kartyaELEM3[0].innerHTML += kartyaELEM3[3].innerHTML
}
