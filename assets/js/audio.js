/* ════════════════════════════════════════════════
   LECTEURS AUDIO AUTOMATIQUES — islamducoran.fr
   Génère un lecteur <audio> compact pour chaque
   {% include verset.html %} trouvé sur la page.
   Source : everyayah.com — Ḥuṣarī 128kbps
════════════════════════════════════════════════ */
(function () {
  'use strict';

  var BASE = 'https://everyayah.com/data/Husary_128kbps/';

  /* --- Extraire S:V depuis la ref textuelle --- */
  function parseRef(ref) {
    if (!ref) return null;
    var m = ref.match(/(\d{1,3}):(\d{1,3})/);
    if (!m) return null;
    return { s: parseInt(m[1], 10), v: parseInt(m[2], 10) };
  }

  /* --- URL everyayah --- */
  function mp3Url(sv) {
    var s = ('000' + sv.s).slice(-3);
    var v = ('000' + sv.v).slice(-3);
    return BASE + s + v + '.mp3';
  }

  /* --- Taille selon le contexte DOM --- */
  function detectSize(el) {
    if (el.closest('.complaint') || el.closest('.hero') || el.closest('.highlight-box')) {
      return 'normal';
    }
    if (el.closest('td') || el.closest('.callout')) {
      return 'mini';
    }
    return 'compact';
  }

  /* --- Construire le widget lecteur --- */
  function buildPlayer(sv, size) {
    var label = 'S.' + sv.s + ':' + sv.v + '\u00a0\u00b7\u00a0\u1e24u\u1e63ar\u012b';
    var heights = { normal: 40, compact: 32, mini: 28 };
    var h = heights[size] || 32;

    var wrap = document.createElement('div');
    wrap.className = 'verset__audio-inner verset__audio--' + size;

    /* Icône */
    var icon = document.createElement('span');
    icon.className = 'verset__audio-icon';
    icon.innerHTML =
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<polygon points="5 3 19 12 5 21 5 3"/></svg>';
    wrap.appendChild(icon);

    /* Étiquette */
    var lbl = document.createElement('span');
    lbl.className = 'verset__audio-label';
    lbl.textContent = label;
    wrap.appendChild(lbl);

    /* Lecteur */
    var audio = document.createElement('audio');
    audio.controls = true;
    audio.preload  = 'none';
    audio.style.height = h + 'px';
    audio.className = 'verset__audio-player';
    var src = document.createElement('source');
    src.src  = mp3Url(sv);
    src.type = 'audio/mpeg';
    audio.appendChild(src);
    wrap.appendChild(audio);

    return wrap;
  }

  /* --- Initialisation --- */
  function init() {
    document.querySelectorAll('.verset').forEach(function (verset) {
      var slot = verset.querySelector('.verset__audio');
      if (!slot || slot.children.length > 0) return; /* déjà rempli */

      var ref = verset.getAttribute('data-ref') || '';
      var sv  = parseRef(ref);
      if (!sv) return;

      var size = detectSize(verset);
      slot.appendChild(buildPlayer(sv, size));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
