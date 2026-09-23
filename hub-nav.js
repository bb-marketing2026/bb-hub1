/* Brainbox Playbook Hub — floating document controls.
   Back / Home pills top-left, Print · Save as PDF bottom-right.
   Mounted on <html> so a document's own React render can never remove them. */
(function () {
  if (window.__bbHubNav) return;
  window.__bbHubNav = true;

  var HOME = 'Playbook Hub.dc.html';

  // filename -> [title, library label, library hash, presentation copy]
  var M = {
    'Strategic Playbook.dc.html': ['Brainbox Strategic Playbook', 'Strategic Playbook', 'strategy'],
    'Revenue Playbook.dc.html': ['Revenue Playbook', 'Revenue', 'revenue'],
    'Finance Playbook.dc.html': ['Finance Playbook', 'Finance', 'finance'],
    'Fleet and Facilities Playbook.dc.html': ['Fleet & Facilities Playbook', 'Fleet & Facilities', 'facilities'],
    'Accommodation Playbook.dc.html': ['Accommodation Playbook', 'Fleet & Facilities', 'facilities'],
    'Client Travel Playbook.dc.html': ['Client Travel Playbook', 'Fleet & Facilities', 'facilities'],
    'Marketing Playbook.dc.html': ['Marketing Playbook', 'Marketing', 'marketing'],
    'Demand Generation Playbook.dc.html': ['Demand Generation Playbook', 'Demand Generation', 'demandgen'],
    'Sales Playbook.dc.html': ['Sales Playbook', 'Sales', 'sales'],
    'AI Transformation.dc.html': ['AI Transformation Playbook', 'AI Transformation', 'ai'],
    'Executive Assistant Playbook.dc.html': ['Executive Assistant Playbook', 'Executive Assistant', 'execsupport'],
    'Contract Variation Letter.dc.html': ['Contract Variation Letter', 'Executive Assistant', 'execsupport'],
    'FY27 Campaign Planning Overview.dc.html': ['FY27 Campaign Planning Overview', 'Demand Generation', 'demandgen'],
    'Demand Generation Readiness Plan.dc.html': ['FY27 Readiness Plan', 'Demand Generation', 'demandgen'],
    'Templates/Demand Generation Playbook - Template.dc.html': ['Campaign Plan Template', 'Demand Generation', 'demandgen'],
    'Campaign 01 - Residential Building - Trades.dc.html': ['Residential Building & Trades', 'Demand Generation', 'demandgen'],
    'Campaign 02 - Allied Health - NDIS.dc.html': ['Allied Health & NDIS', 'Demand Generation', 'demandgen'],
    'Campaign 03 - Mining Services - METS.dc.html': ['Mining Services & METS', 'Demand Generation', 'demandgen'],
    'Campaign 04 - Engineering - Consultancies.dc.html': ['Engineering Consultancies', 'Demand Generation', 'demandgen'],
    'Campaign 05 - Transport - Logistics.dc.html': ['Transport & Logistics', 'Demand Generation', 'demandgen'],
    'Campaign 06 - Insurance Broking.dc.html': ['Insurance Broking', 'Demand Generation', 'demandgen'],
    'Campaign 07 - Training - RTOs.dc.html': ['Training & RTOs', 'Demand Generation', 'demandgen'],
    'Campaign 08 - Strata - Property.dc.html': ['Strata & Property', 'Demand Generation', 'demandgen'],
    'Campaign 09 - IT - Cybersecurity -MSPs-.dc.html': ['IT, Cybersecurity & MSPs', 'Demand Generation', 'demandgen'],
    'Campaign 10 - Agribusiness - Food.dc.html': ['Agribusiness & Food', 'Demand Generation', 'demandgen'],
    'Campaign 11 - Arizona - PE-VC Firms.dc.html': ['Arizona PE & VC Firms', 'Demand Generation', 'demandgen'],
    'LinkedIn Posts - Building - Trades.dc.html': ['LinkedIn Posts — Building & Trades', 'Marketing', 'marketing'],
    'Social Ads - Campaign 11.dc.html': ['Social Ads — Campaign 11', 'Marketing', 'marketing', 'Social Ads - Campaign 11-print.dc.html'],
    'Insight Article - Offshoring for PE and VC.dc.html': ['Offshoring for PE & VC', 'Marketing', 'marketing'],
    'Insight Article - Built Done Differently.html': ['Built, done differently', 'Marketing', 'marketing'],
    'Insight Article - Care Done Differently.html': ['Care, done differently', 'Marketing', 'marketing'],
    'Insight Article - Cleared For Growth.html': ['Cleared for growth', 'Marketing', 'marketing'],
    'Insight Article - Growth Done Differently.html': ['Growth, done differently', 'Marketing', 'marketing'],
    'Insight Article - Mining Done Differently.html': ['Mining, done differently', 'Marketing', 'marketing'],
    'Report - Monthly Finance.dc.html': ['Monthly Finance Report', 'Finance', 'finance'],
    'RCM - Metal fabricator.dc.html': ['Capability Map — Metal Fabricator', 'Sales', 'sales', 'RCM - Metal fabricator.dc-print.html'],
    'Playbook Hierarchy.dc.html': ['Playbook Hierarchy', 'Strategic Playbook', 'strategy'],
    'Playbook Tree.dc.html': ['Playbook Hierarchy Tree', 'Strategic Playbook', 'strategy']
  };

  var path = decodeURIComponent(location.pathname);
  var file = path.split('/').pop() || '';
  var depth = /\/Templates\//.test(path) ? '../' : '';
  var rec = M[file];
  if (!rec) { for (var k in M) { if (k.split('/').pop() === file) { rec = M[k]; break; } } }

  var docTitle = (rec && rec[0]) || (document.title || file.replace(/\.dc\.html$|\.html$/, ''));
  var libName = (rec && rec[1]) || '';
  var libHash = (rec && rec[2]) || '';
  var present = rec && rec[3];
  var homeHref = depth + encodeURI(HOME);
  var libHref = libHash ? homeHref + '#' + libHash : homeHref;
  var backLabel = libName || 'BB Hub';

  var css = document.createElement('style');
  css.id = 'bb-hubnav-css';
  css.textContent =
    '.bb-nav{position:fixed;z-index:2147483000;display:flex;align-items:center;gap:8px;' +
    'font-family:var(--font-body,"Aptos",system-ui,sans-serif);}' +
    '.bb-nav.bb-tl{top:16px;left:16px;}' +
    '.bb-nav.bb-br{bottom:16px;right:16px;}' +
    '.bb-nav a,.bb-nav button{display:inline-flex;align-items:center;gap:7px;cursor:pointer;font-size:12px;' +
    'font-weight:500;font-family:inherit;color:#4a4a4a;background:rgba(255,255,255,.96);border:1px solid #e2e2e2;' +
    'border-radius:999px;padding:8px 15px;text-decoration:none;box-shadow:0 2px 10px rgba(40,40,45,.10);' +
    'backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);' +
    'transition:background .2s ease-out,border-color .2s ease-out,color .2s ease-out,transform .2s ease-out;}' +
    '.bb-nav a:hover,.bb-nav button:hover{background:#fff0f7;border-color:#FF0080;color:#c2005f;transform:translateY(-1px);}' +
    '.bb-nav .bb-primary{background:#FF0080;border-color:#FF0080;color:#fff;box-shadow:0 4px 16px rgba(255,0,128,.28);}' +
    '.bb-nav .bb-primary:hover{background:#d1006b;border-color:#d1006b;color:#fff;}' +
    '.bb-nav svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round;}' +
    '@media (max-width:640px){.bb-nav.bb-tl{top:10px;left:10px;}.bb-nav.bb-br{bottom:10px;right:10px;}' +
    '.bb-nav a,.bb-nav button{font-size:11.5px;padding:7px 12px;}}' +
    '@media print{.bb-nav{display:none !important;}}';

  function icon(d) { return '<svg viewBox="0 0 24 24">' + d + '</svg>'; }
  var I = {
    back: icon('<path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/>'),
    home: icon('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>'),
    pdf: icon('<path d="M12 3v11"/><path d="m7.5 10 4.5 4 4.5-4"/><path d="M4 20h16"/>'),
    present: icon('<rect x="2.5" y="4" width="19" height="12" rx="1.5"/><path d="M12 16v4"/><path d="M8 21h8"/>')
  };

  var tl = document.createElement('div');
  tl.className = 'bb-nav bb-tl';
  tl.innerHTML =
    '<button class="bb-back" title="Back to where you came from">' + I.back + backLabel + '</button>' +
    '<a href="' + homeHref + '" title="BB Hub home">' + I.home + 'Hub</a>';

  var br = document.createElement('div');
  br.className = 'bb-nav bb-br';
  br.innerHTML =
    (present ? '<a href="' + depth + encodeURI(present) + '" title="Open presentation view">' + I.present + 'Present</a>' : '') +
    '<button class="bb-primary bb-print">' + I.pdf + 'Print / Save as PDF</button>';

  function read(k) { try { return JSON.parse(localStorage.getItem(k) || '[]'); } catch (e) { return []; } }
  function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function attach() {
    var host = document.body || document.documentElement;
    if (!document.getElementById('bb-hubnav-css')) (document.head || host).appendChild(css);
    if (tl.parentNode !== host) host.appendChild(tl);
    if (br.parentNode !== host) host.appendChild(br);
  }

  function observe() {
    if (!document.body || window.__bbNavObs) return;
    window.__bbNavObs = new MutationObserver(function () { attach(); });
    window.__bbNavObs.observe(document.body, { childList: true });
  }

  tl.querySelector('.bb-back').addEventListener('click', function () {
    if (document.referrer && history.length > 1) history.back();
    else location.href = libHref;
  });
  br.querySelector('.bb-print').addEventListener('click', function () { window.print(); });

  attach();
  observe();
  document.addEventListener('DOMContentLoaded', function () { attach(); observe(); });
  window.addEventListener('load', function () { attach(); observe(); });
  setTimeout(function () { attach(); observe(); }, 500);
  setTimeout(function () { attach(); observe(); }, 1800);

  // Running head on each content sheet — brand left, confidential right (matches the printed page).
  function runheads() {
    var sheets = document.querySelectorAll('.doc .sheet');
    if (!sheets.length) return;
    for (var i = 0; i < sheets.length; i++) {
      var s = sheets[i];
      if (s.querySelector(':scope > .bb-runhead')) continue;
      if (s.classList.contains('cover-sheet') || s.querySelector(':scope > .cover, :scope > .cover-page')) continue;
      var hd = document.createElement('div');
      hd.className = 'bb-runhead';
      hd.innerHTML = '<span class="bb-rh-brand">' + docTitle + '</span>' +
                     '<span class="bb-rh-conf">Strictly private &amp; confidential</span>';
      s.insertBefore(hd, s.firstChild);
    }
  }
  runheads();
  document.addEventListener('DOMContentLoaded', runheads);
  window.addEventListener('load', runheads);
  setTimeout(runheads, 600);
  setTimeout(runheads, 1900);
  window.addEventListener('beforeprint', runheads);

  var r = read('bb-hub-recent').filter(function (x) { return x !== file; });
  r.unshift(file);
  write('bb-hub-recent', r.slice(0, 5));
  if (location.hash === '#print') setTimeout(function () { window.print(); }, 900);
})();
