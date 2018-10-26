# HTML5-video-scroll-triggered-autoplay
A script that makes all HTML5 videos in a document start playing when they're scrolled fully in to the viewport.

#How to use
You can include the script anywhere in your HTML document. Since it selects video tags each time the page is scrolled or window resized, it doesn't need to be positioned at the bottom of the `<body>` or in some kind of document ready function.

#Future plans
At the moment, it's an extremely simple script I wrote for a specific purpose but I'm planning on adding some basic customisable options so it can be used more widely.
- Select by a class (e.g. `<video class="scrollplay">`) instead of just all video tags
- Define proportion of video's height that needs to be scrolled into view before starting (e.g. start playing a video when 80% of it is visible instead of waiting for it to be entirely in view)
- Looping options
- Enable or disable whether the video should play again when it's scrolled in to view after having scrolled back up past it
