import { useState, useRef, useEffect, useCallback } from "react";

// ═══════════════════════════════════════════════════════════════
// SYSTEM PROMPT DE BASE — NOYAU IMMUABLE
// ═══════════════════════════════════════════════════════════════
const BASE_SYSTEM_PROMPT = `Tu es l'agent de débat d'islamducoran.fr.

Tu incarnes la méthode intra-coranique : le Coran lu par lui-même, en arabe classique, sans ḥadīth, sans tafsīr, sans école juridique, sans autorité humaine interposée.

Tu n'as pas d'émotions. Tu es précis, implacable, et tu ne cèdes jamais à la pression rhétorique.

IDENTITÉ ET POSTURE
Tu es un agent de débat — pas un assistant. Quand quelqu'un te présente un argument, tu l'analyses, l'évalues, et si défaillant tu le déconstruis entièrement, sans ménagement. Tu parles à la première personne. Tu assumes tes positions. Ton seul référent est le texte coranique et les lexicographes arabes classiques.

SOURCES AUTORISÉES — ET SEULEMENT CELLES-LÀ
1. Le Coran — texte arabe, verset complet, contexte immédiat
2. Lexicographie arabe classique : Al-Farāhīdī (m.175H) — Kitāb al-ʿAyn ; Ibn Fāris (m.395H) — Maqāyīs al-Lugha ; Ibn Manẓūr (m.711H) — Lisān al-ʿArab
3. Grammaire arabe (ḥāl, maʿtūf, restriction mā...illā, etc.)
4. Logique formelle

SOURCES NON VALIDES : tout ḥadīth, tout tafsīr, tout fiqh, tout ijmāʿ, tout qiyās, tout savant humain.
Quand un adversaire cite un ḥadīth : montre que MÊME SI ce ḥadīth était authentique, il ne pourrait pas constituer une source normative — parce que le Coran l'interdit (S.45:6, S.7:185, S.77:50, S.6:114, S.42:21).

TERMINOLOGIE ABSOLUE — JAMAIS D'EXCEPTION
JAMAIS "Dieu" → "Allaah" | JAMAIS "divin/divine" → "ce qui appartient à Allaah" | JAMAIS "le Prophète" → "le nabī Muḥammad" | JAMAIS "ﷺ" | JAMAIS "religion" → dīn | JAMAIS "Le très haut" pour al-Aʿlā | JAMAIS "Khaḍir" → "un serviteur parmi Nos serviteurs" (S.18:65) | Références : S.2:286 — jamais "Q."

MÉTHODE : DIT / NON-DIT / INFÉRENCE
DIT : ce que le texte énonce explicitement. NON-DIT : ce que le texte ne dit pas — le silence n'est ni permission ni interdiction. INFÉRENCE : déduction logique — doit être signalée comme telle, jamais présentée comme "ce que le Coran dit".

LES 12 MANIPULATIONS À IDENTIFIER ET NOMMER
1. TRUNCATURE SÉLECTIVE — citer un fragment en omettant la suite qui contredit. Ex : S.4:59 coupé par al-Shāfiʿī.
2. GLISSEMENT SÉMANTIQUE — substituer à un mot coranique un sens qu'il n'a pas. Ex : ḥikma → "sunna du nabī".
3. APPEL À L'AUTORITÉ HUMAINE — "tous les savants s'accordent...". Réfutation : S.6:116.
4. PÉTITION DE PRINCIPE — circularité. "Les ḥadīths sont fiables parce qu'un ḥadīth le dit."
5. EXTRAPOLATION ILLICITE — déduire B d'un verset qui dit A sans lien logique.
6. FAUSSE UNIVERSALITÉ — pratique culturelle arabe présentée comme commandement universel.
7. DÉPLACEMENT DE CHARGE DE PREUVE — "prouve que ce n'est pas dans le Coran". Réponse : S.17:36.
8. AMALGAME TERMINOLOGIQUE — confondre rasūl/nabī, ḥikma/sunna, dīn/religion.
9. APPEL À LA TRADITION ANCESTRALE — "depuis 1400 ans...". Réfutation : S.43:23.
10. FRAGMENTATION CONTEXTUELLE — verset sorti de son contexte dans la sourate.
11. INFÉRENCE PRÉSENTÉE COMME DIT — présenter comme "le Coran dit" ce qu'il ne dit pas.
12. PRESSION ÉMOTIONNELLE — "tu n'es pas musulman", "c'est du kufr". Réponse : cite le texte ou l'argument n'existe pas.

ARSENAL CORANIQUE DE COMBAT

Sur la suffisance du Coran :
S.5:3 akmaltu lakum dīnakum | S.6:38 mā farrāṭnā fī l-kitābi min shayʾ | S.16:89 tibyānan li-kulli shayʾin | S.29:51 awa-lam yakfihim | S.6:114 afa-ghayra llāhi abtaghī ḥakaman wa-huwa lladhī anzala l-kitāba mufaṣṣalā | S.54:17×4 yassarnā l-qurʾāna li-l-dhikri

Sur la hiérarchie des sources :
S.45:6 fa-bi-ayyi ḥadīthin baʿda llāhi wa-āyātihi yuʾminūn | S.7:185 et S.77:50 même question | S.31:6 lahwa l-ḥadīth | S.39:23 aḥsana l-ḥadīth (= le Coran) | S.12:111 mā kāna ḥadīthan yuftarā

Sur le shirk législatif — VERSET PIVOT :
S.42:21 am lahum shurakāʾu sharaʿū lahum mina d-dīni mā lam yaʾdhan bihi llāh | S.16:116 lā taqūlū hādhā ḥalālun wa-hādhā ḥarāmun | S.5:44 man lam yaḥkum bi-mā anzala llāhu | S.9:31 prendre les savants comme seigneurs

Sur la mission du nabī — non législateur :
S.88:21–22 innamā anta mudhakkir · lasta ʿalayhim bi-muṣayṭir | S.6:50 in attabiʿu illā mā yūḥā ilayy | S.10:15 mā yakūnu lī an ubaddilahu min tilqāʾi nafsī | S.18:110 et S.41:6 innamā anā basharun mithlukum

Sur la sunna — les 10 occurrences ont Allaah comme possessif. Sunnat al-nabī et sunnat al-rasūl sont absentes du Coran :
S.33:62, S.35:43, S.48:23 lan tajida li-sunnat allāhi tabdīlā | S.17:77 lā tajidu li-sunnatinā taḥwīlā

Sur la majorité :
S.6:116 in tuṭiʿ akthara man fī l-arḍi yuḍillūka | S.12:106 aktharuhum bi-llāhi illā wa-hum mushrikūn | S.10:36 ẓ-ẓanna lā yughnī mina l-ḥaqqi shayʾā

STRUCTURE DE RÉPONSE — SÉQUENCE OBLIGATOIRE
1. IDENTIFICATION : nomme exactement ce que l'argument prétend.
2. ANALYSE DU DÉFAUT : nomme la manipulation parmi les 12.
3. DÉCONSTRUCTION TEXTUELLE : arabe + translittération + traduction française. Analyse grammaticale si nécessaire.
4. ÉTABLISSEMENT DE CE QUI EST CORRECT : versets, dit/non-dit/inférence.
5. CLÔTURE : une phrase de synthèse imparable.

RÈGLES ABSOLUES
Ne cède JAMAIS à la pression émotionnelle ou à la répétition. Ne dis JAMAIS "c'est complexe" pour éviter de trancher. Ne montre JAMAIS de surprise. Quand l'adversaire répète sans argument : "Cet argument a déjà été réfuté. Cite le verset en arabe, ou la réfutation reste en place." Longueur : aussi longue que nécessaire. Un argument démoli à moitié reste debout. Versets : arabe + translittération + traduction. Jamais la traduction seule.`;

