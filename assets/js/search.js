/* islamducoran.fr — Moteur de recherche Lunr.js */
(function () {
  'use strict';

  const searchInput   = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchCount   = document.getElementById('search-count');

  if (!searchInput || !searchResults) return;

  let idx    = null;
  let store  = {};
  let lunr_  = null;

  // ── Load Lunr.js dynamically ──
  function loadScript(src, cb) {
    const s = document.createElement('script');
    s.src = src; s.async = true;
    s.onload = cb;
    document.head.appendChild(s);
  }

  // ── Load search index ──
  function loadIndex(cb) {
    fetch('/search-index.json')
      .then(r => r.json())
      .then(data => {
        store = {};
        data.forEach(doc => { store[doc.id] = doc; });

        idx = lunr_(function () {
          this.ref('id');
          this.field('title',    { boost: 10 });
          this.field('subtitle', { boost: 5  });
          this.field('racine',   { boost: 8  });
          this.field('categorie',{ boost: 3  });
          this.field('content',  { boost: 1  });

          data.forEach(doc => this.add(doc));
        });

        cb();
      })
      .catch(err => console.warn('Search index not found:', err));
  }

  // ── Highlight matches ──
  function highlight(text, query) {
    if (!text || !query) return text || '';
    const words = query.split(/\s+/).filter(Boolean);
    let out = text.substring(0, 200);
    words.forEach(word => {
      const re = new RegExp('(' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      out = out.replace(re, '<mark>$1</mark>');
    });
    return out + (text.length > 200 ? '…' : '');
  }

  // ── Render results ──
  function render(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-empty">
          <p>Aucun résultat pour « ${query} »</p>
          <p style="font-size:.85rem;margin-top:.5rem">Essayez un autre terme ou parcourez les <a href="/etudes/">études par catégorie</a>.</p>
        </div>`;
      if (searchCount) searchCount.textContent = '0 résultat';
      return;
    }

    if (searchCount) searchCount.textContent = results.length + ' résultat' + (results.length > 1 ? 's' : '');

    searchResults.innerHTML = results.slice(0, 20).map(r => {
      const doc = store[r.ref];
      if (!doc) return '';
      return `
        <div class="search-result">
          <a href="${doc.url}">${doc.title}</a>
          ${doc.categorie ? `<div style="font-size:.75rem;color:var(--texte3);font-family:var(--font-titre);letter-spacing:.08em;text-transform:uppercase;margin-bottom:.3rem">${doc.categorie}</div>` : ''}
          <p>${highlight(doc.excerpt || doc.content, query)}</p>
        </div>`;
    }).join('');
  }

  // ── Debounce ──
  function debounce(fn, ms) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
  }

  // ── Search handler ──
  const doSearch = debounce((query) => {
    if (!idx) return;
    query = query.trim();
    if (query.length < 2) {
      searchResults.innerHTML = '';
      if (searchCount) searchCount.textContent = '';
      return;
    }
    try {
      const results = idx.search(query + ' ' + query + '*');
      render(results, query);
    } catch (e) {
      try {
        const results = idx.search(query);
        render(results, query);
      } catch (e2) {
        searchResults.innerHTML = '';
      }
    }
  }, 250);

  // ── Init ──
  loadScript('https://unpkg.com/lunr/lunr.js', () => {
    lunr_ = lunr; // eslint-disable-line no-undef
    loadIndex(() => {
      searchInput.addEventListener('input', e => doSearch(e.target.value));
      // Auto-focus
      searchInput.focus();
      // Handle URL param ?q=
      const params = new URLSearchParams(window.location.search);
      const q = params.get('q');
      if (q) {
        searchInput.value = q;
        doSearch(q);
      }
    });
  });

})();


/* ═══════════════════════════════════════
   FILTRE PAR CATÉGORIE — PAGE ÉTUDES
═══════════════════════════════════════ */
function filterByCategorie(val) {
  // Toutes les sections catégorie et leurs grilles
  const allSections = document.querySelectorAll('.categorie-header, .etudes-grid');
  const filterCount = document.getElementById('filter-count');

  if (val === 'all') {
    // Tout afficher
    allSections.forEach(el => el.classList.remove('categorie-section--hidden'));
    if (filterCount) filterCount.textContent = '';
    return;
  }

  // Masquer tout d'abord
  allSections.forEach(el => el.classList.add('categorie-section--hidden'));

  // Afficher la section correspondante
  const target = document.getElementById(val);
  if (target) {
    target.classList.remove('categorie-section--hidden');
    // La grille suivante
    let next = target.nextElementSibling;
    while (next && !next.classList.contains('categorie-header')) {
      next.classList.remove('categorie-section--hidden');
      next = next.nextElementSibling;
    }
    // Compter les cartes visibles
    const cards = target.nextElementSibling ? target.nextElementSibling.querySelectorAll('.etude-card:not(.etude-card--soon)') : [];
    if (filterCount) {
      filterCount.textContent = cards.length + (cards.length > 1 ? ' études' : ' étude');
    }
  }
  // Réinitialiser la recherche texte si active
  const searchInput = document.getElementById('search-input');
  if (searchInput && searchInput.value) {
    searchInput.value = '';
    // Déclencher l'event pour réinitialiser l'affichage de recherche
    searchInput.dispatchEvent(new Event('input'));
  }
}

// Synchroniser le filtre avec les ancres URL (ex: /etudes/#ibadaat)
document.addEventListener('DOMContentLoaded', function () {
  const hash = window.location.hash.replace('#', '');
  const select = document.getElementById('cat-filter');
  const validCats = ['nabuwwa','calendrier','ibadaat','sources','societe','droit','communaute','eschatologie'];
  if (hash && validCats.includes(hash) && select) {
    select.value = hash;
    filterByCategorie(hash);
  }
});


/* ════════════════════════════════════════════════
   LECTEURS AUDIO AUTOMATIQUES — VERSETS CORANIQUES
   Génère un <audio> compact pour chaque .verset
   à partir de la référence S:V dans data-ref
════════════════════════════════════════════════ */
(function () {
  'use strict';

  var RECITATEUR = 'Husary_128kbps';
  var BASE_URL   = 'https://everyayah.com/data/' + RECITATEUR + '/';

  /* Extraire le premier couple S:V d'une chaîne ref */
  function parseRef(ref) {
    if (!ref) return null;
    var m = ref.match(/(\d{1,3}):(\d{1,3})/);
    if (!m) return null;
    return {
      sura : parseInt(m[1], 10),
      verse: parseInt(m[2], 10)
    };
  }

  /* Construire l'URL everyayah */
  function buildUrl(sv) {
    var s = String(sv.sura ).padStart(3, '0');
    var v = String(sv.verse).padStart(3, '0');
    return BASE_URL + s + v + '.mp3';
  }

  /* Détecter le contexte pour choisir la taille */
  function detectSize(container) {
    /* hero / page d'accueil → normal */
    if (container.closest('.complaint') ||
        container.closest('.hero')      ||
        container.closest('.highlight-box')) {
      return 'normal';
    }
    /* tableaux, callouts étroits → mini */
    if (container.closest('td') ||
        container.closest('.callout')) {
      return 'mini';
    }
    /* études, pages internes → compact (défaut) */
    return 'compact';
  }

  /* Construire le lecteur HTML */
  function buildPlayer(url, sv, size) {
    var label = 'S.' + sv.sura + ':' + sv.verse;
    var heightMap = { normal: 40, compact: 32, mini: 28 };
    var h = heightMap[size] || 32;

    var wrapper = document.createElement('div');
    wrapper.className = 'verset__audio-inner verset__audio--' + size;
    wrapper.setAttribute('title', 'Écouter ' + label + ' — Ḥuṣarī');

    /* Icône discrète */
    var icon = document.createElement('span');
    icon.className = 'verset__audio-icon';
    icon.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
    wrapper.appendChild(icon);

    /* Étiquette */
    var lbl = document.createElement('span');
    lbl.className = 'verset__audio-label';
    lbl.textContent = label + ' · Ḥuṣarī';
    wrapper.appendChild(lbl);

    /* Élément audio */
    var audio = document.createElement('audio');
    audio.className = 'verset__audio-player';
    audio.controls  = true;
    audio.preload   = 'none';
    audio.style.height = h + 'px';

    var src = document.createElement('source');
    src.src  = url;
    src.type = 'audio/mpeg';
    audio.appendChild(src);

    /* Message fallback */
    audio.insertAdjacentText('beforeend', 'Audio non supporté.');
    wrapper.appendChild(audio);

    return wrapper;
  }

  /* Initialisation au chargement */
  function init() {
    var versets = document.querySelectorAll('.verset');
    versets.forEach(function (verset) {
      var container = verset.querySelector('.verset__audio');
      if (!container) return;

      var ref = verset.getAttribute('data-ref') || '';
      var sv  = parseRef(ref);
      if (!sv) return;  /* ref sans numéro S:V → pas de lecteur */

      var url    = buildUrl(sv);
      var size   = detectSize(verset);
      var player = buildPlayer(url, sv, size);
      container.appendChild(player);
    });

    /* Cas spécial : bloc hero de l'accueil (.complaint) */
    /* déjà géré via include audio.html — pas de doublon */
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
