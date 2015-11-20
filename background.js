var div = document.createElement("div");
div.innerHTML = "^";
div.id = "scroll-to-top-extention-div";
div.title = "Scroll to Top";
div.setAttribute('style', 'position: fixed;' +
	'padding: 10px 13px;' +
    'background: #464545;' +
    'z-index: 10000000;' +
    'right: 10px;' +
    'bottom: 10px;' +
    'border-radius: 3px;' +
    'color: white;' + 
    'cursor: pointer;' +
    'font-weight: bold;' +
    'display: none;'
    );

div.addEventListener("click", function () {
	var scrollDuration = 1000;
	var scrollStep = -window.scrollY / (scrollDuration/15), 
		scrollInterval = setInterval(function() {
			if(window.scrollY!=0){
				window.scrollBy(0, scrollStep);
			}
			else clearInterval(scrollInterval);
		}, 15);
});

window.onscroll = function(event) {
	if(window.scrollY > 500) {
		div.style.display = "block";
	} else {
		div.style.display = "none";
	}
}

document.getElementsByTagName("body")[0].appendChild(div);
