/* Shared nav + footer for ericjkuhns.com
   Each page includes:  <div id="site-nav"></div> ... <div id="site-footer"></div>
   and sets  window.SITE = { active: "portfolio", base: "" }  before loading this file.
   base is "" for root pages, "../" for pages in a subfolder (e.g. /blog/). */
(function(){
  var S = window.SITE || {};
  var B = (typeof S.base === "string") ? S.base : "";
  var active = S.active || "";

  function isActive(key){ return active === key ? " class=\"active\"" : ""; }

  /* ---------- NAV ---------- */
  var nav =
  '<nav>'+
    '<div class="wrap nav-inner">'+
      '<a href="'+B+'index.html" class="logo" id="site-logo">ericjkuhns<span class="logo-caret">_</span></a>'+
      '<button class="menu-btn" onclick="document.getElementById(\'nl\').classList.toggle(\'open\')">[≡]</button>'+
      '<div class="nav-links" id="nl">'+
        '<div class="nav-drop">'+
          '<button class="nav-drop-btn" onclick="siteToggleNav(this)">Projects <span class="nav-arrow">▾</span></button>'+
          '<div class="nav-menu">'+
            '<a href="'+B+'eric-tech-world.html">Eric\'s Tech World</a>'+
            '<a href="'+B+'writing.html">Writing</a>'+
            '<a href="'+B+'skateboarding.html">Skateboarding</a>'+
            '<a href="'+B+'index.html#projects">Acting</a>'+
            '<a href="'+B+'index.html#projects">Music</a>'+
          '</div>'+
        '</div>'+
        '<a href="'+B+'index.html#videos"'+isActive("videos")+'>Videos</a>'+
        '<a href="'+B+'blog/index.html"'+isActive("blog")+'>Blog</a>'+
        '<a href="'+B+'portfolio.html"'+isActive("portfolio")+'>Portfolio</a>'+
        '<a href="'+B+'contact.html"'+isActive("contact")+'>Contact</a>'+
      '</div>'+
    '</div>'+
  '</nav>';

  /* ---------- FOOTER ---------- */
  var footer =
  '<footer id="contact">'+
    '<div class="wrap foot-grid">'+
      '<div>'+
        '<div class="logo mono" style="font-size:18px;margin-bottom:16px">ericjkuhns<span class="logo-caret">_</span></div>'+
        '<div class="foot-socials">'+
          '<div class="social-drop">'+
            '<button class="social-btn mono" onclick="siteToggleSocial(this)">Instagram <span class="drop-arrow">▾</span></button>'+
            '<div class="social-menu">'+
              '<a href="https://instagram.com/ericjkuhns" target="_blank" rel="noopener">@ericjkuhns</a>'+
              '<a href="https://instagram.com/ericstechworld" target="_blank" rel="noopener">@ericstechworld</a>'+
            '</div>'+
          '</div>'+
          '<div class="social-drop">'+
            '<button class="social-btn mono" onclick="siteToggleSocial(this)">YouTube <span class="drop-arrow">▾</span></button>'+
            '<div class="social-menu">'+
              '<a href="https://youtube.com/@ericstechworld" target="_blank" rel="noopener">@ericstechworld</a>'+
              '<a href="https://youtube.com/@ericskateboards" target="_blank" rel="noopener">@ericskateboards</a>'+
              '<a href="https://youtube.com/@ericsbackrooms" target="_blank" rel="noopener">@ericsbackrooms</a>'+
            '</div>'+
          '</div>'+
          '<div class="social-drop">'+
            '<button class="social-btn mono" onclick="siteToggleSocial(this)">TikTok <span class="drop-arrow">▾</span></button>'+
            '<div class="social-menu">'+
              '<a href="https://tiktok.com/@ericstechworld" target="_blank" rel="noopener">@ericstechworld</a>'+
              '<a href="https://tiktok.com/@ericskateboards" target="_blank" rel="noopener">@ericskateboards</a>'+
              '<a href="https://tiktok.com/@spacecosis" target="_blank" rel="noopener">@spacecosis</a>'+
              '<a href="https://tiktok.com/@austintexasfreak" target="_blank" rel="noopener">@austintexasfreak</a>'+
            '</div>'+
          '</div>'+
          '<a class="social-btn mono" href="mailto:info@ericjkuhns.com">Email</a>'+
        '</div>'+
      '</div>'+
      '<div class="foot-note mono">'+
        '<a href="'+B+'privacy-policy.html">Privacy Policy</a> · <a href="'+B+'disclaimer.html">Disclaimer</a><br><br>'+
        'Copyright © 2015 - 2026 Eric J. Kuhns / Eric\'s Tech World LLC'+
      '</div>'+
    '</div>'+
  '</footer>';

  /* ---------- inject ---------- */
  function inject(){
    var navSlot = document.getElementById('site-nav');
    var footSlot = document.getElementById('site-footer');
    if(navSlot) navSlot.outerHTML = nav;
    if(footSlot) footSlot.outerHTML = footer;

    // let a page override the logo text (e.g. Eric's Tech World page)
    if(S.logo){
      var lg = document.getElementById('site-logo');
      if(lg) lg.innerHTML = S.logo + '<span class="logo-caret">_</span>';
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', inject);
  } else { inject(); }

  /* ---------- behaviors ---------- */
  window.siteToggleNav = function(btn){
    var drop = btn.closest('.nav-drop');
    var isOpen = drop.classList.contains('open');
    document.querySelectorAll('.nav-drop.open').forEach(function(d){ d.classList.remove('open'); });
    if(!isOpen) drop.classList.add('open');
  };
  window.siteToggleSocial = function(btn){
    var drop = btn.closest('.social-drop');
    var isOpen = drop.classList.contains('open');
    document.querySelectorAll('.social-drop.open').forEach(function(d){ d.classList.remove('open'); });
    if(!isOpen) drop.classList.add('open');
  };
  document.addEventListener('click', function(e){
    if(!e.target.closest('.nav-drop')){ document.querySelectorAll('.nav-drop.open').forEach(function(d){ d.classList.remove('open'); }); }
    if(!e.target.closest('.social-drop')){ document.querySelectorAll('.social-drop.open').forEach(function(d){ d.classList.remove('open'); }); }
  });
})();
