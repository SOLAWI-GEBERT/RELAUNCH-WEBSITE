# Addon: form_builder

Quelle: `components/com_sppagebuilder/addons/form_builder/admin.php`

| Feld | Typ | Default (`std`) | Bedingung (`depends`) |
|---|---|---|---|
| `sp_form_builder_item` | repeatable (5 vorbelegte Items: First Name, Last Name, Email, Subject, Message; Attr siehe unten) | siehe Item-Defaults in der Quelle | – |
| ↳ `field_type` | select (`text`\|`email`\|`tel`\|`textarea`\|`radio`\|`checkbox`\|`select`\|`date`\|`range`\|`number`\|`heading`) | `"text"` | – |
| ↳ `title` | text | `"Item 1"` | – |
| ↳ `heading_selector` | headings | `"h3"` | `field_type = 'heading'` |
| ↳ `heading_typography` | typography | – | `field_type = 'heading'` |
| ↳ `title_text_shadow` | boxshadow (`config.spread: false`) | `"0 0 0 #ffffff"` | `field_type = 'heading'` |
| ↳ `alignment_separator` | separator | – | `field_type = 'heading'` |
| ↳ `alignment` | alignment (responsive, `left`\|`center`\|`right`) | `{xl:'left', lg:'', md:'', sm:'', xs:''}` | `field_type = 'heading'` |
| ↳ `title_margin` | margin (responsive) | `{xl:'0px 0px 0px 0px', ...}` | `field_type = 'heading'` |
| ↳ `title_padding` | padding (responsive) | `{xl:'0px 0px 0px 0px', ...}` | `field_type = 'heading'` |
| ↳ `field_name` | text | `"First Name"` | `field_type != 'checkbox'` AND `field_type != 'heading'` |
| ↳ `field_placeholder` | text | `"First Name"` | `field_type` nicht in `radio`/`checkbox`/`date`/`range`/`heading` |
| ↳ `field_width` | slider (responsive, max `100`) | `{xl: 50}` | – |
| ↳ `tel_pattern` | text | `"^\+(?:\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,10}$"` | `field_type = 'tel'` |
| ↳ `range_min`/`range_max`/`range_step` | number | – | `field_type = 'range'` |
| ↳ `number_min`/`number_max`/`number_step` | number | – | `field_type = 'number'` |
| ↳ `minimum_character`/`maximum_character` | slider | – | `field_type = 'textarea'` |
| ↳ `sp_form_builder_inner_item_radio` | repeatable (Attr: `title` std `"Radio"`, `is_radio_checked` std `0`) | – | `field_type = 'radio'` |
| ↳ `sp_form_builder_inner_item_checkbox` | repeatable (Attr: `title` std `"Checkbox"`, `checkbox_field_name` std `"checkbox-1"`, `checkbox_is_required` std `0`, `is_checkbox_checked` std `0`) | – | `field_type = 'checkbox'` |
| ↳ `sp_form_builder_inner_item_select` | repeatable (Attr: `title` std `"Select"`, `is_selected` std `0`) | – | `field_type = 'select'` |
| ↳ `is_resize` | checkbox | `0` | `field_type = 'textarea'` |
| ↳ `field_is_required` | checkbox | `0` | `field_type != 'checkbox'` AND `field_type != 'heading'` |
| ↳ `field_required_star` | checkbox | `1` | `title != ''` AND `field_type != 'heading'` |
| `message_separator` | separator | – | – |
| `required_field_message` | text | `"Please fill the required field."` | – |
| `success_message` | textarea | `"Email successfully sent!"` | – |
| `failed_message` | textarea | `"Email sent failed, fill required field and try again!"` | – |
| `hide_label` | checkbox | `0` | – |
| `redirect_separator` | separator | – | – |
| `enable_redirect` | checkbox | `0` | – |
| `send_copy_to_applicant` | checkbox | `0` | – |
| `redirect_url` | text (inline) | – | `enable_redirect = 1` |
| `captcha_separator` | separator | – | – |
| `enable_captcha` | checkbox | `1` | – |
| `captcha_type` | plugin (`plugin_type: captcha`, inline) | `"default"` | `enable_captcha = 1` |
| `captcha_question` | text (inline) | `"3 + 4 = ?"` | `enable_captcha = 1` AND `captcha_type = 'default'` |
| `captcha_answer` | text (inline) | `"7"` | `enable_captcha = 1` AND `captcha_type = 'default'` |
| `policy_separator` | separator | – | – |
| `enable_policy` | checkbox | `0` | – |
| `policy_text` | textarea | GDPR-Zustimmungstext mit Links | `enable_policy = 1` |
| `field_gutter` | slider (responsive, max `200`) | `{xl: 15}` | – |
| `field_horizontal_space` | slider (responsive, max `200`) | – | – |
| `recipient_email` | text | – | – |
| `additional_header` | textarea | `"Reply-To: {{email}}\nReply-name: {{first-name}} {{last-name}}\nCc: {{email}}"` | – |
| `from` | text (placeholder `mail@yourhost.com`) | – | – |
| `email_subject` | text | `"{{subject}} \| {{site-name}}"` | – |
| `email_template` | textarea | HTML-Template mit `{{first-name}}`, `{{last-name}}`, `{{email}}`, `{{subject}}`, `{{message}}` Platzhaltern | – |
| `input_height` | slider (responsive, max `200`) | – | – |
| `field_padding` | padding (responsive) | – | – |
| `field_typography_separator` | separator | – | – |
| `field_typography` | typography | – | – |
| `field_color` | color | – | – |
| `field_bg_color` | color | – | – |
| `field_hover_bg_color` | color | – | – |
| `field_placeholder_color` | color | – | – |
| `field_hover_placeholder_color` | color | – | – |
| `field_border_separator` | separator | – | – |
| `field_border_width` | margin | – | – |
| `field_border_color` | color | – | – |
| `field_focus_border_color` | color | – | – |
| `field_border_radius` | slider (max `200`) | – | – |
| `label_separator` | separator | – | – |
| `label_typography` | typography | – | – |
| `label_color` | color | – | – |
| `label_margin` | margin (responsive) | – | – |
| `radio_checkbox_separator` | separator | – | – |
| `radio_color` | color | – | – |
| `checkbox_color` | color | – | – |
| `textarea_separator` | separator | – | – |
| `textarea_height` | slider (responsive, max `1000`) | – | – |
| *(Gruppe `title` hat keine eigenen Felder — `fields: []`)* | | | |
| `btn_text` | text | `"Send Message"` | – |
| `btn_typography` | typography | – | – |
| `btn_type` | select (`default\|primary\|secondary\|success\|info\|warning\|danger\|dark\|link\|custom`) | `"custom"` | – |
| `link_button_padding_bottom` | slider (max `100`) | – | `btn_type = 'link'` |
| `btn_appearance` | select (`""\|gradient\|outline`) | – | `btn_type != 'link'` |
| `btn_shape` | select (`rounded`\|`square`\|`round`) | `"rounded"` | `btn_type != 'link'` |
| `btn_size` | select (`""\|lg\|xlg\|sm\|xs\|custom`) | – | – |
| `btn_padding` | padding (responsive) | `{xl:'8px 22px 10px 22px', ...}` | `btn_type = 'custom'` |
| `btn_margin` | margin (responsive) | – | – |
| `btn_block` | select (`""\|sppb-btn-block`) | – | `btn_type != 'link'` |
| `btn_position` | alignment | – | – |
| `btn_icon_separator` | separator | – | – |
| `btn_icon` | icon | – | – |
| `btn_icon_position` | radio (`left`\|`right`) | `"left"` | – |
| `btn_style_tab_separator` | separator | – | – |
| `btn_style_tab` | buttons (Tabs: `normal`\|`hover`) | `"normal"` | `btn_type = 'custom'` |
| `btn_color` | color | `"#FFFFFF"` | `btn_type = 'custom'` AND `btn_style_tab = 'normal'` |
| `btn_background_color` | color | `"#3366FF"` | `btn_appearance != 'gradient'`, `btn_type = 'custom'`, `btn_style_tab = 'normal'` |
| `btn_background_gradient` | gradient | `{color:'#3366FF', color2:'#0037DD', deg:'45', type:'linear'}` | `btn_appearance = 'gradient'`, `btn_type = 'custom'`, `btn_style_tab = 'normal'` |
| `btn_color_hover` | color | `"#FFFFFF"` | `btn_type = 'custom'` AND `btn_style_tab = 'hover'` |
| `btn_background_color_hover` | color | `"#0037DD"` | `btn_appearance != 'gradient'`, `btn_type = 'custom'`, `btn_style_tab = 'hover'` |
| `btn_background_gradient_hover` | gradient | `{color:'#0037DD', color2:'#3366FF', deg:'45', type:'linear'}` | `btn_appearance = 'gradient'`, `btn_type = 'custom'`, `btn_style_tab = 'hover'` |
| `link_button_style_tab` | buttons (Tabs: `normal`\|`hover`) | `"normal"` | `btn_type = 'link'` |
| `link_button_color` | color | – | `btn_type = 'link'` AND `link_button_style_tab = 'normal'` |
| `link_button_border_width` | slider (max `30`) | – | `btn_type = 'link'` AND `link_button_style_tab = 'normal'` |
| `link_button_border_color` | color | – | `btn_type = 'link'` AND `link_button_style_tab = 'normal'` |
| `link_button_hover_color` | color | – | `btn_type = 'link'` AND `link_button_style_tab = 'hover'` |
| `link_button_border_hover_color` | color | – | `btn_type = 'link'` AND `link_button_style_tab = 'hover'` |
| `enable_rate_limit` | checkbox (`'0'`=Nein\|`'1'`=Ja) | `'0'` | – |
| `max_requests` | number | `10` | `enable_rate_limit = '1'` |
| `time_window` | number | `60` | `enable_rate_limit = '1'` |

Plus die globalen Addon-Felder aus `docs/sppb/page-format.md`.

Noch kein Builder in `tools/sppb-export/builders/` — bei Bedarf für die jeweilige Seite ergänzen.
