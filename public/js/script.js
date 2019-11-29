// # GeekOfLegends

// ## Consigne de travail :
// >* Créer un repository Github et Faire des commits avec des noms cohérent et explicite
// >* Utiliser la structure de dossier apprise en classe
// >* Utiliser de manière approfondie la matière c'est a dire, utiliser les class, les imports les extends.
// >* L'histoire doit être raconté dans la console en utilisant un maximum le code pour retourner les infos par exemple :
// J'ai un objet dont le nom est "Casar" dans la console je ferais apparaitre : "Casar perd 30 de vie" je ferais 
// *console.log(casar.nom + " perd " + boss.attaque + " de vie" );*  et non pas 
// *console.log("Casar perd 30 de vie");*
// ## Instructions du jeu :
// #### Il te faut créer :

// ### - Trois boss(Sauron,Chronos,Lilith). 
//  Chaque boss possédera les propriétés suivantes :
// >* Un nom;
// >* Un nombre de points de vie;
// >* Un nombre de points d'attaque.

// #### A Savoir sur les boss :
// >* une fois le boss à 20% de ses points de vie, il posera à tes personnages (l'utilisateur) une énigme (choisie aléatoirement entre minimum 3 énigmes) à laquelle ils devront répondre en 3 essais au maximum, s'ils échouent, ils mourront, sinon ils vaincront le boss.


// #### Exemples d'énigmes traditionnelles :
// >* Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?
// >* Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?
// #### Exemples d'énigmes pouvant être obtenu via des commande Javascript :
// >* Quel heure est-il ?(écriture informatisée)
// >* Quel est l'indice du premier "i" de cette question ?
// >* Que fait retourne Math.floor(1.3 * 10) ?

// >* Le choix du type d'enigme est à votre guise cela peut même être un mix des styles


// ### - Trois héros : Un mage, Un guerrier, Un archer.
// Avec les propriétés et actions suivantes :

// ### Le guerrier 
// - Propriétés :

//   >* nom
//   >* points de vie
//   >* points d'attaque
//   >* point de rage : 0

// - Actions :
//   >* defense
//   >* attaque

//   #### A Savoir sur le guerrier 
//   >* Tous les tours le guerrier gagne 1 point de rage au bout de 4 points ,le guerrier gagne 25% ( * 1.25 ) d'attaque supplémentaire durant 1 tours puis retombe à 0 de rage et perd ce bonus.

// ### Le mage 
// - Propriétés :
//   >* nom
//   >* points de vie
//   >* points d'attaque
//   >* point de mana : chiffre qui sera aléatoirement imposé entre les suivants 7 , 9 ou 11.

// - Actions :
//   >* defense
//   >* attaque

//   #### A Savoir sur le mage
//   >* Les attaques du mage lui coute 2 points quand il n'a plus assez de point de mana pour attaquer,il passe 1 tour sans attaquer et il récupère 7 points de mana

// ### L'archer 
// - Propriétés :
//   >* nom;
//   >* points de vie
//   >* points d'attaque
//   >* nombre de flêches : chiffre qui sera aléatoirement imposé entre  7, 8 , 9 ,10 ,11.

// - Actions :
//   >* defense
//   >* attaque

//   #### A Savoir sur l'archer
//   >* les attaques de l'archer consomme deux flèches par tour et récupère une flèche chaque tour.Quand il n'a plus de flèches il passe un tour et récupère 6 flèches.

// ### Les actions : 
//   #### Defense :
//   >* Diminue de moitié( * 0.5 ) ses dégats d'attaque mais augmente de deux fois et demi ses points de vie ( * 2.5 ). 
//   >* Augmente de deux les chances d'être attaqué par le boss

//   #### Attaque
//   >* Augmente de deux cinquième ( * 1.4 ) ses dégats d'attaque mais diminue d'un quart ses points de vie ( * 0.75 )


// ## A Savoir en général : 
// >* Un boss est choisi aléatoirement parmis les trois, c'est vous qui aurez au préalable choisis ses caractéristiques
// >* Vous attribuez des valeurs aux propriétés des boss.
// >* L'utilisateur choisi le nom de chaque héros
// >* Vous devez fixer un total de point de vies et de points d'attaques que l'utilisateur lui devra distribuer entre ses héros.(faites en sorte qu'il y ait beaucoup d'interaction)
// >* L'utilisateur pourra choisir une posture 'attaque' ou 'défense' ou le mode 'normal' rien du tout avant le début du combat.
// >* Chaque tour les trois personnages attaque une fois le boss.
// >* Chaque tour le boss attaque au hasard un des personnages


// ## Bonus :

// >- Pour l'énigme, la réponse de l'utilisateur devra être mise en minuscule et les éventuels espace supprimés (exemple : "Un Marron" => "unmarron"). Il faudra aussi trouver une méthode qui permet de vérifier si la bonne réponse est contenue dans la réponse de l'utilisateur (exemple : bonne réponse = "homme", réponse utilisateur = "les HoMmEs" => la réponse est bonne).

class Boss {
    constructor(nom, nbVie, nbAttaque) {
        this.nom = nom
        this.nbVie = nbVie
        this.nbAttaque = nbAttaque
    }
    poserEnigme() {
        alert("Avant-hier, Catherine avait 17 ans ; l'année prochaine, elle aura 20 ans. Comment est-ce possible ?");
    }
}




class Heros {
    constructor(nom, nbVie, nbAttaque) {
        this.nom = nom
        this.nbVie = nbVie
        this.nbAttaque = nbAttaque

    }

    attaque() {
        this.nbAttaque = this.nbAttaque * 1.4
        this.nbVie = this.nbVie * 0.75
    }

    defense() {
        this.nbAttaque = this.nbAttaque * 0.5
        this.nbVie = this.nbVie * 2.5
    }
}

