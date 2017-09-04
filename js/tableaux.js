/*****************/
/* === Trucs === */
/*****************/

var objets = ["assiete", "cuillère", "chausette", "baton", "pièce", "livre", "clou", "bouton", "épingle", "pot", "chat", "botte", "chocolatine", "baguette"];

/*******************/
/* === Endroit === */
/*******************/

var zone_diff = ["dans l'espace", "dans les terres désolées", "dans le village oublié", "dans les forêts de bambous", "à la colline des tourments", "à la terre du dessus", "à Kaalotte", "aux mines de sable", "à la plage du mithril", "à l'atelier du petit Pablo"];

/******************/   
/* === Action === */
/******************/

var action_louche = ["de commercer avec des gens louches", "de parler avec Culbuto", "de ricaner avec un air maléfique", "d'arroser des fleurs", "de faire des bruits d'animaux", "de creuser un trou", "d'accrocher un morceau de papier à un pigeon", "de danser avec enthousiasme", "de semer des cailloux", "de casser des pots", "de fréquenter des voyous", "de tabasser des vieillards"];

var action_forgeron = ["forge une armure complète", "teste le nouveau marteau au top", "fait une dégustation de vin avec le roi", "brûle nos tablier et on passe toute la soirée torse nu", "brûle nos tabliers et on passe toute la soirée torse nu", "fabrique un objet insolite"];

var mutilation = ["pincer les oreilles dans la porte du four", "forcer à lire un livre tout entier dans une langue étrangère au milieu d'une place publique", "chatouiller sous les pieds jusqu'à ce que quelqu'un dise \"Gloubiboulga\" en face de moi", "déguiser en lapin et passer la nuit dans une tanière de loups", "construire une cabane dans un arbre et je ne pourrai la quitter que lorsqu'il tombera"];

var action_passe_premiere_personne = ["j'ai vu", "j'ai entendu", "j'ai aperçu", "j'ai touché", "j'ai causé avec", "j'ai reniflé", "j'ai trouvé", "j'ai volé", "j'ai tué", "j'ai cuisiné pour", "j'ai soudoyé", "j'ai chanté avec", "j'ai bu avec", "j'ai croisé", "j'ai séduis", "j'ai insulté"];

var action_passe_personne_deplacement = ["je suis allé dans", "je me suis rendu dans", "j'ai été dans", "j'ai pénétré dans"];

/*********************/
/* === Evenement === */
/*********************/

var evenement_louche = ["que des corbeaux multicolores se sont posés sur la cheminée de l'église", "que des géants à 11 têtes et 14 bras ont été vus dans les champs là-bas", "que sa voisine viens d'accoucher d'un bébé à trois yeux", "que sa maison s'était déplacée", "qu'un inconnu est venu casser des pots dans sa maison", "qu'une drôle de musique peut être entendue si on s'approche de la montagne", "qu'une femme vivant dans les marais vend des potions aux aventuriers", "que des brouettes se sont mises à attaquer les voyageurs", "que Culbuto ne se déplaçait qu'en faisant des roulades"];

/****************/
/* === Fête === */
/****************/

var fete = ["la foire à la picole", "la foire au graillon", "la fête des trentenaires", "la fête du dieu poulet", "la foire aux esclaves", "le jour du gras", "le lundi d'la bonne côte", "le bûcher excessif", "la Casse-Barrique", "La Marche des Évêques décédés"];

/*****************/   
/* === Lieux === */
/*****************/   
   
var lieux = ["une grotte", "une église", "un puits", "le marché", "la forêt", "la montagne", "la plaine", "le marais", "la jungle", "le désert", "le royaume de foudre", "les terres gelées", "un bordel", "la taverne", "un cimetière", "une chambre d'enfant", "une cave", "une tanière de dragon", "un nid d'oiseau", "un repaire de voleurs", "un bateau", "un château", "un village abandonné", "une calèche", "une cabine téléphonique", "le montdur", "le village des elfes"];

/*****************/
/* === Objet === */
/*****************/

var obj_inutile = ["un sablier rempli de sable", "un sac de petits animaux de la ferme gravés en bois", "une épée longue pliée en forme de nœud", "une chope fabriquée à partir d'une défense de troll", "une armure de plaques complètement rouillée", "une bouteille remplie d'une vase verdâtre avec sur l'étiquette \"danger, cette bouteille contient de la vase verte\"", "une pancarte en bois indiquant \"danger, entrée interdite\"", "une collection de 12 roues de chariots de taille décroissante posées les unes sur les autres", "une fausse barbe rousse touffue pour un humanoïde de grande taille", "une toile provenant de l'hélice d'un moulin", "une barrique de glands", "une perche pliable de 3 mètres", "vingt cadres de miroir sans aucun miroir", "une ancre de navire en forme de kraken enragé", "un jeu de pièces d'échec en bronze", "Un meuble dont tous les tiroirs manquent", "un seau rempli de grandes clefs rouillées", "des fausses dents en bois", "un paresseux empaillé", "un filet de pêche avec un énorme trou", "une pancarte indiquant \"Danger : fosse\"", "un octopus tricoté", "une unique botte droite", "un miroir en forme de baleine à la gueule ouverte"];

