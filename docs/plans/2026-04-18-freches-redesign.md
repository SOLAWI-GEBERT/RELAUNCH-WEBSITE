# Freches Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Die Website von einem generischen SaaS-Template zu einem frechen, charaktervollen Auftritt transformieren, der zum handgezeichneten Illustrationsstil der Signature-Grafiken passt.

**Architecture:** Bottom-up: Zuerst globale CSS-Persönlichkeit (Farben, Typo, Utilities), dann Homepage als Referenzseite komplett neu gestalten, dann Muster auf Unterseiten ausrollen. Motion-Animationen als letzten Schritt hinzufügen, da sie auf dem fertigen Layout aufbauen.

**Tech Stack:** Tailwind CSS v4, React 18, Motion (framer-motion v12), Cantora One + EB Garamond Fonts, CSS custom properties

**Joomla-Ziel:** Spätere Umsetzung in SP Page Builder (Joomla). Dieser React-Prototyp dient als Design-Referenz. Alle Designentscheidungen sind auf SP Page Builder Kompatibilität geprüft.

---

## SP Page Builder Kompatibilitäts-Mapping

| React-Designelement | SP Page Builder Umsetzung | Machbarkeit |
|---------------------|--------------------------|-------------|
| Pastell-Hintergrund-Sektionen | Section Background Color | Nativ |
| Wellige Sektionsteiler | Section Shape Divider | Nativ |
| Bild + Text nebeneinander | Image Content Addon (Bild links/rechts) | Nativ |
| Feature-Cards mit Bild | Feature Box Addon (Bild-Modus) | Nativ |
| Hof-Cards mit Overlay | Image Overlay Addon | Nativ |
| Prozess-Schritte | Timeline Addon oder Block Number | Nativ |
| Animierte Headlines | Animated Heading Addon | Nativ |
| Scroll-Reveal Animationen | Entrance-Animationen (Fade, Zoom, etc.) + Scroll-Effekte | Nativ |
| Hover-Effekte auf Cards | Feature Box / Image Overlay Hover-States | Nativ |
| CTA-Buttons in Pink | Button Addon mit Custom-Farbe | Nativ |
| Preistabelle Ernteanteile | Pricing Table Addon | Nativ |
| FAQ-Akkordeon | Accordion Addon | Nativ |
| Kontaktformular | Form Builder / Contact Form Addon | Nativ |
| Bauer-Illustration neben CTA | Image Content Addon (Bild links, Text rechts) | Nativ |
| Cantora One Font | Font Book (Custom Font Upload) | Nativ |
| Illustration aus Container ragend | Raw HTML oder Negative Margin | Eingeschränkt |
| Skizzen-Unterstrich Effekt | Raw HTML mit Custom CSS | Eingeschränkt |
| Badge mit Rotation (`rotate(-2deg)`) | Transform-Einstellungen auf Addon | Nativ |

---

## Prinzipien

