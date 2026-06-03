---
layout: default
title: "Accueil"
description: "Le Coran lu par lui-même, en arabe classique — Sans tafsīr · Sans ḥadīth · Sans école · Méthode dit / non-dit / inférence"
permalink: /
---

<header class="site-header">
  <div class="site-header__bismillah" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
  <h1 class="site-header__title">L'Islam du Coran</h1>
  <p class="site-header__subtitle">Le Coran lu par lui-même, en arabe classique — Sans tafsīr · Sans ḥadīth · Sans école</p>
  <div class="site-header__baraaa">
    Muslim — uniquement et seulement · Source normative unique : le Coran · Autorité unique : Allaah ◆
    Ni sunnite · ni chiite · ni salafite · ni wahhabite · ni coraniste · ni soufiste d'aucune tariqa ·
    ni d'aucune école de fiqh · ni d'aucun mouvement constitué ◆
    Aucun ḥizb · aucun tafsīr · aucun ḥadīth comme source normative · aucune autorité humaine sur le dīn ◆
    Le texte dit ce qu'il dit — rien de plus, rien de moins.
  </div>
</header>

<main class="site-main">

  <div class="home-verset">
    <span class="home-verset__ref">Sourate Al-Furqān · 25:30</span>
    <div class="home-verset__arabe" dir="rtl">
      وَقَالَ الرَّسُولُ يَا رَبِّ إِنَّ قَوْمِي اتَّخَذُوا هَٰذَا الْقُرْآنَ مَهْجُورًا
    </div>
    <div class="home-verset__trl">Wa-qāla r-rasūlu yā rabbi inna qawmī ttakhadhū hādhā l-qurʾāna mahjūrā</div>
    <div class="home-verset__trad">
      « Et le Messager dira : "Mon Seigneur, en vérité mon peuple a pris ce Coran comme quelque chose de délaissé." »
    </div>
  </div>

  <section style="margin: 3rem 0;">
    <div class="declaration">
      <span class="declaration__label">Ce qu'est islamducoran.fr</span>
      <p>Une méthode rigoureuse et délimitée d'étude, de lecture et d'analyse du texte coranique pris comme seule source normative. Le Coran se définit et se commente lui-même. Les instruments lexicographiques de l'arabe classique — al-Farāhīdī, Ibn Fāris, Ibn Manẓūr — sont les seuls outils externes convoqués, exclusivement comme références de langue.</p>
      <p style="margin-top:.7rem">Cette démarche ne crée aucune dépendance. Chaque conclusion est vérifiable, chaque inférence est nommée comme telle. <em>Ceci n'est pas un dogme. C'est une méditation.</em></p>
    </div>
  </section>

  <section>
    <span class="section-label">Les quatre piliers de la méthode</span>
    <div class="pilliers-grid">
      <div class="pillier-card">
        <span class="pillier-card__num">١</span>
        <div class="pillier-card__titre">Auto-référence coranique</div>
        <p class="pillier-card__texte">Le Coran se définit et se commente lui-même. Les versets s'éclairent mutuellement.</p>
      </div>
      <div class="pillier-card">
        <span class="pillier-card__num">٢</span>
        <div class="pillier-card__titre">La racine arabe</div>
        <p class="pillier-card__texte">Chaque mot est analysé à partir de sa racine triconsonantique et de son champ sémantique classique.</p>
      </div>
      <div class="pillier-card">
        <span class="pillier-card__num">٣</span>
        <div class="pillier-card__titre">Contexte interne</div>
        <p class="pillier-card__texte">Un verset n'est jamais isolé. Son sens est éclairé par les versets qui l'entourent et les occurrences parallèles.</p>
      </div>
      <div class="pillier-card">
        <span class="pillier-card__num">٤</span>
        <div class="pillier-card__titre">Structure rhétorique</div>
        <p class="pillier-card__texte">Le Coran utilise une rhétorique propre : répétitions, chiasmes, symétries porteuses de sens.</p>
      </div>
    </div>
  </section>

  <section style="margin-top:3.5rem">
    <span class="section-label">Accès direct</span>
    <div class="etudes-grid">

      <a class="etude-card" href="{{ '/etudes/' | relative_url }}">
        <div class="etude-card__titre">Toutes les études</div>
        <p class="etude-card__resume">Index complet des études thématiques par catégorie — concepts, pratiques rituelles, calendrier, famille, législation…</p>
        <div class="etude-card__tag">Index général</div>
      </a>

      <a class="etude-card" href="{{ '/recherche/' | relative_url }}">
        <div class="etude-card__titre">Moteur de recherche</div>
        <p class="etude-card__resume">Recherche plein texte dans l'ensemble du corpus des études publiées.</p>
        <div class="etude-card__tag">Recherche</div>
      </a>

      <a class="etude-card" href="{{ '/methode/' | relative_url }}">
        <div class="etude-card__titre">La méthode</div>
        <p class="etude-card__resume">Protocole d'investigation, sources lexicographiques, discipline du dit / non-dit / inférence.</p>
        <div class="etude-card__tag">Fondements</div>
      </a>

      <a class="etude-card" href="{{ '/traduction/' | relative_url }}">
        <div class="etude-card__titre">Traduction du Coran</div>
        <p class="etude-card__resume">Traduction française conduite selon la méthode islamducoran.fr — arabe classique, sans tafsīr.</p>
        <div class="etude-card__tag">En cours</div>
      </a>

      <a class="etude-card" href="{{ '/baraaa/' | relative_url }}">
        <div class="etude-card__racine" dir="rtl">بَرَاءَة</div>
        <div class="etude-card__titre">Barāʾa — Déclaration</div>
        <p class="etude-card__resume">Déclaration officielle de positionnement, de non-appartenance et d'engagement méthodologique.</p>
        <div class="etude-card__tag">Permanent · Opposable</div>
      </a>

    </div>
  </section>

  {% assign recent = site.etudes | sort: 'date' | reverse | limit: 6 %}
  {% if recent.size > 0 %}
  <section style="margin-top:3.5rem">
    <span class="section-label">Études récentes</span>
    <div class="etudes-grid">
      {% for etude in recent %}
      <a class="etude-card" href="{{ etude.url | relative_url }}">
        {% if etude.racine_ar %}<div class="etude-card__racine" dir="rtl">{{ etude.racine_ar }}</div>{% endif %}
        <div class="etude-card__titre">{{ etude.title }}</div>
        {% if etude.subtitle %}<p class="etude-card__resume">{{ etude.subtitle }}</p>{% endif %}
        <div class="etude-card__tag">{{ etude.categorie }}</div>
      </a>
      {% endfor %}
    </div>
  </section>
  {% endif %}

</main>
