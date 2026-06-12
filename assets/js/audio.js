/* ════════════════════════════════════════════════
   LECTEURS AUDIO AUTOMATIQUES — islamducoran.fr
   Couvre tous les formats de versets du site :
   1. {% include verset.html %} → .verset[data-ref]
   2. <div class="verse-block"> → .verse-ref texte
   Source : everyayah.com — Ḥuṣarī 128kbps

   Formats supportés :
   - Plage   : "S.56:75–78"  → 4 players (75,76,77,78)
   - Simple  : "S.56:75"     → 1 player
   - Double→ : "S.56:74 → S.56:75" → 2 players distincts
   - Mixte   : "S.74:56 → S.75:1" → 2 players sourates diff.
════════════════════════════════════════════════ */
(function () {
  'use strict';

  var BASE = 'https://everyayah.com/data/Husary_128kbps/';

  /* ─── URL everyayah ─── */
  function mp3Url(s, v) {
    return BASE + ('000' + s).slice(-3) + ('000' + v).slice(-3) + '.mp3';
  }

  /* ─── Extraire liste de {s,v} depuis n'importe quelle ref ─── */
  function parseRef(ref) {
    if (!ref) return [];
    var results = [];

    /* Cas 1 : plage dans la même sourate "56:75–78" ou "56:75-78" */
    var mRange = ref.match(/\b(\d{1,3})\s*:\s*(\d{1,3})\s*[–\-]\s*(\d{1,3})\b/);
    if (mRange) {
      var s = parseInt(mRange[1], 10);
      var vStart = parseInt(mRange[2], 10);
      var vEnd   = parseInt(mRange[3], 10);
      for (var v = vStart; v <= vEnd; v++) {
        results.push({ s: s, v: v });
      }
      return results;
    }

    /* Cas 2 : double ref séparée par → (ex. "S.56:74 → S.56:75"
       ou "S.74:56 → S.75:1" — sourates différentes possibles) */
    if (ref.indexOf('\u2192') !== -1 || ref.indexOf('->') !== -1) {
      var sep = ref.indexOf('\u2192') !== -1 ? '\u2192' : '->';
      var parts = ref.split(sep);
      parts.forEach(function (part) {
        var m = part.match(/\b(\d{1,3})\s*:\s*(\d{1,3})\b/);
        if (m) {
          results.push({ s: parseInt(m[1], 10), v: parseInt(m[2], 10) });
        }
      });
      if (results.length > 0) return results;
    }

    /* Cas 3 : référence simple "25:30" ou "S.25:30" */
    var mSimple = ref.match(/\b(\d{1,3})\s*:\s*(\d{1,3})\b/);
    if (mSimple) {
      results.push({ s: parseInt(mSimple[1], 10), v: parseInt(mSimple[2], 10) });
      return results;
    }

    /* Cas 4 : "Sourate 2 · Al-Baqara · v. 159" */
    var mLong = ref.match(/\b(\d{1,3})\b.*\bv\.\s*(\d{1,3})\b/);
    if (mLong) {
      results.push({ s: parseInt(mLong[1], 10), v: parseInt(mLong[2], 10) });
      return results;
    }

    return results;
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

  /* ─── Construire UN widget lecteur pour un verset s:v ─── */
  function buildPlayerInner(s, v, size) {
    var label = 'S.' + s + ':' + v + ' \u00b7 \u1e24u\u1e63ar\u012b';
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
    src.src  = mp3Url(s, v);
    src.type = 'audio/mpeg';
    audio.appendChild(src);
    wrap.appendChild(audio);

    return wrap;
  }

  /* ─── FORMAT 1 : .verset[data-ref] — include verset.html ─── */
  function handleVersets() {
    document.querySelectorAll('.verset').forEach(function (verset) {
      var slot = verset.querySelector('.verset__audio');
      if (!slot) return;
      if (slot.querySelector('[data-audio-injected]')) return;

      var ref    = verset.getAttribute('data-ref') || '';
      var parsed = parseRef(ref);
      if (!parsed.length) return;

      var size = detectSize(verset);
      slot.innerHTML = '';
      parsed.forEach(function (sv) {
        slot.appendChild(buildPlayerInner(sv.s, sv.v, size));
      });
    });
  }

  /* ─── FORMAT 2 : .verse-block — pages statiques ─── */
  function handleVerseBlocks() {
    document.querySelectorAll('.verse-block').forEach(function (block) {
      if (block.querySelector('[data-audio-injected]')) return;

      var refEl = block.querySelector('.verse-ref');
      if (!refEl) return;
      var parsed = parseRef(refEl.textContent);
      if (!parsed.length) return;

      var size = detectSize(block);
      parsed.forEach(function (sv) {
        var wrap = buildPlayerInner(sv.s, sv.v, size);
        var slot = document.createElement('div');
        slot.className = 'verset__audio';
        slot.appendChild(wrap);
        block.appendChild(slot);
      });
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
