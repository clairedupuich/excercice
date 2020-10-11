let myText;
/**
 * add a class and remove a class
 * @param {*} classToAdd class to add
 * @param {*} classToRemove class to remove
 */
function replaceClass(classToAdd, classToRemove) {
    myText.classList.add(classToAdd);
    myText.classList.remove(classToRemove);
}
function displayBlue() {
    console.log("blue");
     // les parenthèses sont utilisées avec des METHODES
    // for(let i = 0; i < myText.length; i++ ) {
    //     myText[i].classList.add("blue"); //classList ne peut s'appliquer aux tableaux, c'est pourquoi on l'utilise sur les éléments du tableau tableau[i]
    // }
  replaceClass("blue", "red");
  replaceClass("italic", "bold");
}
function displayRed() {
    console.log("red");
    replaceClass("red", "blue");
  replaceClass("bold", "italic");
}
/* window.onload = function() {
    // myText = document.getElementsByTagName("p");
/* console.log(myText.length); */
myText = document.getElementById("text");
console.log(myText);
};
 */




