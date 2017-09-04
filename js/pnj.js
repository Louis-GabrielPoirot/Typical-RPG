/**********************/
/* === Phrase PNJ === */
/**********************/

trpg.pnj = {
	aubergiste : {
		nom : "L'aubergiste",
		surnom : "Le bonimenteur",
		sexe : "m",
		phr : function() {
			 return phr_aubergiste();
		}
	},
	garde : {
		nom : "Le garde",
		surnom : "La brute",
		sexe : "m",
		phr : function() {
			 return phr_garde();
		}
	},
	marchand : {
		nom : "Le marchand",
		surnom : "Le camelot",
		sexe : "m",
		phr : function() {
			 return phr_marchand();
		}
	},
	ancien : {
		nom : "L'ancien",
		surnom : "Papi dicton",
		sexe : "m",
		phr : function() {
			 return phr_ancien();
		}
	},
	forgeron : {
		nom : "Le forgeron",
		surnom : "Le coquet",
		sexe : "m",
		phr : function() {
			 return phr_forgeron();
		}
	},
	boulanger : {
		nom : "Le boulanger",
		surnom : "Le bon",
		sexe : "m",
		phr : function() {
			 return phr_boulanger();
		}
	},
	esclave : {
		nom : "L'esclave",
		surnom : "L'esclave",
		sexe : "f",
		phr : function() {
			 return phr_esclave();
		}
	},
	gamine : {
		nom : "La gamine",
		surnom : "Chasse poulet",
		sexe : "f",
		phr : function() {
			 return phr_gamine();
		}
	},
	pêcheur : {
		nom : "Le pêcheur",
		surnom : "Hâbleur compulsif",
		sexe : "m",
		phr : function() {
			 return phr_pecheur();
		}
	},
	alchimiste : {
		nom : "L'alchimiste",
		surnom : "Lavoisier",
		sexe : "f",
		phr : function() {
			 return phr_alchimiste();
		}
	},
	mère : {
		nom : "La mère célibataire",
		surnom : "L'irresponsable",
		sexe : "f",
		phr : function() {
			 return phr_mere_celibataire();
		}
	},
	voyageur : {
		nom : "Le voyageur",
		surnom : "Le globe trotteur",
		sexe : "m",
		phr : function() {
			 return phr_voyageur();
		}
	},
	culbuto : {
		nom : "Culbuto",
		surnom : "#",
		sexe : "m",
		phr : function() {
			 return phr_culbuto();
		}
	},
	perroquet : {
		nom : "Le perroquet",
		surnom : "Maudit piaf",
		sexe : "m",
		phr : function() {
			 return phr_perroquet();
		}
	},
	fermière : {
		nom : "La fermiere",
		surnom : "#",
		sexe : "f",
		phr : function() {
			 return phr_fermiere();
		}
	}
};

//giveId(trpg.pnj);

function phr_aubergiste(){
	var phr_aubergiste = ["Bonjour " + trpg.j.nom + ", venez dormir à l'auberge du " + r_objet(trpg.mobs).nom + "  " + r_objet(adjectifs).masculin + ". Je vous offre une nuit gratuite !", "Hey aventurier, le nom de l'auberge à changé. Elle s'appellera désormais l'auberge du " + r_objet(trpg.mobs).nom + " " + r_objet(adjectifs).masculin + ".", "On a enfin réussi à se débarrasser des rats dans les sous-sols.", "Vous n'auriez pas vu le boucher ? Ce malandrin m'a encore facturé un gigot que je n'ai jamais reçu !", "Nos clients sont satisfaits de la discrétion de nos services envers les actes qui sont commis dans les chambres, comme par exemple : " + r_tableau(action_louche) + ".", "Excusez-moi, n'auriez vous pas trouvé, à tout hasard, des clés sur votre chemin ?", "Des édredons ont disparu dans la nuit suivant la " + r_tableau(fete) + "."];
	
	return r_tableau(phr_aubergiste);
}