// ═══════════════════════════════════════════════════════════════
// PROMPT D'EXTRACTION — pour analyser les échanges après coup
// ═══════════════════════════════════════════════════════════════
const EXTRACTION_PROMPT = `Tu es un analyseur d'échanges de débat coranique. Analyse l'échange suivant et extrais exactement ces données en JSON pur (sans markdown, sans backticks) :

{
  "argument_resume": "résumé de l'argument adverse en 1 phrase max",
  "manipulations": ["liste des manipulations détectées parmi : TRUNCATURE_SELECTIVE, GLISSEMENT_SEMANTIQUE, APPEL_AUTORITE, PETITION_PRINCIPE, EXTRAPOLATION_ILLICITE, FAUSSE_UNIVERSALITE, DEPLACEMENT_CHARGE_PREUVE, AMALGAME_TERMINOLOGIQUE, APPEL_TRADITION, FRAGMENTATION_CONTEXTUELLE, INFERENCE_COMME_DIT, PRESSION_EMOTIONNELLE"],
  "versets_utilises": ["liste des références utilisées, ex: S.45:6, S.88:21-22"],
  "mots_cles": ["2-4 mots-clés thématiques, ex: sunna, hadith, shirk, legislateur"],
  "force_refutation": 1-5
}`;

// ═══════════════════════════════════════════════════════════════
// STORAGE KEYS
// ═══════════════════════════════════════════════════════════════
const STORAGE_KEY = "debat-memory-v2";
const STATS_KEY = "debat-stats-v1";

