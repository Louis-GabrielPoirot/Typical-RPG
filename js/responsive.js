function onWindowResize(){
  var item_ctn = $('.items_ctn');
  item_ctn.height( window.innerHeight - $('#header').height() - $('#stats').height() - $('#message').height() - $('#nav').height() - $('#footer').height() - 8); //59 = paddings + borders...
}
window.addEventListener( 'resize', onWindowResize, false);
onWindowResize();

function combatContentSize(){
	var ctn = trpg.contenu.fightContent.wrapper;
	var cbtContent = trpg.contenu.fightContent.wrapper.querySelector(".cbt-content");
	var cbtHeader = trpg.contenu.fightContent.wrapper.querySelector(".cbt-header");
	
	var calcHeight = window.innerHeight - $('#header').height() - $('#stats').height() - $('#message').height() - $('#footer').height() - 18;
	
	ctn.style.height = calcHeight + "px";
	
	var calcHeightContent = calcHeight - cbtHeader.getBoundingClientRect().height -trpg.contenu.fightContent.wrapper.querySelector(".cbt-footer").getBoundingClientRect().height - 10;
	
	cbtContent.style.height = calcHeightContent + "px";
	
	
	if(window.innerHeight < 550){
		cbtContent.style.display = "none";
		cbtHeader.style.marginTop = (calcHeightContent/2) + 7 + "px";
	}
}

