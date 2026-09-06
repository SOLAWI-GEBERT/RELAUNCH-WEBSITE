# Addon: row

Quelle: `components/com_sppagebuilder/addons/row/admin.php`

**Wichtig:** Dies ist das **Nested-Row-Addon** (`'type' => 'structure'`, Kategorie `Structure`) —
ein Addon, das *innerhalb* einer Column platziert werden kann, um dort ein eigenes
Sub-Layout mit eigenen Columns aufzuspannen (z.B. innerhalb eines Accordion- oder
Tab-Panels). Es ist **nicht zu verwechseln** mit der strukturellen Section/Row-Ebene
aus `docs/sppb/page-format.md`, die die eigentliche Seiten-Baumstruktur (`template` →
Sections → Columns → Addons) bildet. Das Addon hat kein eigenes `settings`-Feldschema
in `admin.php` — es definiert nur `attr.general = []` als Platzhalter; die tatsächlichen
Zeilen/Spalten-Kinder werden über die Addon-interne `nested_row`/`columns`-Struktur
(wie in `page-format.md` bzw. `sp_page_builder.md` für Accordion-Inhalte beschrieben)
abgelegt, nicht über klassische `settings.<gruppe>.fields`.

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| *(keine `settings`-Felder — nur `attr.general = []`)* | | | |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
