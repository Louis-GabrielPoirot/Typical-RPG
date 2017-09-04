trpg.contenu = {
	wrapper : document.querySelector("#trpg-content")
}
var vue_actuelle = 1;

var listeContenu = [
  {id:"mainContent", html:trpg.contenu.wrapper.querySelector("#main-content"), affichage:true},
  {id:"fightContent", html:trpg.contenu.wrapper.querySelector("#fight-content"), affichage:false, resize: function(){combatContentSize()}} 
];
function charge_contenu(contenu){
	
	for(var i=0; i<listeContenu.length; i++){
		
		trpg.contenu[listeContenu[i].id] = {
			wrapper : listeContenu[i].html
		}
		
		if(listeContenu[i].id === contenu){
			if(listeContenu[i].affichage === false){
				listeContenu[i].html.style.display = "block";
				listeContenu[i].affichage = true;
       
				if(listeContenu[i].resize){
					listeContenu[i].resize();
				}

			}
		}else{
			listeContenu[i].html.style.display = "none";
      listeContenu[i].affichage = false;
		}
	}
	
	if(contenu === "mainContent"){
		recharger_vue();
		$('#vue' + 1).velocity('transition.fadeIn');
        $('.menu_ppal button').removeClass('active');
        $('#btn_vue_' + 1).addClass('active');
        vue_actuelle = 1;
        enlever_alerte(1);
	}
}

function vue(vue) {
    if (vue != vue_actuelle) {
        $('.vue').velocity('transition.fadeOut', 200);
        recharger_vue();

        $('#vue' + vue).velocity('transition.fadeIn', 200);
        $('.menu_ppal button').removeClass('active');
        $('#btn_vue_' + vue).addClass('active');
        vue_actuelle = vue;
        enlever_alerte(vue);
    }
}

function recharger_vue() {
    $('#vue1').html('');
    $('#vue2').html('');
	
	for (var id in trpg.boutons){
		
		
		trpg.j.btn['btn_' + id] = trpg.boutons[id].dispo;
		var actuel = trpg.boutons[id];
		var vue_div = $('#vue' + actuel.vue);

		if (actuel.dispo){
			var btn = "";
            btn += '<button id="item_' + id + '" class="btn btn-default col-xs-12 col-md-4 item" title="' + actuel.info + '">';
            btn += '<img src="imgs/' + actuel.img + '" alt="" >';
            if (actuel.prix > 0) {
                btn += '<p class="prix">-' + actuel.prix + '</p>';
            }
            btn += '<h3 class="item_nom">' + actuel.nom + '</h3>';
            btn += '<p class="item_desc">' + actuel.desc + '</p>';
            btn += '</button>';

            vue_div.append(btn);
			
            $('#item_' + id).click(trpg.boutons[id].click);
		}
	}
}


$('.menu_ppal button').click(function () {
    vue($(this).attr('vue'));
});

//badges.js
function alerte(vue) {
  $('#btn_vue_' + vue + ' .badge').velocity({
    opacity: 0.8
  }, {
    loop: 1,
    delay: 100,
    complete: function(){ $('#btn_vue_' + vue + ' .badge').velocity('transition.fadeIn') }
  });
}

function enlever_alerte(vue){
  $('#btn_vue_' + vue + ' .badge').velocity({opacity : 0});
}

//Barres.js
function modifier_barre( id, valeur ){
  var b = $('#'+id).attr("aria-valuenow", ""+valeur);
  
  var max = b.attr("aria-valuemax");
  var pc = Math.floor(valeur*100/max);
  
  b.css({width : pc + "%"});
  
  if(id != "barre_xp"){
    b.removeClass("progress-bar-success");
    b.removeClass("progress-bar-warning");
    b.removeClass("progress-bar-danger");
    
    if(pc >= 66){
      b.addClass("progress-bar-success");
    }else if(pc >= 33 && pc < 66){
      b.addClass("progress-bar-warning");
    }else{
      b.addClass("progress-bar-danger");
    }
  }
  
  $('#'+id+' ._val').html( pc + '% ('+ valeur+' / '+max +')');
  
}

function modifier_max_barre(id, valeur ){
  var b = $('#'+id).attr("aria-valuemax", ""+valeur);
  modifier_barre( id, b.attr("aria-valuenow") );
}