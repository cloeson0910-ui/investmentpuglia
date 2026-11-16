/* Investments Puglia - aspetto dell'area admin: sfondo bianco, niente motivo a triangoli,
   logo Investments Puglia al posto della scritta Investments Puglia. Incluso in tutte le pagine admin. */
(function(){
  var LOGO = "/img/ip-logo.png";
  var css = "html,body{background:#ffffff !important}"
    + "body::before,body::after{background:#ffffff !important;opacity:0 !important}"
    + ".header,header.header,.topbar,.toolbar{background:#ffffff !important;backdrop-filter:none !important}"
    + ".logo{display:inline-flex !important;align-items:center;text-decoration:none}"
    + ".logo img.ip-logo{height:86px;width:auto;display:block}"
    + ".logo-wrap img.ip-logo-big{width:min(420px,78vw);height:auto;display:block;margin:0 auto}"
    + ".brand .logo-line,.brand .payoff{display:none !important}"
    + ".background{background:#ffffff !important}.background::before,.background::after{display:none !important}"
    + "@media(max-width:760px){.logo img.ip-logo{height:66px}}";
  var st = document.createElement("style"); st.id = "ipBrandCss"; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
  function apply(){
    document.querySelectorAll(".logo").forEach(function(el){
      if(el.querySelector("img.ip-logo")) return;
      if(el.closest(".nav-dropdown-menu")) return;
      el.innerHTML = '<img class="ip-logo" src="' + LOGO + '" alt="Investments Puglia">';
      el.setAttribute("aria-label", "Investments Puglia");
    });
    document.querySelectorAll(".logo-wrap").forEach(function(el){
      if(el.querySelector("img.ip-logo-big")) return;
      el.innerHTML = '<img class="ip-logo-big" src="' + LOGO + '" alt="Investments Puglia">';
    });
    if(/Investments Puglia/.test(document.title)) document.title = document.title.replace(/Investments Puglia/g, "Investments Puglia");
  }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply); else apply();
  setTimeout(apply, 800);
})();
