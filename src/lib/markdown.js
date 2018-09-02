import showDown from 'showdown';

const converter = new showDown.Converter();

/**
 * @param {string} markdown
 * @return {string}
 */
export function rendering(markdown) {
  return converter.makeHtml(markdown.replace(/\/api\/image\//gm, 'http://ec2-18-222-183-3.us-east-2.compute.amazonaws.com/api/image/'));
}
