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
	

var stylesheetstring = '.overlay{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDE1MDAgMTcwMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7Ij4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsLTI1MCwtMTQ5Ljg2NikiPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwxMDAuMTM0KSI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KC0wLjg0NTU0NywwLDAsMC44NDU1NDcsMTg0NS41NSwxNTQuNDUzKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAwMCwxMTNDNTEwLjEyMywxMTMgMTEzLDUxMC4xMjMgMTEzLDEwMDBDMTEzLDE0ODkuNTUgNTEwLjQ1MSwxODg3IDEwMDAsMTg4N0MxNDg5Ljg4LDE4ODcgMTg4NywxNDg5Ljg4IDE4ODcsMTAwMEwxODIzLjksMTAwMEMxODIzLjksMTQ1NS4wMyAxNDU1LjAzLDE4MjMuOSAxMDAwLDE4MjMuOUM1NDUuMjc3LDE4MjMuOSAxNzYuMDk5LDE0NTQuNzIgMTc2LjA5OSwxMDAwQzE3Ni4wOTksNTQ0Ljk3MiA1NDQuOTcyLDE3Ni4wOTkgMTAwMCwxNzYuMDk5TDEwMDAsMTEzWiIgc3R5bGU9ImZpbGw6d2hpdGU7Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45Nzc2MzcsMC4yMTAzLC0wLjIxMDMsMC45Nzc2MzcsNTguNTQ4NywtMjc5LjkzMykiPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxMDcsLTAuNzA3MTA3LDAuNTc2NTY0LDAuNTc2NTY0LDMzMy44MTEsNzM3Ljk3NCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjcyOSIgeT0iMjA0IiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjY1IiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MTA3LDAuNzA3MTA3LDAuNTc2NTY0LC0wLjU3NjU2NCwzMzMuODExLC01Ny45NzM3KSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iNzI5IiB5PSIyMDQiIHdpZHRoPSIzODAiIGhlaWdodD0iNjUiIHN0eWxlPSJmaWxsOndoaXRlOyIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);background-size:25%;background-position:center;background-repeat:no-repeat;background-color:rgba(0,0,0,.15);position:absolute;opacity:0;transition:opacity .4s;cursor:pointer;border-radius:5px}.overlay:hover{opacity:1!important}';
var stylenode = document.createElement('style');
    stylenode.innerHTML = stylesheetstring;
    document.body.appendChild(stylenode);
