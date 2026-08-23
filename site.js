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
            '<a href="'+B+'index.html#projects">Skateboarding</a>'+
            '<a href="'+B+'index.html#projects">Acting</a>'+
            '<a href="'+B+'index.html#projects">Music</a>'+
          '</div>'+
        '</div>'+
        '<a href="'+B+'index.html#videos"'+isActive("videos")+'>Videos</a>'+
        '<a href="'+B+'blog/index.html"'+isActive("blog")+'>Blog</a>'+
        '<a href="'+B+'portfolio.html"'+isActive("portfolio")+'>Portfolio</a>'+
        '<a href="'+B+'contact.html"'+isActive("contact")+'>Contact</a>'+
        '<button class="nav-search-btn" aria-label="Search" onclick="siteOpenSearch()">'+
          '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.5" y2="16.5"></line></svg>'+
        '</button>'+
      '</div>'+
    '</div>'+
  '</nav>';

  /* ---------- SEARCH OVERLAY (built on demand, not injected on load) ---------- */
  function buildSearchHTML(){
    return '<div class="search-inner">'+
      '<div class="search-prompt mono">~/eric $ search</div>'+
      '<div class="search-box">'+
        '<span class="search-ico mono">▸</span>'+
        '<input type="text" id="site-search-input" class="mono" placeholder="search videos, blog, projects…" autocomplete="off">'+
        '<button class="search-close mono" onclick="siteCloseSearch()">[esc]</button>'+
      '</div>'+
      '<div class="search-results" id="site-search-results"></div>'+
      '<div class="search-hint mono">Press <b>enter</b> to search the site · <b>esc</b> to close</div>'+
    '</div>';
  }

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

  /* ---------- search ---------- */
  // Simple site search: an index of pages/sections + live Blogger post lookup.
  var SEARCH_INDEX = [
    {t:"Eric's Tech World", d:"Robot reviews, future tech, and articles", u:B+"eric-tech-world.html", k:"tech robots reviews gadgets drones ebikes future"},
    {t:"Portfolio", d:"Video, web, design, ads, and copywriting work", u:B+"portfolio.html", k:"portfolio work clients video design ads marketing websites resume hire"},
    {t:"Blog", d:"Writing on tech, skating, sci-fi, and more", u:B+"blog/index.html", k:"blog posts articles writing"},
    {t:"Videos", d:"Latest videos across all channels", u:B+"index.html#videos", k:"videos youtube watch"},
    {t:"My Novel: Spacecosis", d:"Debut sci-fi novel, available now", u:B+"index.html#book", k:"book novel spacecosis sci-fi writing scifi"},
    {t:"Skateboarding", d:"Skate spots, history, and videos", u:B+"index.html#projects", k:"skate skateboarding dfw skatepark"},
    {t:"Music", d:"Assorted music over the years", u:B+"index.html#projects", k:"music songs acoustic hip hop"},
    {t:"Acting", d:"On-camera and on-stage acting work", u:B+"index.html#projects", k:"acting actor film stage commercials"},
    {t:"Contact", d:"Get in touch", u:B+"index.html#contact", k:"contact email hire work together"}
  ];

  window.siteOpenSearch = function(){
    // if already open, do nothing
    if(document.getElementById('site-search')) return;
    var box = document.createElement('div');
    box.className = 'site-search open';
    box.id = 'site-search';
    box.innerHTML = buildSearchHTML();
    document.body.appendChild(box);
    document.body.style.overflow = 'hidden';
    // clicking the dark backdrop closes
    box.addEventListener('click', function(e){ if(e.target === box) window.siteCloseSearch(); });
    var inp = document.getElementById('site-search-input');
    setTimeout(function(){ inp && inp.focus(); }, 40);
  };
  window.siteCloseSearch = function(){
    var box = document.getElementById('site-search');
    if(box && box.parentNode){ box.parentNode.removeChild(box); }
    document.body.style.overflow = '';
  };

  function renderResults(q){
    var res = document.getElementById('site-search-results');
    if(!res) return;
    q = q.trim().toLowerCase();
    if(!q){ res.innerHTML = ''; return; }
    var hits = SEARCH_INDEX.filter(function(item){
      return (item.t + ' ' + item.d + ' ' + item.k).toLowerCase().indexOf(q) !== -1;
    });
    if(!hits.length){
      res.innerHTML = '<div class="search-empty mono">No quick matches. Press enter to search the blog for "'+escapeHtml(q)+'".</div>';
      return;
    }
    res.innerHTML = hits.map(function(h){
      return '<a class="search-hit" href="'+h.u+'"><span class="hit-title">'+escapeHtml(h.t)+'</span><span class="hit-desc mono">'+escapeHtml(h.d)+'</span></a>';
    }).join('');
  }
  function escapeHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  document.addEventListener('input', function(e){
    if(e.target && e.target.id === 'site-search-input'){ renderResults(e.target.value); }
  });
  document.addEventListener('keydown', function(e){
    var box = document.getElementById('site-search');
    var isOpen = !!box;
    if(e.key === 'Escape' && isOpen){ window.siteCloseSearch(); }
    // open with "/" shortcut
    if(e.key === '/' && !isOpen && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA'){
      e.preventDefault(); window.siteOpenSearch();
    }
    // enter -> go to blog search for the query
    if(e.key === 'Enter' && isOpen){
      var inp = document.getElementById('site-search-input');
      var q = inp ? inp.value.trim() : '';
      if(q){ window.location.href = B + 'blog/index.html?q=' + encodeURIComponent(q); }
    }
  });
})();
