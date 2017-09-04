/**********************/
/* === NOM JOUEUR === */
/**********************/

function n_random() {
	var nbr = Math.floor(Math.random() * (999 - 1)) + 1;

	return nbr;
}

/* ===================================================  */
/* ====================  Joueur  ===================  */
/* ===================================================  */
var Update;
var Sauvegarde_auto;
var a_niveau = $('#j_nv');
var a_trucs = $('#j_trucs');
var a_jours = $('#j_jours');
var a_chance = $('#j_chance');
var a_force = $('#j_force');

trpg.j = {
	nom: "Joueur " + n_random(),
	niveau: 1,
	xp: 0,
	xp_max: 100,

	trucs: 0,
	trucs_par_pot: 1,

	vie: 100,
	vie_max: 100,

	quete_en_cours: "",
	nb_quete_accomplies: 0,
	zone: "Village",

	chance: 1,
	chance_max: 9999,
	xp_chance: 0,
	xp_chance_max: 100,

	force: 5,
	force_max: 9999,
	xp_force: 0,
	xp_force_max: 100,

	eloquence: 1,

	btn : {},
	msg : {},
	
	maison: false,
	equipement: null, //si un seul on laisse, si plusieurs équipement il faut un objet equipement en dehors

	f_xp: function (valeur) {
		this.xp += valeur;

		var ajout = 0;
		//si lvl up
		if (this.xp >= this.xp_max) {
			var ajout = this.xp - this.xp_max;
			this.xp = 0;
			this.niveau++;
			message("important", "Vous avez gagné un niveau.");
			a_niveau.html(this.niveau);

			this.xp_max = Math.floor(Math.pow(this.xp_max, 1.03));
			this.vie_max = Math.floor(Math.pow(this.vie_max, 1.01));
			modifier_max_barre('barre_xp', this.xp_max);
			modifier_max_barre('barre_vie', this.vie_max);
		}

		modifier_barre('barre_xp', this.xp);
		modifier_barre('barre_vie', this.vie_max);

		if (ajout > 0) {
			this.f_xp(ajout);
		}
	},

	f_xp_chance: function (valeur) {
		this.xp_chance += valeur;

		var ajout = 0;
		var msg_dieu;
		//si lvl up
		if (this.xp_chance >= this.xp_chance_max) {
			var ajout = this.xp_chance - this.xp_chance_max;
			this.xp_chance = 0;
			this.chance++;

			//a_niveau.html(this.niveau);

			this.xp_chance_max = Math.floor(Math.pow(this.xp_chance_max, 1.01));
			//modifier_max_barre('barre_xp', this.xp_max);
		}

		//modal_chance();

		//modifier_barre('barre_xp', this.xp);

		if (ajout > 0) {
			this.f_xp_chance(ajout);
		}

		if (this.chance == 1) {
			a_chance.html('Chance : ' + trpg.j.chance);
		} else {
			a_chance.html('Chances : ' + trpg.j.chance);
		}

	},

	f_xp_force: function (valeur) {
		this.xp_force += valeur;

		var ajout = 0;
		//si lvl up
		if (this.xp_force >= this.xp_force_max) {
			var ajout = this.xp_force - this.xp_force_max;
			this.xp_force = 0;
			this.force++;
			//a_niveau.html(this.niveau);

			this.xp_force_max = Math.floor(Math.pow(this.xp_force_max, 1.01));
			//modifier_max_barre('barre_xp', this.xp_max);
		}

		//modal_force();

		//modifier_barre('barre_xp', this.xp);

		if (ajout > 0) {
			this.f_xp_force(ajout);
		}

		if (this.force == 1) {
			a_force.html('Force : ' + trpg.j.force);
		} else {
			a_force.html('Forces : ' + trpg.j.force);
		}

	},

	f_trucs: function (valeur) {
		this.trucs += valeur;

		if (this.trucs > 1) {
			a_trucs.html(trpg.j.trucs + ' Trucs');
		} else {
			a_trucs.html(trpg.j.trucs + ' Truc');
		}
	},

	f_vie: function (valeur) {
		this.vie += valeur;
		if (this.vie >= this.vie_max) {
			this.vie = this.vie_max;
		}
		if (this.vie <= 0) {
			this.vie = 0;
			//game over
		}

		modifier_barre('barre_vie', this.vie);
	},

	f_maison: function (valeur) {
		this.maison = valeur;
	},

	f_jour: function () {},

	sauvegarde_auto: function () {
		//toute les 5min
		//Sauvegarde_auto = setInterval( sauvegarder() , 3000000 );
	},
	sauvegarde_auto_active: false

	//fonction pour activer / desactiver la sauvegarde auto

};