function phr_garde(){
	var phr_garde = ["Autrefois j'ai tiré une flèche droit dans le genou d'un aventurier et il est devenu garde !", "Vous comptez vraiment sortir du village avec cet équipement ? Ahahahahah, j’aimerais bien voir ça.", "Vous ressemblez au dernier type que j'ai arrêté, mais vous vous avez toujours la tête sur les épaules.", "Je laisse rentrer que les jolies filles dans le village, du coup personne n'entre.", "Zzzzzzzzzzzzzzzzzzzzz.", "Au moindre geste suspect, j'vous tape.", "Vous contrôler ? non c'est bon j'laurait vu tout de suite si vous étiez un voleur. Ils marchent accroupi ces idiots.", "Hier, un " + r_objet(trpg.mobs).nom + " s'est approché du village mais ne vous inquiétez pas, je l'ai tué.", "Hormis le boulanger, personne n'a le droit de quitter la ville à partir de midi."];
	
	return r_tableau(phr_garde);
}

function phr_marchand(){
	var phr_marchand = ["Si vous êtes intéressés par " + r_tableau(obj_inutile) + " vennez me voir !"];
	
	return r_tableau(phr_marchand);
}

function phr_ancien(){
	var phr_ancien = ["Qui avale une noix de coco à confiance en son anus.", "Ne fais pas l'amour dans ton jardin car l'amour est aveugle mais pas tes voisins.", "Si l'amour est aveugle, il faut palper.", "Aussi rempli que soit ton existence il y aura toujours de la place pour une petite bière.", "Ce n'est pas parce qu'on n'a rien à dire qu'il ne faut pas le faire savoir.", "Certains hommes aiment tellement leur femme que pour ne pas l'user ils se servent de celle des autres.", "Les petits sont à plaindre car ils sont toujours les derniers à savoir quand il pleut.", "Bière qui roule perd toute sa mousse.", "Il faut battre son frère quand il est chaud.", "Ni vu ni cocue"];
	
	return r_tableau(phr_ancien);
}

function phr_forgeron(){
	var phr_forgeron = ["T'as vu mon marteau ? C'est la nouvelle mode à la capitale.", "Quoi ? J'ai un truc dans ma barbe ?", "Les gars musclés qui travaillent sans haut sous leur tablier, c'est vachement viril. J'aime ça.", "Quand j'étais petit, avec ma mère, on allait tous les dimanches faire fondre des métaux pour en faire des massues.", "Ah j'suis content, ce soir on vas sortir avec les potes forgeron. Y'a le salon de la Fonderie à la capitale.", "À la capitale, les chevaux marchent sur des petits morceaux de ferrailles. Les potes forgerons appellent ça : des fers à cheval.","La tradition chez les forgerons c'est que lors de " + r_tableau(fete) +  " on " + r_tableau(action_forgeron) + "."];
	
	return r_tableau(phr_forgeron);
}

function phr_boulanger(){
	/* + de bonheur */
	var phr_boulanger = ["Hey ça va ? Vous avez une petite mine aujourd'hui, tenez, prenez cette chocolatine.", "Bonne journée à vous " + trpg.j.nom + " !", "Hey " + trpg.j.nom + ", sa vous dis un petit gâteau ? Pour la route !", "J'ai vu une femme au marché, elle avait l'air gentille j'ai tout de suite pensé à vous et je lui ai raconté vos exploits.", "L'autre jour, dans " + r_objet(trpg.zone).nom + " j'ai croisé un " + r_objet(trpg.mobs).nom/*f/m*/ + " " + r_objet(adjectifs).masculin + " " + r_objet(adjectifs).masculin + ", il avait l'air blessé donc je l'ai soigné et je lui ai donné à manger.", "J'ai rencontré un petit homme charmant qui cherchait un anneau précieu, je lui ai donné mon alliance, il est reparti en chantant.", "J'ai appris que l'Artiste avait besoin d'argent. Du coup je l'entraîne à différentes activités pour distraire la foule.", "Un jour un petit garçon est venu me voir en me disant qu'il n'avait pas à manger. Je lui ai donné du pain et une canne à pêche.", "Un ami m'a dépanné un soir en m'hébergeant et je lui ai préparé le petit déjeuné."];
	/* if (masculin){"J'ai rendu visite à mon ami(e) <mob> dans <zone>. Il avait l'air heureux de me voir."}else{"J'ai rendu visite à mon amie <mob> dans <zone>. Elle avait l'air heureuse de me voir."}*/
	
	return r_tableau(phr_boulanger);
}

