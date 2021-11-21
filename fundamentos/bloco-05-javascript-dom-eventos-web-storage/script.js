//console.log("Oi");
function changeText(newText){
  let tagP =  document.getElementsByTagName('p')[1];
  tagP.innerText = newText;
}
changeText('Meu futuro depende de mim, daqui a dois anos pretendo estar estabilizada e trabalhando na XP');

function bgColor(newColor) {
  let tagC = document.getElementsByClassName('main-content');
  tagC[0].style.backgroundColor = newColor;
}
bgColor('rgb(76,164,109)');

function bgCenterColor(newColor){
  let tag = document.getElementsByClassName('center-content');
  tag[0].style.backgroundColor = newColor;
}
bgCenterColor('white');

function newH(text){
  let tagH = document.getElementsByTagName('h1')[0];
  tagH.innerText = text;
}
newH('Exercício 5.1 - JavaScript');

// function upperAll(tag){
//   let tagPU = document.getElementsByTagName('p')[0];
//   console.log(tagPU);
//   let tagUpper = tagPU.innerText.toUpperCase();
//   tagPU.innerText = tagUpper;
// }
// upperAll('p');

function cont(tag){
  let tagCont = document.getElementsByTagName('p');
  for (let i = 0; i < tagCont.length; i+=1){
    let conteudo = tagCont[i];
    console.log(conteudo);
  }
}
cont('p');
