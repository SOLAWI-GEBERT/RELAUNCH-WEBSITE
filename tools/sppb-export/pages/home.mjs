import { page } from '../builders/page.mjs';
import { section } from '../builders/section.mjs';
import { heading } from '../builders/heading.mjs';
import { textBlock } from '../builders/textBlock.mjs';
import { image } from '../builders/image.mjs';
import { imageContent } from '../builders/imageContent.mjs';
import { feature } from '../builders/feature.mjs';
import { button } from '../builders/button.mjs';

// Sektions-/Kartenfarben aus src/styles/theme.css (Tailwind-Klassen in Home.tsx).
// Button-/Link-/Textfarben und Fonts kommen NICHT von hier, sondern aus dem
// Helix-Template-Preset (siehe docs/sppb/helix-template.md).
const GREEN = '#c2ddb2';
const BLUE = '#97b0c7';
const SALMON = '#f3aba2';
const ORANGE = '#ffa673';
const MAUVE = '#c7afc7';
// Der Body-Hintergrund des aktiven Helix-Presets ist mauve — Abschnitte, die im
// Prototyp weiß sind, brauchen daher einen expliziten Hintergrund.
const WHITE = '#ffffff';

// Abstände (Prototyp: py-24 = 96px, mb-16 = 64px, mb-20 = 80px, gap-6 = 24px, p-8 = 32px, p-6 = 24px).
// Ein Prototyp-Abschnitt wird auf mehrere SPPB-Sections verteilt; die Paddings
// nehmen die dadurch entstehenden doppelten Abstände heraus.
const PAD_HEADING = '96px 0px 64px 0px';
const PAD_MIDDLE = '0px 0px 80px 0px';
const PAD_ROW_GAP = '0px 0px 24px 0px';
const PAD_LAST = '0px 0px 96px 0px';
const CARD_PADDING = '32px 32px 32px 32px';
const PRODUCT_CARD_PADDING = '24px 24px 24px 24px';
const CARD_SHADOW = '0 4px 6px 0 rgba(0, 0, 0, 0.1)'; // ≈ Tailwind shadow-md

// Animation (SPPB-Editor: Style → Animation) nur auf Bildern und Boxen:
// 'headShake' (Attention Seeker) entspricht dem frechen hover-wiggle/hover-tilt
// des Prototyps. Überschriften, Text und Buttons bleiben ohne Animation.
const SHAKE = 'headShake';

// Freche Akzente aus dem Prototyp. Die Klassen badge-frech und underline-sketch
// sind im Helix-Style hinterlegt (custom_css in export/SLB_init_*.json) und
// hängen an --link-color; hier nur das Markup. heading gibt den Titel roh aus.
const sketch = (word) => `<span class="underline-sketch">${word}</span>`;
const badge = (text) => `<span class="badge-frech">${text}</span>`;
// Wellige Sektionsteiler (wave-top/wave-bottom im Prototyp) als SPPB-Shape-Divider.
// 'wavy-opacity' = weicher Wellencharakter, Alternative 'rocky-mountain' = comic-artig.
// Farbe = Hintergrund der angrenzenden Section, Inhalt wird nach vorn verschoben.
const WAVE_SHAPE = 'wavy-opacity';