class Guerrier extends Heros {
    constructor(nom, nbVie, nbAttaque, nbRage) {
        super(nom, nbVie, nbAttaque);
        this.nbRage = nbRage;
        this.type = 'Guerrier';
        this.posture = '';
    }
}


class Mage extends Heros {
    constructor(nom, nbVie, nbAttaque, mana) {
        super(nom, nbVie, nbAttaque);
        this.mana = mana;
        this.type = 'Mage';
        this.posture= '';
    }

}

class Archer extends Heros {
    constructor(nom, nbVie, nbAttaque, nbFleches) {
        super(nom, nbVie, nbAttaque);
        this.nbFleches = nbFleches;
        this.type = 'Archer';
        this.posture = '';
    }

}




let Sauron = new Boss('Sauron', 500, 135)
let Chronos = new Boss('Chronos', 600, 130)
let Lilith = new Boss('Lilith', 550, 130)
let tabBoss = [Sauron, Chronos, Lilith]
let bossChoice = Math.round(Math.random() * 2)
let the_boss = tabBoss[bossChoice]
let choice;
let pseudo;
let perso;
let bot1;
let bot2;
let mana,fleches;
let posture;

// Demande du choix de héros
do {
    choice = prompt("Choix du héros ! Guerrier, Mage ou Archer ?")
    choice = choice.charAt().toUpperCase() + choice.substr(1).toLowerCase()
    console.log(choice)
} while (choice == "" || (choice != "Guerrier" && choice != "Mage" && choice != "Archer"))

// Demande d'un pseudo
do {
    pseudo = prompt("Quel pseudo choisissez-vous ?")
    pseudo = pseudo.charAt().toUpperCase() + pseudo.substr(1).toLowerCase()
} while (pseudo == "")


let tabMana = [9, 7, 11]
let nbMana = Math.round(Math.random() * 2)
console.log(nbMana)

let tabFleches = [7, 8, 9, 10, 11]
let nombreFleches = Math.round(Math.random() * 4)
console.log(nombreFleches)


//Création du héros et des bots
switch (choice) {
    case "Guerrier":
        perso = new Guerrier(pseudo, 100, 15, 0);
        mana = tabMana[nbMana];
        bot1 = new Mage('Bot1', 110, 10, mana);
        fleches = tabFleches[nombrebFleches];
        bot2 = new Heros('Bot2', 95, 20, fleches);
        break;
    case "Mage":
        mana = tabMana[nbMana];
        perso = new Mage(pseudo, 110, 10,mana);    
        bot1 = new Guerrier('Bot1', 100, 15,0);
        fleches = tabFleches[nombreFleches];
        bot2 = new Archer('Bot2', 95, 20,fleches);
        break;
    case "Archer":
        fleches = tabFleches[nombreFleches];
        perso = new Archer(pseudo, 95, 20,fleches);
        mana = tabMana[nbMana];
        bot1 = new Mage('Bot1', 110, 10,mana);
        bot2 = new Guerrier('Bot2', 100, 15,0);
        break;
}

console.log(perso);

alert("Le Boss est de la partie est " + the_boss.nom);
alert(perso.nom + " est un " + perso.type + "\n" + bot1.nom + " est un " + bot1.type + "\n" + bot2.nom + " est un " + bot2.type + "\n")

// Demande de la posture 
do {
    posture = prompt('Quelle posture choisissez-vous :\n - Attaque\n - Défense\n - Normale')
    posture = posture.charAt().toUpperCase() + posture.substr(1).toLowerCase()
    console.log(choice)
} while (posture == "" || (posture != "Attaque" && posture != "Défense" && posture != "Normale"))

// Activation de la posture
switch (posture) {
    case "Attaque":
        perso.attaque();
        perso.posture = posture
        alert(perso.nom + " est passé en mode " + perso.posture)
        break;
    case "Défense":
        perso.defense();
        perso.posture = posture;
        alert(perso.nom + " est passé en mode " + perso.posture)
        break;
    default:
        perso.posture = posture
        alert(perso.nom + " est passé en mode " + perso.posture)
}

function attaquer_boss(){
    the_boss.nbVie -= perso.nbAttaque;
    the_boss.nbVie -= bot1.nbAttaque;
    the_boss.nbVie -= bot2.nbAttaque;
}

function attaque_du_boss(){
    let tabPerso=[perso,bot1,bot2]
    let at = Math.round(Math.random() * 2)
    tabPerso[at].nbVie-= the_boss.nbAttaque
}

function poserEnigme(){
    let enigme1 = "Avant-hier, Catherine avait 17 ans ; l'année prochaine, elle aura 20 ans. Comment est-ce possible ?"
    let enigme2 = "Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je"
    let enigme3 = "Pour moi l'accouchement est avant la grossesse, l'enfance avant la naissance, l'adolescence avant l'enfant, la mort avant la vie. Qui suis-je?"

    let reponse1 = "silence"
    let reponse2 = "courant"
    let reponse3 = "dictionnaire"

    let tabEnigme = [enigme1,enigme2,enigme3]
    let tabReponse = [reponse1,reponse2,reponse3]

    let choixEnig = Math.round(Math.random() * 2)

    let question;
    let essais = 3
    do{
        question = prompt(tabEnigme[choixEnig]);
        essais--;
    }while((question != tabReponse[choixEnig]) && essais>0)
    if(essais == 0){
        perso.nbVie = 0
        bot1.nbVie = 0
        bot2.nbVie = 0
    }

}
do{
    attaquer_boss()
    attaque_du_boss()
    if(the_boss.nbVie <= 20 ){
        poserEnigme()
    }
    
}while((the_boss.nbVie > 0) || (perso.nbVie == 0 && bot1.nbVie == 0 && bot2.nbVie == 0))