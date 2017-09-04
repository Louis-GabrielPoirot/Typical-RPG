/********************************************/
/* === Fonction randome === */
/********************************************/

function giveId(obj) {
	var i = 0;
	for (var id in obj) { // On stocke l'identifiant dans « id » pour parcourir l'objet « obj »
		obj[id].id = i;
		i++;
	}
}

// in : tableau js
// out : item aléatoire du tableau 
// Donne un adjectif / Nom / blabla
function r_tableau(tab) {
	return tab[Math.floor(Math.random() * tab.length)];
}

function r_objet(tab) {
	var r_id = Math.floor(Math.random() * Object.keys(tab).length);
	return tab[Object.keys(tab)[r_id]];
}

//Use this just for call a mob by zone.
function r_objet_mobs(tab, zone) {
	var _mobs = {};

	for (var id in tab) {
		if (tab[id].zone === zone) {
			_mobs[id] = tab[id];
		}
	}

	return r_objet(_mobs);
}

//Use this just for call a adj by bonus/mallus.  
function r_objet_adjectifs(tab, bonus) {
	var _adjectifs = {};

	for (var id in tab) {
		if (tab[id].bonus === bonus) {
			_adjectifs[id] = tab[id];
		}
	}

	return r_objet(_adjectifs);
}

/* =================================================== */
/* ====================  Function  =================== */
/* =================================================== */

// in : float ou int
// out : float random entre min et max
function r(min, max) {
	max *= 100;
	return Math.floor(Math.random() * (max - min + 1) + min) / 100;
}

//in float
//out bool  ||||  test de [in]% de chance de reussite
function test_pc(value) {
	if (r(0, 100) <= value) {
		return true;
	} else {
		return false;
	}
}

/*******************************/
/* === TRUCS DANS LES POTS === */
/*******************************/

function o_tableau() {

	var objet = objets[Math.floor(Math.random() * objets.length)];

	return objet;
}

/**
 * Return true or false whether a dom element has the given CSS class or not
 * @function pseudo
 * @param cname the class name
 * @return {boolean} true or false
 **/

function pseudo() {
	var s = trpg.j.nom;
	$('#j_nom').append(s);
}

/********************************************/
/* === Fonction affichage message objet === */
/********************************************/

var nbr_msg_o = 0;

/*** V1 ***/
function msg_o(valeur) {

	nbr_msg_o++;
	var objets = o_tableau();

	if (nbr_msg_o <= 4) {
		var s = "<p id=\"obj" + nbr_msg_o + "\">" + objets + "</p>";
		$('#msg').append(s);
	} else {
		var t = nbr_msg_o - 4;
		$('#obj' + t).remove();
		var s = "<p id=\"obj" + nbr_msg_o + "\">" + objets + "</p>";
		$('#msg').append(s);
	}

}

/***************************/
/* === PARLER A UN PNJ === */
/***************************/

function discussion() {
	var atp = adverbes_temps_passe[Math.floor(Math.random() * adverbes_temps_passe.length)];
	var appd = action_passe_personne_deplacement[Math.floor(Math.random() * action_passe_personne_deplacement.length)];
	var l = lieux[Math.floor(Math.random() * lieux.length)];
	var appp = action_passe_premiere_personne[Math.floor(Math.random() * action_passe_premiere_personne.length)];
	var np = nom_pnj[Math.floor(Math.random() * nom_pntrpg.j.length)];
	var m = mobs[Math.floor(Math.random() * mobs.length)].n;

	var phrase = atp + ", " + appd + " " + l + " et " + appp + " un " + np;

	alert(phrase);
}

/***********************/
/* === EXPLORATION === */
/***********************/

function m_tableau(zone) {
	var monstre = {
		z: 999
	};

	while (monstre.z != zone) {
		var monstre = mobs[Math.floor(Math.random() * mobs.length)];
	}

	return monstre;
}

function decouvertes() {
	var i = Math.floor(Math.random() * (3 - 1)) + 1;
	//alert (i);

	switch (i) {
	case 1:
		var evenement = "Vous n'avez rien trouvé.";
		break;

		/*case 2:
		  var lieu = lieux[Math.floor(Math.random() * mobs.length)];
		  if(lieu.m == true){
		    var lieu = "un " + lieu.n;
		  }else{
		    var lieu = "une " + lieu.n;
		  }
		  var evenement = "Vous avez trouvé une " + objet + "dans " + lieu + " !";
		  trpg.j.f_trucs(1);
		  break;*/

	case 2:
		if (!boutons[9].dispo) {
			//bouton plaine
			etat_bouton(9, true, true);
			var evenement = "Vous avez découvert une nouvelle zone.";
		} else {
			var evenement = "Vous n'avez rien trouvé.";
		}
		break;
	case 3:
		//var j = Math.floor(Math.random() * (5 - 1)) + 1;
		//alert(j);
		var evenement = "Vous avez trouvé un coffre avec 3 trucs à l'interieur.";
		trpg.j.f_trucs(+3);
		break;
	}
	alert(evenement);
}

