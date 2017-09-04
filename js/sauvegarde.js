function sauvegarder() {
  // l'objet j est sauvegardé automatiquement, rien a remplir ici
  localStorage.clear();
  localStorage.setItem("j", JSON.stringify(j));
  for (var i = 0; i < boutons.length; i++) {
    localStorage.setItem("fn_" + i, boutons[i].dispo);
  }
  return true;
}

function charger() {
  //tous n'est PAS chargé automatiquement !
  
  //chargement auto de l'objet joueur
  var objet_j = JSON.parse(localStorage.j);
  for (var data in objet_j ) {
    j[data] = objet_j[data];
  }
  //chargement auto des fonctions/objets
  for (var i = 0; i < boutons.length; i++) {
    etat_bouton(i, localStorage["fn_" + i], false);
  }
  
  //Les affichages ne sont pas chargé automatiquement...
  a_niveau.html(j.niveau);
  a_trucs.html(j.trucs);
  a_jours.html(j.jours+' J.');

}

function effacer_sauvegarde() {
  localStorage.clear();
  console.log('Partie effacée');
  window.location.reload();
}

//test
$('#test1').click(sauvegarder);
$('#test2').click(effacer_sauvegarde);
