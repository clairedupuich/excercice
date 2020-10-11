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
    myText.className = "blue";
     // les parenthèses sont utilisées avec des METHODES
  for(let i = 0; i < myText.length; i++ ) {
   myText[i].classList.add("blue"); //classList ne peut s'appliquer aux tableaux, c'est pourquoi on l'utilise sur les éléments du tableau tableau[i]
   }
  replaceClass("blue", "red");
  replaceClass("italic", "bold"); 
}
function displayRed() {
    console.log("red");
   replaceClass("red", "blue");
  replaceClass("bold", "italic"); 
}
//以下代码用于把在html文件中把javascript放在head中时。
 window.onload = function() {
 myText = document.getElementsByTagName("p");
 console.log(myText.length); 
 myText = document.getElementById("text");
console.log(myText);
};
 

/*
Exercice :按钮换整体块的颜色
*/

document.addEventListener("keypress", function (e) {
  var touche = String.fromCharCode(e.charCode); // Récupération de la touche pressée
  touche = touche.toUpperCase(); // Pour gérer indifféremment minuscules et majuscules
  var couleur = "";
  switch (touche) {
  case "B":
      couleur = "white";
      break;
  case "J":
      couleur = "yellow";
      break;
  case "V":
      couleur = "green";
      break;
  case "R":
      couleur = "red";
      break;
  default:
      console.log("Touche " + touche + " non gérée");
  }
  // Changement de couleur de fond pour toutes les divs
  var divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
      divs[i].style.backgroundColor = couleur;
  }
});