---
title: Media
weight: 4
---

> In HTML, **media** refers to content such as images, audio, and video that can be embedded in web pages to enhance user experience and provide visual or auditory context. HTML provides various elements and attributes to include, control, and manipulate media.

---

Create a directory `images`under `src`. Download sample image from interent and add to the `images` directory.

# Images
Used to display pictures or graphics.

- **Syntax:**
```emmet
img[src="images/sample.png" alt="Description of the image"]
```
- **Attributes:**
  - `src`: Specifies the file path of the image.
  - `alt`: Provides alternative text for accessibility.
  - `width` and `height`: Set dimensions.

- **Example:**
```emmet
img[src="images/sample.png" alt="Sample" width="200" height="100"]
```

---

# Audio
Used to embed sound or music.

Create a directory `audio` under `src`. Download sample audio from interent and add to the `audio` directory.

- **Syntax:**
```emmet
audio[controls]>source[src="audio/sample.mp3" type="audio/mpeg"]{Your browser does not support the audio element.}
```
- **Attributes:**
  - `controls`: Adds play, pause, and volume controls.
  - `autoplay`: Automatically plays the audio when the page loads.
  - `loop`: Repeats the audio continuously.
  - `muted`: Starts the audio in a muted state.

- **Example:**
```emmet
audio[controls]>source[src="audio/sample.mp3" type="audio/mpeg"]^{Your browser does not support the audio element.}
```

---

# Video
Used to embed videos.

Create a directory `video` under `src`. Download sample video from interent and add to the `video` directory.


- **Syntax:**
```emmet
 video[controls]>source[src="video/sample.mp4" type="video/mp4"]^{Your browser does not support the video element.}
```
- **Attributes:**
  - `controls`: Adds play, pause, and volume controls.
  - `autoplay`: Automatically plays the video on page load.
  - `loop`: Repeats the video continuously.
  - `muted`: Starts the video in a muted state.
  - `poster`: Displays an image while the video is loading.

- **Example:**
```emmet
video[controls width=640 height=360 poster="poster.jpg"]>source[src="video/sample.mp4" type="video/mp4"]^{Your browser does not support the video element.}
```

---

# Embedding Other Media (iframe)
Used to embed external media, such as YouTube videos, maps, or other websites.

- **Syntax:**
```emmet
iframe[src="https://www.youtube.com/embed/VIDEO_ID" width=560 height=315 allowfullscreen]
```

- **Attributes:**
  - `src`: The URL of the external media.
  - `width` and `height`: Dimensions of the embedded content.
  - `allowfullscreen`: Allows fullscreen mode for the embedded content.

- **Example:**
```emmet
iframe[src="https://www.youtube.com/embed/dQw4w9WgXcQ" width=560 height=315 allowfullscreen]
```


---

# Attributes Common to Media Elements
**`controls`**: Adds playback controls (play, pause, volume).

**`autoplay`**: Media starts automatically when the page loads.

**`loop`**: Media plays repeatedly.

**`muted`**: Starts the media in a muted state.

**`preload`**: Instructs the browser about how to load the media:
   - `none`: Do not preload the media.
   - `metadata`: Preload only metadata.
   - `auto`: Preload the entire media file.

---

**Example of All Media Together**

```emmet
html:5>head>meta[charset=UTF-8]+meta[name=viewport content="width=device-width, initial-scale=1.0"]+title{Media in HTML}^body>h1{HTML Media Examples}+h2{Image}+img[src=example.jpg alt="Example Image" width=300]+h2{Audio}+audio[controls]>source[src=example.mp3 type=audio/mpeg]^{Your browser does not support the audio element.}+h2{Video}+video[controls width=500]>source[src=example.mp4 type=video/mp4]^{Your browser does not support the video element.}+h2{YouTube Video}+iframe[src="https://www.youtube.com/embed/dQw4w9WgXcQ" width=560 height=315 allowfullscreen]
```

---
