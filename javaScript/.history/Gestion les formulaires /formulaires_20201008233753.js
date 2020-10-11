/* 您可能已经注意到，标记<form> 不包含通常的action和属性method。这些属性用于定义从服务器请求
的资源以及用于此请求的请求类型。由于我们的表单将仅使用JavaScript在客户端进行管理，因此此处多余。 */


/* 可以使用属性访问文本框的值valueDOM元素匹配项。通过为该属性赋予新值，我们修改了显示在文本区域中的值。
value和 placeholder一起使用时，前者一般会覆盖后者，等value的值被用户在页面上删除后，placeholder的
值会紧跟着显示出来。
 */
let pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";
pseudoElt.placeholder = "dit bojour à claire";
//聚焦和失焦的管理
// Affichage d'un message contextuel pour la saisie du pseudo聚焦
 pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").innerHTML = "Entrez votre pseudo";
}); 

// Suppression du message contextuel pour la saisie du pseudo失焦 
 pseudoElt.addEventListener("blur", function (e) {
    document.getElementById("aidePseudo").textContent = "";
}); 

// Focus sur la zone de saisie du pseudo在JavaScript代码中，
//您可以通过在DOM元素上调用方法focus（以提供焦点）和blur（除去焦点）来修改输入目标。
pseudoElt.focus();
pseudoElt.blur();
最后在网上找到了一个方法，用延时可以解决这个问题，代码如下：

//自动获取帐号的焦点
/* setTimeout("pseudoElt.focus()",50); */