function phr_esclave(){
	var phr_esclave = [trpg.j.nom + " ! il y a si longtemps que je rêvais de faire votre connaissance... C'est un si grand honneur...", "Je vais devoir me punir très sévèrement pour être venu vous voir, Monsieur. Je devrai me " + r_tableau(mutilation) + " pour avoir fait une chose pareille.", "..."];
	
	return r_tableau(phr_esclave);
}

function phr_gamine(){
	var phr_gamine = ["On buvait de la bière à l'époque des dinosaures ?", "Pourquoi il fait noir la nuit ?", "Pourquoi la mer monte et descend ?", "Pourquoi je ne peux pas voler comme un oiseau ?", "Pourquoi le monsieur, il est marron ?", "Comment font les bateaux pour flotter ?", "Le boulanger il est gentil, il m'a donné des bonbons."];
	
	return r_tableau(phr_gamine);
}

function phr_pecheur(){
	var phr_pecheur = ["J'ai pêché un poisson qui faisait au moins trois fois ta taille.", "Le prêtre a essayé de me faire bannir du village parce que je lui ai dit que je pêchais pour vivre.", "Chhhhut ! Tu vas effrayer l'poisson !", "Autrefois j'avais faim et les gens me donnaient à manger tout le temps. Mais le boulanger, lui, il m'a appris à pêcher. C'est l'homme le plus généreux que j'ai rencontré de toute ma vie.", "Houla, ça fait au moins 16h que je suis assis ici à attendre que ça morde !"];
	
	return r_tableau(phr_pecheur);
}

function phr_alchimiste(){
	var phr_alchimiste = ["Ah tu tombes bien ! Il me fallait un orteil humain. T'en as combien toi ? 10 ? Tu peux bien en prêter un !", "Cette fois ci c'est la bonne, je me lance dans la création d'" + r_tableau(potion) + ".", "J'ai été chez le marchand pour lui acheter " + r_tableau(obj_inutile) + " et j'en ai fait " + r_tableau(potion) + ".", "En m'inspirant du boulanger j'ai essayé de concocter une potion de gentillesse. Mais je n'ai jamais pu avoir un résultat à la hauteur de mon modèle.", "Ah tu tombes bien ! J'ai perdu l'étiquette de cette potion. Sa te dirais de la goûter pour me dire ce qu'elle fait ?", "Ah tu tombes bien ! Il me faudrait " + r_tableau(obj_bizarre) + "."];
	
	return r_tableau(phr_alchimiste);
}

function phr_culbuto(){
	var phr_culbuto = ["J'ai vu un " + r_objet(trpg.mobs).nom + " en me baladant dans " + r_objet(trpg.zone).nom +". C'est trop OP. *roulade*", "Y'a le marchand qui vend des " + r_tableau(obj_inutile) +", mais c'est tout pourri. Personne n'achètera jamais ça. *roulade*", "*Culbuto passe devant vous en roulant, il ne s'arrête pas*", "Pas le temps, frère ! *roulade*", "J'ai étudié les déplacements du garde et c'est trop pas opti comme façon de se déplacer. Il devrait faire comme moi ! *roulade*", "Yo frère, ça te dis que ce midi on mange ensemble ?"];
	
	return r_tableau(phr_culbuto);
}

