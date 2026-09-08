/* ============================================================
   ROBOT DATA — AI Robot Finder for Eric's Tech World
   ------------------------------------------------------------
   Edit this file to add / update robots. The finder on
   eric-tech-world.html reads window.ROBOT_DATA below.

   Each robot needs:
     name, price (number, 0 = N/A), battery (text), batteryHours (number for sorting),
     conversation + conversationNum (0=N/A,1=Bad,2=Mediocre,3=Good),
     appExperience + appNum (0=No App,1=Bad,2=Mediocre,3=Good),
     games + gamesNum (0=N/A,1=Bad,2=Mediocre,3=Good),
     subscription ("Yes"/"No"), overall (0-10),
     buyLink (blank = shows "Unavailable"), reviewLink, image (URL)

   NOTE: 4 robots (Tovi, Vector, Eilik AI Base, Jingle Bears) used
   large base64 images on the old site. Their image fields are marked
   PASTE_BASE64_HERE — paste the original data URI from your old file,
   OR (recommended) upload those photos to Imgur and swap in the link.
   ============================================================ */

window.ROBOT_DATA = [
  {name:"Looi Robot",price:189,battery:"5h",batteryHours:5,conversation:"Good",conversationNum:3,appExperience:"Good",appNum:3,games:"Good",gamesNum:3,subscription:"No",overall:9.5,buyLink:"https://amzn.to/4pLLiwJ",reviewLink:"https://youtu.be/_CUuaUAD6fY?si=3dEG9qfRd_QBZzsI",image:"https://i.imgur.com/fN8ZWHu.jpeg"},
  {name:"Emo Go Home",price:419,battery:"Unlimited",batteryHours:99999,conversation:"Good",conversationNum:3,appExperience:"Good",appNum:3,games:"Mediocre",gamesNum:2,subscription:"No",overall:9.0,buyLink:"https://amzn.to/3IMSM1K",reviewLink:"https://youtu.be/XTbHSNZ0cUs?si=_XDQJ9UlV2V_M1f4",image:"https://i.imgur.com/UlXtgV8.jpeg"},
  {name:"Pophie",price:349,battery:"1h",batteryHours:1,conversation:"Good",conversationNum:3,appExperience:"Good",appNum:3,games:"Bad",gamesNum:1,subscription:"Yes",overall:9.0,buyLink:"https://www.kickstarter.com/projects/pophie/pophie-a-true-ai-lifeform?ref=bovucp",reviewLink:"https://youtu.be/iZDGqWEn2yg",image:"https://i.imgur.com/nutM4H2.jpeg"},
  {name:"Aibi",price:299,battery:"1.5h",batteryHours:1.5,conversation:"Good",conversationNum:3,appExperience:"Good",appNum:3,games:"Mediocre",gamesNum:2,subscription:"No",overall:8.7,buyLink:"https://amzn.to/4mFaK44",reviewLink:"https://youtu.be/e5Y-4xA-MVg?si=-5bDaqlcc7Kj4E3H",image:"https://i.imgur.com/KAEP0sw.jpeg"},
  {name:"Yonbo",price:599.99,battery:"4h",batteryHours:4,conversation:"Good",conversationNum:3,appExperience:"Mediocre",appNum:2,games:"Mediocre",gamesNum:2,subscription:"No",overall:8.5,buyLink:"https://amzn.to/48aPsYj",reviewLink:"https://youtu.be/UrmLiOSEPg0",image:"https://i.imgur.com/4j19KOV.webp"},
  {name:"Tovi",price:99.99,battery:"8h",batteryHours:8,conversation:"Good",conversationNum:3,appExperience:"Good",appNum:3,games:"Mediocre",gamesNum:2,subscription:"No",overall:8.5,buyLink:"https://heytovi.com/",reviewLink:"https://youtu.be/PmG3Jw9fIr8?si=K5xts0vyGiwZW-5j",image:"https://i.imgur.com/hqBovet.jpeg"},
  {name:"Loona",price:499,battery:"1.75h",batteryHours:1.75,conversation:"Good",conversationNum:3,appExperience:"Good",appNum:3,games:"Good",gamesNum:3,subscription:"No",overall:8.4,buyLink:"https://amzn.to/4711jYb",reviewLink:"https://youtu.be/Vo4maW9TbEw?si=fT5FBNUyWuj5TOpR",image:"https://i.imgur.com/cnl0A3R.jpeg"},
  {name:"Eiliko",price:60,battery:"2h",batteryHours:2,conversation:"Good",conversationNum:3,appExperience:"Mediocre",appNum:2,games:"N/A",gamesNum:0,subscription:"No",overall:8.1,buyLink:"https://amzn.to/48rS5np",reviewLink:"https://youtu.be/plPqfUbYHY0",image:"https://i.imgur.com/rFUA89E.webp"},
  {name:"Emo (Without Go Home Charger)",price:329,battery:"2h",batteryHours:2,conversation:"Good",conversationNum:3,appExperience:"Good",appNum:3,games:"Mediocre",gamesNum:2,subscription:"No",overall:8.0,buyLink:"https://amzn.to/4nssoJD",reviewLink:"https://youtu.be/njSIHYL3QI?si=iucOxgYe6shhdZt",image:"https://i.imgur.com/IusM3Cm.jpeg"},
  {name:"Miko 3",price:199,battery:"5h",batteryHours:5,conversation:"Good",conversationNum:3,appExperience:"Good",appNum:3,games:"Good",gamesNum:3,subscription:"Yes",overall:7.9,buyLink:"https://amzn.to/42kgFEB",reviewLink:"https://youtu.be/V845fMB5jhE?si=4Ql3-5GQZliKs0nI",image:"https://i.imgur.com/5IOLWwK.jpeg"},
  {name:"Vector",price:238.99,battery:"30 min",batteryHours:0.5,conversation:"Good",conversationNum:3,appExperience:"Good",appNum:3,games:"Mediocre",gamesNum:2,subscription:"No",overall:7.6,buyLink:"https://amzn.to/3QcZWjm",reviewLink:"https://youtu.be/PmG3Jw9fIr8?si=K5xts0vyGiwZW-5j",image:"https://i.imgur.com/fwLmIgC.jpeg"},
  {name:"Eilik",price:139,battery:"1.5h",batteryHours:1.5,conversation:"Mediocre",conversationNum:2,appExperience:"Mediocre",appNum:2,games:"Mediocre",gamesNum:2,subscription:"No",overall:7.5,buyLink:"https://amzn.to/46w24s4",reviewLink:"https://youtu.be/4GoQHnFB8Sc?si=jolBHrKAAuk4bSdm",image:"https://i.imgur.com/gsVo67H.jpeg"},
  {name:"Eilik AI Base",price:99,battery:"Unlimited",batteryHours:99999,conversation:"Good",conversationNum:3,appExperience:"Mediocre",appNum:2,games:"Good",gamesNum:3,subscription:"No",overall:7.4,buyLink:"https://store.energizelab.com/products/ai-station",reviewLink:"https://youtu.be/jeFzcrBW8EQ?si=Wnai0Io7ePuq9_So",image:"https://i.imgur.com/xCEBbZD.jpeg"},
  {name:"Meteer",price:239,battery:"2h",batteryHours:2,conversation:"Good",conversationNum:3,appExperience:"Mediocre",appNum:2,games:"Okay",gamesNum:2,subscription:"No",overall:7.3,buyLink:"https://amzn.to/3IPG9mB",reviewLink:"https://youtu.be/Cs5vj6VviZ0?si=SrCTIF-m9L8DKsJW",image:"https://i.imgur.com/Tps4hgz.jpeg"},
  {name:"Rux",price:531.90,battery:"4h",batteryHours:4,conversation:"Good",conversationNum:3,appExperience:"Mediocre",appNum:2,games:"Mediocre",gamesNum:2,subscription:"Yes",overall:7.2,buyLink:"",reviewLink:"https://youtu.be/bfg5ha_S0Kk?si=y19qwClNX4SWdibN",image:"https://i.imgur.com/aqOfPkN.png"},
  {name:"Ropet",price:299,battery:"2h",batteryHours:2,conversation:"Mediocre",conversationNum:2,appExperience:"Good",appNum:3,games:"Mediocre",gamesNum:2,subscription:"No",overall:7.0,buyLink:"https://amzn.to/3SRnPyo",reviewLink:"https://youtu.be/Hl_SFV3NNLw",image:"https://i.imgur.com/sDCNxHk.jpeg"},
  {name:"Loona Deskmate",price:299,battery:"Unlimited",batteryHours:99999,conversation:"Good",conversationNum:3,appExperience:"Good",appNum:3,games:"N/A",gamesNum:0,subscription:"No",overall:7.0,buyLink:"https://keyirobot.com/en-us/products/deskmate?srsltid=AfmBOorg48dRMu4MoKQ-OghN-ZXbHEhBMR88slQ0IJpXBwhRZVj3xNIi",reviewLink:"https://youtu.be/G0HJXGY3rDc",image:"https://i.imgur.com/DNuZef6.jpeg"},
  {name:"Enabot Rola Mini",price:149,battery:"25 days",batteryHours:600,conversation:"Bad",conversationNum:1,appExperience:"Good",appNum:3,games:"Mediocre",gamesNum:2,subscription:"Yes",overall:7.0,buyLink:"https://amzn.to/4nvIhiD",reviewLink:"https://youtu.be/Bvx0ZbWWqCo?si=qUBshDpKf-VuErEK",image:"https://i.imgur.com/JNUBspM.jpeg"},
  {name:"Plantsio Ivy",price:69.99,battery:"3h",batteryHours:3,conversation:"N/A",conversationNum:0,appExperience:"Good",appNum:3,games:"N/A",gamesNum:0,subscription:"No",overall:6.8,buyLink:"https://amzn.to/46snGFN",reviewLink:"https://youtu.be/Wk2-B7ePcBY?si=jaIu8tfR_g9i23jf",image:"https://i.imgur.com/iTTjAXN.jpeg"},
  {name:"MetaDog",price:219,battery:"11h",batteryHours:11,conversation:"Mediocre",conversationNum:2,appExperience:"No App",appNum:0,games:"Bad",gamesNum:1,subscription:"No",overall:6.5,buyLink:"https://amzn.to/4gN1GJl",reviewLink:"https://youtu.be/YuJb4t31kbI?si=jaAS_6mLaay808rx",image:"https://i.imgur.com/7C8VHBK.jpeg"},
  {name:"MetaCat",price:199,battery:"11h",batteryHours:11,conversation:"Mediocre",conversationNum:2,appExperience:"No App",appNum:0,games:"Bad",gamesNum:1,subscription:"No",overall:6.3,buyLink:"https://amzn.to/4gQV9gH",reviewLink:"https://youtu.be/0Y7RWAK4bpg?si=tr6yevD0wo8bFuCu",image:"https://i.imgur.com/drAY9U8.jpeg"},
  {name:"Jingle Bears",price:99.99,battery:"45 min",batteryHours:0.75,conversation:"Good",conversationNum:3,appExperience:"Mediocre",appNum:2,games:"N/A",gamesNum:0,subscription:"No",overall:6.0,buyLink:"https://jinglebears.com",reviewLink:"https://youtube.com/shorts/mBKZG7ecUBw?si=W9DlO-a4RxssYGTD",image:"https://i.imgur.com/s5PGAdw.jpeg"},
  {name:"Podbox",price:99.99,battery:"2h",batteryHours:2,conversation:"Mediocre",conversationNum:2,appExperience:"No App",appNum:0,games:"N/A",gamesNum:0,subscription:"Yes",overall:5.5,buyLink:"https://amzn.to/470ng9I",reviewLink:"https://youtu.be/56G14GqF-ZY?si=Eld08Qg6cbZ0cXQK",image:"https://i.imgur.com/hLOKyCY.jpeg"}
];
