/* ════════════════════════════════════════════════
   LECTEURS AUDIO AUTOMATIQUES — islamducoran.fr
   Couvre tous les formats de versets du site :
   1. {% include verset.html %} → .verset[data-ref]
   2. <div class="verse-block"> → .verse-ref texte
   Source : everyayah.com — Ḥuṣarī 128kbps

   Support plages multi-versets : "S.56:75–78"
   → injecte un player par verset (75, 76, 77, 78)
════════════════════════════════════════════════ */
(function () {
  'use strict';

  var BASE = 'https://everyayah.com/data/Husary_128kbps/';

  /* ─── Extraire { s, vStart, vEnd } depuis n'importe quel format ─── */
  function parseRef(ref) {
    if (!ref) return null;
    var m;

    /* Format plage : "56:75–78" ou "56:75-78" ou "S.56:75–78" */
    m = ref.match(/\b(\d{1,3})\s*:\s*(\d{1,3})\s*[–\-]\s*(\d{1,3})\b/);
    if (m) {
      return {
        s: parseInt(m[1], 10),
        vStart: parseInt(m[2], 10),
        vEnd: parseInt(m[3], 10)
      };
    }

    /* Format simple : "25:30" ou "S.25:30" ou "25 : 30" */
    m = ref.match(/\b(\d{1,3})\s*:\s*(\d{1,3})\b/);
    if (m) {
      var v = parseInt(m[2], 10);
      return { s: parseInt(m[1], 10), vStart: v, vEnd: v };
    }

    /* Format "Sourate 2 · Al-Baqara · v. 159" */
    m = ref.match(/\b(\d{1,3})\b.*\bv\.\s*(\d{1,3})\b/);
    if (m) {
      var v2 = parseInt(m[2], 10);
      return { s: parseInt(m[1], 10), vStart: v2, vEnd: v2 };
    }

    /* Format "22 · 78" */
    m = ref.match(/\b(\d{1,3})\s+[:\u00b7]\s+(\d{1,3})\b/);
    if (m) {
      var v3 = parseInt(m[2], 10);
      return { s: parseInt(m[1], 10), vStart: v3, vEnd: v3 };
    }

    return null;
  }

  /* ─── URL everyayah ─── */
  function mp3Url(s, v) {
    return BASE + ('000' + s).slice(-3) + ('000' + v).slice(-3) + '.mp3';
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

      var ref = verset.getAttribute('data-ref') || '';
      var parsed = parseRef(ref);
      if (!parsed) return;

      var size = detectSize(verset);
      slot.innerHTML = '';

      /* Injecter un player par verset dans la plage */
      for (var v = parsed.vStart; v <= parsed.vEnd; v++) {
        slot.appendChild(buildPlayerInner(parsed.s, v, size));
      }
    });
  }

  /* ─── FORMAT 2 : .verse-block — pages statiques ─── */
  function handleVerseBlocks() {
    document.querySelectorAll('.verse-block').forEach(function (block) {
      if (block.querySelector('[data-audio-injected]')) return;

      var refEl = block.querySelector('.verse-ref');
      if (!refEl) return;
      var parsed = parseRef(refEl.textContent);
      if (!parsed) return;

      var size = detectSize(block);
      for (var v = parsed.vStart; v <= parsed.vEnd; v++) {
        var wrap = buildPlayerInner(parsed.s, v, size);
        var slot = document.createElement('div');
        slot.className = 'verset__audio';
        slot.appendChild(wrap);
        block.appendChild(slot);
      }
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
