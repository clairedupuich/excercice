let eleNom = document.getElementById("elements");
let claNom = document.getElementById("className");
let idNom = document.getElementById("inName");
let herfNom = document.getElementById("lienName");
let contNom = document.getElementById("cont");
let parNom = document.getElementById("parentName");
let addele = document.getElementById("vide");
let bouttonElem = document.getElementsByTagName("boutton");
bouttonElem.addEventListener("clik",addElement);
//是否选择a决定下面lien的块是否存在。
eleNom.addEventListener("chang",caseA);
function caseA (even){
    if (even.value === "a"){
        document.getElementById("lienName").style.display = "block";
    }else {
        document.getElementById("lienName").style.display = "none";
    }
}


//给boutton添加动作以制作下面的块

function addElement (e){
    //初始化函数
    e.preventDefault();
  if(!document.getElementById(idNom.value)){  //??????????
    let elem = document.createElement(eleNom.value);
    if(eleNom.value === 'a'){
        addele.href = herfNom ;
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
    newOption.innerHTML = eleNom.value+'#'+elem.id;
    addele.appendChild(newOption);      
  
}else {
    alert('Un ID doit être unique\nVeuillez en entrer un autre');
  }

}


let selectElement = document.getElementById('element_select');
let elemHref = document.getElementById('element_href');
let elemId = document.getElementById('element_id');
let elemClass = document.getElementById('element_class');
let elemContent = document.getElementById('element_content');
let elemParent = document.getElementById('element_parent');
let addElement = document.getElementById('element_add');
addElement.addEventListener('click', addingElement);
selectElement.addEventListener('change', function(){
  if(selectElement.value === 'a'){
    document.getElementsByClassName('lien')[0].style.display = 'block';
  } else {
    document.getElementsByClassName('lien')[0].style.display = 'none';
  }
});
function addingElement(e){
  e.preventDefault();
  if(!document.getElementById(elemId.value)){
    let elem = document.createElement(selectElement.value);
    if(selectElement.value === 'a'){
      elem.href = elemHref;
    }
    elem.id = elemId.value;
    elem.className = elemClass.value;
    elem.innerHTML = elemContent.value;
    elem.style.border = '1px solid black';
    elem.style.padding = '5px 10px';
    document.getElementById(elemParent.value).appendChild(elem);
    let newOption = document.createElement('option');
    newOption.value = elem.id;
    newOption.innerHTML = selectElement.value+'#'+elem.id;
    elemParent.appendChild(newOption);      
  } else {
    alert('Un ID doit être unique\nVeuillez en entrer un autre');
  }
}