let jeux = 0;
let lancer = 0;
let sommeJ1 = 0;
let sommeJ2 = 0;
let scoreTotalJ1 = 0;
let scoreTotalJ2  = 0;

function sonNewGame(){
  let sonNewGame = document.createElement("audio");
  sonNewGame.src = "./son/nouvellePartie.mp3";
  sonNewGame.play();
}
function sonClique() {
  let sonClique = document.createElement("audio");
  sonClique.src = "./son/clique.wav";
  sonClique.play();
}

function sonLancerDes (){
  let sonDes = document.createElement("audio");
  sonDes.src = "./son/dés.mp3";
  sonDes.play();
}

function sonVictoire (){
  let sonVictoire = document.createElement("audio");
  sonVictoire.src = "./son/victoire.mp3";
  sonVictoire.play();
}




//Div regle du jeu masqué
document.getElementById('regleDuJeu').style.visibility='hidden';
//Ouvrir la regle du jeu
function regleDuJeu (){
  document.getElementById('regleDuJeu').style.visibility='visible';
}
//Fermer la regle du jeu
function okey () {
  document.getElementById('regleDuJeu').style.visibility='hidden';
}


function laMainJ1 (){
  jeux = 1;
  document.getElementById('laMainJ2').style.visibility='hidden';
  document.getElementById('laMainJ1').style.visibility='visible';
}

function laMainJ2 (){
  jeux = 2;
  document.getElementById('laMainJ1').style.visibility='hidden';
  document.getElementById('laMainJ2').style.visibility='visible';
}

function nouvellePartie (){
  sonNewGame();
  laMainJ1();
  sommeJ1 = 0;
  sommeJ2 = 0;
  scoreTotalJ1 = 0;
  scoreTotalJ2 = 0;
  document.getElementById('scoreTempoJ1').innerHTML =  0;
  document.getElementById('scoreTempoJ2').innerHTML =  0;
  document.getElementById('scoreTotalJ1').innerHTML =  0;
  document.getElementById('scoreTotalJ2').innerHTML =  0;
  document.getElementById('imageDes').src = "./des/dice-6.png";
}

function lancerDes(){  
    sonLancerDes();
    lancer = Math.floor(Math.random() * 6) + 1;
    if (jeux == 1) {
      switch(lancer){
        case 1 :
          sommeJ1 = 0;
          document.getElementById('scoreTempoJ1').innerHTML = 0;
          document.getElementById('imageDes').src = './des/dice-1.png'; 
          laMainJ2();
          sonClique();
          break;
        case 2 :
          document.getElementById('imageDes').src = './des/dice-2.png';
          sommeJ1 = sommeJ1 + lancer;
          document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
          break;
        case 3 :
          document.getElementById('imageDes').src = './des/dice-3.png';
          sommeJ1 = sommeJ1 + lancer;
          document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
          break;
        case 4 :
          document.getElementById('imageDes').src = './des/dice-4.png';
          sommeJ1 = sommeJ1 + lancer;
          document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
          break;
        case 5 :
          document.getElementById('imageDes').src = './des/dice-5.png';
          sommeJ1 = sommeJ1 + lancer;
          document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
          break;
        case 6 :
          document.getElementById('imageDes').src = './des/dice-6.png';
          sommeJ1 = sommeJ1 + lancer;
          document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
          break;
        default:
		      break;
      }
    }
    else {
      switch(lancer) {
        case 1 :
          sommeJ2 = 0;
          document.getElementById('scoreTempoJ2').innerHTML = 0;
          document.getElementById('imageDes').src = './des/dice-1.png'; 
          laMainJ1();
          sonClique();
          break;
        case 2 :
          document.getElementById('imageDes').src = './des/dice-2.png';
          sommeJ2 = sommeJ2 + lancer;
          document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
          break;
        case 3 :
          document.getElementById('imageDes').src = './des/dice-3.png';
          sommeJ2 = sommeJ2 + lancer;
          document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
          break;
        case 4 :
          document.getElementById('imageDes').src = './des/dice-4.png';
          sommeJ2 = sommeJ2 + lancer;
          document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
          break;
        case 5 :
          document.getElementById('imageDes').src = './des/dice-5.png';
          sommeJ2 = sommeJ2 + lancer;
          document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
          break;
        case 6 :
          document.getElementById('imageDes').src = './des/dice-6.png';
          sommeJ2 = sommeJ2 + lancer;
          document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
          break;
        default:
		      break;
      }
    }
  }

function hold (){
  if((jeux == 1) && (sommeJ1 != 0)) {
    scoreTotalJ1 = sommeJ1 + scoreTotalJ1;
    document.getElementById('scoreTotalJ1').innerHTML = scoreTotalJ1;
    sommeJ1 = 0;
    document.getElementById('scoreTempoJ1').innerHTML = sommeJ1;
    laMainJ2 ();
    sonClique();
    victoire ();
  }
  else {
    if (sommeJ2 != 0) {
    scoreTotalJ2 = sommeJ2 + scoreTotalJ2;
    document.getElementById('scoreTotalJ2').innerHTML = scoreTotalJ2;
    sommeJ2 = 0;
    document.getElementById('scoreTempoJ2').innerHTML = sommeJ2;
    laMainJ1 ();
    sonClique();
    victoire ();
    }
  }
}


document.getElementById('victoire').style.visibility='visible';
//button ok pour fermer la div du gif
function bravo () {
  document.getElementById('victoire').style.visibility='hidden'
  nouvellePartie();
}

function victoire (){
  if (scoreTotalJ1 >= 10) {
    sonVictoire();
    alert ('BRAVO \nLe joueur 1 gagne avec un score total de ' + scoreTotalJ1 + ' points \nLe joueur 2 perd avec un score de ' + scoreTotalJ2 + ' points.');
    document.getElementById('victoire').style.visibility='visible';
  }
  else if (scoreTotalJ2 >= 10) {
    sonVictoire();
    alert ('BRAVO \n \nLe joueur 2 gagne avec un score total de ' + scoreTotalJ2 + ' points \nLe joueur 1 perd avec un score de ' + scoreTotalJ1 + ' points.');
    document.getElementById('victoire').style.visibility='visible';
  }
}
