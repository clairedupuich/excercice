/* 您可能已经注意到，标记<form> 不包含通常的action和属性method。这些属性用于定义从服务器请求
的资源以及用于此请求的请求类型。由于我们的表单将仅使用JavaScript在客户端进行管理，因此此处多余。 */

// Affichage d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("blur", function (e) {
    document.getElementById("aidePseudo").textContent = "";
});