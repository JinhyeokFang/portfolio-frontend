const server = 'http://ec2-18-222-183-3.us-east-2.compute.amazonaws.com';

/**
 * returns division query
 * @param  {string} division
 * @return {string}
 */
export function division(division = 'software') {
  return `division=${division}`;
}

/**
 *
 * @param {int} minYear
 * @param {int} maxYear
 * @return {string}
 */
export function year(minYear, maxYear) {
  return minYear >= 2016 && maxYear <= 2017 ? `year=${[...new Array(maxYear - minYear + 1)].map((v, i) => minYear + i).join('+')}` : '';
}

/**
 *
 * @param {boolean} digital
 * @param {boolean} sunrinthon
 * @param {boolean} mobile
 * @return {string}
 */
export function type(digital = false, sunrinthon = false, mobile = false) {
  const query = [];
  if (digital) query.push('digital-contents');
  if (sunrinthon) query.push('sunrin-thon');
  if (mobile) query.push('mobile-contents');
  return `type=${query.join('+')}`;
}

/**
 *
 * @param {boolean} game
 * @param {boolean} life
 * @param {boolean} application
 * @param {boolean} web
 * @param {boolean} multimedia
 * @return {string}
 */
export function field(game = false, life = false, application = false, web = false, multimedia = false) {
  const query = [];
  if (game) query.push('game');
  if (life) query.push('life');
  if (application) query.push('application');
  if (web) query.push('web');
  if (multimedia) query.push('multimedia');
  return `field=${query.join('+')}`;
}


export {server};
