import showDown from 'showdown';

const converter = new showDown.Converter();

/**
 * @param {string} markdown
 * @return {string}
 */
export function rendering(markdown) {
  return converter.makeHtml(markdown);
}
