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
//您可以通过在DOM元素上调用方法focus（以获取焦点）和blur（除去焦点）来修改输入目标。
pseudoElt.focus();
pseudoElt.blur();
//上述代码通常不起作用，最后在网上找到了一个方法，用延时可以解决这个问题，代码如下：
//自动获取帐号的焦点
setTimeout("document.getElementById('ps').focus()",20);
/* 复选框
当框更改值时，Event与事件关联的对象具有布尔属性checked，该属性指示框的新状态（选中/未选中）。
下面的代码示例处理change复选框上的事件，以在控制台中显示用户单击复选框或关联标签时所做的选择。 */
// Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});

/* 单选按钮radio
一组单选按钮允许用户在几种可能性中进行单个选择。我们使用<input type="radio"> 具有相同name和不同value。
以下代码示例change在每个单选按钮上为类型事件添加了相同的处理程序，以便在控制台中显示所选的事件类型。 */
// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function (e) {
        console.log("Formule d'abonnement choisie : " + e.target.value);
    });
}

/* 下拉式清单
以下代码示例使用change在下拉列表上触发的类型事件来显示新选择（与选择关联value的标记的属性<option>）。 */
// Affichage du code de nationalité choisi
document.getElementById("nationalite").addEventListener("change", function (e) {
    console.log("Code de nationalité : " + e.target.value);
});