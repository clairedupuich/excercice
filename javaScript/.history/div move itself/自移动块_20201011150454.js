var bloc = document.getElementById("bloc");
var vitesse = 2; // Valeur du déplacement en pixels位移值（以像素为单位）

// Déplace le bloc sur sa gauche将块向左移动
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    //将块的左侧位置转换为数字（形式为“ XXpx”的值）
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Déplacement du bloc移动块
    bloc.style.left = (xBloc + vitesse) + "px";
    // Demande au navigateur d'appeler deplacerBloc dès que possible要求浏览器尽快调用deplacerBloc
    requestAnimationFrame(deplacerBloc);
}
requestAnimationFrame(deplacerBloc); // Début de l'animation动画开始
/* 
我们的示例代码定义了一个函数，deplacerBloc其作用是将块向左移动。为此，它将获取块左边缘的当前位置，然后将变量中包含的值添加到该块中vitesse，
这具有将块右移的作用。最后，她呼吁requestAnimationFrame继续动画。
位置的值以像素表示。这些是形式为“ XXpx”的字符串，parseFloat在执行计算之前，需要使用该函数将它们转换为数值。
注意不要Number将包含“ px”的字符串转换为数值：它不起作用，返回的结果将是NaN（Not Number）。
该功能requestAnimationFrame允许要求浏览器尽快执行更新动画的功能。术语“尽快”是指浏览器将优化动画的更新以使其平滑。 */


//这是requestAnimationFrame与动画功能结合使用的方法。
/* function animer() {
    // Code de l'animation
    // ...
    requestAnimationFrame(animer);
}
requestAnimationFrame(animer); */

/* 停止动画
现在，让我们看看如何在到达包含该块的帧的末尾时停止该块。为此，必须考虑块本身的厚度，
检查块左边缘的位置是否小于框架的宽度。
这是为此目的修改的JavaScript代码。
 */
var bloc = document.getElementById("bloc");
var cadre = document.getElementById("cadre");
var vitesse = 2; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null; // Identifiant de l'animation

// Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if (xBloc + largeurBloc <= xMax) { // Si le bloc n'est pas encore au bout du cadre
        // Déplacement du bloc
        bloc.style.left = (xBloc + vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        animationId = requestAnimationFrame(deplacerBloc);
    } else {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }
}

animationId = requestAnimationFrame(deplacerBloc); // Début de l'animation    
/* 
新功能deplacerBloc在移动块之前检查块是否已到达帧的末尾。如果是这样，它将通过
调用来停止动画cancelAnimationFrame。
该功能cancelAnimationFrame 允许您停止动画。它带有一个参数，它是动画的标识符，该标识符存储在此处，
animationId并由每次调用返回requestAnimationFrame。 */

/* CSS动画示例
这个主题太丰富了，无法在本课程中涵盖。作为示例，我将向您展示如何使用CSS而不是JavaScript来实现与上一个动画相似的动画。

编辑文件cours.css 以向其中添加以下项目。 */

#bloc {
    /* ... */
    margin-left: -20px; /* Simplifie le calcul des positions initiale et finale du bloc */
    animation-name: deplacerBloc; /* Nom de l'animation */
    animation-duration: 6s; /* Durée de l'animation */
    animation-fill-mode: forwards; /* Laisse le bloc dans sa position finale */
}

@keyframes deplacerBloc {
    from {
        /* Position initiale : bord gauche du cadre (en tenant compte de la marge négative) */
        left: 20px; 
    }
    to {
        /* Position finale : bord droit du cadre (en tenant compte de la marge négative) */
        left: 100%; 
    }
}

