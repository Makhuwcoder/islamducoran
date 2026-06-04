---
layout: default
title: "Thèmes explorés"
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

  <div class="search-wrap">
    <div class="search-box">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="search" id="search-input" placeholder="Rechercher une étude, un terme arabe, une racine…" autocomplete="off">
    </div>
    <div id="search-count" style="font-family:var(--font-titre);font-size:.6rem;letter-spacing:.1em;color:var(--texte3);margin-top:.5rem;text-transform:uppercase"></div>
    <div id="search-results"></div>
  </div>

{% assign all_cats = "Nabuwwa & Risāla|Calendrier & Temps cosmique|Pratiques rituelles|Autorité légifératrice & Sources|Corps, Famille & Société|Droit pénal & Économie islamique|Communauté religieuse & Identité|Eschatologie & Métaphysique" | split: "|" %}

{% for cat in all_cats %}
{% assign etudes_cat = site.etudes | where: 'categorie', cat | sort: 'order' %}
{% if etudes_cat.size > 0 %}

<div class="categorie-header" id="{% if cat == 'Nabuwwa & Risāla' %}nabuwwa{% elsif cat == 'Calendrier & Temps cosmique' %}calendrier{% elsif cat == 'Pratiques rituelles' %}ibadaat{% elsif cat == 'Autorité légifératrice & Sources' %}sources{% elsif cat == 'Corps, Famille & Société' %}societe{% elsif cat == 'Droit pénal & Économie islamique' %}droit{% elsif cat == 'Communauté religieuse & Identité' %}communaute{% elsif cat == 'Eschatologie & Métaphysique' %}eschatologie{% endif %}">
  <span class="categorie-header__fr">{{ cat }}</span>
  <span class="categorie-header__ar" dir="rtl">{% if cat == 'Nabuwwa & Risāla' %}النُّبُوَّة وَالرِّسَالَة{% elsif cat == 'Calendrier & Temps cosmique' %}التَّقْوِيمُ وَالزَّمَن{% elsif cat == 'Pratiques rituelles' %}عِبَادَات{% elsif cat == 'Autorité légifératrice & Sources' %}السُّلْطَةُ التَّشْرِيعِيَّةُ وَالْمَصَادِر{% elsif cat == 'Corps, Famille & Société' %}الْجَسَدُ وَالْأُسْرَةُ وَالْمُجْتَمَع{% elsif cat == 'Droit pénal & Économie islamique' %}الْحُدُودُ وَالاقْتِصَاد{% elsif cat == 'Communauté religieuse & Identité' %}الْجَمَاعَةُ الدِّينِيَّةُ وَالْهُوِيَّة{% elsif cat == 'Eschatologie & Métaphysique' %}الْآخِرَةُ وَالْغَيْب{% endif %}</span>
  <span class="tag">{{ etudes_cat | size }}</span>
</div>

<div class="etudes-grid">
  {% for etude in etudes_cat %}
  <a class="etude-card{% if etude.coming_soon %} etude-card--soon{% endif %}" href="{% unless etude.coming_soon %}{{ etude.url | relative_url }}{% endunless %}">
    {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
    <div class="etude-card__titre">{{ etude.title }}</div>
    {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
    {% if etude.coming_soon %}<div class="etude-card__tag etude-card__tag--soon">À paraître</div>{% elsif etude.racine %}<div class="etude-card__tag">{{ etude.racine }}</div>{% endif %}
  </a>
  {% endfor %}
</div>

{% endif %}
{% endfor %}

</div>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
