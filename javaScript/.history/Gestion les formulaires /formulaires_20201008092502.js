/* 您可能已经注意到，标记<form> 不包含通常的action和属性method。这些属性用于定义从服务器请求
的资源以及用于此请求的请求类型。由于我们的表单将仅使用JavaScript在客户端进行管理，因此此处多余。 */
。

// Focus sur la zone de saisie du pseudo
pseudoElt.focus();
这些元素允许用户在几种可能性中进行选择。change当用户修改其选择时，它们通常会触发类型的事件

通常，提交表单会导致将其数据发送到action标签  属性标识的资源<form>。但是在此之前，
submit会在与表单相对应的DOM元素上引发类型事件。通过为此类事件添加管理员，
您可以在发送表单数据之前对其进行访问。您甚至可以通过preventDefault在Event与事件关联的对象上调用方法来取消后续的数据发送。

// Affichage d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("blur", function (e) {
    document.getElementById("aidePseudo").textContent = "";
});