var selectMessage_status = false;

function selectMessage() {
	if (!selectMessage_status) {
		selectMessage_status = true;
		trpg.message.btn_wrapper.querySelector(".glyphicon").classList.remove("glyphicon-triangle-bottom");
		trpg.message.btn_wrapper.querySelector(".glyphicon").classList.add("glyphicon-triangle-top");

		trpg.message.select_wrapper.style.display = "block";
		trpg.message.select_wrapper.style.top = 35 + "px";
	} else {
		selectMessage_status = false;
		trpg.message.btn_wrapper.querySelector(".glyphicon").classList.remove("glyphicon-triangle-top");
		trpg.message.btn_wrapper.querySelector(".glyphicon").classList.add("glyphicon-triangle-bottom");

		trpg.message.select_wrapper.style.display = "none";
	}
}

var msgCheck = {
	important: {
		status: true,
		nbrId: 0,
		nbr: 0
	},
	secondaire: {
		status: true,
		nbrId: 0,
		nbr: 0
	},
	recompense: {
		status: true,
		nbrId: 0,
		nbr: 0
	},
	perte: {
		status: true,
		nbrId: 0,
		nbr: 0
	}
};

function checkboxMessage(type) {
	for (var key in msgCheck) {
		if (key === type.id) {
			msgCheck[key].status = type.checked;
			message(key, "", type.checked);
		}
	}
}

function message(type, msg, status) {
	var nbrMsg = 0;
	var msgText;
	var msgContenant = trpg.message.wrapper.querySelector('#message-container');

	for (var key in msgCheck) {
		if (msgCheck[key].status) {
			nbrMsg += msgCheck[key].nbr;
		}
	}

	msgContenant.style.overflowY = "hidden";

	if (nbrMsg >= 3) {
		msgContenant.style.overflowY = "scroll";
	}

	if (msg !== "") {

		for (var key in msgCheck) {
			if (key === type) {

				msgCheck[key].nbr++;
				msgCheck[key].nbrId++;

				if (msgCheck[key].nbrId > 30) {
					msgCheck[key].nbrId = 1;
				}

				if (msgCheck[key].nbr > 30) {
					msgContenant.querySelector('#msg' + type + '' + msgCheck[key].nbrId).remove();
					msgCheck[key].nbr--;
				}

				msgText = document.createElement('p');
				msgText.setAttribute('id', 'msg' + type + '' + msgCheck[key].nbrId);
				msgText.setAttribute('class', type);

				msgContenant.appendChild(msgText);

				var msgContenu = document.createTextNode(msg);
				msgText.appendChild(msgContenu);
				
				$("#msg" + type + '' + msgCheck[key].nbrId).velocity("scroll", { 
				  container: msgContenant,
				  duration: 100,
				  delay: 0
				});

				$("#msg" + type + '' + msgCheck[key].nbrId).velocity('transition.fadeIn');
				
				msgText.style.borderLeft = "1px dashed #f0f0f0";
				msgText.style.paddingLeft = 10 + "px";
				
				if (!msgCheck[key].status) {
					msgText.style.display = "none";
				}
			}
		}

	} else {
		msgText = msgContenant.getElementsByClassName(type);
		for (var i = 0; i < msgText.length; i++) {
			if (status) {
				msgText[i].style.display = "block";
			} else {
				msgText[i].style.display = "none";
			}
		}
	}
}

/*function exploration(zone) {

	var monstre = m_tableau(zone);
	var adjectif1 = adjectifs[Math.floor(Math.random() * mobs.length)];
	var adjectif2 = adjectifs[Math.floor(Math.random() * mobs.length)];

	if (monstre.m === true) {
		var mob = monstre.n + " " + adjectif1.m + " " + adjectif2.m;
	} else {
		var mob = monstre.n + " " + adjectif1.f + " " + adjectif2.f;
	}
	alert("Vous êtes attaqués par un " + mob);
}*/

function upgrade(valeur, ratio, nbr) {
	if (!nbr) {
		nbr = 1;
	}

	var k = valeur;
	for (var i = 0; i < nbr; i++) {
		k = Math.floor(Math.pow(k, ratio));
	}

	return k;
}

