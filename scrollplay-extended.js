function checkVidScroll() {

	var scrolled = window.pageYOffset;
	
	var bottomOfWindowScrolled = scrolled + window.innerHeight;
	
	var videos = document.getElementsByTagName('video');
	
	for(var i = 0; i < videos.length; i++) {
		var video = videos[i];
		
		var offset = video.offsetTop;
		
		var videoHeight = video.clientHeight;
		
		
		
		if(bottomOfWindowScrolled > (offset + videoHeight)) {
			if(!eval(video.getAttribute('data-played'))) {
			video.play();
			video.setAttribute('data-played','true');
			}
		} else if(bottomOfWindowScrolled < offset) {
			video.pause();
			video.currentTime = 0;
			video.setAttribute('data-played','false');
		}
	}

}


window.addEventListener('scroll', checkVidScroll, false);
window.addEventListener('resize', checkVidScroll, false);













	
	var videos = document.getElementsByTagName('video');
	
	for(var i = 0; i < videos.length; i++) {
	
	videos[i].addEventListener("canplaythrough", function() {


	
		var pos = this.getBoundingClientRect();
		
		var overlay = document.createElement('div');
		
		overlay.style.top = (pos.top + window.pageYOffset) + 'px';
		overlay.style.left = pos.left + 'px';
		overlay.style.height = this.offsetHeight + 'px';
		overlay.style.width = this.offsetWidth + 'px';
		overlay.setAttribute('class','overlay');
		
		var randIdentifyer = Math.random().toString(36).substr(2, 5);
		
		this.setAttribute('data-video-id',randIdentifyer);
		
		overlay.setAttribute('data-overlay-id',randIdentifyer);
		
		overlay.onclick = function() {
			
			var identifyer = this.getAttribute('data-overlay-id');
			
			var video = document.querySelectorAll("[data-video-id='" + identifyer + "']")[0];
			
			video.currentTime = 0;
			video.play();
		
		}
		document.body.appendChild(overlay);
		
	}, false);
	}
