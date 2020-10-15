// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan",

    "Chine",
    "France"
];

var paysElt = document.querySelector("input");
var suggestionsElt = document.getElementById("suggestions");

// Gère le changement de valeur saisie 管理输入的值的更改
paysElt.addEventListener("input", function () {
    suggestionsElt.innerHTML = ""; // Vidage de la liste des suggestions
    listePays.forEach(function (pays) {
        // Si valeur en cours de saisie correspond au début du pays
        //如果输入的值对应于国家/地区的开始
        if (pays.indexOf(paysElt.value) === 0) {
            var suggestionElt = document.createElement("div");
            suggestionElt.classList.add("suggestion");
            suggestionElt.textContent = pays;
            // Gère le lic sur une suggestion
            suggestionElt.addEventListener("click", function (e) {
                // Remplacement de la valeur saisie par la suggestion
                paysElt.value = e.target.textContent;
                // Vidage de la liste des suggestions
                suggestionsElt.innerHTML = "";
            });
            suggestionsElt.appendChild(suggestionElt);
        }
    });
});