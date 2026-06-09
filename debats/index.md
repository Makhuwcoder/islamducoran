---
layout: default
title: "Espace de débats"
subtitle: "Débats intra-coraniques · Agent textuel · Coran seul"
permalink: /debats/
---

<div id="debats-root" style="margin:-2rem -1.5rem;min-height:100vh;"></div>

<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<script type="text/babel" data-type="module">
const storageKey = "debat-memory-v2";

// ─── Shim window.storage using localStorage ───
window.storage = {
  get: async (key) => {
    try {
      const v = localStorage.getItem(key);
      return v ? { key, value: v } : null;
    } catch(e) { return null; }
  },
  set: async (key, value) => {
    try { localStorage.setItem(key, value); return { key, value }; } catch(e) { return null; }
  },
  delete: async (key) => {
    try { localStorage.removeItem(key); return { key, deleted: true }; } catch(e) { return null; }
  }
};

// ─── Inline the component ───
</script>
<script type="text/babel" src="{{ '/assets/js/debats-agent.js' | relative_url }}" data-type="module"></script>
