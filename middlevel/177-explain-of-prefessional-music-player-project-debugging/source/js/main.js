const $ = document;
const playBtn = $.querySelector("#play");
const prevBtn = $.querySelector("#Previous");
const nextBtn = $.querySelector("#next");
const img = $.querySelector("#cover");
const artist = $.querySelector("#artist");
const title = $.querySelector("#title");

// Music
const songs = [
  {
    path: "media/html.m4a",
    displayName: "Html Padcast",
    artist: "Ozbi",
    cover:
      "https://images.genius.com/ee202c6f724ffd4cf61bd01a205eeb47.1000x1000x1.jpg",
  },
  {
    path: "media/kar.m4a",
    displayName: "Developing",
    artist: "Flora Cash",
    cover: "images/peakpx.jpg",
  },
  {
    path: "media/bazar.m4a",
    displayName: "Earn",
    artist: "Linkin Park",
    cover:
      "https://images.genius.com/c5a58cdaab9f3199214f0e3c26abbd0e.1000x1000x1.jpg",
  },
];
