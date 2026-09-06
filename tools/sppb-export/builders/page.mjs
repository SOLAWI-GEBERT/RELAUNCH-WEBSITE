export function page({ title, sections, language = '*' }) {
  return {
    template: JSON.stringify(sections),
    css: '',
    seo: JSON.stringify({}),
    title,
    language,
  };
}
