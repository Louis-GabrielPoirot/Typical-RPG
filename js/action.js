trpg.boutons = {
	vill_pot : {
        vue: 1,
        nom: "Casser un pot",
        prix: 0,
        desc: "Rapporte des Trucs (monnaie)",
        info: "Trucs : +1",
        dispo: true,
        img: 'pot.png',
        click: function () {
            if (trpg.j.vitesse != 'pause') {
                trpg.j.f_trucs(trpg.j.trucs_par_pot);
                trpg.j.f_xp(5);
                msg_o(10);
                message("recompense", "Vous avez gagné 1 truc.");
            }else{
              modal_pause();
            }
        }
	},
	vill_dormir : {
		vue: 1,
        nom: "Dormir à l'auberge",
        prix: 0,
        desc: "Restaure la vie",
        info: "Vie : +20",
        dispo: false,
        img: 'auberge.png',
        click: function () {
            if (trpg.trpg.j.vitesse != 'pause') {
                trpg.trpg.j.f_vie(20);
                trpg.trpg.j.f_bonheur(-10);
            }else{
              modal_pause();
            }
        }
	},
	vill_taverne : {
		vue: 1,
        nom: "Boire à la taverne",
        prix: 7,
        desc: "Restaure votre bonheur",
        info: "Faim : +5, Bonheur: +20",
        dispo: false,
        img: 'taverne.png',
        click: function () {
            if (trpg.trpg.j.vitesse != 'pause') {
                if (trpg.trpg.j.trucs >= 7) {
                    trpg.trpg.j.f_trucs(-7);
                    trpg.trpg.j.f_faim(5);
                    trpg.trpg.j.f_bonheur(20);
                }
            }else{
              modal_pause();
            }
        }
	},
	vill_pnj : {
		vue: 1,
        nom: "Parler avec les PNJs",
        prix: "",
        desc: "Apprennez les dernières nouvelles",
        info: "",
        dispo: true,
        img: 'chat.png',
        click: function () {
			phrases(r_objet(trpg.pnj));
        }
	},
	vill_offrande : {
		vue: 1,
        nom: "Offrande aux dieux",
        prix: "",
        //desc: "Augmentez votre chance (xp chance : " + trpg.j.xp_chance + "/" + trpg.j.xp_chance_max + ")",
        desc: "Augmentez votre chance",
        info: "Chance : +10 xp chance",
        dispo: false,
        img: 'offrande.png',
        click: function () {
            if (trpg.j.vitesse != 'pause') {
                if (trpg.j.chance < trpg.j.chance_max) {
                    if (trpg.j.trucs >= 0) {
                        trpg.j.f_trucs(-0);
                        trpg.j.f_xp_chance(+10);
                        //alert(trpg.j.xp_chance);
                        //alert(trpg.j.xp_chance_max);
                    }
                } else {
                    alert("lvl max atteint");
                }
            }else{
              modal_pause();
            }
        }
	},
	vill_entrainement : {
		vue: 1,
        nom: "S'entraîner au combat",
        prix: "",
        //desc: "Augmentez votre force (xp force : " + trpg.j.xp_force + "/" + trpg.j.xp_force_max + ")",
        desc: "Augmentez votre force",
        info: "Force : +10 xp force",
        dispo: false,
        img: 'entrainement.png',
        click: function () {
            if (trpg.j.vitesse != 'pause') {
                if (trpg.j.force < trpg.j.force_max) {
                    if (trpg.j.faim >= 0 && trpg.j.vie >= 0) {
                        trpg.j.f_faim(-0);
                        trpg.j.f_vie(-0);
                        trpg.j.f_xp_force(+10);
                        //alert(trpg.j.xp_force);
                        //alert(trpg.j.xp_force_max);
                    }
                } else {
                    alert("lvl max atteint");
                }
            }else{
              modal_pause();
            }
        }
	},
	ave_foret : {
        vue: 2,
        nom: "Aller à la Forêt",
        prix: "",
        desc: "Découvrez de nouvelles zones",
        info: "",
        dispo: true,
        img: 'foret.png',
        click: function () {
            if (trpg.j.vitesse != 'pause') {
                //if (trpg.j.faim >= 15) {
                    /*trpg.j.f_faim(-15);
                    trpg.j.f_bonheur(5);*/
                    //exploration(1);
                    etat_bouton(trpg.boutons.ave_plaine, true, true);

                    exploration(trpg.zone.foret);
                //}
            }else{
              modal_pause();
            }
        }
    },
	ave_combat : {
        vue: 2,
        nom: "Lancer un combat",
        prix: "",
        desc: "Tu lance un combat direct",
        info: "",
        dispo: false,
        img: 'epee_1.png',
        click: function () {
			charge_contenu("fightContent");
        }
    },
	ave_plaine : {
        vue: 2,
        nom: "Aller à la plaine",
        prix: "",
        desc: "Découvrez de nouvelles zones",
        info: "",
        dispo: false,
        img: 'plaine.png',
        click: function () {
            if (trpg.j.vitesse != 'pause') {
                //if (trpg.j.faim >= 15) {
                    /*trpg.j.f_faim(-15);
                    trpg.j.f_bonheur(5);*/
                    alert("Cette zone n'est pas encore disponible.");
                //}
            }else{
              modal_pause();
            }
        }
	}
}

trpg.message.btn_wrapper.addEventListener("click", selectMessage);

var messageCheckbox = document.querySelectorAll(".msg-select input");
for (var i = 0; i < messageCheckbox.length; i++) {
    messageCheckbox[i].addEventListener("click", function() {
        checkboxMessage(this);
    });
}

/*************************/				
/*** Affichage boutons ***/
/*************************/

function etat_bouton(id, etat, envoyer_alerte) {
    id.dispo = etat;
    recharger_vue();
    if (envoyer_alerte == undefined) {
        //pas d'erreur si le deuxième paramètre n'est pas défini
    } else {
        if (envoyer_alerte) {
            alerte(id.vue);
        }
    }
}

function info_bouton(id, info, img, click, envoyer_alerte) {
    trpg.boutons[id].info = info;
    trpg.boutons[id].img = img;
    trpg.boutons[id].click = click;
    recharger_vue();
    if (envoyer_alerte == undefined) {
        //pas d'erreur si le deuxième paramètre n'est pas défini
    } else {
        if (envoyer_alerte) {
            alerte(trpg.boutons[id].vue);
        }
    }
}