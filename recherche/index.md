---
layout: default
title: "Recherche"
description: "Moteur de recherche interne — islamducoran.fr"
permalink: /recherche/
search: true
---

<div class="site-main">

  <header class="page-header">
    <h1 class="page-header__title">Recherche</h1>
    <p class="page-header__subtitle">Recherche plein texte dans l'ensemble des études publiées sur islamducoran.fr</p>
  </header>

  <div class="search-wrap">
    <div class="search-box">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        type="search"
        id="search-input"
        placeholder="Entrez un terme, une racine arabe, un concept…"
        autocomplete="off"
        autofocus
        style="font-size:1.05rem">
    </div>

    <div style="margin-top:.7rem;font-family:var(--font-corps);font-size:.88rem;color:var(--texte3);font-style:italic">
      Exemples : <a href="?q=shirk" style="color:var(--texte3)">shirk</a> ·
      <a href="?q=salat" style="color:var(--texte3)">ṣalāt</a> ·
      <a href="?q=hajj" style="color:var(--texte3)">ḥajj</a> ·
      <a href="?q=calendrier" style="color:var(--texte3)">calendrier</a> ·
      <a href="?q=lapidation" style="color:var(--texte3)">lapidation</a>
    </div>

    <div id="search-count" style="font-family:var(--font-titre);font-size:.62rem;letter-spacing:.1em;color:var(--texte3);margin-top:1rem;text-transform:uppercase;min-height:1.2rem"></div>
    <div id="search-results"></div>
  </div>

  <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid #c9a84c18">
    <p style="font-size:.88rem;color:var(--texte3);font-style:italic">
      La recherche porte sur les titres, sous-titres, racines arabes, catégories et contenus des études.
      Elle est instantanée et fonctionne sans connexion réseau une fois la page chargée.
    </p>
  </div>

</div>
