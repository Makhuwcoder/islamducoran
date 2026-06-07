/* ════════════════════════════════════════════════
   LECTEURS AUDIO AUTOMATIQUES — islamducoran.fr
   Couvre deux formats de versets :
   1. {% include verset.html %} → .verset[data-ref]
   2. <div class="verse-block"> → .verse-ref texte
   Source : everyayah.com — Ḥuṣarī 128kbps
════════════════════════════════════════════════ */
(function () {
  'use strict';

  var BASE = 'https://everyayah.com/data/Husary_128kbps/';

  /* Extraire S:V depuis une chaîne quelconque */
  function parseRef(ref) {
    if (!ref) return null;
    /* Formats : "25:30" "25 : 30" "25 · 30" "S.25:30" */
    var m = ref.match(/(\d{1,3})\s*[:\u00b7]\s*(\d{1,3})/);
    if (!m) return null;
    return { s: parseInt(m[1], 10), v: parseInt(m[2], 10) };
  }

  /* URL everyayah */
  function mp3Url(sv) {
    var s = ('000' + sv.s).slice(-3);
    var v = ('000' + sv.v).slice(-3);
    return BASE + s + v + '.mp3';
  }

  /* Détecter la taille selon le contexte DOM */
  function detectSize(el) {
    if (el.closest('.complaint') || el.closest('.hero') || el.closest('.highlight-box')) {
      return 'normal';
    }
    if (el.closest('td') || el.closest('.callout')) {
      return 'mini';
    }
    return 'compact';
  }

  /* Construire le widget lecteur */
  function buildPlayer(sv, size) {
    var label = 'S.' + sv.s + ':' + sv.v + ' \u00b7 \u1e24u\u1e63ar\u012b';
    var heights = { normal: 40, compact: 32, mini: 28 };
    var h = heights[size] || 32;

    var wrap = document.createElement('div');
    wrap.className = 'verset__audio-inner verset__audio--' + size;
    wrap.setAttribute('data-audio-injected', '1');

    /* Icône */
    var icon = document.createElement('span');
    icon.className = 'verset__audio-icon';
    icon.innerHTML =
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"' +
      ' stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
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

    /* Conteneur */
    var slot = document.createElement('div');
    slot.className = 'verset__audio';
    slot.appendChild(wrap);
    return slot;
  }

  /* ── FORMAT 1 : {% include verset.html %} ── */
  function handleVersets() {
    document.querySelectorAll('.verset').forEach(function (el) {
      var slot = el.querySelector('.verset__audio');
      if (!slot) return;
      if (slot.querySelector('[data-audio-injected]')) return; /* déjà fait */
      var ref = el.getAttribute('data-ref') || '';
      var sv  = parseRef(ref);
      if (!sv) return;
      slot.appendChild(buildPlayer(sv, detectSize(el)).firstChild);
    });
  }

  /* ── FORMAT 2 : <div class="verse-block"> ── */
  function handleVerseBlocks() {
    document.querySelectorAll('.verse-block').forEach(function (el) {
      if (el.querySelector('[data-audio-injected]')) return;
      var refEl = el.querySelector('.verse-ref');
      if (!refEl) return;
      var sv = parseRef(refEl.textContent);
      if (!sv) return;
      var size   = detectSize(el);
      var player = buildPlayer(sv, size);
      /* Insérer après le dernier élément existant */
      el.appendChild(player);
    });
  }

  /* ── FORMAT 3 : versets inline sur methode.md / baraa ── */
  /* Ces cas sont gérés par les includes dédiés dans les fichiers MD */

  function init() {
    handleVersets();
    handleVerseBlocks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
