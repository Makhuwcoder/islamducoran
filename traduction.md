---
layout: default
title: "Traduction Linguistique du Coran"
subtitle: "Traduction française conduite selon la méthode islamducoran.fr — Arabe classique · Sans tafsīr · Sans ḥadīth"
date: 2024-01-01
description: "Traduction du Coran en français selon la méthode islamducoran.fr : lexicographie arabe classique, dit/non-dit, respect de la structure linguistique du français."
permalink: /traduction/
---

<div class="site-main">

  <header class="page-header">
    <div class="page-header__categorie">islamducoran.fr</div>
    <h1 class="page-header__title">Traduction Linguistique du Coran</h1>
    <p class="page-header__subtitle">Traduction française conduite selon la méthode islamducoran.fr — Arabe classique · Sans tafsīr · Sans ḥadīth</p>
  </header>

  <div class="page-body">

<!-- ═══════════════════════════════════════════════════════════
     MENU DÉROULANT DE NAVIGATION
═══════════════════════════════════════════════════════════ -->
<style>
.trad-nav {
  margin: 2rem 0 2.5rem;
  background: var(--bg3, #1e1a12);
  border: 1px solid var(--or3, #8a6a2a);
  border-radius: 6px;
  padding: 1.2rem 1.4rem;
}
.trad-nav__label {
  display: block;
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .62rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--or2, #c9a84c);
  margin-bottom: .7rem;
}
.trad-nav__select {
  display: block;
  width: 100%;
  background: var(--bg4, #2a2318);
  color: var(--texte, #f0e2c0);
  border: 1px solid var(--or3, #8a6a2a);
  border-radius: 4px;
  padding: .55rem .8rem;
  font-family: var(--font-texte, 'Cormorant Garamond', serif);
  font-size: 1rem;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c9a84c' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right .8rem center;
  padding-right: 2.2rem;
}
.trad-nav__select:focus {
  outline: none;
  border-color: var(--or2, #c9a84c);
}
.trad-nav__select option {
  background: #1e1a12;
  color: #f0e2c0;
}
.trad-nav__select optgroup {
  color: #c9a84c;
  font-style: normal;
}
.trad-nav__btn {
  display: inline-block;
  margin-top: .75rem;
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .58rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--bg2, #16130e);
  background: var(--or2, #c9a84c);
  border: none;
  border-radius: 3px;
  padding: .35rem .85rem;
  cursor: pointer;
  text-decoration: none;
}
.trad-nav__btn:hover {
  background: var(--or1, #e2c97e);
}
</style>

<div class="trad-nav" id="trad-menu">
  <span class="trad-nav__label">▸ Naviguer dans la traduction</span>
  <select class="trad-nav__select" id="trad-select" onchange="tradNav(this.value)">
    <option value="" disabled selected>― Choisir une section ―</option>

    <optgroup label="Études linguistiques préliminaires">
      <option value="https://muqattaat-coran-i5r80i6.gamma.site/">
        Les Muqaṭṭaʿāt — Lettres séparées du Coran
      </option>
    </optgroup>

    <optgroup label="Sourate 1 · S1:1–7 · Al-Ṭalab — La Requête (conv. : Al-Fātiḥa)">
      <option value="https://traduction-linguistique--1eqydnl.gamma.site/">
        S1:1–7 · Al-Ṭalab complète + S2:1–129 · Al-Ijāba (première partie)
      </option>
    </optgroup>

    <optgroup label="Sourate 2 · Al-Ijāba — La Réponse (conv. : Al-Baqara)">
      <option value="https://traduction-linguistique--1eqydnl.gamma.site/">
        S2:1–129 · Al-Ijāba — Première partie
      </option>
      <option value="https://islam-du-coran-cshp5tf.gamma.site/">
        S2:130–180 · Al-Ijāba — Deuxième partie
      </option>
    </optgroup>
  </select>

  <a class="trad-nav__btn" id="trad-go-btn" href="#" onclick="tradNavGo(event)">Ouvrir →</a>
</div>

<script>
var _tradSelected = '';
function tradNav(val) { _tradSelected = val; }
function tradNavGo(e) {
  e.preventDefault();
  var v = _tradSelected || document.getElementById('trad-select').value;
  if (v && v !== '') window.open(v, '_blank');
}
</script>

<!-- ═══════════════════════════════════════════════════════════
     CONTENU DE LA PAGE
═══════════════════════════════════════════════════════════ -->

<h2>En cours de publication</h2>

<p>Cette traduction est conduite selon la méthode islamducoran.fr : lecture intra-coranique exclusive, lexicographie arabe classique, discipline du dit / non-dit.</p>

<h2>Principes de traduction</h2>

<p>Identifier les sens possibles en arabe classique à partir des racines triconsonantiques (al-Farāhīdī, Ibn Fāris, Ibn Manẓūr). Rechercher la cohérence intra-coranique. Si plusieurs lectures sont cohérentes, les reconnaître et les nommer explicitement. Porter le sens dans la structure linguistique du <strong>français</strong> — jamais calquer la structure arabe.</p>

<p><strong>Format imbriqué :</strong> chaque verset est présenté en arabe avec tashkīl, suivi de la translittération et de la traduction française, phrase par phrase.</p>

<p><strong>Les termes sans équivalent fidèle</strong> restent en translittération avec note lexicale (<em>ṣalāt</em>, <em>zakāt</em>, <em>dīn</em>, <em>malāʾika</em>…).</p>

<p><strong>Ce qui est dit va dans la traduction. Ce que la lexicologie révèle va dans la note.</strong> Les silences textuels sont nommés comme silences — jamais comblés.</p>

<h2>Note sur les titres des sourates</h2>

<p>Les titres conventionnels sont conservés entre parenthèses. Le titre textuel est argumenté depuis le texte lui-même.</p>

<p><em>Sourate 1 · Al-Ṭalab — La Requête</em> (titre conventionnel : Al-Fātiḥa — L'Ouvrante)</p>

<p><em>Sourate 2 · Al-Ijāba — La Réponse</em> (titre conventionnel : Al-Baqara — La Vache)</p>

<p>La traduction de Sourate 2 · Al-Ijāba (Al-Baqara) est en cours. Les blocs sont publiés progressivement.</p>

<div class="declaration" style="margin-top:2.5rem;text-align:center;max-width:640px;margin-left:auto;margin-right:auto;">
  <span class="declaration__label" style="display:block;margin-bottom:.6rem;">Barāʾa</span>
  <p>Cette traduction est conduite selon la méthode islamducoran.fr. Elle n'est pas prescriptive. Elle est révisable à la lumière du texte. L'unique garant de la compréhension est Allaah.</p>
  <p style="margin-top:.8rem;"><a href="/baraa/" style="font-family:var(--font-titre);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--or2);background:var(--bg4);border:1px solid var(--bg5);border-radius:3px;padding:.3rem .7rem;text-decoration:none;">Lire la déclaration complète →</a></p>
</div>

  </div><!-- .page-body -->
</div><!-- .site-main -->
