/* 您可能已经注意到，标记<form> 不包含通常的action和属性method。这些属性用于定义从服务器请求
的资源以及用于此请求的请求类型。由于我们的表单将仅使用JavaScript在客户端进行管理，因此此处多余。 */


//可以使用属性访问文本框的值valueDOM元素匹配项。通过为该属性赋予新值，我们修改了显示在文本区域中的值。
let pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";
pseudoElt.placeholder = "dit bojour à claire";
//聚焦和失焦的管理
// Affichage d'un message contextuel pour la saisie du pseudo聚焦


/* pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").innerHTML = "Entrez votre pseudo";
}); */

// Suppression du message contextuel pour la saisie du pseudo失焦 
 pseudoElt.addEventListener("blur", function (e) {
    document.getElementById("aidePseudo").textContent = "";
}); 

