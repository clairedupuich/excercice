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
//e.target.checked返回复选框是否已经检查的布尔值
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});

/* 单选按钮radio
一组单选按钮允许用户在几种可能性中进行单个选择。我们使用<input type="radio"> 具有相同name和不同value。
以下代码示例change在每个单选按钮上为类型事件添加了相同的处理程序，以便在控制台中显示所选的事件类型。 */
// Affichage du type d'abonnement choisi
//e.target.value显示事件目标的value值
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

/* 
访问表单字段
<form> 定义形式的标签对应于DOM的元素。此元素具有elements对表单的输入字段进行分组的属性。
您可以使用它从名称（属性name）或从其索引（以表单的出现顺序）访问字段。
下面的示例显示有关初始表单输入字段的一些信息。 */
var form = document.querySelector("form");//定位到表格
console.log("Nombre de champs de saisie : " + form.elements.length); //这里指表格里input,select,textetra类的个数
console.log(form.elements[0].name);//第一个表格元素的名字
console.log(form.elements.mdp.type); //这里的mdp应该是form中某个input的名字，用来查询它的类型

/* 提交表格
提交表单会导致将其数据发送到action属性标识的资源地址
下面的示例代码在控制台中显示用户输入或选择的所有信息，然后
使用该方法 preventDefault取消发送表单数据。 */
// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        console.log("Vous êtes français(e)");
        break;
    case "BE":
        console.log("Vous êtes belge");
        break;
    case "SUI":
        console.log("Vous êtes suisse");
        break;
    default:
        console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault(); // Annulation de l'envoi des données取消发送以上所有数据。
});

/* 验证输入数据
有效性检查可以通过几种方式完成，可以结合使用：

1 输入数据时；
2 在数据输入结束时；
3 用户提交表单时。
最后一种技术只是submit在表单的事件处理程序中添加检查。我们将仔细研究其他两个。
输入时验证
输入期间的验证基于事件的使用，input每次修改其值时都会在输入区域上触发事件。
以下代码示例input在密码输入框上添加了事件处理程序。该管理员检查输入密码的长度（字符数），并以适当的内容和颜色向用户显示一条消息。
 */
// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function (e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var longueurMdp = "faible";
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green"; // Longueur suffisante => couleur verte
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange"; // Longueur moyenne => couleur orange
    }
    var aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp; // Texte de l'aide
    aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});

/* 条目末尾的验证
文本区域中条目的结尾对应于此区域失去焦点，这会触发blur可用于检查输入数据的类型的事件的出现。
例如，假设我们要控制表单用户输入的电子邮件。首先，我们只想检查@输入电子邮件中字符的存在。为此，
我们可以使用JavaScript indexOf方法，该方法 允许您在字符串中搜索值，如果找不到该值，则返回值-1。
这是与此验证关联的JavaScript代码。 */
// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {
    var validiteCourriel = "";
    if (e.target.value.indexOf("@") === -1) {
        // Le courriel saisi ne contient pas le caractère @
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});

/* 使用正则表达式
我们先前的检查至少可以说是原始的：字符串至少包含一次字符@以使其成为有效的电子邮件地址是不够的。可以使用正则表达式定义更严格的检查条件。
一个正则表达式，也被称为常规表达式，定义了一个模式，我们将比较字符串找到（或没有）的比赛。大多数编程语言都允许您使用正则表达式。 
首先，让我们尝试使用正则表达式来表达我们上面用方法编写的相同内容indexOf：@字符串中字符的存在。这是相关的JavaScript代码。*/
var regex = /@/; // La chaîne doit contenir le caractère @
console.log(regex.test("")); // Affiche false
console.log(regex.test("@")); // Affiche true
console.log(regex.test("sophie&mail.fr")); // Affiche false
console.log(regex.test("sophie@mail.fr")); // Affiche true
/* 观察此表，我们可以得出以下推论：
方括号[] 定义了一系列字符。在此范围内包含至少一个字符的任何字符串都将匹配该模式。
这些模式[a-z] 和[A-Z] 允许你分别搜索字母表中的任何字母，在大写或小写。
等价的模式[0-9] 并\d 允许您搜索数字。
句点字符.用于替换任何字符。
字符\（“反斜杠”或“反斜杠”）表示应照此查找后面的字符。例如，\. 允许您查找字符.。
该字符+允许您查找在它之前的一个或多个表达式。
该字符*用于查找零个或多个出现在其前面的表达式。 */
//在我们的示例中，这是如何实现此技术的方法。修改blur电子邮件输入区域上的事件处理程序，如下所示。
// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    var regexCourriel = /.+@.+\..+/;
    var validiteCourriel = "";
    if (!regexCourriel.test(e.target.value)) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});