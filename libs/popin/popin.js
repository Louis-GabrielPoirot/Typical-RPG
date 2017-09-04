/** Library by Louis-Gabriel Poirot  **/
/** 05/2017 **/

var removePopin;

function popin(options) {
	/* -- Add Overlay -- */
	var popinOverlay = document.createElement("div");
	popinOverlay.className = "popin-overlay";
	
	document.body.appendChild(popinOverlay);
	
	/* -- Add popin wrapper -- */
	var popinWrapper = document.createElement("div");
	popinWrapper.id = "popin";
	
	document.body.appendChild(popinWrapper);
	
	/* -- Add popin content -- */
	if(options.iframe) {
		/* -- Add popin Iframe -- */
		popinWrapper.innerHTML = '<iframe id="popin-iframe" src="' + options.iframe +'"></iframe>';
	} else if (options.description){
		/* -- Add popin Text -- */

		/* -- Popin Content -- */
		var popinContent = document.createElement("div");
		popinContent.className = "popin-content";

		popinWrapper.appendChild(popinContent);

		if(options.description){
			popinContent.innerHTML = options.description;
		} else {
			console.error("Popin.js : Description missing");
		}
	} else {
		console.error("Popin.js : content missing");
	}
	
	/* -- Remove popin -- */
	removePopin = function() {
		popinWrapper.parentNode.removeChild(popinWrapper);
		popinOverlay.parentNode.removeChild(popinOverlay);
	};
	
	var popinHeader;
	if(options.header) {
		/* -- Add popin Header -- */
		popinHeader = document.createElement("div");
		popinHeader.className = "popin-header";

		popinWrapper.insertBefore(popinHeader, popinWrapper.childNodes[0]);
		popinWrapper.style.borderBottom = "3px solid #999999";

		if(options.header.headerColor){
			popinHeader.style.backgroundColor = options.header.headerColor;
			popinWrapper.style.borderBottomColor = options.header.headerColor;
		}

		/* -- Add popin Title -- */
		var popinTitle = document.createElement("h2");
		popinTitle.className = "popin-header-title";

		popinHeader.appendChild(popinTitle);

		if(options.header.title){
			popinTitle.innerHTML = options.header.title;
		} else {
			console.error("Popin.js : Title missing");
		}

		if(options.header.titleColor){
			popinTitle.style.color = options.header.titleColor;
		}
	}
	
	/* -- Add popin CloseButton -- */
	if(options.closeButton) {
		/* -- Popin CloseButton -- */
		var popinCloseButton = document.createElement("a");
		popinCloseButton.className = "popin-header-closeButton";

		if(popinHeader) {
				popinCloseButton.style.top =  50 + "%";
				popinCloseButton.style.transform = "translate(0%, -50%) scale(0)";
				popinCloseButton.style.webkitTransform = "translate(0%, -50%) scale(0)";
			popinHeader.appendChild(popinCloseButton);
		} else {
			popinWrapper.appendChild(popinCloseButton);
		}
		
		/* -- Event -- */
		popinCloseButton.addEventListener("click", function () {
			removePopin();
		});
	}
	
	popinOverlay.addEventListener("click", function () {
		removePopin();
	});
	
if(shakeIt) {
		/* -- Animation -- */
		shakeIt(popinOverlay, {
			duration: 500,
			opacity : 1
		});

		shakeIt(popinWrapper, {
			duration: 600,
			opacity : 1,
			effect : "ease"
		});

		setTimeout(function() {
			shakeIt(popinContent, {
				duration: 300,
				opacity: 1
			});
		}, 200);

		if(popinHeader) {
			shakeIt(popinHeader, {
				duration: 400,
				opacity : 1,
				transform : "scaleY(1)",
				webkitTransform : "scaleY(1)"
			});

			setTimeout(function() {
				shakeIt(popinTitle, {
					duration: 250,
					opacity : 1,
					margin: 0
				});
			}, 150);
		}

		if(popinCloseButton) {
			setTimeout(function() {
				shakeIt(popinCloseButton, {
					duration: 350,
					opacity : 0.5,
					transform : "translate(0%, -50%) scale(1)",
					webkitTransform : "translate(0%, -50%) scale(1)"
				});
			}, 100);

			popinCloseButton.addEventListener("mouseover", function () {
				shakeIt(popinCloseButton, {
					duration: 300,
					opacity : 1,
					transform : "translate(0%, -50%) scale(1) rotate(180deg)",
					webkitTransform : "translate(0%, -50%) scale(1) rotate(180deg)"
				});
			});

			popinCloseButton.addEventListener("mouseout", function () {
				shakeIt(popinCloseButton, {
					duration: 300,
					opacity : 0.5,
					transform : "translate(0%, -50%) scale(1) rotate(0deg)",
					webkitTransform : "translate(0%, -50%) scale(1) rotate(0deg)"
				});
			});
		}
		
	} else {
		console.error("Popin.js requires shakeIt.js");
	}
}