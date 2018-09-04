/* eslint-disable max-len */
const server = 'http://ec2-18-222-183-3.us-east-2.compute.amazonaws.com';

/**
 * returns division query
 * @param  {string} division
 * @return {string}
 */
function division(division = 'software') {
  return `division=${division}`;
}

/**
 *
 * @param {int} minYear
 * @param {int} maxYear
 * @return {string}
 */
function year(minYear, maxYear) {
  return minYear >= 2016 && maxYear <= 2017 ? `year=${[...new Array(maxYear - minYear + 1)].map((v, i) => minYear + i).join('+')}` : '';
}

/**
 *
 * @param {boolean} digital
 * @param {boolean} mobile
 * @param {boolean} sunrinthon
 * @return {string}
 */
function type(digital = false, mobile = false, sunrinthon = false) {
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
function field(game = false, life = false, application = false, web = false, multimedia = false) {
  const query = [];
  if (game) query.push('game');
  if (life) query.push('life');
  if (application) query.push('application');
  if (web) query.push('web');
  if (multimedia) query.push('multimedia');
  return `field=${query.join('+')}`;
}

/**
 *
 * @param {string} name
 * @return {string}
 */
function name(name) {
  return `name=${name}`;
}

/**
 *
 * @param  {string} developer
 * @return {string}
 */
function developer(developer) {
  return `developer=${developer}`;
}

/**
 *
 * @param  {Array<number>} rate;
 * @return {string}
 */
function rate(rate) {
  return `rate=${rate.join('+')}`;
}

/**
 *
 * @param {{division: string,
 * year: {
 *   min: number,
 *   max: number
 * },
 * type: {
 *   digital: boolean,
 *   mobile: boolean,
 *   sunrinthon: boolean
 * },
 * field: {
 *   game: boolean,
 *   life: boolean,
 *   application: boolean,
 *   web: boolean,
 *   multimedia: boolean
 * },
 * rate: Array<number>,
 * developer: string,
 * name : string
 * }} options
 * @return {string}
 */
export function generator(options) {
  return `?${Object.entries(options).map((entry) => {
    if (entry[0] === 'division') return division(entry[0]);
    else if (entry[0] === 'year') return year(entry[1].min, entry[1].max);
    else if (entry[0] === 'type') return type(!!entry[1].digitqal, !!entry[1].mobile, !!entry[1].sunrinthon);
    else if (entry[0] === 'field') return field(!!entry[1].game, !!entry[1].life, !!entry[1].application, !!entry[1].web, !!entry[1].multimedia);
    else if (entry[0] === 'rate') return rate(entry[1]);
    else if (entry[0] === 'developer') return developer(entry[1]);
    else if (entry[0] === 'name') return name(entry[1]);
  }).join('&')}`;
}

export {server};
