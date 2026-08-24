/* ============================================================
   MUSIC TRACKS  —  edit this file to add / remove songs
   ------------------------------------------------------------
   Fields:
     title  - song name
     artist - artist / project name
     src    - path to the audio file in your repo, e.g.
              "audio/dream.mp3". Must match the uploaded
              filename EXACTLY (capitals and spaces included).
     genre  - "hiphop" or "acoustic" (controls the tabs)
     art    - cover image URL (album art)
     year   - shown in the readout (album + year)

   NOTE ON FILENAMES:
   The 6 rap songs already uploaded keep their original names
   (with spaces/parentheses), so their src uses %20 for spaces.
   For everything else, name the uploaded file to match the
   src path shown here (clean lowercase-with-hyphens).
   ============================================================ */

/* album art */
var ART_NILBOG   = "https://i.imgur.com/DUYWDDX.jpeg"; // Nilbog's Finest
var ART_YOURUN   = "https://i.imgur.com/vXRT6FB.jpeg"; // You Run I Run
var ART_DINO     = "https://i.imgur.com/CMyN1ly.jpeg"; // Boy Meets Dinosaur
var ART_DABBLE   = "https://i.imgur.com/ov7eQSg.jpeg"; // Lil' Dabbledooya
var ART_FIGHTING = "https://i.imgur.com/E9FoIE4.jpeg"; // Still Fighting

window.MUSIC_TRACKS = [

  /* ---------------- HIP HOP ---------------- */
  { title:"A Nerd's Dream", artist:"Eric Kuhns Music", src:"audio/a-nerds-dream.mp3", genre:"hiphop", art:ART_NILBOG, year:"Nilbog's Finest · 2007" },
  { title:"Bring It", artist:"Eric Kuhns Music", src:"audio/bring-it.mp3", genre:"hiphop", art:ART_NILBOG, year:"Nilbog's Finest · 2007" },
  { title:"Twerk Twerk (Who Is Twerking)", artist:"Eric Kuhns Music", src:"audio/Twerk%20Twerk%20(Who%20is%20twerking).mp3", genre:"hiphop", art:ART_NILBOG, year:"Nilbog's Finest · 2009" },
  { title:"Earth Day", artist:"Eric Kuhns Music", src:"audio/Earthday.mp3", genre:"hiphop", art:ART_NILBOG, year:"Nilbog's Finest · 2009" },
  { title:"This Is Halloween", artist:"Eric Kuhns Music", src:"audio/This%20is%20halloween.mp3", genre:"hiphop", art:ART_NILBOG, year:"Nilbog's Finest · 2012" },
  { title:"Memories", artist:"Eric Kuhns Music", src:"audio/Memories.mp3", genre:"hiphop", art:ART_DABBLE, year:"Lil' Dabbledooya · 2018" },
  { title:"Osiris", artist:"Eric Kuhns Music", src:"audio/Osiris.mp3", genre:"hiphop", art:ART_DABBLE, year:"Lil' Dabbledooya · 2018" },
  { title:"Robot Party", artist:"Eric Kuhns Music", src:"audio/Robot%20Party.mp3", genre:"hiphop", art:ART_DABBLE, year:"Lil' Dabbledooya · 2025" },

  /* ---------------- ACOUSTIC / ROCK ---------------- */
  { title:"A Hero Indeed", artist:"Eric Kuhns Music", src:"audio/a-hero-indeed.mp3", genre:"acoustic", art:ART_FIGHTING, year:"Still Fighting · 2007" },
  { title:"Take My Hand", artist:"Eric Kuhns Music", src:"audio/take-my-hand.mp3", genre:"acoustic", art:ART_FIGHTING, year:"Still Fighting · 2007" },
  { title:"Tragic Magic", artist:"Eric Kuhns Music", src:"audio/tragic-magic.mp3", genre:"acoustic", art:ART_FIGHTING, year:"Still Fighting · 2007" },
  { title:"You're Greater", artist:"Eric Kuhns Music", src:"audio/youre-greater.mp3", genre:"acoustic", art:ART_FIGHTING, year:"Still Fighting · 2007" },
  { title:"Philosophy", artist:"Eric Kuhns Music", src:"audio/philosophy.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"Creativity", artist:"Eric Kuhns Music", src:"audio/creativity.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"You're Greater (New Version)", artist:"Eric Kuhns Music", src:"audio/youre-greater-new.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"We Need You", artist:"Eric Kuhns Music", src:"audio/we-need-you.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"Thanks", artist:"Eric Kuhns Music", src:"audio/thanks.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"A Bit Too Clever (Live)", artist:"Eric Kuhns Music", src:"audio/a-bit-too-clever-live.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"A Thousand More Lies (Live)", artist:"Eric Kuhns Music", src:"audio/a-thousand-more-lies-live.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"New vs Old (Live)", artist:"Eric Kuhns Music", src:"audio/new-vs-old-live.mp3", genre:"acoustic", art:ART_YOURUN, year:"You Run I Run · 2008" },
  { title:"After Life", artist:"Eric Kuhns Music", src:"audio/after-life.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"Crazy", artist:"Eric Kuhns Music", src:"audio/crazy.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"First Love", artist:"Eric Kuhns Music", src:"audio/first-love.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"Oh! The Madness!", artist:"Eric Kuhns Music", src:"audio/oh-the-madness.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"Oh! The Madness! (Electric Version)", artist:"Eric Kuhns Music", src:"audio/oh-the-madness-electric.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"The Let Down", artist:"Eric Kuhns Music", src:"audio/the-let-down.mp3", genre:"acoustic", art:ART_DINO, year:"Boy Meets Dinosaur · 2009" },
  { title:"Dream", artist:"Eric Kuhns Music", src:"audio/dream.mp3", genre:"acoustic", art:"", year:"2024" }

];
