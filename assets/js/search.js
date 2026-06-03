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
