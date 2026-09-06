import { page } from '../builders/page.mjs';
import { section } from '../builders/section.mjs';
import { heading } from '../builders/heading.mjs';
import { textBlock } from '../builders/textBlock.mjs';
import { image } from '../builders/image.mjs';
import { imageContent } from '../builders/imageContent.mjs';
import { feature } from '../builders/feature.mjs';
import { button } from '../builders/button.mjs';

const GREEN = '#c2ddb2';
const BLUE = '#97b0c7';
const SALMON = '#f3aba2';
const ORANGE = '#ffa673';
const MAUVE = '#c7afc7';

export function buildPage() {
  const sections = [
    // 1. Hero
    section({
      backgroundColor: GREEN,
      columns: [
        {
          span: 7,
          addons: [
            heading({ title: 'Stadt, Land, Beides.', headingSelector: 'h1', alignment: 'left' }),
            textBlock({ text: '<p>Frische Produkte direkt vom Hof. Faire Preise für alle. Gemeinschaft, die schmeckt.</p>' }),
            button({ text: 'Jetzt dabei sein', url: '/so-funktionierts' }),
          ],
        },
        {
          span: 5,
          addons: [
            image({ src: 'images/start.png', alt: 'Stadt, Land, Beides — Gummistiefel trifft Stöckelschuh' }),
          ],
        },
      ],
    }),

    // 2a. "SoLaWi in 60 Sekunden" — Überschrift
    section({
      backgroundColor: BLUE,
      columns: [{ span: 12, addons: [heading({ title: 'SoLaWi in 60 Sekunden' })] }],
    }),

    // 2b. "Was ist Solidarische Landwirtschaft" — Bild + Text + Button
    section({
      backgroundColor: BLUE,
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
            }),
          ],
        },
      ],
    }),

    // 2c. Drei Feature-Karten ("Du bezahlst den Hof...", "Saisonal & regional...", "Gemeinsam tragen wir das Risiko")
    section({
      backgroundColor: BLUE,
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
            }),
          ],
        },
      ],
    }),

    // 3. "Warum mitmachen" — kein Section-Hintergrund, 4 Feature-Karten mit eigenem Pastell-Hintergrund
    section({
      columns: [{ span: 12, addons: [heading({ title: 'Warum mitmachen?' }), textBlock({ text: '<p>Gemeinsam gestalten wir eine nachhaltige Zukunft und genießen frische, regionale Lebensmittel.</p>', alignment: 'center' })] }],
    }),
    section({
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
            }),
          ],
        },
      ],
    }),

    // 4. "Was bekomme ich" — 6 Produktkarten
    section({
      backgroundColor: BLUE,
      columns: [
        {
          span: 12,
          addons: [
            heading({ title: 'Was bekomme ich?' }),
            textBlock({ text: '<p>Keine Supermarkt-Einheitskiste — sondern das, was die Natur gerade hergibt.</p>', alignment: 'center' }),
          ],
        },
      ],
    }),
    section({
      backgroundColor: BLUE,
      columns: [
        { span: 4, addons: [feature({ title: 'Sommergemüse', text: 'Biohof Tristan — Tomaten, Zucchini, Paprika und mehr — frisch vom Feld.', iconName: 'fas fa-carrot', titleUrl: '/ernteanteile/hederer-sommer', backgroundColor: '#ffffff' })] },
        { span: 4, addons: [feature({ title: 'Wintergemüse', text: 'Biohof Tristan — Kohl, Wurzelgemüse und Lagerware für die kalte Jahreszeit.', iconName: 'fas fa-leaf', titleUrl: '/ernteanteile/tristans-winter', backgroundColor: '#ffffff' })] },
        { span: 4, addons: [feature({ title: 'Obst & Säfte', text: 'Demeterhof Hederer — Äpfel, Birnen, Zwetschgen und hausgemachte Säfte.', iconName: 'fas fa-apple-whole', titleUrl: '/ernteanteile/hederer-obst', backgroundColor: '#ffffff' })] },
      ],
    }),
    section({
      backgroundColor: BLUE,
      columns: [
        { span: 4, addons: [feature({ title: 'Fleisch & Eier', text: 'Demeterhof Walz — Weiderind, Hähnchen und frische Eier aus artgerechter Haltung.', iconName: 'fas fa-egg', titleUrl: '/ernteanteile/walz-huhn', backgroundColor: '#ffffff' })] },
        { span: 4, addons: [feature({ title: 'Ur-Getreide', text: 'Demeterhof Walz — Emmer, Einkorn und Dinkel — alte Sorten, neu entdeckt.', iconName: 'fas fa-wheat-awn', titleUrl: '/ernteanteile/walz-getreide', backgroundColor: '#ffffff' })] },
        { span: 4, addons: [feature({ title: 'Bio-Beeren', text: 'Kirschgarten — Erdbeeren, Himbeeren und Johannisbeeren in EU-Bio-Qualität.', iconName: 'fas fa-seedling', titleUrl: '/ernteanteile/kirschgarten-beeren', backgroundColor: '#ffffff' })] },
      ],
    }),

    // 5. CTA
    section({
      backgroundColor: GREEN,
      columns: [
        { span: 4, addons: [image({ src: 'images/features-mitmachen.jpg', alt: 'Bauer zeigt auf dich' })] },
        {
          span: 8,
          addons: [
            heading({ title: 'Bereit für frische, regionale Lebensmittel?', alignment: 'left' }),
            textBlock({ text: '<p>Werde Teil unserer Gemeinschaft und unterstütze nachhaltige Landwirtschaft in deiner Region.</p>' }),
            button({ text: 'Jetzt mitmachen', url: '/so-funktionierts' }),
          ],
        },
      ],
    }),
  ];

  return page({ title: 'Home', sections });
}
