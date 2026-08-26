/* ============================================================
   MUSIC TRACKS  —  edit this file to add / remove songs
   ------------------------------------------------------------
   src paths match the exact filenames uploaded to /audio.
   Spaces and special characters are URL-encoded (%20 = space,
   %27 = apostrophe, etc). The file keeps its normal name;
   only the path text is encoded.
   ============================================================ */

/* album art */
var ART_NILBOG   = "https://i.imgur.com/DUYWDDX.jpeg"; // Nilbog's Finest
var ART_YOURUN   = "https://i.imgur.com/vXRT6FB.jpeg"; // You Run I Run
var ART_DINO     = "https://i.imgur.com/CMyN1ly.jpeg"; // Boy Meets Dinosaur
var ART_DABBLE   = "https://i.imgur.com/ov7eQSg.jpeg"; // Lil' Dabbledooya
var ART_FIGHTING = "https://i.imgur.com/E9FoIE4.jpeg"; // Still Fighting

window.MUSIC_TRACKS = [

  /* ---------------- HIP HOP ---------------- */
  { title:"A Nerd's Dream", artist:"Eric Kuhns Music", src:"audio/A%20Nerds%20Dream.mp3", genre:"hiphop", art:ART_NILBOG, year:"Nilbog's Finest · 2007" },
  { title:"Bring It", artist:"Eric Kuhns Music", src:"audio/Bring%20It.mp3", genre:"hiphop", art:ART_NILBOG, year:"Nilbog's Finest · 2007" },
  { title:"Twerk Twerk (Who Is Twerking)", artist:"Eric Kuhns Music", src:"audio/Twerk%20Twerk%20(Who%20is%20twerking).mp3", genre:"hiphop", art:ART_NILBOG, year:"Nilbog's Finest · 2009" },
  { title:"Earth Day", artist:"Eric Kuhns Music", src:"audio/Earthday.mp3", genre:"hiphop", art:ART_NILBOG, year:"Nilbog's Finest · 2009" },
  { title:"This Is Halloween", artist:"Eric Kuhns Music", src:"audio/This-is-halloween.mp3", genre:"hiphop", art:ART_NILBOG, year:"Nilbog's Finest · 2012" },
  { title:"Memories", artist:"Eric Kuhns Music", src:"audio/Memories.mp3", genre:"hiphop", art:ART_DABBLE, year:"Lil' Dabbledooya · 2018" },
  { title:"Osiris", artist:"Eric Kuhns Music", src:"audio/Osiris.mp3", genre:"hiphop", art:ART_DABBLE, year:"Lil' Dabbledooya · 2018" },
  { title:"Robot Party", artist:"Eric Kuhns Music", src:"audio/Robot%20Party%20(Erics%20Tech%20World).m4a", genre:"hiphop", art:ART_DABBLE, year:"Lil' Dabbledooya · 2025" },

  /* ---------------- ACOUSTIC / ROCK ---------------- */
  { title:"A Hero Indeed", artist:"Eric Kuhns Music", src:"audio/A%20Hero%20Indeed.mp3", genre:"acoustic", art:ART_FIGHTING, year:"Still Fighting · 2007" },
  { title:"Take My Hand", artist:"Eric Kuhns Music", src:"audio/Take%20My%20Hand.mp3", genre:"acoustic", art:ART_FIGHTING, year:"Still Fighting · 2007" },
  { title:"Tragic Magic", artist:"Eric Kuhns Music", src:"audio/Tragic%20Magic.mp3", genre:"acoustic", art:ART_FIGHTING, year:"Still Fighting · 2007" },
  { title:"Your Greater", artist:"Eric Kuhns Music", src:"audio/Your%20Greater.mp3", genre:"acoustic", art:ART_FIGHTING, year:"Still Fighting · 2007" },
  { title:"Philosophy", artist:"Eric Kuhns Music", src:"audio/Philosophy.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"Creativity", artist:"Eric Kuhns Music", src:"audio/Creativity.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"You're Greater (New Version)", artist:"Eric Kuhns Music", src:"audio/You%27re%20Greater.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"We Need You", artist:"Eric Kuhns Music", src:"audio/We%20Need%20You.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"Thanks", artist:"Eric Kuhns Music", src:"audio/Thanks.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"A Bit Too Clever (Live)", artist:"Eric Kuhns Music", src:"audio/A%20Bit%20Too%20Clever%20LIVE.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"A Thousand More Lies (Live)", artist:"Eric Kuhns Music", src:"audio/A%20Thousand%20More%20Lies%20LIVE.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"New vs Old (Live)", artist:"Eric Kuhns Music", src:"audio/New%20Vs.%20Old%20LIVE.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"After Life", artist:"Eric Kuhns Music", src:"audio/After%20Life.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"Crazy", artist:"Eric Kuhns Music", src:"audio/Crazy.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"First Love", artist:"Eric Kuhns Music", src:"audio/First%20Love.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"Oh! The Madness!", artist:"Eric Kuhns Music", src:"audio/Oh!%20The%20madness!.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"Oh! The Madness! (Electric Version)", artist:"Eric Kuhns Music", src:"audio/Madness%20(Electric).mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"The Let Down", artist:"Eric Kuhns Music", src:"audio/The%20Let%20Down.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"Dream", artist:"Eric Kuhns Music", src:"audio/Dream.mp3", genre:"acoustic", art:"", year:"2024" }

];
