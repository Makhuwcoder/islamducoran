---
layout: default
title: "Comment aborder le Coran"
subtitle: "كَيْفَ تَتَعَامَلُ مَعَ الْقُرْآنِ"
permalink: /etudes/approche/
---

<div class="site-main">
  <div class="page-header">
    <div class="page-header__categorie" style="font-family:var(--font-arabe);font-size:1.4rem;color:var(--or3);margin-bottom:.5rem;direction:rtl;">كَيْفَ تَتَعَامَلُ مَعَ الْقُرْآنِ</div>
    <h1 class="page-header__titre">Comment aborder le Coran</h1>
    <p class="page-header__subtitle">Méditer, comprendre, mémoriser et lire le Coran — dans la langue dans laquelle il a été révélé, dans l'ordre dans lequel il se présente.</p>
  </div>

  <p style="text-align:center;margin:2rem 0;">
    <a href="/etudes/" style="font-family:var(--font-titre);font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;color:var(--or2);background:var(--bg4);border:1px solid var(--bg5);border-radius:3px;padding:.35rem .8rem;text-decoration:none;">← Toutes les études</a>
  </p>

  <div class="etudes-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.4rem;margin-top:2rem;">
    {% assign cat_etudes = site.etudes | where: "categorie_slug", "approche" | sort: "order" %}
    {% for etude in cat_etudes %}
    {% unless etude.coming_soon %}
    <a class="etude-card" href="{{ etude.url | relative_url }}">
      {% if etude.racine_ar %}
      <div class="etude-card__arabic">{{ etude.racine_ar }}</div>
      {% endif %}
      <div class="etude-card__title">{{ etude.title }}</div>
      {% if etude.subtitle %}
      <div class="etude-card__subtitle">{{ etude.subtitle | truncate: 80 }}</div>
      {% endif %}
    </a>
    {% endunless %}
    {% endfor %}
  </div>
</div>