function phr_mere_celibataire(){
	var phr_mere_celibataire = ["Ça vous intéresse de faire nounou pour mes enfants ?", "J'ai offert " + r_tableau(obj_inutile) + " à mon enfant pour qu'il se fasse les dents", "" + r_tableau(cct) + ", j'ai été promenner mon petit dans " + r_objet(trpg.zone).nom +" pour qu'il découvre le monde.", "" + r_tableau(cct) + ", j'ai confier mon enfant à " + r_objet(trpg.pnj).nom + " une petite heure, le temps d'aller faire des courses.", "Il parait que la grange à foin a brûlé. C'est dommage, j'y avais laissé ma torche", "Crois-tu qu'on puissent tomber amoureux en un seul regard."];
	
	return r_tableau(phr_mere_celibataire);
}

function phr_voyageur(){
	var phr_voyageur = ["Salut humble guerrier, je reviens d'un long voyage " + r_tableau(zone_diff) + ". " + r_tableau(interrogation_voyageur), "La meilleur bière que j'ai jamais bu proviens de la taverne du" + r_objet(trpg.mobs).nom + "  " + r_objet(adjectifs).masculin + ".", "J'ai rencontré beaucoup de personnes dans ma vie, mais c'est le boulanger que j'ai trouvé le plus généreux.", "J'ai ramené " + r_tableau(obj_bizarre) + " de mon dernier voyage et le marchand n'en veut pas. Ça t'intéresse ?"];
	
	return r_tableau(phr_voyageur);
}

function phr_culbuto(){
	var phr_culbuto = ["J'ai vu un " + r_objet(trpg.mobs).nom + " en me baladant dans " + r_objet(trpg.zone).nom +". C'est trop OP. *roulade*", "Y'a le marchand qui vend " + r_tableau(obj_inutile) +", mais c'est tout pourri. Personne n'achètera jamais ça. *roulade*", "*Culbuto passe devant vous en roulant, il ne s'arrête pas*", "Pas le temps, frère ! *roulade*", "J'ai étudié les déplacements du garde et c'est trop pas opti comme façon de se déplacer. Il devrait faire comme moi ! *roulade*", "Yo frère, ça te dis que ce midi on mange ensemble ?"];
	
	return r_tableau(phr_culbuto);
}

function phr_perroquet(){
	var phr_perroquet = ["J'ai envie de tuer mes parrrents, ils répondent jamais à mes questions !", "Tu penses qu'ils vont flairer l'arrrnaque si je met ces " +  r_tableau(obj_inutile) + " pour <nb entre 100 et 1000> pièces ?", "Yo frèrrre, j'connais une combine pour avoir des carottes moins chères que gratuites ! *rrroulade*", "Tiens mon petit perrrrroquet, du bon pain encore chaud.", "Il pleut, ma fille regard désespérrrément par la fenêtre, elle me fait de la peine, je crrroit que je vais la laisser entrrer.", "Quand ta jeunesse est pérrrimée, un bon chien vaut mieux que de se masturrrber.", "Le chemin par delà la montagne est condamné, nous devrons traverser le Montdurrr.", "Allez-y, la voie est libre, je fermerrrais les yeux sur vos actions."];
	
	return r_tableau(phr_perroquet);
}

function phr_fermiere(){
	var phr_fermiere = ["Vadiou les veches, elles's'ont enco' barrées !", "Ya les voyoux qui ont pillé la ferme du vieux " + r_tableau(nom_paysant) + ".", "Hey p'tiot ! ya un sal'" + r_objet(trpg.mobs).nom + " qui bousille mes champs , si tu lui bot' le cul j'te recompens'rai !", "T'faon le seul intérêt d'la " + r_tableau(fete) + " c'est qu'on peux picoler !"];
	
	return r_tableau(phr_fermiere);
}

function phrases (_pnj){
	popin({
		closeButton : true,
		header : {
			title : _pnj.nom,
			titleColor : "#ffffff",
			headerColor : "#3F51B5"
		},
		description : _pnj.phr()
	});
}