- **Illustrationen befreien**: Signature-Grafiken nie mit `object-cover` beschneiden. Stattdessen auf Pastellhintergründen `object-contain` nutzen. (SP PB: Image Addon mit contain-Modus oder Section-Hintergrundbild)
- **Farbmut**: SoLaWi-Pink (#d10038) als primäre CTA-Farbe. Pastellfarben als mutige Section-Hintergründe. (SP PB: Section Background + Button Custom Color)
- **Rhythmuswechsel**: Nie zwei identische Sektionsformate hintereinander. (SP PB: Unterschiedliche Addons pro Sektion wählen)
- **Handgemachter Charakter**: Cantora One für freche Akzente. Wellige Shape Dividers zwischen Sektionen. (SP PB: Font Book + Section Shape Divider)
- **Keine Angst vor Weißraum**: Große Section-Paddings, mutigere Kompositionen innerhalb. (SP PB: Section Padding/Margin)

---

### Task 1: Globale CSS-Persönlichkeit — Farben & Buttons

**Files:**
- Modify: `src/styles/theme.css`

**Step 1: CTA-Farbe auf Pink umstellen, Button-Styles auffrischen**

In `theme.css` die `--primary` Variable behalten (für strukturelle Elemente), aber eine neue `--cta` Variable für Call-to-Actions einführen. Die globalen Button-Styles in `@layer base` anpassen.

```css
/* Neue Variable in :root hinzufügen */
--cta: #d10038;
--cta-foreground: #ffffff;
--cta-hover: #b80030;
```

Und in `@theme inline`:
```css
--color-cta: var(--cta);
--color-cta-foreground: var(--cta-foreground);
--color-cta-hover: var(--cta-hover);
```

**Step 2: Build prüfen**

Run: `npm run build`
Expected: Erfolgreicher Build ohne Fehler

**Step 3: Commit**

```bash
git add src/styles/theme.css
git commit -m "style: add CTA pink color system for bolder call-to-actions"
```

---

### Task 2: Globale CSS-Persönlichkeit — Typografie-Akzente

**Files:**
- Modify: `src/styles/theme.css`

**Step 1: Cantora One für freche Akzente aktivieren**

Cantora One ist bereits als `--font-accent` definiert, wird aber nirgends genutzt. Utility-Klassen in `@layer base` hinzufügen:

```css
/* In @layer base ergänzen */
.font-accent {
  font-family: var(--font-accent);
}

/* Freche Badge-Klasse */
.badge-frech {
  font-family: var(--font-accent);
  display: inline-block;
  background: var(--cta);
  color: white;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  transform: rotate(-2deg);
}

/* Handschriftlicher Unterstrich-Effekt */
.underline-sketch {
  text-decoration: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 8'%3E%3Cpath d='M0 6 Q50 0 100 5 Q150 8 200 4' stroke='%23d10038' fill='none' stroke-width='2.5'/%3E%3C/svg%3E");
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 200px 8px;
  padding-bottom: 6px;
}
```

**Step 2: Google Font Cantora One sicherstellen**

Prüfen ob Cantora One in `index.html` eingebunden ist, sonst `@import` in fonts.css ergänzen.

**Step 3: Build prüfen**

Run: `npm run build`
Expected: PASS

**Step 4: Commit**

```bash
git add src/styles/theme.css src/styles/fonts.css
git commit -m "style: add Cantora One accent utilities and sketch underline effect"
```

---

### Task 3: Globale CSS-Persönlichkeit — Wellige Sektionsteiler

**Files:**
- Modify: `src/styles/theme.css`

**Step 1: SVG-basierte wellige Divider-Klassen hinzufügen**

```css
/* Wellige Sektionsteiler */
.wave-top {
  position: relative;
}
.wave-top::before {
  content: '';
  position: absolute;
  top: -30px;
  left: 0;
  right: 0;
  height: 30px;
  background: inherit;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 30'%3E%3Cpath d='M0 30 Q300 0 600 20 Q900 40 1200 10 L1200 30Z' fill='black'/%3E%3C/svg%3E");
  mask-size: cover;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 30'%3E%3Cpath d='M0 30 Q300 0 600 20 Q900 40 1200 10 L1200 30Z' fill='black'/%3E%3C/svg%3E");
  -webkit-mask-size: cover;
}

.wave-bottom {
  position: relative;
}
.wave-bottom::after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  height: 30px;
  background: inherit;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 30'%3E%3Cpath d='M0 0 Q300 30 600 10 Q900 -10 1200 20 L1200 0Z' fill='black'/%3E%3C/svg%3E");
  mask-size: cover;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 30'%3E%3Cpath d='M0 0 Q300 30 600 10 Q900 -10 1200 20 L1200 0Z' fill='black'/%3E%3C/svg%3E");
  -webkit-mask-size: cover;
}
```

**Step 2: Build prüfen**

Run: `npm run build`
Expected: PASS

**Step 3: Commit**

```bash
git add src/styles/theme.css
git commit -m "style: add wavy section dividers for organic feel"
```

---

### Task 4: Homepage Hero — Von generisch zu frech

**Files:**
- Modify: `src/app/pages/Home.tsx`

**Step 1: Hero komplett umbauen**

Statt dunklem Foto-Overlay: Voller Pastellfarben-Hintergrund mit der `start.png`-Illustration (Stiefel) groß und frei stehend neben dem Text. Keine schwarze Überlagerung. Mutige Typografie.

```tsx
{/* Hero Section — FRECH */}
<section className="relative min-h-[600px] flex items-center overflow-hidden bg-solawi-green">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid md:grid-cols-2 gap-8 items-center py-16">
      {/* Text links */}
      <div className="relative z-10">
        <span className="badge-frech mb-4">Solidarische Landwirtschaft</span>
        <h1 className="text-5xl md:text-7xl mb-6 text-foreground">
          Stadt, Land,<br/>
          <span className="underline-sketch">Beides.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-lg">
          Frisches Gemüse direkt vom Hof. Faire Preise für alle. 
          Gemeinschaft, die schmeckt.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/mitmachen" className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-4 transition-colors text-lg font-accent">
            Jetzt mitmachen <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/solidarische-landwirtschaft" className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground hover:bg-foreground/10 px-8 py-4 transition-colors">
            Mehr erfahren
          </Link>
        </div>
      </div>
      {/* Illustration rechts — frei stehend, nicht beschnitten */}
      <div className="relative flex justify-center items-end">
        <img src="/start.png" alt="Stadt, Land, Beides" className="h-[400px] md:h-[500px] object-contain drop-shadow-xl" />
      </div>
    </div>
  </div>
</section>
```

**Step 2: Build prüfen**

Run: `npm run build`
Expected: PASS

**Step 3: Commit**

```bash
git add src/app/pages/Home.tsx
git commit -m "feat: redesign homepage hero with bold layout and freed illustration"
```

---

### Task 5: Homepage "Was ist SoLaWi" — Illustration befreien

**Files:**
- Modify: `src/app/pages/Home.tsx`

**Step 1: SoLaWi-Erklärsektion mit decision-funktion.jpg als freie Illustration**

Die `decision-funktion.jpg` (Flussdiagramm: Person → Bauer → Lebensmittel) passt perfekt als Erklärillustration. Sie soll auf ihrem natürlichen blauen Hintergrund stehen, nicht in einem `object-cover`-Container beschnitten werden. Die Aktionstag-Foto daneben oder darunter als ergänzendes echtes Bild.

```tsx
{/* Was ist SoLaWi — mit befreiter Illustration */}
<section className="py-20 bg-solawi-blue wave-top wave-bottom relative z-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Illustration links — decision-funktion auf natürlichem BG */}
      <div className="flex justify-center">
        <img src="/decision-funktion.jpg" alt="So funktioniert SoLaWi" 
             className="max-h-[450px] object-contain" />
      </div>
      {/* Text rechts */}
      <div>
        <h2 className="text-4xl mb-2 text-foreground">
          Was ist <span className="font-accent text-accent">Solidarische</span> Landwirtschaft?
        </h2>
        ...rest des Textes...
      </div>
    </div>
  </div>
</section>
```

**Step 2: Build & visuell prüfen**

**Step 3: Commit**

---

### Task 6: Homepage "Warum mitmachen" — Feature-Cards mit Signature-Grafiken

**Files:**
- Modify: `src/app/pages/Home.tsx`

**Step 1: Lucide-Icons durch Signature-Grafiken ersetzen**

Statt generischer Lucide-Icons (`Leaf`, `Users`, `Heart`) die thematisch passenden Signature-Grafiken als Card-Header verwenden:

- Nachhaltig & Regional → `features-nachhaltigkeit.jpg` (Frau mit Gemüsewagen)
- Gemeinschaft → `features-gemeinschaft.jpg` (Menschen auf dem Acker)
- Transparenz → `decision-funktion.jpg` (Kreislauf Person→Bauer→Essen)

Cards bekommen jeweils den passenden Pastellhintergrund der Illustration statt weißem BG.

```tsx
<div className="bg-solawi-salmon p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
  <img src="/features-nachhaltigkeit.jpg" alt="" className="h-32 object-contain mb-6" />
  <h3 className="text-xl mb-4 text-foreground font-accent">Nachhaltig & Regional</h3>
  <p className="text-gray-700">...</p>
</div>
```

**Step 2: Build prüfen**

**Step 3: Commit**

---

### Task 7: Homepage "Unsere Höfe" — Foto + Illustration mischen

**Files:**
- Modify: `src/app/pages/Home.tsx`

**Step 1: Hof-Cards bekommen echte Fotos MIT Signature-Icon-Overlay**

Jede Hof-Card bekommt das echte Foto als Hauptbild, aber mit dem jeweiligen kleinen Inline-Icon (`inline-hof.jpg`, `inline-kuerbis.jpg`, `depot.png`) als dekoratives Badge in der Ecke.

```tsx
<div className="bg-white overflow-hidden shadow-lg hover:-translate-y-2 transition-all">
  <div className="h-48 overflow-hidden relative">
    <img src="/fotos/reimehof-ziege.jpg" alt="Reimehof" className="w-full h-full object-cover" />
    {/* Signature-Icon als Overlay */}
    <img src="/inline-hof.jpg" alt="" className="absolute -bottom-4 -right-2 w-16 h-16 rotate-6" />
  </div>
  <div className="p-6">
    <h3 className="text-xl mb-2 font-accent text-foreground">Reimehof</h3>
    ...
  </div>
</div>
```

**Step 2: Build prüfen**

**Step 3: Commit**

---

### Task 8: Homepage "So funktioniert's" — Ablauf-Illustrationen statt Nummernkreise

**Files:**
- Modify: `src/app/pages/Home.tsx`

**Step 1: Die 3 Prozessschritte mit den Ablauf-Grafiken illustrieren**

Statt generischer Nummernkreise:
1. Ernteanteil wählen → `ablauf-hof.jpg` (Regionalkarte mit Höfen)
2. Depot auswählen → `ablauf-depot.jpg` (Stadtszene mit Gemüsekiste)
3. Genießen & mitmachen → `ablauf-mitmachen.jpg` (gemeinsam Ernte balancieren)

Illustrationen als Hauptelement (ca. 200px hoch, `object-contain`), Nummer als kleines `badge-frech` in der Ecke.

**Step 2: Build prüfen**

**Step 3: Commit**

---

### Task 9: Homepage CTA-Sektion — Bauer zeigt auf DICH

**Files:**
- Modify: `src/app/pages/Home.tsx`

**Step 1: CTA-Sektion mit features-mitmachen.jpg (Bauer mit Zeigefinger)**

Der "Uncle Sam"-Bauer wird zum visuellen Anker des CTA-Bereichs. Er zeigt aus der Illustration heraus auf den User. Großer Button in CTA-Pink.

```tsx
<section className="py-20 bg-solawi-green relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-8 items-center">
      {/* Bauer links */}
      <div className="hidden md:flex justify-center">
        <img src="/features-mitmachen.jpg" alt="" 
             className="h-[350px] object-contain -mb-20" />
      </div>
      {/* Text & CTA center+right */}
      <div className="md:col-span-2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
          Bereit für <span className="underline-sketch">frische</span>, regionale Lebensmittel?
        </h2>
        <p className="text-xl mb-8 text-foreground/80">
          Werde Teil unserer Gemeinschaft!
        </p>
        <Link to="/anmeldung" className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white px-10 py-5 text-xl font-accent transition-colors">
          Jetzt anmelden <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  </div>
</section>
```

**Step 2: Build prüfen**

**Step 3: Commit**

---

### Task 10: Alle Buttons seitenweit auf CTA-Pink umstellen

**Files:**
- Modify: `src/app/pages/Home.tsx`
- Modify: `src/app/pages/Mitmachen.tsx`
- Modify: `src/app/pages/Anmeldung.tsx`
- Modify: `src/app/pages/Kalender.tsx`
- Modify: `src/app/pages/SolidarischeLandwirtschaft.tsx`
- Modify: `src/app/pages/KontaktAnmeldung.tsx`
- Modify: `src/app/pages/LieferungKalender.tsx`
- Modify: `src/app/components/Navigation.tsx`

**Step 1: Alle `bg-primary` Buttons durch `bg-cta hover:bg-cta-hover` ersetzen**

Suche & ersetze in allen Dateien:
- `bg-primary hover:bg-primary` → `bg-cta hover:bg-cta-hover`
- `bg-primary text-white` → `bg-cta text-white`
- `border-primary text-primary` → `border-cta text-cta`

Behalte `bg-primary` nur dort, wo es für nicht-CTA-Elemente steht (z.B. Tags, Badges, Icons).

**Step 2: Build prüfen**

**Step 3: Visuell prüfen — alle Buttons sind jetzt kräftiges Pink**

**Step 4: Commit**

```bash
git commit -m "style: switch all CTA buttons to bold SoLaWi pink"
```

---

### Task 11: Unterseiten-Heroes — Illustrationen befreien

**Files:**
- Modify: `src/app/pages/SolidarischeLandwirtschaft.tsx`
- Modify: `src/app/pages/Mitmachen.tsx`
- Modify: `src/app/pages/HoefeUndErnteanteile.tsx`
- Modify: `src/app/pages/Anmeldung.tsx`
- Modify: `src/app/pages/Kalender.tsx`

**Step 1: Hero-Pattern ändern**

Alle Unterseiten nutzen aktuell dasselbe Pattern: Vollbreites Bild + schwarzes Overlay + weißer zentrierter Text. Das ersetzen durch:

- Pastell-Hintergrund (passend zur Sektion-Farbe)
- Signature-Illustration frei stehend (nicht beschnitten)
- Text linksbündig, Illustration rechts
- Kein dunkles Overlay

Schema pro Seite:
- SoLaWi → `bg-solawi-orange` + `features-gemeinschaft.jpg`
- Mitmachen → `bg-solawi-green` + `ablauf-mitmachen.jpg`
- Höfe → `bg-solawi-blue` + `ablauf-hof.jpg`
- Anmeldung → `bg-solawi-salmon` + `ablauf-kontakt.jpg`
- Kalender → `bg-solawi-mauve` + `ablauf-ernteteiler.jpg`

**Step 2: Build prüfen**

**Step 3: Commit**

---

### Task 12: Motion-Animationen — Scroll-Reveals

**Files:**
- Create: `src/app/components/ScrollReveal.tsx`
- Modify: `src/app/pages/Home.tsx`

**Step 1: Wiederverwendbare ScrollReveal-Komponente erstellen**

```tsx
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function ScrollReveal({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 40 },
    left: { x: -40 },
    right: { x: 40 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: In Home.tsx die wichtigsten Sektionen mit ScrollReveal wrappen**

- Feature-Cards mit gestaffeltem delay (0, 0.1, 0.2)
- Hof-Cards mit gestaffeltem delay
- CTA-Sektion
- "So funktioniert's" Schritte

**Step 3: Build prüfen**

**Step 4: Commit**

---

### Task 13: Hover-Effekte mit Charakter

**Files:**
- Modify: `src/styles/theme.css`

**Step 1: Spielerische Hover-Utilities hinzufügen**

```css
/* Karten-Hover mit leichter Rotation */
.hover-tilt:hover {
  transform: translateY(-4px) rotate(-1deg);
  transition: transform 0.3s ease;
}

/* Illustration Hover — leichtes Wackeln */
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
}
.hover-wiggle:hover {
  animation: wiggle 0.4s ease-in-out;
}