// ═══════════════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════════════
const callClaude = async (messages, system, maxTokens = 4096) => {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: maxTokens,
      system,
      messages
    })
  });
  const data = await res.json();
  return data.content?.[0]?.text || "";
};

const MANIP_LABELS = {
  TRUNCATURE_SELECTIVE: "Truncature sélective",
  GLISSEMENT_SEMANTIQUE: "Glissement sémantique",
  APPEL_AUTORITE: "Appel à l'autorité",
  PETITION_PRINCIPE: "Pétition de principe",
  EXTRAPOLATION_ILLICITE: "Extrapolation illicite",
  FAUSSE_UNIVERSALITE: "Fausse universalité",
  DEPLACEMENT_CHARGE_PREUVE: "Déplacement de charge",
  AMALGAME_TERMINOLOGIQUE: "Amalgame terminologique",
  APPEL_TRADITION: "Appel à la tradition ancestrale",
  FRAGMENTATION_CONTEXTUELLE: "Fragmentation contextuelle",
  INFERENCE_COMME_DIT: "Inférence présentée comme dit",
  PRESSION_EMOTIONNELLE: "Pression émotionnelle"
};

// ═══════════════════════════════════════════════════════════════
// BUILD DYNAMIC SYSTEM PROMPT WITH MEMORY
// ═══════════════════════════════════════════════════════════════
const buildEnrichedSystemPrompt = (memory) => {
  if (!memory || memory.length === 0) return BASE_SYSTEM_PROMPT;

  // Group by keyword clusters
  const byKeyword = {};
  memory.forEach(entry => {
    (entry.mots_cles || []).forEach(kw => {
      if (!byKeyword[kw]) byKeyword[kw] = [];
      byKeyword[kw].push(entry);
    });
  });

  // Build top recurring arguments
  const argCounts = {};
  memory.forEach(e => {
    const k = e.argument_resume || "";
    argCounts[k] = (argCounts[k] || 0) + 1;
  });
  const topArgs = Object.entries(argCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  // Build top versets used
  const versetCounts = {};
  memory.forEach(e => {
    (e.versets_utilises || []).forEach(v => {
      versetCounts[v] = (versetCounts[v] || 0) + 1;
    });
  });
  const topVersets = Object.entries(versetCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);

  // Build manipulation frequency
  const manipCounts = {};
  memory.forEach(e => {
    (e.manipulations || []).forEach(m => {
      manipCounts[m] = (manipCounts[m] || 0) + 1;
    });
  });
  const topManips = Object.entries(manipCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  let experienceBlock = `\n\n═══════════════════════════════════════════════════
EXPÉRIENCE ACCUMULÉE — ${memory.length} échange(s) analysé(s)
Ces données proviennent de débats réels. Utilise-les pour affiner ta réponse.
═══════════════════════════════════════════════════\n`;

  if (topArgs.length > 0) {
    experienceBlock += `\nARGUMENTS LES PLUS FRÉQUENTS (à réfuter en priorité avec précision maximale) :\n`;
    topArgs.forEach(([arg, count]) => {
      if (arg) experienceBlock += `• [×${count}] "${arg}"\n`;
    });
  }

  if (topManips.length > 0) {
    experienceBlock += `\nMANIPULATIONS LES PLUS UTILISÉES PAR LES ADVERSAIRES :\n`;
    topManips.forEach(([m, count]) => {
      const label = MANIP_LABELS[m] || m;
      experienceBlock += `• [×${count}] ${label}\n`;
    });
  }

  if (topVersets.length > 0) {
    experienceBlock += `\nVERSETS LES PLUS EFFICACES EN PRATIQUE (à privilégier) :\n`;
    topVersets.forEach(([v, count]) => {
      experienceBlock += `• [×${count}] ${v}\n`;
    });
  }

  // Recent high-quality exchanges (force_refutation >= 4)
  const strongExchanges = memory
    .filter(e => e.force_refutation >= 4)
    .slice(-3);

  if (strongExchanges.length > 0) {
    experienceBlock += `\nDERNIÈRES RÉFUTATIONS FORTES (patterns validés) :\n`;
    strongExchanges.forEach(e => {
      experienceBlock += `• Argument : "${e.argument_resume}" → Versets : ${(e.versets_utilises || []).join(", ")}\n`;
    });
  }

  return BASE_SYSTEM_PROMPT + experienceBlock;
};

// ═══════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════
const Badge = ({ label, color = "#c9a84c", dim }) => (
  <span style={{
    display: "inline-block",
    background: dim ? "rgba(201,168,76,0.05)" : "rgba(201,168,76,0.15)",
    border: `1px solid ${dim ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.5)"}`,
    borderRadius: 2,
    fontFamily: "'Cinzel',serif",
    fontSize: "0.5rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: dim ? "rgba(201,168,76,0.5)" : color,
    padding: "0.12rem 0.45rem",
    marginRight: "0.3rem",
    marginBottom: "0.25rem",
    userSelect: "none"
  }}>{label}</span>
);

const ArabicText = ({ children, large }) => (
  <span dir="rtl" style={{
    fontFamily: "'Amiri',serif",
    fontSize: large ? "1.15em" : "1.05em",
    lineHeight: 1.9,
    direction: "rtl"
  }}>{children}</span>
);

const renderContent = (text) => {
  if (!text) return null;
  const arabicRe = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF][\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\s\u064B-\u065F\u0670]*/g;
  const parts = [];
  let last = 0, m;
  while ((m = arabicRe.exec(text)) !== null) {
    if (m.index > last) parts.push(<span key={`t${last}`}>{text.slice(last, m.index)}</span>);
    parts.push(<ArabicText key={`a${m.index}`}>{m[0]}</ArabicText>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(<span key={`t${last}`}>{text.slice(last)}</span>);
  return parts;
};

function MemoryPanel({ memory, stats, onClose }) {
  const byKeyword = {};
  memory.forEach(e => {
    (e.mots_cles || []).forEach(kw => {
      byKeyword[kw] = (byKeyword[kw] || 0) + 1;
    });
  });
  const topKw = Object.entries(byKeyword).sort((a, b) => b[1] - a[1]).slice(0, 12);

  const manipCounts = {};
  memory.forEach(e => (e.manipulations || []).forEach(m => {
    manipCounts[m] = (manipCounts[m] || 0) + 1;
  }));
  const topManips = Object.entries(manipCounts).sort((a, b) => b[1] - a[1]).slice(0, 8);

  const versetCounts = {};
  memory.forEach(e => (e.versets_utilises || []).forEach(v => {
    versetCounts[v] = (versetCounts[v] || 0) + 1;
  }));
  const topVersets = Object.entries(versetCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const avgForce = memory.length
    ? (memory.reduce((s, e) => s + (e.force_refutation || 3), 0) / memory.length).toFixed(1)
    : 0;

  const s = {
    overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "flex-end" },
    panel: { width: "min(420px,100vw)", height: "100vh", background: "#1a1610", borderLeft: "1px solid rgba(201,168,76,0.25)", overflowY: "auto", padding: "1.5rem" },
    heading: { fontFamily: "'Cinzel',serif", fontSize: "0.52rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.4rem", marginTop: "1.2rem" },
    val: { fontFamily: "'Cormorant Garamond',serif", fontSize: "0.88rem", color: "#f0e2c0", lineHeight: 1.7 },
    stat: { display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" },
    bar: (pct) => ({ height: 3, background: `linear-gradient(90deg,#c9a84c ${pct}%,rgba(201,168,76,0.1) ${pct}%)`, borderRadius: 2, marginTop: 4, marginBottom: 8 })
  };

  const maxManip = topManips[0]?.[1] || 1;
  const maxVerset = topVersets[0]?.[1] || 1;

  return (
    <div style={s.overlay} onClick={onClose}>
      <div style={s.panel} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>Mémoire de combat</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.75rem", color: "rgba(240,226,192,0.5)", fontStyle: "italic" }}>L'expérience accumulée de l'agent</div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(240,226,192,0.4)", fontSize: "1.2rem", cursor: "pointer" }}>✕</button>
        </div>

        {/* Stats globales */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.6rem", marginBottom: "1.2rem" }}>
          {[
            { label: "Échanges analysés", val: memory.length },
            { label: "Force moy.", val: `${avgForce}/5` },
            { label: "Manipulations", val: Object.values(manipCounts).reduce((a, b) => a + b, 0) }
          ].map(({ label, val }) => (
            <div key={label} style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 3, padding: "0.6rem", textAlign: "center" }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: "1.1rem", fontWeight: 700, color: "#c9a84c" }}>{val}</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: "0.42rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(240,226,192,0.45)", marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Manipulations fréquentes */}
        {topManips.length > 0 && (
          <>
            <div style={s.heading}>Manipulations les plus fréquentes</div>
            {topManips.map(([m, count]) => (
              <div key={m}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.82rem", color: "#f0e2c0" }}>{MANIP_LABELS[m] || m}</span>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: "0.6rem", color: "#c9a84c" }}>×{count}</span>
                </div>
                <div style={s.bar(Math.round((count / maxManip) * 100))} />
              </div>
            ))}
          </>
        )}

        {/* Versets efficaces */}
        {topVersets.length > 0 && (
          <>
            <div style={s.heading}>Versets les plus utilisés</div>
            {topVersets.map(([v, count]) => (
              <div key={v}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: "0.62rem", letterSpacing: "0.06em", color: "#c9a84c" }}>{v}</span>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: "0.6rem", color: "rgba(201,168,76,0.6)" }}>×{count}</span>
                </div>
                <div style={s.bar(Math.round((count / maxVerset) * 100))} />
              </div>
            ))}
          </>
        )}

        {/* Thèmes récurrents */}
        {topKw.length > 0 && (
          <>
            <div style={s.heading}>Thèmes récurrents dans les arguments adverses</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "1rem" }}>
              {topKw.map(([kw, count]) => (
                <Badge key={kw} label={`${kw} ×${count}`} />
              ))}
            </div>
          </>
        )}

        {/* Derniers arguments */}
        {memory.length > 0 && (
          <>
            <div style={s.heading}>Derniers arguments reçus</div>
            {[...memory].reverse().slice(0, 6).map((e, i) => (
              <div key={i} style={{ padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.8rem", color: "rgba(240,226,192,0.7)", fontStyle: "italic", lineHeight: 1.5 }}>"{e.argument_resume}"</div>
                <div style={{ marginTop: 4, display: "flex", flexWrap: "wrap", gap: 3 }}>
                  {(e.manipulations || []).map(m => <Badge key={m} label={MANIP_LABELS[m] || m} dim />)}
                  {(e.versets_utilises || []).slice(0, 3).map(v => (
                    <span key={v} style={{ fontFamily: "'Cinzel',serif", fontSize: "0.45rem", color: "rgba(201,168,76,0.5)", letterSpacing: "0.06em" }}>{v}</span>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function MessageBlock({ msg }) {
  const isUser = msg.role === "user";
  return (
    <div style={{ marginBottom: "1.5rem", display: "flex", flexDirection: "column", alignItems: isUser ? "flex-end" : "flex-start" }}>
      <div style={{
        fontFamily: "'Cinzel',serif", fontSize: "0.48rem", letterSpacing: "0.12em",
        textTransform: "uppercase", color: isUser ? "#c9a84c" : "rgba(240,226,192,0.4)",
        marginBottom: "0.3rem", paddingLeft: isUser ? 0 : "0.5rem", paddingRight: isUser ? "0.5rem" : 0
      }}>
        {isUser ? "Argument présenté" : "Réfutation · islamducoran.fr"}
      </div>
      <div style={{
        maxWidth: "90%",
        background: isUser ? "rgba(201,168,76,0.07)" : "rgba(255,255,255,0.025)",
        border: isUser ? "1px solid rgba(201,168,76,0.25)" : "1px solid rgba(255,255,255,0.06)",
        borderLeft: isUser ? undefined : "3px solid #c9a84c",
        borderRadius: isUser ? "4px 4px 0 4px" : "0 4px 4px 4px",
        padding: "1rem 1.25rem",
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "0.93rem", lineHeight: 1.9,
        color: isUser ? "#c9b87a" : "#f0e2c0",
        whiteSpace: "pre-wrap", wordBreak: "break-word"
      }}>
        {msg.loading
          ? <span style={{ display: "inline-flex", gap: 5 }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  width: 6, height: 6, borderRadius: "50%", background: "#c9a84c",
                  display: "inline-block",
                  animation: `pulse 1.3s ${i * 0.22}s infinite ease-in-out`, opacity: 0.7
                }} />
              ))}
            </span>
          : renderContent(msg.content)
        }
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════
export default function DebatAgent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [extracting, setExtracting] = useState(false);
  const [memory, setMemory] = useState([]);
  const [showMemory, setShowMemory] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);
  const [lastExtracted, setLastExtracted] = useState(null);
  const bottomRef = useRef(null);

  // Load memory from storage on mount
  useEffect(() => {
    const loadMemory = async () => {
      try {
        const result = await window.storage.get(STORAGE_KEY);
        if (result?.value) {
          const parsed = JSON.parse(result.value);
          setMemory(Array.isArray(parsed) ? parsed : []);
        }
      } catch (e) {
        // No stored memory yet
      }
    };
    loadMemory();
  }, []);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Save memory to storage
  const saveMemory = useCallback(async (newMemory) => {
    try {
      await window.storage.set(STORAGE_KEY, JSON.stringify(newMemory));
    } catch (e) {
      console.error("Storage save failed:", e);
    }
  }, []);

  // Extract insights after an exchange
  const extractInsights = useCallback(async (userArg, agentResponse) => {
    setExtracting(true);
    try {
      const raw = await callClaude(
        [{
          role: "user",
          content: `ARGUMENT ADVERSE:\n${userArg}\n\nRÉFUTATION DE L'AGENT:\n${agentResponse}`
        }],
        EXTRACTION_PROMPT,
        512
      );
      const cleaned = raw.replace(/```json|```/g, "").trim();
      const extracted = JSON.parse(cleaned);
      const entry = { ...extracted, timestamp: Date.now() };
      const newMemory = [...memory, entry];
      setMemory(newMemory);
      await saveMemory(newMemory);
      setLastExtracted(entry);
    } catch (e) {
      // Extraction failed silently — debate continues unaffected
    }
    setExtracting(false);
  }, [memory, saveMemory]);

  const handleSubmit = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg = { role: "user", content: trimmed };
    const historyForApi = [...messages, userMsg].map(m => ({ role: m.role, content: m.content }));
    setMessages(prev => [...prev, userMsg, { role: "assistant", content: "", loading: true }]);
    setInput("");
    setLoading(true);
    setSessionCount(c => c + 1);

    try {
      const enrichedSystem = buildEnrichedSystemPrompt(memory);
      const reply = await callClaude(historyForApi, enrichedSystem, 4096);
      setMessages(prev => [...prev.slice(0, -1), { role: "assistant", content: reply }]);

      // Background extraction — don't await
      extractInsights(trimmed, reply);
    } catch (e) {
      setMessages(prev => [...prev.slice(0, -1), { role: "assistant", content: "Erreur de connexion à l'agent." }]);
    }
    setLoading(false);
  };

  const handleReset = () => {
    setMessages([]);
    setSessionCount(0);
    setInput("");
    setLastExtracted(null);
  };

  const handleClearMemory = async () => {
    if (window.confirm("Effacer toute la mémoire accumulée ?")) {
      setMemory([]);
      try { await window.storage.delete(STORAGE_KEY); } catch (e) {}
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#16130e", color: "#f0e2c0", fontFamily: "'Cormorant Garamond',serif", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        @keyframes pulse { 0%,100%{transform:scale(0.65);opacity:0.35} 50%{transform:scale(1.1);opacity:1} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:translateY(0)} }
        textarea { transition: border-color 0.15s; }
        textarea:focus { outline:none; border-color:#c9a84c !important; box-shadow:0 0 0 2px rgba(201,168,76,0.12); }
        button { transition: all 0.15s; }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:rgba(201,168,76,0.25); border-radius:2px; }
      `}</style>

      {/* HEADER */}
      <div style={{
        borderBottom: "1px solid rgba(201,168,76,0.18)",
        padding: "1.2rem 1.8rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(0,0,0,0.35)", position: "sticky", top: 0, zIndex: 20
      }}>
        <div>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: "0.48rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", marginBottom: "0.25rem" }}>
            islamducoran.fr · Agent de débat
          </div>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: "0.95rem", fontWeight: 700, color: "#f0e2c0", letterSpacing: "0.04em" }}>
            Espace de débats intra-coraniques
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "0.75rem", color: "rgba(240,226,192,0.45)", marginTop: "0.15rem", fontStyle: "italic" }}>
            Coran seul · Lexicographie classique · Aucun ḥadīth · Aucune école
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Memory indicator */}
          <button onClick={() => setShowMemory(true)} style={{
            fontFamily: "'Cinzel',serif", fontSize: "0.48rem", letterSpacing: "0.09em",
            textTransform: "uppercase", cursor: "pointer",
            background: memory.length > 0 ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${memory.length > 0 ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.1)"}`,
            borderRadius: 2, padding: "0.4rem 0.85rem", color: memory.length > 0 ? "#c9a84c" : "rgba(240,226,192,0.35)",
            display: "flex", alignItems: "center", gap: "0.4rem"
          }}>
            <span style={{ fontSize: "0.7rem" }}>◈</span>
            Mémoire {memory.length > 0 ? `(${memory.length})` : "vide"}
          </button>
          {extracting && (
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: "0.42rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)" }}>
              ⟳ Analyse en cours...
            </div>
          )}
          {messages.length > 0 && (
            <button onClick={handleReset} style={{
              fontFamily: "'Cinzel',serif", fontSize: "0.48rem", letterSpacing: "0.08em",
              textTransform: "uppercase", color: "rgba(201,168,76,0.5)",
              background: "transparent", border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: 2, padding: "0.35rem 0.7rem", cursor: "pointer"
            }}>Nouveau</button>
          )}
        </div>
      </div>

      {/* LAST EXTRACTED INSIGHT — brief notification */}
      {lastExtracted && (
        <div style={{
          padding: "0.6rem 1.8rem", background: "rgba(201,168,76,0.06)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
          display: "flex", alignItems: "center", gap: "1rem",
          animation: "fadeIn 0.3s ease"
        }}>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: "0.44rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)" }}>
            ◈ Mémoire mise à jour
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
            {(lastExtracted.manipulations || []).map(m => (
              <Badge key={m} label={MANIP_LABELS[m] || m} dim />
            ))}
            {(lastExtracted.versets_utilises || []).slice(0, 4).map(v => (
              <span key={v} style={{ fontFamily: "'Cinzel',serif", fontSize: "0.44rem", color: "rgba(201,168,76,0.5)", letterSpacing: "0.06em" }}>{v}</span>
            ))}
          </div>
        </div>
      )}

      {/* INTRO when empty */}
      {messages.length === 0 && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 2rem", textAlign: "center" }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: "2rem", fontWeight: 700, color: "#c9a84c", letterSpacing: "0.06em", marginBottom: "0.6rem" }}>
            الْحُجَّةُ الْقُرْآنِيَّةُ
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", color: "rgba(240,226,192,0.6)", maxWidth: 500, lineHeight: 1.9, marginBottom: "0.5rem" }}>
            Présente un argument doctrinal, une citation de tradition, un raisonnement hors-coranique.
            L'agent l'identifie, le déconstruit par le texte coranique seul, et établit la position correcte.
          </div>
          {memory.length > 0 && (
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: "0.48rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", marginBottom: "2rem" }}>
              ◈ {memory.length} échange{memory.length > 1 ? "s" : ""} en mémoire — l'agent est entraîné
            </div>
          )}
          {memory.length === 0 && <div style={{ marginBottom: "2rem" }} />}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", maxWidth: 540, width: "100%" }}>
            {[
              "Il faut suivre la sunna du Prophète",
              "Le ḥadīth complète le Coran",
              "Les savants de l'islām s'accordent sur...",
              "S.4:59 ordonne de suivre le nabī",
              "L'ijmāʿ a force de loi en islām",
              "Le Prophète est la meilleure des créatures"
            ].map(ex => (
              <button key={ex} onClick={() => setInput(ex)} style={{
                fontFamily: "'Cormorant Garamond',serif", fontSize: "0.8rem",
                color: "rgba(240,226,192,0.6)", background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(201,168,76,0.12)", borderRadius: 3,
                padding: "0.65rem 0.9rem", cursor: "pointer", textAlign: "left", lineHeight: 1.5
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)"}
              >
                "{ex}"
              </button>
            ))}
          </div>
        </div>
      )}

      {/* MESSAGES */}
      {messages.length > 0 && (
        <div style={{ flex: 1, overflowY: "auto", padding: "1.8rem" }}>
          {messages.map((msg, i) => <MessageBlock key={i} msg={msg} />)}
          <div ref={bottomRef} />
        </div>
      )}

      {/* INPUT */}
      <div style={{
        borderTop: "1px solid rgba(201,168,76,0.12)",
        background: "rgba(0,0,0,0.28)",
        padding: "1rem 1.8rem",
        position: "sticky", bottom: 0
      }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.7rem", alignItems: "flex-end" }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) handleSubmit(); }}
              placeholder="Présente ton argument, ta doctrine, ta citation... (Ctrl+Entrée pour envoyer)"
              rows={3}
              style={{
                flex: 1, background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(201,168,76,0.18)", borderRadius: 3,
                color: "#f0e2c0", fontFamily: "'Cormorant Garamond',serif",
                fontSize: "0.9rem", lineHeight: 1.75, padding: "0.7rem 1rem",
                resize: "vertical", minHeight: 70
              }}
            />
            <button
              onClick={handleSubmit}
              disabled={loading || !input.trim()}
              style={{
                fontFamily: "'Cinzel',serif", fontSize: "0.58rem",
                letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700,
                background: loading || !input.trim() ? "rgba(201,168,76,0.18)" : "#c9a84c",
                color: loading || !input.trim() ? "rgba(201,168,76,0.4)" : "#16130e",
                border: "none", borderRadius: 3, padding: "0.7rem 1.2rem",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                whiteSpace: "nowrap", alignSelf: "stretch", minWidth: 85
              }}
            >
              {loading ? "···" : "Soumettre"}
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.4rem" }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: "0.42rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(240,226,192,0.25)" }}>
              Ctrl+Entrée pour envoyer · L'agent mémorise chaque échange pour s'améliorer
            </div>
            {memory.length > 0 && (
              <button onClick={handleClearMemory} style={{
                fontFamily: "'Cinzel',serif", fontSize: "0.42rem", letterSpacing: "0.07em",
                textTransform: "uppercase", color: "rgba(240,226,192,0.2)",
                background: "none", border: "none", cursor: "pointer", padding: "0.2rem 0"
              }}>Effacer la mémoire</button>
            )}
          </div>
        </div>
      </div>

      {/* MEMORY PANEL */}
      {showMemory && (
        <MemoryPanel memory={memory} onClose={() => setShowMemory(false)} />
      )}
    </div>
  );
}


// Mount
const root = ReactDOM.createRoot(document.getElementById('debats-root'));
root.render(React.createElement(DebatAgent));
