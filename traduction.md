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
  <p class="page-header__subtitle">Méthode exclusive : racines arabes anciennes · sans Tafsīr · sans Ḥadīth</p>
</header>

<div class="page-body">

<style>
/* ═══════════════════════════════════════════
   NAVIGATION PRINCIPALE — SÉLECTEUR DE MODE
═══════════════════════════════════════════ */
.trad-mode-tabs {
  display: flex;
  gap: .5rem;
  margin: 0 0 -1px;
  position: relative;
  z-index: 1;
}
.trad-mode-tab {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .2rem;
  text-align: left;
  cursor: pointer;
  font-family: var(--font-texte, 'Cormorant Garamond', serif);
  background: var(--bg2, #16130e);
  border: 1px solid var(--bg5, #3a3020);
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  padding: .85rem 1.1rem;
  transition: background .15s, border-color .15s;
}
.trad-mode-tab__titre {
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .68rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--texte-2, #c8b89a);
}
.trad-mode-tab__desc {
  font-size: .8rem;
  font-style: italic;
  color: var(--texte-2, #c8b89a);
  opacity: .75;
}
.trad-mode-tab.is-active {
  background: var(--bg3, #1e1a12);
  border-color: var(--or3, #8a6a2a);
}
.trad-mode-tab.is-active .trad-mode-tab__titre { color: var(--or2, #c9a84c); }
.trad-mode-tab:not(.is-active):hover { background: var(--bg3, #1e1a12); }
.trad-mode-panel { display: none; }
.trad-mode-panel.is-active { display: block; }

/* ═══════════════════════════════════════════
   NAVIGATION PRINCIPALE
═══════════════════════════════════════════ */
.trad-nav {
  margin: 0 0 2.5rem;
  background: var(--bg3, #1e1a12);
  border: 1px solid var(--or3, #8a6a2a);
  border-radius: 0 6px 6px 6px;
  padding: 1.3rem 1.5rem;
}
.trad-nav__label {
  display: block;
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .6rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--or2, #c9a84c);
  margin-bottom: .75rem;
}
.trad-nav__select {
  display: block;
  width: 100%;
  background: var(--bg4, #2a2318);
  color: var(--texte, #f0e2c0);
  border: 1px solid var(--or3, #8a6a2a);
  border-radius: 4px;
  padding: .6rem .85rem;
  font-family: var(--font-texte, 'Cormorant Garamond', serif);
  font-size: 1rem;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c9a84c' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right .85rem center;
  padding-right: 2.4rem;
  transition: border-color .2s;
}
.trad-nav__select:focus { outline: none; border-color: var(--or2, #c9a84c); }
.trad-nav__select option { background: #1e1a12; color: #f0e2c0; }
.trad-nav__select optgroup { color: #c9a84c; font-style: normal; font-weight: 600; }
.trad-nav__row {
  display: flex;
  gap: .6rem;
  margin-top: .8rem;
  flex-wrap: wrap;
}
.trad-nav__btn {
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .58rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--bg2, #16130e);
  background: var(--or2, #c9a84c);
  border: none;
  border-radius: 3px;
  padding: .38rem .9rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background .15s;
}
.trad-nav__btn:hover { background: var(--or1, #e2c97e); }
.trad-nav__btn--outline {
  background: transparent;
  color: var(--or2, #c9a84c);
  border: 1px solid var(--or3, #8a6a2a);
}
.trad-nav__btn--outline:hover { background: var(--bg3, #1e1a12); }

/* ═══════════════════════════════════════════
   SECTIONS INTERNES
═══════════════════════════════════════════ */
.trad-section {
  margin: 2.5rem 0;
  padding-top: 1.5rem;
  border-top: 1px solid var(--bg5, #3a3020);
}
.trad-section__titre {
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .75rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--or2, #c9a84c);
  margin-bottom: 1.2rem;
}

/* ═══════════════════════════════════════════
   CALLOUTS
═══════════════════════════════════════════ */
.trad-callout {
  margin: 1.5rem 0;
  padding: 1rem 1.3rem;
  border-radius: 4px;
  border-left: 3px solid var(--or3, #8a6a2a);
  background: var(--bg3, #1e1a12);
}
.trad-callout--pivot {
  border-left-color: #910D0D;
  background: rgba(145, 13, 13, .08);
}
.trad-callout--avert {
  border-left-color: #c9a84c;
  background: rgba(201, 168, 76, .07);
}
.trad-callout__label {
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .6rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--or3, #8a6a2a);
  display: block;
  margin-bottom: .5rem;
}
.trad-callout--pivot .trad-callout__label { color: #c04040; }
.trad-callout--avert .trad-callout__label { color: var(--or2, #c9a84c); }

/* ═══════════════════════════════════════════
   FICHES TERMINOLOGIQUES
═══════════════════════════════════════════ */
.trad-fiche {
  margin: 2rem 0;
  border: 1px solid var(--bg5, #3a3020);
  border-radius: 5px;
  overflow: hidden;
}
.trad-fiche__header {
  background: var(--bg3, #1e1a12);
  padding: .9rem 1.3rem;
  display: flex;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}
.trad-fiche__ar {
  font-family: 'Amiri', serif;
  font-size: 1.6rem;
  color: var(--or2, #c9a84c);
  direction: rtl;
}
.trad-fiche__titre {
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .8rem;
  letter-spacing: .08em;
  color: var(--texte, #f0e2c0);
  text-transform: uppercase;
}
.trad-fiche__body {
  padding: 1.1rem 1.3rem;
  background: var(--bg2, #16130e);
}
.trad-fiche__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-top: 1rem;
}
@media (max-width: 640px) { .trad-fiche__row { grid-template-columns: 1fr; } }
.trad-fiche__col-label {
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .6rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--or3, #8a6a2a);
  margin-bottom: .4rem;
}

/* ═══════════════════════════════════════════
   TABLEAU COMPARATIF
═══════════════════════════════════════════ */
.trad-table {
  width: 100%;
  border-collapse: collapse;
  font-size: .9rem;
  margin: 1.2rem 0;
}
.trad-table th {
  background: var(--bg3, #1e1a12);
  color: var(--or2, #c9a84c);
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .6rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: .55rem .8rem;
  text-align: center;
  border: 1px solid var(--bg5, #3a3020);
}
.trad-table td {
  padding: .5rem .8rem;
  border: 1px solid var(--bg5, #3a3020);
  text-align: center;
  color: var(--texte, #f0e2c0);
  background: var(--bg2, #16130e);
}
.trad-table td.ar {
  font-family: 'Amiri', serif;
  font-size: 1.1rem;
  direction: rtl;
}
.trad-table tr:hover td { background: var(--bg3, #1e1a12); }

/* ═══════════════════════════════════════════
   BOUTON RETOUR HAUT
═══════════════════════════════════════════ */
.trad-back {
  display: inline-block;
  margin: 2rem 0 0;
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .65rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--bg2, #16130e);
  background: var(--or3, #8a6a2a);
  text-decoration: none;
  border: none;
  border-radius: 4px;
  padding: .55rem 1.2rem;
  transition: background .15s;
}
.trad-back:hover { background: var(--or2, #c9a84c); color: var(--bg2, #16130e); }

/* ═══════════════════════════════════════════
   PROGRESSION CHANTIER
═══════════════════════════════════════════ */
.trad-progress {
  margin: 2rem 0;
}
.trad-progress__item {
  display: flex;
  align-items: center;
  gap: .9rem;
  padding: .7rem 1rem;
  border-radius: 4px;
  margin-bottom: .5rem;
  background: var(--bg3, #1e1a12);
  border: 1px solid var(--bg5, #3a3020);
}
.trad-progress__badge {
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .55rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  padding: .2rem .55rem;
  border-radius: 3px;
  white-space: nowrap;
  flex-shrink: 0;
}
.trad-progress__badge--live {
  background: rgba(44, 74, 62, .6);
  color: #7ec8a0;
  border: 1px solid #2c4a3e;
}
.trad-progress__badge--wip {
  background: rgba(90, 56, 32, .5);
  color: #d4a57a;
  border: 1px solid #5a3820;
}
.trad-progress__text {
  font-size: .92rem;
  color: var(--texte, #f0e2c0);
  flex: 1;
}
.trad-progress__link {
  font-family: var(--font-titre, 'Cinzel', serif);
  font-size: .55rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--or2, #c9a84c);
  text-decoration: none;
  border: 1px solid var(--or3, #8a6a2a);
  border-radius: 3px;
  padding: .22rem .6rem;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background .15s;
}
.trad-progress__link:hover { background: var(--bg4, #2a2318); }
</style>

<!-- ═══ ANCRE HAUT ═══ -->
<div id="top-trad"></div>

<!-- ═══════════════════════════════════════════════════════════
     DEUX OUTILS DE NAVIGATION — PAR BLOCS / PAR SOURATE
═══════════════════════════════════════════════════════════ -->
<div class="trad-mode-tabs">
  <div class="trad-mode-tab is-active" id="tab-blocs" onclick="tradShowMode('blocs')">
    <span class="trad-mode-tab__titre">▸ Naviguer par blocs</span>
    <span class="trad-mode-tab__desc">Étude détaillée — notes lexicales, dit/non-dit</span>
  </div>
  <div class="trad-mode-tab" id="tab-sourate" onclick="tradShowMode('sourate')">
    <span class="trad-mode-tab__titre">▸ Naviguer par sourate</span>
    <span class="trad-mode-tab__desc">Lecture continue — sourate entière, sans séparation</span>
  </div>
</div>

<div class="trad-nav trad-mode-panel is-active" id="panel-blocs">
  <span class="trad-nav__label">▸ Choisir un bloc d'étude</span>
  <select class="trad-nav__select" id="trad-select" onchange="tradSetVal(this.value)">
    <option value="" disabled selected>― Choisir une section ―</option>

    <optgroup label="Outils préliminaires">
      <option value="#problematique">↓ Problématique — Al-Kitmān wa-l-Ṣadd</option>
      <option value="#principes">↓ Principes de traduction</option>
      <option value="#fiches">↓ Fiches terminologiques</option>
    </optgroup>

    <optgroup label="Note · Sommaires">
      <option value="/etudes/trad-methode-note/">↓ Note méthodologique</option>
      <option value="/etudes/trad-sommaire-1/">↓ Sommaire Partie 1 — S1 · S2:1–29</option>
      <option value="/etudes/trad-sommaire-2/">↓ Sommaire Partie 2 — S2:30–129</option>
      <option value="/etudes/trad-sommaire-3/">↓ Sommaire Partie 3 — S2:130–286</option>
      <option value="/etudes/trad-sommaire-s3/">↓ Sommaire Sourate 3 — S3:1–200</option>
    </optgroup>

    <optgroup label="Études préliminaires">
      <option value="/etudes/trad-muqattaat/">↓ Les Muqaṭṭaʿāt — Lettres séparées du Coran</option>
    </optgroup>

    <optgroup label="Sourate 1 · S1:1–7 · Al-Ṭalab — La Requête">
      <option value="/etudes/trad-s1-al-talab/">↓ S1:1–7 · Al-Ṭalab — 7 versets avec audio</option>
    </optgroup>

    <optgroup label="Sourate 2 · Al-Ijāba — La Réponse · S2:1–129">
      <option value="/etudes/trad-s2-bloc1/">↓ Bloc I · S2:1–29 — Portraits · Taḥaddī</option>
      <option value="/etudes/trad-s2-bloc2/">↓ Bloc II · S2:30–74 — Ādam · Fils d'Isrāʾīl</option>
      <option value="/etudes/trad-s2-bloc3/">↓ Bloc III · S2:75–103 — Falsifications · Bābil</option>
      <option value="/etudes/trad-s2-bloc4/">↓ Bloc IV · S2:104–129 — Qibla · Ibrāhīm</option>
    </optgroup>

    <optgroup label="Sourate 2 · Al-Ijāba — S2:130–179">
      <option value="/etudes/trad-s2-bloc5/">↓ Bloc V · S2:130–157 — Milla · Qibla · Épreuve</option>
      <option value="/etudes/trad-s2-bloc6/">↓ Bloc VI · S2:158–179 — Shaʿāʾir · Birr · Qiṣāṣ</option>
    </optgroup>

    <optgroup label="Sourate 2 · Al-Ijāba — S2:180–286 (intégrale)">
      <option value="/etudes/trad-s2-bloc7/">↓ Bloc VII · S2:180–199 — Waṣiyya · Ṣiyām · Qitāl · Ḥajj</option>
      <option value="/etudes/trad-s2-bloc8/">↓ Bloc VIII · S2:200–227 — Qitāl · Khamr · Maysir · Mariage · Maḥīḍ</option>
      <option value="/etudes/trad-s2-bloc9/">↓ Bloc IX · S2:228–242 — ʿIdda · Ṭalāq · Allaitement · Veuvage</option>
      <option value="/etudes/trad-s2-bloc10/">↓ Bloc X · S2:243–253 — Ṭālūt et Jālūt · Les rusul distingués</option>
      <option value="/etudes/trad-s2-bloc11/">↓ Bloc XI · S2:254–266 — Āyat al-Kursī · Lā ikrāha fī l-dīn · Ibrāhīm</option>
      <option value="/etudes/trad-s2-bloc12/">↓ Bloc XII · S2:267–283 — Ribā · Āyat al-dayn</option>
      <option value="/etudes/trad-s2-bloc13/">↓ Bloc XIII · S2:284–286 — Āmana l-rasūl · Clôture de la sourate</option>
    </optgroup>

    <optgroup label="Sourate 3 · Āl ʿImrān — S3:1–200 (complète)">
      <option value="/etudes/trad-s3-bloc1/">↓ Bloc I · S3:1–32 — Tanzīl · Muḥkamāt/Mutashābihāt · Al-islām · Mālik al-Mulk</option>
      <option value="/etudes/trad-s3-bloc2/">↓ Bloc II · S3:33–63 — Āl ʿImrān · Maryam · ʿĪsā · Mubāhala</option>
      <option value="/etudes/trad-s3-bloc3/">↓ Bloc III · S3:64–99 — Parole commune · Ibrāhīm · Mīthāq des nabiyyūn · Maison de Bakka</option>
      <option value="/etudes/trad-s3-bloc4/">↓ Bloc IV · S3:100–129 — Al-Iʿtiṣām · Meilleure umma · Biṭāna · Ouverture de Badr</option>
      <option value="/etudes/trad-s3-bloc5/">↓ Bloc V · S3:130–148 — Ribā · Bayān · Al-Tamḥīṣ · Muḥammad n'est qu'un rasūl</option>
      <option value="/etudes/trad-s3-bloc6/">↓ Bloc VI · S3:149–180 — Uḥud · Second tamḥīṣ · Munāfiqūn · Tués sur le chemin d'Allaah</option>
      <option value="/etudes/trad-s3-bloc7/">↓ Bloc VII · S3:181–200 — Al-Tabyīn (mīthāq S3:187) · Ūlū l-albāb · Clôture de la sourate</option>
    </optgroup>
    <optgroup label="Sourate 4 · An-Nisāʾ — en cours">
      <option value="/etudes/trad-s4-bloc1/">↓ Bloc I · S4:1–23 — Origine unique · Orphelins · Farāʾiḍ de l'héritage · Unions interdites</option>
      <option value="/etudes/trad-s4-bloc2/">↓ Bloc II · S4:24–43 — Muḥṣanāt · Grands péchés · Qawwāmūn et nushūz · Iḥsān · Ṣalāt et tayammum</option>
      <option value="/etudes/trad-s4-bloc3/">↓ Bloc III · S4:44–57 — Distorsion de la parole · Le shirk · Jibt et ṭāghūt · Croire ou se détourner</option>
      <option value="/etudes/trad-s4-bloc4/">↓ Bloc IV · S4:58–70 — Al-amāna et al-ʿadl · Ūlī l-amr · Arbitrage du rasūl · Les quatre compagnies</option>
      <option value="/etudes/trad-s4-bloc5/">↓ Bloc V · S4:71–91 — Le qitāl fī sabīli llāh · Obéir au rasūl, méditer le Coran · Les munāfiqūn dans le conflit</option>
      <option value="/etudes/trad-s4-bloc6/">↓ Bloc VI · S4:92–100 — L'homicide du croyant · Vérifier avant d'agir · Les mustaḍʿafīn et l'hijra</option>
    </optgroup>
  </select>

  <div class="trad-nav__row">
    <a class="trad-nav__btn" href="#" onclick="tradGo(event)">Ouvrir →</a>
  </div>
</div>

<div class="trad-nav trad-mode-panel" id="panel-sourate">
  <span class="trad-nav__label">▸ Choisir une sourate — lecture continue, sans découpage</span>
  <select class="trad-nav__select" id="sourate-select" onchange="sourateSetVal(this.value)">
    <option value="" disabled selected>― Choisir une sourate ―</option>
    <option value="/sourate/1/">↓ Sourate 1 · Al-Ṭalab — S1:1–7 (complète)</option>
    <option value="/sourate/2/">↓ Sourate 2 · Al-Ijāba — S2:1–286 (complète)</option>
    <option value="/sourate/3/">↓ Sourate 3 · Āl ʿImrān — S3:1–200 (complète)</option>
  </select>

  <div class="trad-nav__row">
    <a class="trad-nav__btn" href="#" onclick="sourateGo(event)">Lire en entier →</a>
  </div>
</div>

<script>
var _tradVal = '';
function tradSetVal(v) { _tradVal = v; }
function tradGo(e) {
  e.preventDefault();
  var v = _tradVal || document.getElementById('trad-select').value;
  if (!v) return;
  if (v.startsWith('http')) { window.open(v, '_blank'); }
  else if (v.startsWith('#')) {
    var el = document.getElementById(v.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  else { window.location.href = v; }
}

var _sourateVal = '';
function sourateSetVal(v) { _sourateVal = v; }
function sourateGo(e) {
  e.preventDefault();
  var v = _sourateVal || document.getElementById('sourate-select').value;
  if (!v) return;
  window.location.href = v;
}

function tradShowMode(mode) {
  document.getElementById('tab-blocs').classList.toggle('is-active', mode === 'blocs');
  document.getElementById('tab-sourate').classList.toggle('is-active', mode === 'sourate');
  document.getElementById('panel-blocs').classList.toggle('is-active', mode === 'blocs');
  document.getElementById('panel-sourate').classList.toggle('is-active', mode === 'sourate');
}
</script>

<!-- ═══════════════════════════════════════════════════════════
     SECTION 1 — PROBLÉMATIQUE
═══════════════════════════════════════════════════════════ -->
<div class="trad-section" id="problematique">
  <p class="trad-section__titre">Problématique</p>

  <div style="font-family:'Amiri',serif;font-size:2rem;text-align:center;color:var(--or2,#c9a84c);direction:rtl;margin-bottom:.4rem;line-height:1.4;">
    اَلْكِتْمَانُ وَالصَّدُّ
  </div>
  <p style="text-align:center;font-style:italic;margin-bottom:1.8rem;color:var(--texte-2,#c8b89a);">
    Dissimulation active et barrage de la voie
  </p>

  <p>Les deux manipulations qui confisquent le Livre d'Allaah, en barrent l'accès et en dissimulent le message, soustrayant à toute l'humanité ce qui lui a été révélé.</p>

  <p>Le Coran fait l'objet de deux manipulations distinctes qui produisent le même effet : éloigner le croyant du texte lui-même pour le rediriger vers une bibliographie de substitution — tafsīr, fiqh, ḥadīth — dont les producteurs et gardiens sont précisément ceux qui opèrent ces manipulations.</p>

  <ul style="margin:1.2rem 0 1.2rem 1.4rem;line-height:2;">
    <li><strong>Al-kitmān</strong> (S.2:159) : dissimuler activement ce qui a été révélé — le texte est là, mais on l'enfouit sous une bibliographie de substitution.</li>
    <li><strong>Al-ṣadd ʿan sabīli llāh</strong> (S.2:217, 4:167, 8:47) : bloquer l'accès à la voie d'Allaah — non par la force, mais par l'interposition d'une autorité humaine entre le croyant et le texte.</li>
  </ul>

  <p>Les deux opérations sont distinctes dans leur mécanisme et convergentes dans leur effet : le croyant n'atteint pas le sens du texte.</p>

  <div class="trad-callout trad-callout--pivot">
    <span class="trad-callout__label">Première manipulation — Doctrinale</span>
    <p>Sacraliser l'inaccessibilité du texte en l'élevant au rang de principe religieux : le Coran serait si miraculeusement au-dessus de toute langue humaine qu'aucune traduction, aucune lecture directe, aucune compréhension personnelle ne pourrait en restituer le sens. Comprendre par soi-même serait présomptueux. S'y aventurer sans guide autorisé serait dangereux.</p>
    <p style="margin-top:.8rem;font-style:italic;">Le message implicite est simple et paralysant : <strong>tu ne peux pas lire seul — tu as besoin de nous.</strong></p>
    <p style="margin-top:.8rem;">Pour le croyant : la dépossession de son propre texte, remplacé par la parole du savant autorisé. Pour le non-musulman : un livre que même ses propres fidèles ne peuvent lire sans médiation — donc un livre fermé, ésotérique, suspect. Dans les deux cas, l'effet recherché est identique : <strong>interdire la rencontre directe avec le Livre.</strong></p>
  </div>

  <div class="trad-callout trad-callout--pivot">
    <span class="trad-callout__label">Seconde manipulation — Pseudo-philologique</span>
    <p>Instrumentaliser les traditions de récitation pour accréditer, auprès des croyants comme des non-musulmans, l'idée que le Coran serait un texte pluriel, concurrentiel, contradictoire… Comme tous les autres.</p>
    <p style="margin-top:.8rem;font-style:italic;">Le message implicite est simple et dévastateur : <strong>plusieurs lectures = plusieurs versions = plusieurs textes = un livre comme les autres, donc faux.</strong></p>
    <p style="margin-top:.8rem;">Pour le croyant : le doute sur l'intégrité de ce qu'il récite. Pour le non-musulman : la disqualification avant même l'approche du texte. Dans les deux cas, l'effet recherché est identique : <strong>interdire la rencontre directe avec le Livre.</strong></p>
  </div>

  <p>Ces deux manipulations partagent une architecture commune : elles partent d'un fait réel pour en tirer une conclusion fausse. La première confond <em>inimitable</em> et <em>intraduisible</em>. La seconde confond <em>réalisation phonétique</em> et <em>version textuelle</em>. Toutes deux aboutissent à éloigner le croyant du texte pour le rendre dépendant d'une médiation humaine.</p>

  <div class="trad-callout">
    <span class="trad-callout__label">Conclusion</span>
    <p>Le texte leur répond par des énoncés directs sur lui-même : il s'est déclaré facilité, accessible, guidance pour tous les peuples, préservé, intègre, sa propre clarification. Il a révélé lui-même pourquoi l'arabe a été choisi — et que ce choix est une accommodation, non un monopole. Il a défini le destinataire réel du message : ceux qui ont cru, dans toutes les langues.</p>
    <p style="margin-top:.8rem;">La preuve par la pratique vient compléter la démonstration textuelle : ce travail lui-même démontre que le Coran se traduit, à condition de deux compétences accessibles — la lexicographie classique et la rigueur du dit/non-dit. Ces deux compétences sont sans rapport avec une appartenance ethnique, une chaîne d'initiation, ou un <em>kashf</em> mystique. Elles sont au service du texte — non au-dessus de lui.</p>
    <p style="margin-top:.8rem;font-style:italic;font-size:.9rem;color:var(--texte-2,#c8b89a);">Lien avec les études précédentes — Ces deux manipulations s'inscrivent dans le même mouvement que les structures examinées dans les études sur la Sāʿa et le taṣawwuf : substituer à l'autorité du texte l'autorité d'une tradition humaine. L'ijtihad et le kashf rejoignent ici les signes eschatologiques fabriqués et les ṭuruq soufies dans le même inventaire des mécanismes par lesquels une parole humaine se substitue au texte en se parant de son autorité. Dans tous les cas, la méthode dit/non-dit appliquée rigoureusement suffit à les démonter.</p>
  </div>

  <a href="#top-trad" class="trad-back">↑ Retour au menu</a>
</div>

<!-- ═══════════════════════════════════════════════════════════
     SECTION 2 — PRINCIPES DE TRADUCTION
═══════════════════════════════════════════════════════════ -->
<div class="trad-section" id="principes">
  <p class="trad-section__titre">Principes de traduction</p>

  <p>Cette traduction est conduite selon la méthode islamducoran.fr : lecture intra-coranique exclusive, lexicographie arabe classique, discipline du dit / non-dit / inférence.</p>

  <div class="trad-callout trad-callout--avert">
    <span class="trad-callout__label">Protocole en cinq étapes</span>
    <ol style="margin:.4rem 0 0 1.3rem;line-height:2.1;">
      <li>Identifier les sens possibles en arabe classique à partir des racines triconsonantiques (al-Farāhīdī, Ibn Fāris, Ibn Manẓūr).</li>
      <li>Rechercher la cohérence intra-coranique.</li>
      <li>Si plusieurs lectures sont cohérentes, les reconnaître et les nommer explicitement.</li>
      <li>Porter le sens dans la structure linguistique du <strong>français</strong> — jamais calquer la structure arabe.</li>
      <li>Ce qui est dit va dans la traduction. Ce que la lexicologie révèle va dans la note. Jamais l'inverse.</li>
    </ol>
  </div>

  <p><strong>Format imbriqué :</strong> chaque verset est présenté en arabe avec tashkīl, suivi de la translittération et de la traduction française, phrase par phrase, selon le modèle :</p>

  <div class="trad-callout" style="font-family:'Cormorant Garamond',serif;font-size:1rem;line-height:1.9;">
    <p style="font-family:'Amiri',serif;font-size:1.3rem;direction:rtl;text-align:right;color:var(--or2,#c9a84c);">إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</p>
    <p style="color:var(--texte-2,#c8b89a);font-style:italic;">Iyyāka naʿbudu wa-iyyāka nastaʿīn</p>
    <p>Toi seul nous servons, et Toi seul nous implorons l'aide.</p>
  </div>

  <p><strong>Les termes sans équivalent fidèle</strong> restent en translittération avec note lexicale : <em>ṣalāt</em>, <em>zakāt</em>, <em>dīn</em>, <em>malāʾika</em>, <em>ummī</em>, <em>mā malakat aymānukum</em>…</p>

  <p><strong>Les silences textuels</strong> sont nommés comme silences — jamais comblés. Ce que le texte ne dit pas est dit comme non-dit, pas comme dit implicitement.</p>

  <div class="trad-callout">
    <span class="trad-callout__label">Sources lexicographiques</span>
    <ul style="margin:.4rem 0 0 1.2rem;line-height:2;">
      <li><strong>Al-Farāhīdī</strong> — <em>Kitāb al-ʿAyn</em> (IIe H, Basra) — sens radicaux premiers</li>
      <li><strong>Ibn Fāris</strong> — <em>Maqāyīs al-Lugha</em> (IVe H) — axes sémantiques fondamentaux</li>
      <li><strong>Ibn Manẓūr</strong> — <em>Lisān al-ʿArab</em> (VIIe H) — applications et dérivations</li>
    </ul>
    <p style="margin-top:.7rem;font-size:.88rem;color:var(--texte-2,#c8b89a);">Autorité purement linguistique — zéro autorité normative ou interprétative.</p>
  </div>

  <a href="#top-trad" class="trad-back">↑ Retour au menu</a>
</div>

<!-- ═══════════════════════════════════════════════════════════
     SECTION 3 — FICHES TERMINOLOGIQUES
═══════════════════════════════════════════════════════════ -->
<div class="trad-section" id="fiches">
  <p class="trad-section__titre">Fiches terminologiques — Usages et conventions</p>

  <p>Les termes « sourate » et « verset » constituent les unités de référence universellement adoptées pour citer le Coran. Cette section en précise l'origine lexicale et rappelle que leur emploi dans ce projet est purement pratique et conventionnel — sans portée interprétative.</p>

  <!-- FICHE 1 : SŪRA -->
  <div class="trad-fiche" id="fiche-sura">
    <div class="trad-fiche__header">
      <span class="trad-fiche__ar">سورة</span>
      <span class="trad-fiche__titre">Sūra — Sourate</span>
    </div>
    <div class="trad-fiche__body">
      <p><strong>Racine :</strong> س و ر — <em>s-w-r</em></p>
      <p style="margin-top:.5rem;"><strong>Sens radical :</strong> Élévation, rang, degré ; mur d'enceinte, muraille — ce qui délimite et enclôt un espace. Par extension : rang éminent, niveau distingué.</p>
      <p style="margin-top:.5rem;"><strong>Occurrences :</strong> 9 occurrences dans le texte coranique.</p>

      <div class="trad-fiche__row" style="margin-top:1rem;">
        <div>
          <p class="trad-fiche__col-label">Occurrence clé — S.2:23</p>
          <p style="font-family:'Amiri',serif;font-size:1.2rem;direction:rtl;margin-bottom:.4rem;color:var(--or2,#c9a84c);">فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ</p>
          <p style="font-style:italic;color:var(--texte-2,#c8b89a);">Fa-ʾtū bi-sūratin min mithlihi</p>
          <p>« Apportez donc une sūra semblable à lui. » — La sūra est présentée comme une unité autonome, dotée d'un rang propre, comparable en elle-même.</p>
        </div>
        <div>
          <p class="trad-fiche__col-label">Occurrence clé — S.24:1</p>
          <p style="font-family:'Amiri',serif;font-size:1.2rem;direction:rtl;margin-bottom:.4rem;color:var(--or2,#c9a84c);">سُورَةٌ أَنزَلْنَاهَا وَفَرَضْنَاهَا</p>
          <p style="font-style:italic;color:var(--texte-2,#c8b89a);">Sūratun anzalnāhā wa-faraḍnāhā</p>
          <p>« Une sūra que Nous avons fait descendre et que Nous avons rendue obligatoire. » — La sūra est présentée comme un bloc révélé d'un seul tenant.</p>
        </div>
      </div>

      <div class="trad-callout" style="margin-top:1.2rem;">
        <span class="trad-callout__label">Statut méthodologique</span>
        <p>Le mot <em>sūra</em> est bien présent dans le texte coranique. Toutefois, la numérotation précise des versets, la délimitation des sourates et leur ordonnancement résultent d'une fixation textuelle historique extérieure à la révélation elle-même. Notre recours à ces repères est purement conventionnel — au même titre que les références de pages dans une édition critique. Nous dirons « sourate 2, verset 255 » exactement comme on écrit « page 47, ligne 12 » : pour se repérer, et pour rien d'autre.</p>
      </div>
    </div>
  </div>

  <!-- FICHE 2 : ĀYA -->
  <div class="trad-fiche" id="fiche-aya">
    <div class="trad-fiche__header">
      <span class="trad-fiche__ar">آية</span>
      <span class="trad-fiche__titre">Āya — Verset</span>
    </div>
    <div class="trad-fiche__body">
      <p><strong>Racine :</strong> أ ي ي — <em>ʾ-y-y</em></p>
      <p style="margin-top:.5rem;"><strong>Sens radical :</strong> Signe, indice manifeste, marque distinctive ; preuve tangible, manifestation visible d'une réalité cachée. Ce qui atteste, ce qui pointe vers quelque chose de plus grand que lui-même.</p>
      <p style="margin-top:.5rem;"><strong>Occurrences :</strong> Terme central du lexique coranique — plus de 380 occurrences — avec plusieurs plans de sens distincts.</p>

      <div style="margin-top:1rem;">
        <p class="trad-fiche__col-label">Trois plans sémantiques dans le Coran</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.8rem;margin-top:.5rem;">
          <div class="trad-callout" style="margin:0;">
            <p style="font-family:'Amiri',serif;font-size:1rem;direction:rtl;color:var(--or2,#c9a84c);">إِنَّ فِي خَلْقِ السَّمَاوَاتِ … لَآيَاتٍ</p>
            <p style="font-size:.85rem;margin-top:.4rem;color:var(--texte-2,#c8b89a);">S.2:164 — āyāt comme phénomènes naturels (signes dans la création)</p>
          </div>
          <div class="trad-callout" style="margin:0;">
            <p style="font-family:'Amiri',serif;font-size:1rem;direction:rtl;color:var(--or2,#c9a84c);">وَكَذَٰلِكَ نُفَصِّلُ الْآيَاتِ</p>
            <p style="font-size:.85rem;margin-top:.4rem;color:var(--texte-2,#c8b89a);">S.6:55 — āyāt comme énoncés du texte révélé</p>
          </div>
          <div class="trad-callout" style="margin:0;">
            <p style="font-family:'Amiri',serif;font-size:1rem;direction:rtl;color:var(--or2,#c9a84c);">آيَاتُ الْكِتَابِ الْمُبِينِ</p>
            <p style="font-size:.85rem;margin-top:.4rem;color:var(--texte-2,#c8b89a);">S.12:1 — āyāt comme composantes signifiantes du Kitāb</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FICHE 3 : NOMS DES SOURATES -->
  <div class="trad-fiche" id="fiche-noms">
    <div class="trad-fiche__header">
      <span class="trad-fiche__ar" style="font-size:1.2rem;">أَسْمَاءُ السُّوَرِ</span>
      <span class="trad-fiche__titre">Les noms des sourates — Origine et statut conventionnel</span>
    </div>
    <div class="trad-fiche__body">
      <p>Le Coran est universellement cité à travers un corpus de noms attribués à chacune de ses sourates. Cette fiche précise l'origine de ces noms et leur statut dans ce projet : ils sont utilisés comme repères mnémotechniques et pratiques, sans aucune portée révélée.</p>

      <div class="trad-callout" style="margin:1rem 0;">
        <span class="trad-callout__label">Constat textuel</span>
        <p>Nulle part dans le texte coranique une sourate n'est nommée. Le texte ne dit jamais : « Ceci est la sourate de la Vache » ou « Ceci est la sourate des Femmes ». Les appellations que nous utilisons sont donc <strong>extérieures à la révélation</strong> telle qu'elle se présente elle-même.</p>
      </div>

      <p style="margin-top:1rem;"><strong>Mécanismes d'attribution des noms :</strong></p>
      <ul style="margin:.5rem 0 1rem 1.3rem;line-height:2;">
        <li><strong>Mot marquant</strong> — un terme peu courant apparaît dans la sourate et sert d'ancrage mémoriel (ex. : <em>al-Baqara</em> d'après l'épisode S.2:67–71)</li>
        <li><strong>Thème dominant</strong> — un sujet récurrent donne son nom (ex. : <em>al-Nisāʾ</em>)</li>
        <li><strong>Incipit</strong> — les premiers mots servent d'étiquette (ex. : <em>al-Fātiḥa</em>, <em>Qāf</em>, <em>Yā-Sīn</em>)</li>
        <li><strong>Personnage cité</strong> — un nom propre mentionné dans la sourate (ex. : <em>Yūsuf</em>, <em>Maryam</em>)</li>
      </ul>

      <p><strong>Exemple révélateur :</strong> la sourate <em>al-Ikhlāṣ</em> (S.112) — le mot <em>ikhlāṣ</em> n'apparaît pas dans la sourate. Le nom est entièrement extrinsèque au texte — une inférence thématique pure.</p>

      <div class="trad-callout trad-callout--avert" style="margin-top:1rem;">
        <span class="trad-callout__label">Titres textuels dans ce projet — Format C</span>
        <p>Ce projet travaille à dégager, pour chaque sourate, un titre argumenté depuis le texte lui-même :</p>
        <ul style="margin:.5rem 0 0 1.2rem;line-height:2;">
          <li><strong>Sourate 1 · S1:1–7 · Al-Ṭalab — La Requête</strong> (titre conventionnel : Al-Fātiḥa — L'Ouverture)</li>
          <li><strong>Sourate 2 · S2:1–286 · Al-Ijāba — La Réponse</strong> (titre conventionnel : Al-Baqara — La Vache)</li>
          <li><strong>Sourate 3 · S3:1–200 · Al-Tamḥīṣ, al-Tabyīn wa-l-Iʿtiṣām — Le tri par l'épreuve, la clarification et l'attachement ferme</strong> (titre conventionnel : Āl ʿImrān — La Famille de ʿImrān) — titre composé à trois fils, chacun ancré sur un verset-pivot traduit dans la sourate : <em>Al-Tamḥīṣ</em> (S3:141, repris S3:154 — le tri par l'épreuve), <em>Al-Tabyīn</em> (S3:187 — le mīthāq des Gens du Livre de rendre le Kitāb manifeste, en écho à S3:71, S3:103, S3:118, S3:137–138), <em>Al-Iʿtiṣām</em> (S3:103 — l'attachement ferme au lien d'Allaah). Les trois fils sont apparus, tissés ensemble, tout au long de la sourate — chaque bloc de traduction indique en sous-titre lequel domine lorsque cela est clair.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- FICHE 4 : NUMÉROTATION -->
  <div class="trad-fiche" id="fiche-numerotation">
    <div class="trad-fiche__header">
      <span class="trad-fiche__ar" style="font-size:1.2rem;">أَنْظِمَةُ التَّرْقِيمِ</span>
      <span class="trad-fiche__titre">Les systèmes de numération dans les muṣḥaf</span>
    </div>
    <div class="trad-fiche__body">
      <div class="trad-callout trad-callout--avert" style="margin-bottom:1.2rem;">
        <span class="trad-callout__label">Une confusion courante</span>
        <p>Les chiffres utilisés en Occident (0, 1, 2, 3…) sont les chiffres <strong>arabes occidentaux</strong> (indo-arabes). Les chiffres que l'on trouve dans les muṣḥaf imprimés sont des <strong>chiffres arabes orientaux</strong> — une variante graphique distincte du même système indo-arabe.</p>
      </div>

      <p style="margin-bottom:.8rem;"><strong>Tableau comparatif des systèmes :</strong></p>
      <div style="overflow-x:auto;">
        <table class="trad-table">
          <tr>
            <th>Valeur</th><th>Romain</th><th>Occidental</th><th>Oriental (muṣḥaf)</th><th>Terme arabe</th><th>Translittération</th>
          </tr>
          <tr><td>0</td><td>—</td><td>0</td><td class="ar">٠</td><td class="ar">صِفْر</td><td>ṣifr</td></tr>
          <tr><td>1</td><td>I</td><td>1</td><td class="ar">١</td><td class="ar">وَاحِدٌ</td><td>wāḥid</td></tr>
          <tr><td>2</td><td>II</td><td>2</td><td class="ar">٢</td><td class="ar">اثْنَانِ</td><td>ithnān</td></tr>
          <tr><td>3</td><td>III</td><td>3</td><td class="ar">٣</td><td class="ar">ثَلاثَةٌ</td><td>thalātha</td></tr>
          <tr><td>4</td><td>IV</td><td>4</td><td class="ar">٤</td><td class="ar">أَرْبَعَةٌ</td><td>arbaʿa</td></tr>
          <tr><td>5</td><td>V</td><td>5</td><td class="ar">٥</td><td class="ar">خَمْسَةٌ</td><td>khamsa</td></tr>
          <tr><td>6</td><td>VI</td><td>6</td><td class="ar">٦</td><td class="ar">سِتَّةٌ</td><td>sitta</td></tr>
          <tr><td>7</td><td>VII</td><td>7</td><td class="ar">٧</td><td class="ar">سَبْعَةٌ</td><td>sabʿa</td></tr>
          <tr><td>8</td><td>VIII</td><td>8</td><td class="ar">٨</td><td class="ar">ثَمَانِيَةٌ</td><td>thamāniya</td></tr>
          <tr><td>9</td><td>IX</td><td>9</td><td class="ar">٩</td><td class="ar">تِسْعَةٌ</td><td>tisʿa</td></tr>
        </table>
      </div>

      <div class="trad-callout" style="margin-top:1.2rem;">
        <span class="trad-callout__label">Origine historique — Le lien abbasside</span>
        <p>En <strong>772</strong>, sous al-Manṣūr (2e calife abbasside), la visite d'un astronome indien à Bagdad conduit à la traduction en arabe de tables astronomiques indiennes — introduisant dans ce mouvement leur système de numération. Vers <strong>820</strong>, sous al-Maʾmūn (7e calife), le mathématicien al-Khwārizmī formalise et diffuse le système décimal positionnel indien — dont son nom a donné le mot <em>algorithme</em>.</p>
        <p style="margin-top:.7rem;">Ces systèmes sont d'ordre <strong>culturel et historique, non islamique</strong>. Aucun de ces systèmes ne saurait être considéré comme prescrit ou porteur d'une valeur islamique intrinsèque.</p>
      </div>

      <div class="trad-callout trad-callout--avert" style="margin-top:1rem;">
        <span class="trad-callout__label">Note — Muṣḥaf vs Qurʾān</span>
        <p><strong>Muṣḥaf</strong> (مُصْحَف) — du radical ṣ-ḥ-f (صحف, feuillets écrits) — désigne le support matériel sur lequel est consigné le texte coranique : le codex, le livre physique. Ce que le terme dit précisément : un recueil de feuillets écrits reliés ensemble. Ce que le terme ne dit pas : il ne désigne pas la révélation elle-même (al-Qurʾān), ni la récitation, ni le message. <strong>Le muṣḥaf est le contenant, al-Qurʾān est le contenu.</strong> Confondre les deux revient à confondre un livre imprimé avec le texte qu'il porte. Numérotation, mise en page, typographie, éditions — tout cela relève du muṣḥaf, c'est-à-dire d'un objet culturel et éditorial, et non du texte coranique lui-même.</p>
      </div>
    </div>
  </div>

  <a href="#top-trad" class="trad-back">↑ Retour au menu</a>
</div>

<!-- ═══════════════════════════════════════════════════════════
     BARĀʾA
═══════════════════════════════════════════════════════════ -->
<div class="declaration" style="margin-top:3rem;text-align:center;max-width:640px;margin-left:auto;margin-right:auto;">
  <span class="declaration__label" style="display:block;margin-bottom:.6rem;">Barāʾa</span>
  <p>Cette traduction est conduite selon la méthode islamducoran.fr. Elle n'est pas prescriptive. Elle est révisable à la lumière du texte. L'unique garant de la compréhension est Allaah.</p>
  <p style="margin-top:.8rem;"><a href="/baraa/" style="font-family:var(--font-titre);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--or2);background:var(--bg4);border:1px solid var(--bg5);border-radius:3px;padding:.3rem .7rem;text-decoration:none;">Lire la déclaration complète →</a></p>
</div>

</div><!-- .page-body -->
</div><!-- .site-main -->
