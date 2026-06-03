# islamducoran.fr — Site statique Jekyll

Le Coran lu par lui-même, en arabe classique.
Sans tafsīr · Sans ḥadīth · Sans école · Méthode dit / non-dit / inférence.

## Architecture

```
islamducoran/
├── _config.yml          — Configuration Jekyll
├── _layouts/
│   ├── default.html     — Template de base (toutes les pages)
│   └── etude.html       — Template des études thématiques
├── _includes/
│   ├── nav.html          — Navigation sticky
│   ├── footer.html       — Pied de page (barāʾa)
│   ├── verset.html       — Composant verset arabe/trl/traduction
│   ├── callout.html      — Blocs dit/non-dit/inférence/pivot…
│   └── nl.html           — Note lexicale
├── _etudes/             — Toutes les études (fichiers Markdown)
├── assets/
│   ├── css/main.scss    — Design system complet
│   └── js/
│       ├── nav.js       — Navigation et menu mobile
│       └── search.js    — Moteur de recherche Lunr.js
├── etudes/index.md      — Page index de toutes les études
├── recherche/index.md   — Page de recherche
├── baraaa/index.md      — Déclaration de positionnement
├── methode/index.md     — La méthode
├── traduction/index.md  — Traduction du Coran
├── index.md             — Page d'accueil
├── search-index.json.liquid — Générateur d'index de recherche
├── CNAME                — Domaine personnalisé
└── .github/workflows/deploy.yml — Déploiement automatique
```

## Ajouter une nouvelle étude

1. Créer un fichier `.md` dans `_etudes/`
2. Renseigner l'en-tête YAML :

```yaml
---
layout: etude
title: "Titre de l'étude"
subtitle: "Sous-titre / résumé"
categorie: "Concepts fondamentaux"
categorie_slug: "concepts"
racine: "ح-ج-ج"
racine_ar: "حَجّ"
date: 2024-01-15
description: "Description SEO de l'étude"
---
```

3. Écrire le contenu en Markdown en utilisant les composants :

### Verset
```liquid
{% include verset.html
   ref="Sourate 2 · v. 197"
   ar="الْحَجُّ أَشْهُرٌ مَّعْلُومَاتٌ"
   trl="*Al-ḥajju ashhrun maʿlūmāt*"
   trad="Le ḥajj se tient sur **des mois connus**."
%}
```

### Callout (dit / non-dit / inférence / pivot / warn / silence / contra)
```liquid
{% include callout.html
   type="dit"
   label="Dit"
   content="Le texte dit explicitement que..."
%}
```

### Note lexicale
```liquid
{% include nl.html
   racine="ح · ج · ج"
   contenu="Al-Farāhīdī : *al-qaṣd*..."
%}
```

4. `git add . && git commit -m "Ajout étude : [titre]" && git push`
5. GitHub Actions régénère le site automatiquement (~2 min).

## Catégories disponibles

| Catégorie | Slug |
|---|---|
| Concepts fondamentaux | concepts |
| Pratiques rituelles | ibadaat |
| Calendrier et temps cosmique | calendrier |
| Corps, famille et société | famille |
| Législation et économie | legislation |
| Nabuwwa et risāla | nabuwwa |
| Communauté et identité | communaute |
| Eschatologie et métaphysique | eschatologie |

## Déploiement local (test)

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload
# Ouvrir http://localhost:4000
```

## Configuration GitHub Pages

1. Repository → Settings → Pages
2. Source : **GitHub Actions**
3. Le domaine `islamducoran.fr` est configuré via le fichier `CNAME`
4. Chez ton registrar DNS, ajouter les enregistrements :
   - `A` → `185.199.108.153`
   - `A` → `185.199.109.153`
   - `A` → `185.199.110.153`
   - `A` → `185.199.111.153`
   - `CNAME www` → `makhuwcoder.github.io`
