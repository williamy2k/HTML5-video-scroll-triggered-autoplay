# HTML5-video-scroll-triggered-autoplay
A script that makes all HTML5 videos in a document start playing when they're scrolled fully in to the viewport.

## Demo

You can see it in action here: [scrollplay](https://williaminglesfield.com/nse/scrollplay/)

## How to use

There are two versions: the standard version and the extended version.

The standard version simply makes videos autoplay when scrolled. The extended version does the same, but also allows you to hover over videos displaying a replay button to replay the video.

<aside class="notice">
The replay feature added by the extended version is currently disabled on mobile as the overlay that appears on hover doesn't work as it remains stuck after tapping. This will be fixed in the next version.
</aside>

The extended version requires some CSS to style the replay button overlay; you can either use the self contained version which injects the CSS as a `<style>` tag, or use the plain javascript and implement the styles separately (either by including the default CSS in your stylesheet or making your own equivalent styles).

| Configuation              | How to set up                                                                                                                                                       | CDN                                                                                                                        |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| Standard                  | Include scrollplay.js anywhere in the document                                                                                                                      | https://cdn.jsdelivr.net/gh/williamy2k/HTML5-video-scroll-triggered-autoplay@v0.3/scrollplay.min.js                        |
| Extended (self-contained) | Include scrollplay-extended.js at the bottom of `<body>` or in some form of document ready                                                                          | https://cdn.jsdelivr.net/gh/williamy2k/HTML5-video-scroll-triggered-autoplay@v0.3/scrollplay-extended-selfcontained.min.js |
| Extended (separate CSS)   | Include scrollplay-extended.js at the bottom of `<body>` or in some form of document ready **AND** include the styles in scrollplay-extended.css in your stylesheet | ---                                                                                                                        |

## Future plans

At the moment, it's an extremely simple script I wrote for a specific purpose but I'm planning on adding some basic customisable options so it can be used more widely.
- Select by a class (e.g. `<video class="scrollplay">`) instead of just all video tags
- Option to allow only certain videos to have replaying enabled with the extended version
- Define proportion of video's height that needs to be scrolled into view before starting (e.g. start playing a video when 80% of it is visible instead of waiting for it to be entirely in view)
- Looping options
- Enable or disable whether the video should play again when it's scrolled in to view after having scrolled back up past it
