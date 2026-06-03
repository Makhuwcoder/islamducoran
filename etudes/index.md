---
layout: default
title: "Études thématiques"
description: "Index de toutes les études thématiques — concepts coraniques, pratiques rituelles, calendrier, famille, législation, eschatologie."
permalink: /etudes/
---

<div class="site-main site-main--wide">

  <header class="page-header">
    <div class="page-header__categorie">islamducoran.fr</div>
    <h1 class="page-header__title">Études thématiques</h1>
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

  <!-- ── INDEX PAR CATÉGORIE ── -->
  {% assign categories = site.etudes | map: 'categorie' | uniq | sort %}
  {% for categorie in categories %}
  {% assign etudes_cat = site.etudes | where: 'categorie', categorie | sort: 'title' %}

  <div class="categorie-header" id="{{ categorie | slugify }}">
    <span class="categorie-header__fr">{{ categorie }}</span>
    <span class="categorie-header__ar" dir="rtl">
      {% case categorie %}
        {% when "Concepts fondamentaux" %}مَفَاهِيمُ أَسَاسِيَّة
        {% when "Pratiques rituelles" %}عِبَادَات
        {% when "Calendrier et temps cosmique" %}التَّقْوِيمُ وَالزَّمَن
        {% when "Corps, famille et société" %}الْجَسَدُ وَالأُسْرَةُ وَالْمُجْتَمَع
        {% when "Législation et économie" %}التَّشْرِيعُ وَالاقْتِصَاد
        {% when "Nabuwwa et risāla" %}النُّبُوَّةُ وَالرِّسَالَة
        {% when "Communauté et identité" %}الْأُمَّةُ وَالْهُوِيَّة
        {% when "Eschatologie et métaphysique" %}الْآخِرَةُ وَالْغَيْب
      {% endcase %}
    </span>
    <span class="tag">{{ etudes_cat | size }}</span>
  </div>

  <div class="etudes-grid">
    {% for etude in etudes_cat %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}
      <div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>
      {% endif %}
      <div class="etude-card__titre">{{ etude.title }}</div>
      {% if etude.subtitle %}
      <p class="etude-card__resume">{{ etude.subtitle }}</p>
      {% endif %}
      {% if etude.racine %}
      <div class="etude-card__tag">Racine : {{ etude.racine }}</div>
      {% endif %}
    </a>
    {% endfor %}
  </div>

  {% endfor %}

</div>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
