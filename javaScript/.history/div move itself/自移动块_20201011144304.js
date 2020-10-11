var bloc = document.getElementById("bloc");
var vitesse = 2; // Valeur du déplacement en pixels

// Déplace le bloc sur sa gauche
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Déplacement du bloc
    bloc.style.left = (xBloc + vitesse) + "px";
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    requestAnimationFrame(deplacerBloc);
}
requestAnimationFrame(deplacerBloc); // Début de l'animation