/* Link-Hover — Pink-Unterstrich fährt ein */
.hover-underline-pink {
  position: relative;
}
.hover-underline-pink::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--cta);
  transition: width 0.3s ease;
}
.hover-underline-pink:hover::after {
  width: 100%;
}
```

**Step 2: Diese Klassen in Home.tsx auf Cards und Links anwenden**

**Step 3: Build prüfen**

**Step 4: Commit**

---

### Task 14: Navigation — Farbiger Akzent & Kontakt-Huhn

**Files:**
- Modify: `src/app/components/Navigation.tsx`

**Step 1: Navigation-Akzente hinzufügen**

- "Jetzt anmelden" als eigenständiger CTA-Button in der Desktop-Nav (rechts, `bg-cta`)
- Aktiver Menüpunkt bekommt `border-bottom: 3px solid var(--cta)` statt nur bold
- Mobile CTA-Button auf Pink umstellen

**Step 2: Build prüfen**

**Step 3: Commit**

---

### Task 15: Footer — Charakter statt Corporate

**Files:**
- Modify: `src/app/components/Footer.tsx`

**Step 1: Footer mit Persönlichkeit**

- `kontakt.jpg` (Hahn am Laptop) als dekorative Illustration neben dem Kontaktformular-Hinweis
- Dezente Pastellfarbe statt reines #333
- `font-accent` für Footer-Überschriften

**Step 2: Build prüfen**

**Step 3: Commit**

---

### Task 16: Fonts sicherstellen — Google Fonts korrekt laden

**Files:**
- Modify: `index.html`
- Modify: `src/styles/fonts.css`

**Step 1: Google Fonts Einbindung prüfen und ggf. ergänzen**

In `index.html` im `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cantora+One&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

