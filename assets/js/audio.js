/* ════════════════════════════════════════════════
   LECTEURS AUDIO AUTOMATIQUES — islamducoran.fr
   Couvre tous les formats de versets du site :
   1. {% include verset.html %} → .verset[data-ref]
   2. <div class="verse-block"> → .verse-ref texte
   Source : everyayah.com — Ḥuṣarī 128kbps
════════════════════════════════════════════════ */
(function () {
  'use strict';

  var BASE = 'https://everyayah.com/data/Husary_128kbps/';

  /* ─── Extraire S:V depuis n'importe quel format de ref ─── */
  function parseRef(ref) {
    if (!ref) return null;
    var s, v, m;

    /* Format 1 : "25:30" ou "25 : 30" ou "S.25:30" */
    m = ref.match(/\b(\d{1,3})\s*:\s*(\d{1,3})\b/);
    if (m) return { s: parseInt(m[1], 10), v: parseInt(m[2], 10) };

    /* Format 2 : "Sourate 2 · Al-Baqara · v. 159"
       → premier nombre = sourate, dernier nombre après "v." = verset */
    m = ref.match(/\b(\d{1,3})\b.*\bv\.\s*(\d{1,3})\b/);
    if (m) return { s: parseInt(m[1], 10), v: parseInt(m[2], 10) };

    /* Format 3 : "22 · 78" ou "22 : 78" (espaces larges) */
    m = ref.match(/\b(\d{1,3})\s+[:\u00b7]\s+(\d{1,3})\b/);
    if (m) return { s: parseInt(m[1], 10), v: parseInt(m[2], 10) };

    return null;
  }

  /* ─── URL everyayah ─── */
  function mp3Url(sv) {
    var s = ('000' + sv.s).slice(-3);
    var v = ('000' + sv.v).slice(-3);
    return BASE + s + v + '.mp3';
  }

  /* ─── Taille selon le contexte ─── */
  function detectSize(el) {
    if (el.closest('.complaint') || el.closest('.hero') || el.closest('.highlight-box')) {
      return 'normal';
    }
    if (el.closest('td') || el.closest('.callout')) {
      return 'mini';
    }
    return 'compact';
  }

  /* ─── Construire le widget lecteur ─── */
  function buildPlayer(sv, size) {
    var label = 'S.' + sv.s + ':' + sv.v + ' \u00b7 \u1e24u\u1e63ar\u012b';
    var heights = { normal: 40, compact: 32, mini: 28 };
    var h = heights[size] || 32;

    var wrap = document.createElement('div');
    wrap.className = 'verset__audio-inner verset__audio--' + size;
    wrap.setAttribute('data-audio-injected', '1');

    var icon = document.createElement('span');
    icon.className = 'verset__audio-icon';
    icon.innerHTML =
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"' +
      ' stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
      '<polygon points="5 3 19 12 5 21 5 3"/></svg>';
    wrap.appendChild(icon);

    var lbl = document.createElement('span');
    lbl.className = 'verset__audio-label';
    lbl.textContent = label;
    wrap.appendChild(lbl);

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

    var slot = document.createElement('div');
    slot.className = 'verset__audio';
    slot.appendChild(wrap);
    return slot;
  }

  /* ─── FORMAT 1 : .verset[data-ref] — include verset.html ─── */
  function handleVersets() {
    document.querySelectorAll('.verset').forEach(function (verset) {
      var slot = verset.querySelector('.verset__audio');
      if (!slot) return;
      if (slot.querySelector('[data-audio-injected]')) return;

      var ref = verset.getAttribute('data-ref') || '';
      var sv  = parseRef(ref);
      if (!sv) return;

      var player = buildPlayer(sv, detectSize(verset));
      /* Vider le slot et injecter le widget intérieur */
      slot.innerHTML = '';
      slot.appendChild(player.firstChild);
    });
  }

  /* ─── FORMAT 2 : .verse-block — pages statiques ─── */
  function handleVerseBlocks() {
    document.querySelectorAll('.verse-block').forEach(function (block) {
      if (block.querySelector('[data-audio-injected]')) return;

      var refEl = block.querySelector('.verse-ref');
      if (!refEl) return;
      var sv = parseRef(refEl.textContent);
      if (!sv) return;

      var size   = detectSize(block);
      var player = buildPlayer(sv, size);
      block.appendChild(player);
    });
  }

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
