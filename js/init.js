/*/////////////////////////////////////////////////////////////
//////////////////////////  INIT  /////////////////////////////
/////////////////////////////////////////////////////////////*/

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var trpg = {
	wrapper : document.body,
	message : {
		wrapper : document.querySelector("#message"),
		btn_wrapper : document.querySelector("#message .btn-type-msg"),
		select_wrapper : document.querySelector("#message .msg-select")
	},
	contenu : {
		wrapper : document.querySelector("#trpg-content")
	}
};

var librairies = ["fonctions_vues.js", "modal.js", "tableaux/t_mobs.js", "sources.js", "fonctions.js", "action.js"];

/*if(){
	librairies.push("nom.js");
}*/

jQuery.loadScript = function (url, sync, callback) {
    jQuery.ajax({
        url: "js/" + url,
        dataType: 'script',
        success: callback,
        async: sync
    });
}

function callLibrary (sync){
	for(var i = 0; i < librairies.length; i++){
		$.loadScript(librairies[i], sync, function(){
			
		})
	}
	librairies = [];
}

callLibrary(false);

/* Moteur est appellée 60fois par secondes */
var Moteur = function(){
  //calls
  requestAnimationFrame( function(){
    Moteur();
  } );
}


if(localStorage.length != 0){
  charger();
}

modifier_barre('barre_vie', trpg.j.vie);
modifier_barre('barre_xp', trpg.j.xp);

trpg.j.f_xp(496);
var firstMessage = document.querySelector('#message-container');
while (firstMessage.firstChild) {
  firstMessage.removeChild(firstMessage.firstChild);
}

//recharger_vue();
charge_contenu("mainContent");

pseudo(); // Fonction qui génére le pseudo 
onWindowResize(); // Fonction qui def la taille de la section .items_ctn