**Step 2: Build prüfen**

**Step 3: Commit**

---

### Task 17: Finaler visueller Review & Feinschliff

**Files:**
- Alle geänderten Dateien

**Step 1: Dev-Server starten und alle Seiten durchklicken**

Run: `npm run dev`

Prüfpunkte:
- [ ] Homepage Hero: Illustration frei stehend auf Pastell, kein dunkles Overlay
- [ ] Alle Buttons Pink (#d10038)
- [ ] Feature-Cards mit Signature-Grafiken statt Icons
- [ ] "So funktioniert's" mit Ablauf-Illustrationen
- [ ] CTA-Sektion mit Bauer-Zeigefinger
- [ ] Unterseiten-Heroes: Pastell + freie Illustration
- [ ] Wellige Sektionsteiler sichtbar
- [ ] Scroll-Animationen funktionieren
- [ ] Hover-Effekte auf Cards und Links
- [ ] Cantora One Font lädt korrekt
- [ ] Mobile Ansicht funktioniert
- [ ] Keine abgeschnittenen Illustrationen

**Step 2: Feinschliff — Abstände, Farben, Größen nachjustieren**

**Step 3: Finaler Commit**

```bash
git commit -m "polish: final visual refinements for freches redesign"
```

---

## Zusammenfassung

| # | Task | Impact | Aufwand |
|---|------|--------|---------|
| 1 | CTA-Pink Farbsystem | Hoch | Klein |
| 2 | Typografie-Akzente | Hoch | Klein |
| 3 | Wellige Sektionsteiler | Mittel | Klein |
| 4 | Homepage Hero | Sehr hoch | Mittel |
| 5 | SoLaWi-Erklärung | Hoch | Klein |
| 6 | Feature-Cards | Hoch | Mittel |
| 7 | Höfe-Cards | Mittel | Klein |
| 8 | Prozessschritte | Hoch | Mittel |
| 9 | CTA-Sektion | Hoch | Klein |
| 10 | Buttons global | Hoch | Klein |
| 11 | Unterseiten-Heroes | Hoch | Mittel |
| 12 | Scroll-Reveals | Mittel | Mittel |
| 13 | Hover-Effekte | Mittel | Klein |
| 14 | Navigation CTA | Mittel | Klein |
| 15 | Footer | Niedrig | Klein |
| 16 | Fonts prüfen | Niedrig | Klein |
| 17 | Finaler Review | Hoch | Mittel |

**Kernprinzip aller Änderungen:** Die Signature-Grafiken sind der Star. Das Website-Design muss sich ihrem frechen, handgemachten Charakter anpassen — nicht umgekehrt.
