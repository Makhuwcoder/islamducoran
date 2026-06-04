---
layout: default
title: "Études thématiques"
description: "Index de toutes les études thématiques — concepts coraniques, pratiques rituelles, calendrier, famille, législation, eschatologie."
permalink: /etudes/
---

<div class="site-main site-main--wide">

  <header class="page-header">
    <div class="page-header__categorie">islamducoran.fr</div>
    <h1 class="page-header__title">Thèmes explorés</h1>
    <p class="page-header__subtitle">مَفَاهِيمُ أَسَاسِيَّة — Chaque étude explore un concept coranique à partir de ses occurrences textuelles, de la racine arabe et du contexte interne.</p>
    <div class="page-header__meta">
      <span class="tag">{{ site.etudes | size }} études</span>
      <span class="tag">Dit / Non-dit / Inférence</span>
      <span class="tag">Sans tafsīr · Sans ḥadīth</span>
    </div>
  </header>

  <!-- ── BARRE DE RECHERCHE RAPIDE ── -->
  <div class="search-wrap">
    <div class="search-box">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input type="search" id="search-input" placeholder="Rechercher une étude, un terme arabe, une racine…" autocomplete="off">
    </div>
    <div id="search-count" style="font-family:var(--font-titre);font-size:.6rem;letter-spacing:.1em;color:var(--texte3);margin-top:.5rem;text-transform:uppercase"></div>
    <div id="search-results"></div>
  </div>

  <!-- ══════════════════════════════════════════════════════════
       1. Nabuwwa & Risāla — النُّبُوَّة وَالرِّسَالَة
  ══════════════════════════════════════════════════════════ -->
  {% assign cat1 = site.etudes | where: 'categorie', 'Nabuwwa & Risāla' | sort: 'order' %}
  {% if cat1.size > 0 %}
  <div class="categorie-header" id="nabuwwa">
    <span class="categorie-header__fr">Nabuwwa &amp; Risāla</span>
    <span class="categorie-header__ar" dir="rtl">النُّبُوَّة وَالرِّسَالَة</span>
    <span class="tag">{{ cat1.size }}</span>
  </div>
  <div class="etudes-grid">
    {% for etude in cat1 %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
      <div class="etude-card__titre">{{ etude.title }}</div>
      {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
      {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
    </a>
    {% endfor %}
  </div>
  {% endif %}

  <!-- ══════════════════════════════════════════════════════════
       2. Calendrier & Temps cosmique
  ══════════════════════════════════════════════════════════ -->
  {% assign cat2 = site.etudes | where: 'categorie', 'Calendrier & Temps cosmique' | sort: 'order' %}
  {% if cat2.size > 0 %}
  <div class="categorie-header" id="calendrier">
    <span class="categorie-header__fr">Calendrier &amp; Temps cosmique</span>
    <span class="categorie-header__ar" dir="rtl">التَّقْوِيمُ وَالزَّمَن</span>
    <span class="tag">{{ cat2.size }}</span>
  </div>
  <div class="etudes-grid">
    {% for etude in cat2 %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
      <div class="etude-card__titre">{{ etude.title }}</div>
      {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
      {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
    </a>
    {% endfor %}
  </div>
  {% endif %}

  <!-- ══════════════════════════════════════════════════════════
       3. Pratiques rituelles — ʿIbādāt
  ══════════════════════════════════════════════════════════ -->
  {% assign cat3 = site.etudes | where: 'categorie', 'Pratiques rituelles' | sort: 'order' %}
  {% if cat3.size > 0 %}
  <div class="categorie-header" id="ibadaat">
    <span class="categorie-header__fr">Pratiques rituelles</span>
    <span class="categorie-header__ar" dir="rtl">عِبَادَات</span>
    <span class="tag">{{ cat3.size }}</span>
  </div>
  <div class="etudes-grid">
    {% for etude in cat3 %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
      <div class="etude-card__titre">{{ etude.title }}</div>
      {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
      {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
    </a>
    {% endfor %}
  </div>
  {% endif %}

  <!-- ══════════════════════════════════════════════════════════
       4. Autorité légifératrice & Sources
  ══════════════════════════════════════════════════════════ -->
  {% assign cat4 = site.etudes | where: 'categorie', 'Autorité légifératrice & Sources' | sort: 'order' %}
  {% if cat4.size > 0 %}
  <div class="categorie-header" id="sources">
    <span class="categorie-header__fr">Autorité légifératrice &amp; Sources</span>
    <span class="categorie-header__ar" dir="rtl">السُّلْطَةُ التَّشْرِيعِيَّةُ وَالْمَصَادِر</span>
    <span class="tag">{{ cat4.size }}</span>
  </div>
  <div class="etudes-grid">
    {% for etude in cat4 %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
      <div class="etude-card__titre">{{ etude.title }}</div>
      {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
      {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
    </a>
    {% endfor %}
  </div>
  {% endif %}

  <!-- ══════════════════════════════════════════════════════════
       5. Corps, Famille & Société
  ══════════════════════════════════════════════════════════ -->
  {% assign cat5 = site.etudes | where: 'categorie', 'Corps, Famille & Société' | sort: 'order' %}
  {% if cat5.size > 0 %}
  <div class="categorie-header" id="societe">
    <span class="categorie-header__fr">Corps, Famille &amp; Société</span>
    <span class="categorie-header__ar" dir="rtl">الْجَسَدُ وَالْأُسْرَةُ وَالْمُجْتَمَع</span>
    <span class="tag">{{ cat5.size }}</span>
  </div>
  <div class="etudes-grid">
    {% for etude in cat5 %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
      <div class="etude-card__titre">{{ etude.title }}</div>
      {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
      {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
    </a>
    {% endfor %}
  </div>
  {% endif %}

  <!-- ══════════════════════════════════════════════════════════
       6. Droit pénal & Économie islamique
  ══════════════════════════════════════════════════════════ -->
  {% assign cat6 = site.etudes | where: 'categorie', 'Droit pénal & Économie islamique' | sort: 'order' %}
  {% if cat6.size > 0 %}
  <div class="categorie-header" id="droit">
    <span class="categorie-header__fr">Droit pénal &amp; Économie islamique</span>
    <span class="categorie-header__ar" dir="rtl">الْحُدُودُ وَالاقْتِصَاد</span>
    <span class="tag">{{ cat6.size }}</span>
  </div>
  <div class="etudes-grid">
    {% for etude in cat6 %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
      <div class="etude-card__titre">{{ etude.title }}</div>
      {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
      {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
    </a>
    {% endfor %}
  </div>
  {% endif %}

  <!-- ══════════════════════════════════════════════════════════
       7. Communauté religieuse & Identité
  ══════════════════════════════════════════════════════════ -->
  {% assign cat7 = site.etudes | where: 'categorie', 'Communauté religieuse & Identité' | sort: 'order' %}
  {% if cat7.size > 0 %}
  <div class="categorie-header" id="communaute">
    <span class="categorie-header__fr">Communauté religieuse &amp; Identité</span>
    <span class="categorie-header__ar" dir="rtl">الْجَمَاعَةُ الدِّينِيَّةُ وَالْهُوِيَّة</span>
    <span class="tag">{{ cat7.size }}</span>
  </div>
  <div class="etudes-grid">
    {% for etude in cat7 %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
      <div class="etude-card__titre">{{ etude.title }}</div>
      {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
      {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
    </a>
    {% endfor %}
  </div>
  {% endif %}

  <!-- ══════════════════════════════════════════════════════════
       8. Eschatologie & Métaphysique
  ══════════════════════════════════════════════════════════ -->
  {% assign cat8 = site.etudes | where: 'categorie', 'Eschatologie & Métaphysique' | sort: 'order' %}
  {% if cat8.size > 0 %}
  <div class="categorie-header" id="eschatologie">
    <span class="categorie-header__fr">Eschatologie &amp; Métaphysique</span>
    <span class="categorie-header__ar" dir="rtl">الْآخِرَةُ وَالْغَيْب</span>
    <span class="tag">{{ cat8.size }}</span>
  </div>
  <div class="etudes-grid">
    {% for etude in cat8 %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
      <div class="etude-card__titre">{{ etude.title }}</div>
      {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
      {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
    </a>
    {% endfor %}
  </div>
  {% endif %}

  <!-- ── Études sans catégorie reconnue (filet de sécurité) ── -->
  {% assign autres = site.etudes
    | where_exp: "e", "e.categorie != 'Nabuwwa & Risāla'
      and e.categorie != 'Calendrier & Temps cosmique'
      and e.categorie != 'Pratiques rituelles'
      and e.categorie != 'Autorité légifératrice & Sources'
      and e.categorie != 'Corps, Famille & Société'
      and e.categorie != 'Droit pénal & Économie islamique'
      and e.categorie != 'Communauté religieuse & Identité'
      and e.categorie != 'Eschatologie & Métaphysique'" %}
  {% if autres.size > 0 %}
  <div class="categorie-header" id="autres">
    <span class="categorie-header__fr">Autres études</span>
    <span class="tag">{{ autres.size }}</span>
  </div>
  <div class="etudes-grid">
    {% for etude in autres %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
      <div class="etude-card__titre">{{ etude.title }}</div>
      {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
      {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
    </a>
    {% endfor %}
  </div>
  {% endif %}

</div>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
