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
