开始重复动作
这个例子如何工作？JavaScript程序定义了一个函数diminuerCompteur，该函数检索然后递减（递减1）显
示计数器值的HTML元素的值。调用Number将计数器文本（字符串）转换为数值。为了能够进行减法的数学运算，这种转换是必不可少的。
var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);        
    compteurElt.textContent = compteur - 1;
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
/* 这setInterval是开始倒数计时的电话 。该函数用于定期调用函数。参数setInterval是要调用的函数以及
两次调用之间的延迟。此延迟以毫秒表示。 */
setInterval(diminuerCompteur, 1000);

/* 撤消重复动作
现在让我们尝试在倒计时结束后停止计数器。我们将借此机会修改页面的文本。这是我们的示例的JavaScript代码，对
其进行了修改以实现此结果。 */
var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        // Annule l'exécution répétée
        clearInterval(intervalId);
        // Modifie le titre de la page
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
    }
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);