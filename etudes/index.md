---
layout: default
title: "Thèmes explorés"
description: "Index de toutes les études thématiques islamducoran.fr"
permalink: /etudes/
---

<div class="site-main site-main--wide">

  <header class="page-header">
    <div class="page-header__categorie">islamducoran.fr</div>
    <h1 class="page-header__title">Thèmes explorés</h1>
    <p class="page-header__subtitle">مَفَاهِيمُ أَسَاسِيَّة — Le Coran lu par lui-même · Dit / Non-dit / Inférence</p>
    <div class="page-header__meta">
      <span class="tag">{{ site.etudes | size }} études</span>
      <span class="tag">Sans tafsīr · Sans ḥadīth</span>
    </div>
  </header>

  <div class="search-wrap">
    <div class="search-box">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="search" id="search-input" placeholder="Rechercher une étude, un terme arabe, une racine…" autocomplete="off">
    </div>
    <div id="search-count" style="font-family:var(--font-titre);font-size:.6rem;letter-spacing:.1em;color:var(--texte3);margin-top:.5rem;text-transform:uppercase"></div>
    <div id="search-results"></div>
  </div>

{% assign g_nabuwwa = site.etudes | where: "categorie_slug", "nabuwwa" | sort: "order" %}
{% if g_nabuwwa.size > 0 %}
<div class="categorie-header" id="nabuwwa">
  <span class="categorie-header__fr">Nabuwwa &amp; Risāla</span>
  <span class="categorie-header__ar" dir="rtl">النُّبُوَّة وَالرِّسَالَة</span>
  <span class="tag">{{ g_nabuwwa | size }}</span>
</div>
<div class="etudes-grid">
  {% for etude in g_nabuwwa %}
  {% if etude.coming_soon %}
  <div class="etude-card etude-card--soon">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    <div class="etude-card__tag etude-card__tag--soon">À paraître</div>
  </div>
  {% else %}
  <a class="etude-card" href="{{ etude.url | relative_url }}">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
  </a>
  {% endif %}
  {% endfor %}
</div>
{% endif %}

{% assign g_calendrier = site.etudes | where: "categorie_slug", "calendrier" | sort: "order" %}
{% if g_calendrier.size > 0 %}
<div class="categorie-header" id="calendrier">
  <span class="categorie-header__fr">Calendrier &amp; Temps cosmique</span>
  <span class="categorie-header__ar" dir="rtl">التَّقْوِيمُ وَالزَّمَن</span>
  <span class="tag">{{ g_calendrier | size }}</span>
</div>
<div class="etudes-grid">
  {% for etude in g_calendrier %}
  {% if etude.coming_soon %}
  <div class="etude-card etude-card--soon">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    <div class="etude-card__tag etude-card__tag--soon">À paraître</div>
  </div>
  {% else %}
  <a class="etude-card" href="{{ etude.url | relative_url }}">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
  </a>
  {% endif %}
  {% endfor %}
</div>
{% endif %}

{% assign g_ibadaat = site.etudes | where: "categorie_slug", "ibadaat" | sort: "order" %}
{% if g_ibadaat.size > 0 %}
<div class="categorie-header" id="ibadaat">
  <span class="categorie-header__fr">Pratiques rituelles</span>
  <span class="categorie-header__ar" dir="rtl">عِبَادَات</span>
  <span class="tag">{{ g_ibadaat | size }}</span>
</div>
<div class="etudes-grid">
  {% for etude in g_ibadaat %}
  {% if etude.coming_soon %}
  <div class="etude-card etude-card--soon">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    <div class="etude-card__tag etude-card__tag--soon">À paraître</div>
  </div>
  {% else %}
  <a class="etude-card" href="{{ etude.url | relative_url }}">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
  </a>
  {% endif %}
  {% endfor %}
</div>
{% endif %}

{% assign g_sources = site.etudes | where: "categorie_slug", "sources" | sort: "order" %}
{% if g_sources.size > 0 %}
<div class="categorie-header" id="sources">
  <span class="categorie-header__fr">Autorité légifératrice &amp; Sources</span>
  <span class="categorie-header__ar" dir="rtl">السُّلْطَةُ التَّشْرِيعِيَّةُ وَالْمَصَادِر</span>
  <span class="tag">{{ g_sources | size }}</span>