var obj_bizarre = ["Cinq bâtons de sucrerie à base d'elfe en gelée.", "Un sac en toile de jute contenant une centaine de noix séchées.", "La garde cassée d'une épée à deux mains magique.", "Un petit cochon graisseux portant le numéro 7 peint sur le côté.", "Un doigt délicat d'une humaine portant un anneau de fer grossier.", "Un filtre d'amour à l'odeur horrible. Ne fonctionne que sur les gobelins.", "Une corde fabriquée à l'aide de viscères durcis.", "Le buste pétrifié d'un humain sans intérêt.", "Une liste de courses nécessaires à la confection d'un objet magique inconnu."];

var potion = ["une potion qui change le sel en serpents", "un antidote contre le bonheur", "une potion d'invisibilité partielle", "un désherbant pour les grottes", "une potion de vision de jour", "une potion de soin pour monstre", "un élixir de vieillesse", "une potion de paresse", "un remède contre l'alcoolisme", "une potion chasse-neige", "un remède contre le feu", "un produit d'entretien pour les fenêtres", "une potion de malchance", "une potion aléatoire", "un vin de table 30 ans d'âge", "un élixir de déception"];

/***************/
/* === Nom === */
/***************/

var pseudo =["gamer","night","pikachu","panda","fox","camembert","kiwi","tiger","hawk","falcon","gandalf","frodon","elfe","fée","square","dark","ninja","moustache","warrior","kirikou","death","jambon","HD","wolf","red","black","blue","white","no","mr","jean","terminator","crizon","iron","stone","breaking","dead","evil","mouette","pneu","art","ballon","acteur","chevalier","sir","lord","baron","roi","king","lancelot","cigare","click","guerrier","barbare","journaliste","hache","parapluie","tuyau","poisson","fraise","peintre","statue","tarte","kiwi","grand","the","spaghetti","chien","pecheur","astronaute","grand-pere","comete","flash","batman","el","professeur","barman","pompier","boucher","patissier","sommelier","serveur","pilote","joueur","agriculteur","berger","chasseur","ingénieur","coiffeur","cordonier","archer","forgeron","cuistot","meulier","potier","bill","clown","danseur","figurant","jongleur","mime","dev","chef","amiral","general","inspecteur","brigadier","ministre","président", "médecin", "astrologue","explorateur","aventurier","indiana","rocky", "shérif", "délégué", "marin", "mage", "volatile"];

var nom_paysant = ["Dédé", "Gilles", "Bernard", "Herbert", "Pépin", "Raoul", "Eudes", "Caradec", "Galahad", "Jaque", "Norbert"];

var humeurs = ["accommodante", "âpre", "austère", "babillarde", "batailleuse", "caustique", "changeante", "combative", "conciliante", "débonnaire", "de chien", "de dogue", "dévote", "égale", "endurante", "enjouée", "fanatique", "fantasque", "farouche", "fière", "frondeuse", "goguenarde", "guerrière", "hautaine", "hystérique", "inégale", "indépendante", "indocile", "indomptable", "inquiète", "irascible", "jalouse", "massacrante", "maussade", "médisante", "méditative", "moqueuse", "noire", "paresseuse", "pessimiste", "primesautière", "querelleuse", "rogue", "sauvage", "sociable", "sombre", "vagabonde", "violente", "vive", "voyageuse"];

/*************************************/
/* === Complément circonstanciel === */
/*************************************/

var cct = ["aujourd'hui", "hier", "la semaine dernière", "l'an passé", "jadis", "il y a fort longtemps", "un jour"];

/*******************/
/* === Adverbe === */
/*******************/

var adverbes_temps_passe = ["aujourd'hui", "hier", "la semaine dernière", "l'an passé", "jadis", "il y a fort longtemps", "un jour"];

var adverbes_temps_future = ["aujourd'hui", "un jour", "demain", "bientôt", "quand les neiges seront fondues", "quand les poules auront des dents"];

/*************************/
/* === Interrogation === */
/*************************/

var interrogation_voyageur = ["Vous connaissez ?", "En avez-vous entendu parler ?", "Ça vous dit quelque chose ?"];