function exploration(zone) {

	var monstre = {
		mob: r_objet_mobs(trpg.mobs, zone.id),
		adj1: r_objet(adjectifs),
		adj2: r_objet(adjectifs)
	}

	combat(monstre);
}

function combat(monstre) {
	charge_contenu("fightContent");

	var w_nom = trpg.contenu.fightContent.wrapper.querySelector("#m_nom");
	var w_adj1 = trpg.contenu.fightContent.wrapper.querySelector("#m_adj1");
	var w_adj2 = trpg.contenu.fightContent.wrapper.querySelector("#m_adj2");
	var w_lvl = trpg.contenu.fightContent.wrapper.querySelector("#m_lvl");

	w_nom.innerHTML = monstre.mob.nom;

	if (monstre.mob.sexe === "m") {
		w_adj1.innerHTML = monstre.adj1.masculin;
		w_adj2.innerHTML = monstre.adj2.masculin;
	} else {
		w_adj1.innerHTML = monstre.adj1.feminin;
		w_adj2.innerHTML = monstre.adj2.feminin;
	}

	var cbt_mob = {
		lvl : trpg.j.niveau + monstre.adj1.bonus + monstre.adj2.bonus
	};

	cbt_mob.vie = upgrade(monstre.mob.vie, monstre.mob.r_vie, cbt_mob.lvl);
	cbt_mob.force = upgrade(monstre.mob.force, monstre.mob.r_force, cbt_mob.lvl);
	

	w_lvl.innerHTML = "NV." + cbt_mob.lvl;
	modifier_barre('barre_vie_mob', cbt_mob.vie);
	modifier_max_barre('barre_vie_mob', cbt_mob.vie);

	function victoire (){

		popin({
			closeButton : true,
			header : {
				title : "Victoire",
				titleColor : "#ffffff",
				headerColor : "#49A349"
			},
			description : "Vous gagnez de l'expérience"
		});

		trpg.j.f_xp(100);

		charge_contenu("mainContent");
	}

	function defaite (type){
		if(type === "fuite") {
			message("perte", "Vous avez fuit le combat, vous perdez 1/10 de votre vie.");

			trpg.j.vie = trpg.j.vie - (trpg.j.vie / 10);
			modifier_barre('barre_vie', trpg.j.vie);

			popin({
				closeButton : true,
				header : {
					title : "Defaite",
					titleColor : "#ffffff",
					headerColor : "#CB1A28"
				},
				description : "Vous avez fuit le combat..."
			});
		} else {
			trpg.j.vie = 10;
			modifier_barre('barre_vie', trpg.j.vie);

			message("perte", "Vous avez perdu votre combat...");

			popin({
				closeButton : true,
				header : {
					title : "Defaite",
					titleColor : "#ffffff",
					headerColor : "#CB1A28"
				},
				description : "Vous avez perdu votre combat..."
			});
		}

		charge_contenu("mainContent");
	}

	function frapper(character) {
		console.log(cbt_mob);
		if(tourJoueur && character === "joueur") {
			cbt_joueur = {
				force : upgrade(trpg.j.force, 1.2, trpg.j.niveau)
			}
			cbt_mob.vie = cbt_mob.vie - cbt_joueur.force;
			
			message("perte", "Votre adversaire perd " + cbt_joueur.force + " point de vie.");

			if(cbt_mob.vie < 0) {
				console.log("houuuuu");
				cbt_mob.vie = 0;

				victoire();
			} else {
				tour_monstre();
			}

			modifier_barre('barre_vie_mob', cbt_mob.vie);
		} else if(character === "mob") {
			trpg.j.vie = trpg.j.vie - cbt_mob.force;

			message("perte", "Vous perdez " + cbt_mob.force + " point de vie.");

			if(trpg.j.vie < 0) {
				console.log("dbdfhdfhdh");
				trpg.j.vie = 0;

				defaite();
			} else {
				tour_joueur();
			}

			modifier_barre('barre_vie', trpg.j.vie);
		}
	}

	function changement_tour(texte) {
		var w_tour = trpg.contenu.fightContent.wrapper.querySelector("#tour");
		
		w_tour.innerHTML = texte;
	}
	
	function tour_joueur() {
		tourJoueur = true;
		changement_tour("Votre tour");
	}
	
	function tour_monstre() {
		tourJoueur = false;
		changement_tour("Tour adv.");

		setTimeout(function(){
			frapper("mob");
		},1500);
	}
	
	tour_joueur();

	document.querySelector("#Frapper").addEventListener("click", function(){
		frapper("joueur");
	});
	document.querySelector("#Fuir").addEventListener("click", function() {
		defaite("fuite");
	});
}