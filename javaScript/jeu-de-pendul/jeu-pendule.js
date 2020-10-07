//创建一个词汇数组。创建键盘显示块。
//如果已输入输入值（将输入值与已输入值的数组进行比较），则不执行任何操作
//将输入的值与字母数组进行比较（带有inArray的事件监听器）
//如果存在字母，则显示它，然后将该字母添加到输入字母的数组中
//否则，上吊被绞死的人，并阻止输入的字母
//显示字母，在单词中放置正确的位置（循环，对照单词数组检查输入）


// Tableau contenant les mots qu'il est possible de faire deviner
let mots = ['aleatoire','methode','javascript','football','sport'];

// Tableau contenant l'alphabet pour faire le clavier virtuel
let tab = 'abcdefghijklmnopqrstuvwxyz';

//la fonction math.floor(Math.random()) génére quelque chose aléatoirement
let mot = mots[Math.floor(Math.random() * mots.length)];

// Variable qui recevra le nombre de bonne réponse de l'utilisateur
let nbBonneReponse = 0;

// Nombres de chances
let chance = 6;
//Nombres de erreurs
let erreurN = 0;

// ----- Clavier virtuel -----
// Conteneur du clavier
let divClavier = document.createElement('div');
// Ajout id clavier
divClavier.id = 'clavier';
// Ajout de la div au body
document.body.appendChild(divClavier);

// Pour toutes les lettres de l'alphabet
for (let j = 0; j < tab.length; j++){
  // On crée un bouton
  let touche = document.createElement('button');
  // On lui assigne sa lettre
  touche.innerHTML = tab[j];
  // On lui ajoute un écouteur d'événement (ici 'click')
  touche.addEventListener('click', verification);
  // On ajoute le bouton au body
  divClavier.appendChild(touche);
}

// On crée un paragraphe
let afficheChances = document.createElement('p');
// On y affiche le nombre de chance
afficheChances.innerHTML = 'Chance :' + chance;
// On ajoute le paragraphe au body
document.body.appendChild(afficheChances);

// On crée le container du mot à deviner
let div = document.createElement('div');
// On lui donne un id
div.id = 'mot';
div.style.marginTop = '50px';
// On l'ajoute au body
document.body.appendChild(div);


// Pour chaques lettres du mots à deviner
for (let i = 0; i < mot.length; i++){
  // On crée un span
  let elem = document.createElement('span');
  // On lui met une bordure et une marge intérieure
  elem.style.padding = '10px';
  elem.style.border = '2px solid black';
  // On l'ajoute au body
  div.appendChild(elem);
}

// Fonction de verification de la lettre proposée par l'utilisateur
function verification(){
  // On récupère la lettre
  let lettre = this.innerHTML;

  //On désactive le bouton déjà utilisé
  this.disabled = 'true';

  // On récupère les spans d'affichage du mot
  let spans = document.querySelectorAll('#mot span');

  // Si la lettre et dans le mot
  if(mot.includes(lettre)){
    // Pour chaque lettres du mot
    for (let i = 0; i < mot.length; i++){
      // On vérifie si la lettre du mot et égale à la proposition
      if(mot[i] === lettre){
        // Si oui on augmente le nombre de bonne réponse
        nbBonneReponse++;
        // On affiche les lettres correspondantes dans les spans
        spans[i].textContent = mot[i];
      }
    }
    // Si le nombre de bonnes réponses et égale au nombre de lettres du mot
    if(nbBonneReponse === mot.length) {
      // On crée le paragraphe 
      let message = document.createElement('p');
      // On affiche le message de victoire
      message.textContent = 'Vous avez gagné !'
      // On ajoute le message au body
      document.body.appendChild(message);
      disableKeyboard();
    }
  // Sinon si la lettre n'est pas dans le mot
  } else {
     // 错误次数累加
    erreurN++;
    // On diminue le nombre de chance
    chance--;
    // 显示图片
    image.src = 'http://math.et.info.free.fr/JeuxJavaScript/Pendu/img/p'+erreurN +'.gif';
    // On change l'affichage
    afficheChances.innerHTML = 'Chance :' + chance;
    // Si le nombre de chance et à zéro
    if(chance == 0){
      // On crée le paragraphe
      let message = document.createElement('p');
      // On ajoute le message de défaite
      message.textContent = 'Vous avez perdu !';
      // On ajoute au body
      document.body.appendChild(message);
      disableKeyboard();
    }
  }
}

// crée le div pour image
let divImg = document.createElement("div");
divImg.id = "containerImg";
divImg.innerHTML = "";
divImg.style.marginTop = '45px';
divImg.style.backgroundColor = "red";
divImg.style.width = "445px";
document.body.appendChild(divImg);

let image = document.createElement("img");
image.src = 'http://math.et.info.free.fr/JeuxJavaScript/Pendu/img/p'+erreurN +'.gif';
divImg.appendChild(image);


// Fonction pour désactiver toutes les touches du clavier
function disableKeyboard(){
    // On récupère les touches du clavier virtuel
    let touches = document.querySelectorAll('#clavier button');
    // Pour chaque touche
    for(let touche of touches){
      // On désactive la touche
      touche.disabled = 'true';
    }
  }






//第二种方法

/* let word = "table" //toujours entre guillemets
let hideword = []
for (let i = 0; i < word.length; i++) {
	hideword.push("_");
}
console.log(hideword);
document.body.addEventListener("keydown", function (event) { //body pour le cibler
	for (let i = 0; i < word.length; i++) {
		if (word[i] == event.key) {
			hideword[i] = word[i];
			console.log(hideword);
	}
}
	if (!(word.includes(event.key))){
		console.log(false);
	}
})
 */




