export function buildPage() {
  const sections = [
    // 1. Hero (kein ScrollReveal im Prototyp)
    section({
      backgroundColor: GREEN,
      alignCenter: true,
      columns: [
        {
          span: 7,
          addons: [
            textBlock({ text: badge('Solidarische Landwirtschaft'), alignment: 'left' }),
            heading({ title: `Stadt, Land, ${sketch('Beides.')}`, headingSelector: 'h1', alignment: 'left' }),
            textBlock({ text: '<p>Frische Produkte direkt vom Hof. Faire Preise für alle. Gemeinschaft, die schmeckt.</p>' }),
            button({ text: 'Jetzt dabei sein', url: '/so-funktionierts', size: 'lg', shape: 'square', alignment: 'left' }),
          ],
        },
        {
          span: 5,
          addons: [
            image({ src: 'images/start.png', alt: 'Stadt, Land, Beides — Gummistiefel trifft Stöckelschuh', alignment: 'center', animation: SHAKE }),
          ],
        },
      ],
    }),

    // 2a. "SoLaWi in 60 Sekunden" — Überschrift (Welle oben, in Hero-Grün)
    section({
      backgroundColor: BLUE,
      padding: PAD_HEADING,
      topShape: { name: WAVE_SHAPE, color: GREEN },
      columns: [{ span: 12, addons: [heading({ title: `SoLaWi in ${sketch('60 Sekunden')}` })] }],
    }),

    // 2b. "Was ist Solidarische Landwirtschaft" — Bild + Text + Button
    section({
      backgroundColor: BLUE,
      padding: PAD_MIDDLE,
      columns: [
        {
          span: 12,
          addons: [
            imageContent({
              imageSrc: 'images/decision-funktion.jpg',
              imageAlign: 'left',
              title: 'Was ist Solidarische Landwirtschaft?',
              text:
                '<p>Solidarische Landwirtschaft (SoLaWi) ist eine innovative Partnerschaft zwischen ' +
                'landwirtschaftlichen Betrieben und Verbraucher*innen. Gemeinsam tragen wir die ' +
                'Verantwortung, das Risiko und die Ernte.</p>' +
                '<p>Durch direkte Zusammenarbeit schaffen wir eine nachhaltige, regionale und ' +
                'transparente Lebensmittelversorgung – für Mensch und Umwelt.</p>',
              buttonText: 'Mehr über SoLaWi erfahren',
              buttonUrl: '/solidarische-landwirtschaft',
              contentPadding: '0px 0px 0px 48px',
              animation: SHAKE,
            }),
          ],
        },
      ],
    }),

    // 2c. Drei Feature-Karten ("Du bezahlst den Hof...", "Saisonal & regional...", "Gemeinsam tragen wir das Risiko")
    //     Welle unten, in Weiß des folgenden Abschnitts
    section({
      backgroundColor: BLUE,
      padding: PAD_LAST,
      bottomShape: { name: WAVE_SHAPE, color: WHITE },
      columns: [
        {
          span: 4,
          addons: [
            feature({
              title: 'Du bezahlst den Hof, nicht das Produkt',
              text: 'Du finanzierst die Landwirtschaft direkt, nicht einzelne Tomaten.',
              featureType: 'icon',
              iconName: 'fas fa-hand-holding-dollar',
              backgroundColor: SALMON,
              padding: CARD_PADDING,
              animation: SHAKE,
              animationDelay: 0,
            }),
          ],
        },
        {
          span: 4,
          addons: [
            feature({
              title: 'Saisonal & regional — direkt vom Acker',
              text: 'Bio-Lebensmittel aus der Region, ohne Umwege.',
              featureType: 'icon',
              iconName: 'fas fa-truck',
              backgroundColor: ORANGE,
              padding: CARD_PADDING,
              animation: SHAKE,
              animationDelay: 100,
            }),
          ],
        },
        {
          span: 4,
          addons: [
            feature({
              title: 'Gemeinsam tragen wir das Risiko',
              text: 'Gute Ernte = mehr für alle. Schlechte Ernte = weniger, aber fair geteilt.',
              featureType: 'icon',
              iconName: 'fas fa-users',
              backgroundColor: MAUVE,
              padding: CARD_PADDING,
              animation: SHAKE,
              animationDelay: 200,
            }),
          ],
        },
      ],
    }),

    // 3. "Warum mitmachen" — weißer Abschnitt, 4 Feature-Karten mit eigenem Pastell-Hintergrund
    section({
      backgroundColor: WHITE,
      padding: PAD_HEADING,
      columns: [{ span: 12, addons: [heading({ title: `Warum ${sketch('mitmachen')}?` }), textBlock({ text: '<p>Gemeinsam gestalten wir eine nachhaltige Zukunft und genießen frische, regionale Lebensmittel.</p>', alignment: 'center' })] }],
    }),
    section({
      backgroundColor: WHITE,
      padding: PAD_LAST,
      columns: [
        {
          span: 3,
          addons: [
            feature({
              title: 'Nachhaltig & Regional',
              text: 'Frische Lebensmittel direkt vom Hof in deiner Region. Kurze Transportwege und ökologischer Anbau schonen die Umwelt.',
              featureType: 'image',
              imageSrc: 'images/features-nachhaltigkeit.jpg',
              imageAlt: 'Frau mit Gemüsewagen auf dem Acker',
              backgroundColor: SALMON,
              padding: CARD_PADDING,
              animation: SHAKE,
              animationDelay: 0,
            }),
          ],
        },
        {
          span: 3,
          addons: [
            feature({
              title: 'Gemeinschaft',
              text: 'Werde Teil einer lebendigen Gemeinschaft. Lerne die Landwirt*innen kennen und gestalte aktiv mit.',
              featureType: 'image',
              imageSrc: 'images/features-gemeinschaft.jpg',
              imageAlt: 'Gruppe auf dem Acker',
              backgroundColor: ORANGE,
              padding: CARD_PADDING,
              animation: SHAKE,
              animationDelay: 100,
            }),
          ],
        },
        {
          span: 3,
          addons: [
            feature({
              title: 'Vielfalt & Transparenz',
              text: 'Volle Transparenz: Du weißt genau, wo dein Essen herkommt und wie es angebaut wird. Saisonal, vielfältig, ehrlich.',
              featureType: 'image',
              imageSrc: 'images/features-lebensmittel.jpg',
              imageAlt: 'Füllhorn mit Gemüse',
              backgroundColor: MAUVE,
              padding: CARD_PADDING,
              animation: SHAKE,
              animationDelay: 200,
            }),
          ],
        },
        {
          span: 3,
          addons: [
            feature({
              title: 'Depot in deiner Nähe',
              text: 'Hole deine Ernte wöchentlich an einem unserer Depots ab. Nürnberg, Fürth.',
              featureType: 'image',
              imageSrc: 'images/ablauf-depot.jpg',
              imageAlt: 'Depot in der Stadt',
              backgroundColor: GREEN,
              padding: CARD_PADDING,
              animation: SHAKE,
              animationDelay: 300,
            }),
          ],
        },
      ],
    }),

    // 4. "Was bekomme ich" — 6 Produktkarten (weiß, Schatten, linksbündig wie im Prototyp)
    //    Welle oben in Weiß des vorherigen Abschnitts
    section({
      backgroundColor: BLUE,
      padding: PAD_HEADING,
      topShape: { name: WAVE_SHAPE, color: WHITE },
      columns: [
        {
          span: 12,
          addons: [
            heading({ title: `Was ${sketch('bekomme')} ich?` }),
            textBlock({ text: '<p>Keine Supermarkt-Einheitskiste — sondern das, was die Natur gerade hergibt.</p>', alignment: 'center' }),
          ],
        },
      ],
    }),
    section({
      backgroundColor: BLUE,
      padding: PAD_ROW_GAP,
      columns: [
        { span: 4, addons: [productCard({ title: 'Sommergemüse', farm: 'Biohof Tristan', text: 'Tomaten, Zucchini, Paprika und mehr — frisch vom Feld.', iconName: 'fas fa-carrot', url: '/ernteanteile/hederer-sommer', delay: 0 })] },
        { span: 4, addons: [productCard({ title: 'Wintergemüse', farm: 'Biohof Tristan', text: 'Kohl, Wurzelgemüse und Lagerware für die kalte Jahreszeit.', iconName: 'fas fa-leaf', url: '/ernteanteile/tristans-winter', delay: 50 })] },
        { span: 4, addons: [productCard({ title: 'Obst & Säfte', farm: 'Demeterhof Hederer', text: 'Äpfel, Birnen, Zwetschgen und hausgemachte Säfte.', iconName: 'fas fa-apple-whole', url: '/ernteanteile/hederer-obst', delay: 100 })] },
      ],
    }),
    section({
      backgroundColor: BLUE,
      padding: PAD_LAST,
      bottomShape: { name: WAVE_SHAPE, color: GREEN }, // Welle unten in CTA-Grün
      columns: [
        { span: 4, addons: [productCard({ title: 'Fleisch & Eier', farm: 'Demeterhof Walz', text: 'Weiderind, Hähnchen und frische Eier aus artgerechter Haltung.', iconName: 'fas fa-egg', url: '/ernteanteile/walz-huhn', delay: 150 })] },
        { span: 4, addons: [productCard({ title: 'Ur-Getreide', farm: 'Demeterhof Walz', text: 'Emmer, Einkorn und Dinkel — alte Sorten, neu entdeckt.', iconName: 'fas fa-wheat-awn', url: '/ernteanteile/walz-getreide', delay: 200 })] },
        { span: 4, addons: [productCard({ title: 'Bio-Beeren', farm: 'Kirschgarten', text: 'Erdbeeren, Himbeeren und Johannisbeeren in EU-Bio-Qualität.', iconName: 'fas fa-seedling', url: '/ernteanteile/kirschgarten-beeren', delay: 250 })] },
      ],
    }),

    // 5. CTA
    section({
      backgroundColor: GREEN,
      alignCenter: true,
      columns: [
        { span: 4, addons: [image({ src: 'images/features-mitmachen.jpg', alt: 'Bauer zeigt auf dich', alignment: 'center', animation: SHAKE })] },
        {
          span: 8,
          addons: [
            heading({ title: `Bereit für ${sketch('frische')}, regionale Lebensmittel?`, alignment: 'left' }),
            textBlock({ text: '<p>Werde Teil unserer Gemeinschaft und unterstütze nachhaltige Landwirtschaft in deiner Region.</p>' }),
            button({ text: 'Jetzt mitmachen', url: '/so-funktionierts', size: 'xlg', shape: 'square', alignment: 'left' }),
          ],
        },
      ],
    }),
  ];

  return page({ title: 'Home', sections });
}

/**
 * Produktkarte aus "Was bekomme ich": weiße Karte mit Schatten, Icon, Titel,
 * Hofname als Unterzeile und Kurztext; der Titel verlinkt auf die Ernteanteil-Seite.
 */
function productCard({ title, farm, text, iconName, url, delay }) {
  return feature({
    title,
    text: `<p><small>${farm}</small></p><p>${text}</p>`,
    iconName,
    iconSize: 40, // Prototyp: w-10 (die drei SoLaWi-Karten: w-12 = Builder-Default 48)
    titleUrl: url,
    alignment: 'left',
    backgroundColor: WHITE,
    padding: PRODUCT_CARD_PADDING,
    boxShadow: CARD_SHADOW,
    animation: SHAKE,
    animationDelay: delay,
  });
}