</div>
<div class="etudes-grid">
  {% for etude in g_sources %}
  {% if etude.coming_soon %}
  <div class="etude-card etude-card--soon">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    <div class="etude-card__tag etude-card__tag--soon">À paraître</div>
  </div>
  {% else %}
  <a class="etude-card" href="{{ etude.url | relative_url }}">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
  </a>
  {% endif %}
  {% endfor %}
</div>
{% endif %}

{% assign g_societe = site.etudes | where: "categorie_slug", "societe" | sort: "order" %}
{% if g_societe.size > 0 %}
<div class="categorie-header" id="societe">
  <span class="categorie-header__fr">Corps, Famille &amp; Société</span>
  <span class="categorie-header__ar" dir="rtl">الْجَسَدُ وَالْأُسْرَةُ وَالْمُجْتَمَع</span>
  <span class="tag">{{ g_societe | size }}</span>
</div>
<div class="etudes-grid">
  {% for etude in g_societe %}
  {% if etude.coming_soon %}
  <div class="etude-card etude-card--soon">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    <div class="etude-card__tag etude-card__tag--soon">À paraître</div>
  </div>
  {% else %}
  <a class="etude-card" href="{{ etude.url | relative_url }}">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
  </a>
  {% endif %}
  {% endfor %}
</div>
{% endif %}

{% assign g_droit = site.etudes | where: "categorie_slug", "droit" | sort: "order" %}
{% if g_droit.size > 0 %}
<div class="categorie-header" id="droit">
  <span class="categorie-header__fr">Droit pénal &amp; Économie islamique</span>
  <span class="categorie-header__ar" dir="rtl">الْحُدُودُ وَالاقْتِصَاد</span>
  <span class="tag">{{ g_droit | size }}</span>
</div>
<div class="etudes-grid">
  {% for etude in g_droit %}
  {% if etude.coming_soon %}
  <div class="etude-card etude-card--soon">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    <div class="etude-card__tag etude-card__tag--soon">À paraître</div>
  </div>
  {% else %}
  <a class="etude-card" href="{{ etude.url | relative_url }}">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
  </a>
  {% endif %}
  {% endfor %}
</div>
{% endif %}

{% assign g_communaute = site.etudes | where: "categorie_slug", "communaute" | sort: "order" %}
{% if g_communaute.size > 0 %}
<div class="categorie-header" id="communaute">
  <span class="categorie-header__fr">Communauté religieuse &amp; Identité</span>
  <span class="categorie-header__ar" dir="rtl">الْجَمَاعَةُ الدِّينِيَّةُ وَالْهُوِيَّة</span>
  <span class="tag">{{ g_communaute | size }}</span>
</div>
<div class="etudes-grid">
  {% for etude in g_communaute %}
  {% if etude.coming_soon %}
  <div class="etude-card etude-card--soon">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    <div class="etude-card__tag etude-card__tag--soon">À paraître</div>
  </div>
  {% else %}
  <a class="etude-card" href="{{ etude.url | relative_url }}">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
  </a>
  {% endif %}
  {% endfor %}
</div>
{% endif %}

{% assign g_eschatologie = site.etudes | where: "categorie_slug", "eschatologie" | sort: "order" %}
{% if g_eschatologie.size > 0 %}
<div class="categorie-header" id="eschatologie">
  <span class="categorie-header__fr">Eschatologie &amp; Métaphysique</span>
  <span class="categorie-header__ar" dir="rtl">الْآخِرَةُ وَالْغَيْب</span>
  <span class="tag">{{ g_eschatologie | size }}</span>
</div>
<div class="etudes-grid">
  {% for etude in g_eschatologie %}
  {% if etude.coming_soon %}
  <div class="etude-card etude-card--soon">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    <div class="etude-card__tag etude-card__tag--soon">À paraître</div>
  </div>
  {% else %}
  <a class="etude-card" href="{{ etude.url | relative_url }}">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    {% if etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
  </a>
  {% endif %}
  {% endfor %}
</div>
{% endif %}

</div>
<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
