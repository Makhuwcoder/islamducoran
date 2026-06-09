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

  <!-- ═══ NAVIGATION DEUX NIVEAUX ═══ -->
  <div class="filter-wrap" id="filter-bar">
    <div class="filter-row">
      <select id="cat-filter" onchange="onCatChange(this.value)">
        <option value="all">― Toutes les catégories ―</option>
        <optgroup label="النُّبُوَّة وَالرِّسَالَة">
          <option value="nabuwwa">Nabuwwa &amp; Risāla — Prophétie &amp; Mission</option>
        </optgroup>
        <optgroup label="التَّقْوِيمُ وَالزَّمَن">
          <option value="calendrier">Calendrier &amp; Temps cosmique</option>
        </optgroup>
        <optgroup label="عِبَادَات">
          <option value="ibadaat">Pratiques rituelles — ʿIbādāt</option>
        </optgroup>
        <optgroup label="السُّلْطَةُ التَّشْرِيعِيَّةُ وَالْمَصَادِر">
          <option value="sources">Autorité légifératrice &amp; Sources</option>
        </optgroup>
        <optgroup label="الْجَسَدُ وَالْأُسْرَةُ وَالْمُجْتَمَع">
          <option value="societe">Corps, Famille &amp; Société</option>
        </optgroup>
        <optgroup label="الْحُدُودُ وَالاقْتِصَاد">
          <option value="droit">Droit pénal &amp; Économie islamique</option>
        </optgroup>
        <optgroup label="الْجَمَاعَةُ الدِّينِيَّةُ وَالْهُوِيَّة">
          <option value="communaute">Communauté religieuse &amp; Identité</option>
        </optgroup>
        <optgroup label="الْآخِرَةُ وَالْغَيْب">
          <option value="eschatologie">Eschatologie &amp; Métaphysique</option>
        </optgroup>
        <optgroup label="كَيْفَ تَتَعَامَلُ مَعَ الْقُرْآنِ">
          <option value="approche">Comment aborder le Coran</option>
        </optgroup>
      </select>
      <select id="etude-filter" onchange="goToEtude(this.value)" style="display:none">
        <option value="">― Aller à une étude ―</option>
      </select>
    </div>
    <span id="filter-count"></span>
  </div>

  <script>
  var etudesData = {
    nabuwwa: [
      {slug:'abandon-coran',title:"L'abandon du Coran"},
      {slug:'khatam-nabiyyin',title:"Khātam al-nabiyyīn"},
      {slug:'nabi-legislateur',title:"Le Nabī n'est pas législateur"},
      {slug:'kitman-bayyan',title:"2:159–163 · Kitmān et bayān"}
    ],
    calendrier: [
      {slug:'etat-lieux-calendaire',title:"État des lieux calendaire"},
      {slug:'calendrier-lunaire',title:"Le calendrier islamique lunaire"},
      {slug:'solstice-lune',title:"La Méthode Solstice-Lune"},
      {slug:'nuit-jour-aube-crepuscule',title:"Nuit, Journée, Aube et Crépuscule"}
    ],
    ibadaat: [
      {slug:'salat-coran',title:"La Ṣalāt dans le Coran"},
      {slug:'duaa-salat',title:"Le duʿāʾ dans la ṣalāt"},
      {slug:'duaa-coraniques',title:"Inventaire des Duʿāʾ Coraniques"},
      {slug:'duaa-coraniques-2',title:"Inventaire des Duʿāʾ Coraniques — II · Annexe contextuelle"},
      {slug:'siyam',title:"L'Abstention Sacrée — As-Ṣiyām"},
      {slug:'salat-rituel',title:"Le rituel de la Ṣalāt dans le Coran"},
      {slug:'voix-salat',title:"La voix dans la Ṣalāt"},
      {slug:'amin-mot',title:"Que savons-nous du mot Āmīn ?"},
      {slug:'rattrapage-salat',title:"Le rattrapage des Ṣalāt"},
      {slug:'hajar-aswad',title:"Al-Ḥajar al-Aswad — La Pierre Noire"},
      {slug:'baraka-tabarruk',title:"Al-Baraka wa-l-Tabarruk"},
      {slug:'kiswa',title:"Al-Kiswa — La couverture de la Kaʿba"},
      {slug:'hajj-oumra',title:"Le Ḥajj et la ʿUmra dans le Coran"},
      {slug:'eid-adha',title:"ʿĪd al-Aḍḥā — ʿĪd al-Kabīr"},
      {slug:'hatu-burhanakum',title:"Hātu Burhānakum — Apportez votre preuve"}
    ],
    sources: [
      {slug:'hadith-coran',title:"Ḥadīth — Ce que le Coran en dit"},
      {slug:'sunna-coran',title:"Sunna · Sunnat Allāh"},
      {slug:'fatwa',title:"Fatwā — Qui peut légiférer ?"},
      {slug:'halal-haram',title:"Ḥalāl et Ḥarām dans le Coran"},
      {slug:'ulu-albab',title:"Ulū l-albāb — Le noyau d'intelligence"},
      {slug:'naskh',title:"Al-Naskh — L'abrogation"},
      {slug:'traduction-intraduisible',title:"Le Coran est-il intraduisible ?"},
      {slug:'qiraaat-recitations',title:"Les récitations — Al-Qirāʾāt"}
    ],
    societe: [
      {slug:'yatim',title:"Le Yatīm — L'Orphelin"},
      {slug:'rapports-parents',title:"Les rapports aux parents dans le Coran"},
      {slug:'femmes-hommes',title:"Femmes et hommes dans le Coran"},
      {slug:'coran-seuls-hommes',title:"Le Coran s'adresse-t-il aux seuls hommes ?"},
      {slug:'polygamie',title:"La Polygamie dans le Coran"},
      {slug:'esclavage',title:"L'Esclavage dans le Coran"},
      {slug:'union-conjugale',title:"Union conjugale et séparation"}
    ],
    droit: [
      {slug:'zakat',title:"La simplicité de la Zakāt"},
      {slug:'riba',title:"Ar-Ribā — L'incrément usuraire"},
      {slug:'lapidation',title:"Al-Rajm — La Lapidation"},
      {slug:'fasad-mufsidun',title:"Le fasād et les mufsidūn"}
    ],
    communaute: [
      {slug:'shirk',title:"Le Shirk — Définition coranique"},
      {slug:'kafir-coran',title:"Le Kāfir dans le Coran"},
      {slug:'minorite-croyants',title:"La minorité des croyants"}
    ],
    eschatologie: [
      {slug:'mecanisme-derniere-heure',title:"Le mécanisme de la dernière heure"},
      {slug:'amwat-ahyaa-barzakh',title:"Amwāt, Aḥyāʾ, Barzakh"},
      {slug:'heure-signes',title:"L'Heure et ses signes"},
      {slug:'sortir-du-feu',title:"Sortir du feu : Garantie ou invention ?"},
      {slug:'shafaa',title:"La shafāʿa dans le Coran"}
    ],
    approche: [
      {slug:'mediter-texte-langue',title:"Méditer le texte dans sa langue"},
      {slug:'comprendre-memoriser',title:"Comprendre avant de mémoriser"},
      {slug:'protocole-lecture-coran',title:"Protocole de lecture du Coran"}
    ]
  };

  function onCatChange(val) {
    filterByCategorie(val);
    var sel2 = document.getElementById('etude-filter');
    sel2.innerHTML = '<option value="">― Aller à une étude ―</option>';
    if (val !== 'all' && etudesData[val]) {
      etudesData[val].forEach(function(e) {
        var opt = document.createElement('option');
        opt.value = '/etudes/' + e.slug + '/';
        opt.textContent = e.title;
        sel2.appendChild(opt);
      });
      sel2.style.display = '';
    } else {
      sel2.style.display = 'none';
    }
  }

  function goToEtude(url) {
    if (url) window.location.href = url;
  }
  </script>

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

{% assign g_approche = site.etudes | where: "categorie_slug", "approche" | sort: "order" %}
{% if g_approche.size > 0 %}
<div class="categorie-header" id="approche">
  <span class="categorie-header__fr">Comment aborder le Coran</span>
  <span class="categorie-header__ar" dir="rtl">كَيْفَ تَتَعَامَلُ مَعَ الْقُرْآنِ</span>
  <span class="tag">{{ g_approche | size }}</span>
</div>
<div class="etudes-grid">
  {% for etude in g_approche %}
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
