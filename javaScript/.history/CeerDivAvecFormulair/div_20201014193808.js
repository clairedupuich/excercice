let eleNom = document.getElementById("elements");
let claNom = document.getElementById("className");
let idNom = document.getElementById("inName");
let herfNom = document.getElementById("lienName");
let contNom = document.getElementById("cont");
let parNom = document.getElementById("parentName");
let addele = document.getElementById("vide");
let boutton = document.getElementsByTagName("boutton");

//是否选择a决定下面lien的块是否存在。
eleNom.addEventListener("chang",caseA);
funcion caseA (even){
    if (even.value === "a"){
        document.getElementById("lienName").style.display = "block";
    }else {
        document.getElementById("lienName").style.display = "none";
    }
}


//给boutton添加动作以制作下面的块
boutton.addEventListener("clik",addElement);
function addElement (e){
    //初始化函数
    e.preventDefault();
  if(!document.getElementById(idNom.value)){
    let elem = document.createElement(eleNom.value);
    if(eleNom.value === 'a'){
        addele.href = herfNom ;
    }
}
    elem.value = eleNom.value;
    elem.className = claNom.value;
    elem.id = idNom.value;
    elem.href = herfNom.value;
    elem.textContent = contNom.value;
    elem.parentNode = parNom.value;
    elem.style.border= "2px solid black";
    elem.style.backgroundColor="blue";
    document.getElementById(parNom.value).appendChild(elem);

    let newOption = document.createElement('option');
    newOption.value = elem.id;
    newOption.innerHTML = selectElement.value+'#'+elem.id;
    elemParent.appendChild(newOption);      
  
}else {
    alert('Un ID doit être unique\nVeuillez en entrer un autre');
  }

