let eleNom = document.getElementById("elements");
let claNom = document.getElementById("className");
let idNom = document.getElementById("inName");
let herfNom = document.getElementById("lienName");
let contNom = document.getElementById("cont");
let parNom = document.getElementById("parentName");
let addele = document.getElementById("vide");
let boutton = document.getElementsByTagName("boutton");

eleNom.addEventListener("chang",situationA);
funcion situationA (even){
    if (even.value === "a"){
        document.getElementById("lienName").style.display = "block";
    }else {
        document.getElementById("lienName").style.display = "none";
    }
}




boutton.addEventListener("clik",addElement);
function addElement (e){
    
    addele.value = eleNom.value;
    addele.className = claNom.value;
    addele.id = idNom.value;
    addele.href = herfNom.value;
    addele.textContent = contNom.value;
    addele.parentNode = parNom.value;
    addele.style.border= "2px solid black";
    addele.style.backgroundColor=
    document.getElementById(parNom.value).appendChild(addele);
}
