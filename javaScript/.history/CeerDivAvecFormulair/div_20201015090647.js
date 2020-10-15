let eleNom = document.getElementById("elements");
let claNom = document.getElementById("className");
let idNom = document.getElementById("inName");
let herfNom = document.getElementById("lienName");
let contNom = document.getElementById("cont");
let parNom = document.getElementById("parentName");
let addele = document.getElementById("vide");
let bouttonElem = document.getElementsByTagName("button")[];//给boutton添加动作
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

//boutton动作以制作下面的块
function addElement(e){
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
    //显示框里的项目
    let newOption = document.createElement('option');
    newOption.value = elem.id;
    newOption.innerHTML = eleNom.value+'#'+elem.id;
    addele.appendChild(newOption);      
  
}else {
    alert('Un ID doit être unique\nVeuillez en entrer un autre');
  }

}


