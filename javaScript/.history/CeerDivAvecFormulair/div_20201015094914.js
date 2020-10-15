let eleNom = document.getElementById("elements");
let claNom = document.getElementById("className");
let idNom = document.getElementById("idName");
let herfNom = document.getElementById("lienName");
let contNom = document.getElementById("cont");
let parNom = document.getElementById("parentName");
let addele = document.getElementById("vide");
let bouttonElem = document.getElementById("btnSubmit");//给boutton添加动作
bouttonElem.addEventListener("click",addElement);
//是否选择a决定下面lien的块是否存在。
eleNom.addEventListener("change",caseA);
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
  if(!document.getElementById(idNom.value)){  //检验拥有这个id的element是否已经存在，id是唯一的。
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

    //创建父母选项???新建的元素在选择他的父母并建立后，同时也成为父母选项中的一项，为后面的元素做准备。最后面
    //一项的空白块作为body的整体来显示,故而父母选项中body的value是下面空白块儿的id<
    let newOption = document.createElement('option');
    newOption.value = elem.id;
    newOption.innerHTML = eleNom.value+'#'+elem.id;
    parNom.appendChild(newOption);      
  
}else {
    alert('Un ID doit être unique');
  }

}


