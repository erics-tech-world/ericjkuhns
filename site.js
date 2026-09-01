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
            '<a href="'+B+'acting.html">Acting</a>'+
            '<a href="'+B+'music.html">Music</a>'+
          '</div>'+
        '</div>'+
        '<a href="'+B+'index.html#videos"'+isActive("videos")+'>Videos</a>'+
        '<a href="'+B+'blog/index.html"'+isActive("blog")+'>Blog</a>'+
        '<a href="'+B+'portfolio.html"'+isActive("portfolio")+'>Portfolio</a>'+
        '<a href="'+B+'about.html"'+isActive("about")+'>About</a>'+
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

  /* ---------- email capture popup ---------- */
  (function(){
    // === CONFIG ===
    var EC_ENDPOINT = "https://formspree.io/f/mbgjorgy"; // <- your Formspree signup form
    var EC_DELAY = 12000;   // ms before popup appears (12s)
    var EC_KEY = "ec_seen_v1"; // localStorage key so it won't nag repeat visitors

    // don't show if already seen/dismissed/subscribed
    try { if(localStorage.getItem(EC_KEY)) return; } catch(e){}

    function build(){
      var ov = document.createElement('div');
      ov.className = 'ec-overlay';
      ov.id = 'ec-overlay';
      ov.innerHTML =
        '<div class="ec-modal">'+
          '<button class="ec-close" aria-label="Close" onclick="ecClose()">[esc]</button>'+
          '<div id="ec-body">'+
            '<img class="ec-cover" src="https://i.imgur.com/yZN4U1z.png" alt="Spacecosis cover">'+
            '<div class="ec-tag mono">// TRANSMISSION INCOMING</div>'+
            '<h3>Enter the Spacecosis universe.</h3>'+
            '<p>My debut sci-fi novel is out now. Join the list for news, bonus lore, and what I release next.</p>'+
            '<form class="ec-form" id="ec-form">'+
              '<input type="text" name="name" placeholder="Your name (optional)" autocomplete="name">'+
              '<input type="email" name="email" placeholder="you@email.com" required autocomplete="email">'+
              '<input type="hidden" name="_subject" value="New Spacecosis list signup">'+
              '<input type="hidden" name="source" value="site popup">'+
              '<button type="submit" class="ec-btn" id="ec-submit">Join the list</button>'+
              '<div class="ec-fine mono">No spam. Unsubscribe anytime.</div>'+
            '</form>'+
          '</div>'+
        '</div>';
      document.body.appendChild(ov);
      ov.addEventListener('click', function(e){ if(e.target === ov) ecClose(); });
      var form = document.getElementById('ec-form');
      form.addEventListener('submit', function(e){
        e.preventDefault();
        var btn = document.getElementById('ec-submit');
        btn.disabled = true; btn.textContent = 'Sending…';
        fetch(EC_ENDPOINT, { method:'POST', body:new FormData(form), headers:{'Accept':'application/json'} })
          .then(function(r){
            if(r.ok){
              try{ localStorage.setItem(EC_KEY,'1'); }catch(e){}
              document.getElementById('ec-body').innerHTML =
                '<div class="ec-success"><div class="chk">✓</div><h3>You\'re in.</h3><p>Thanks for joining. Keep an eye on your inbox.</p></div>';
              setTimeout(ecClose, 2600);
            } else { throw 0; }
          })
          .catch(function(){
            btn.disabled = false; btn.textContent = 'Join the list';
            var fine = document.querySelector('.ec-fine');
            if(fine){ fine.textContent = 'Something went wrong — email info@ericjkuhns.com to join.'; fine.style.color = '#e8b0b0'; }
          });
      });
    }

    window.ecClose = function(){
      var ov = document.getElementById('ec-overlay');
      if(ov){ ov.classList.remove('open'); document.body.style.overflow=''; setTimeout(function(){ ov.remove(); }, 200); }
      try{ localStorage.setItem(EC_KEY,'1'); }catch(e){} // dismissing also counts as seen
    };

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(function(){
      build();
      var ov = document.getElementById('ec-overlay');
      if(ov) ov.classList.add('open');
    }, reduce ? EC_DELAY : EC_DELAY);

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){ var ov=document.getElementById('ec-overlay'); if(ov && ov.classList.contains('open')) ecClose(); }
    });
  })();
})();
