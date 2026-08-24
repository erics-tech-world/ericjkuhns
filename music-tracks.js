/* ============================================================
   MUSIC TRACKS  —  edit this file to add / remove songs
   ------------------------------------------------------------
   To add a track:
     1. Upload your audio file (mp3/m4a/wav) somewhere reachable
        (your GitHub repo, e.g. an /audio folder, or a direct
        file URL from a host you control).
     2. Add an entry below. Order here = order in the player.

   Fields:
     title  – song name (shown in the track row + display)
     artist – artist / project name
     src    – URL to the audio file (relative like "audio/dream.mp3"
              if it's in your repo, or a full https:// link)
     art    – OPTIONAL cover image URL (falls back to the spinning
              disc if left empty)
     year   – OPTIONAL year/label text shown in the readout
   ============================================================ */

window.MUSIC_TRACKS = [
  {
    title: "Dream",
    artist: "Dabbledooya",
    src: "audio/dream.mp3",
    art: "",
    year: "2024"
  },
  {
    title: "This Is Halloween",
    artist: "Eric Kuhns",
    src: "audio/this-is-halloween.mp3",
    art: "",
    year: "2023"
  },
  {
    title: "Robot Party Rap Song",
    artist: "Eric Kuhns",
    src: "audio/robot-party.mp3",
    art: "",
    year: "2024"
  }
  // add more tracks here, each in { } separated by commas
];
