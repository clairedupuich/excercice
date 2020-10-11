//以下代码用于把在html文件中把javascript放在head中时。
/* window.onload = function() {
    myText = document.getElementsByTagName("p");
    console.log(myText.length); 
    myText = document.getElementById("text");
   console.log(myText);
   }; */


 /*
Exercice : modifier une liste
*/

document.querySelector("button").addEventListener("click", function () {
    //添加选项
    var nomDessert = prompt("Entrez le nom du nouveau dessert :");

    var dessertElt = document.createElement("li");
    dessertElt.textContent = nomDessert;
    //更换选项
    dessertElt.addEventListener("click", function (e) {
        var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
        e.target.textContent = nouveauNom;
    });

    document.getElementById("desserts").appendChild(dessertElt);
});
