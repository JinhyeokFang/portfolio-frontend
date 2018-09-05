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
 * @param {any} minYear
 * @param {int} maxYear
 * @return {string}
 */
function year(minYear, maxYear) {
  return minYear >= 2016 && maxYear <= 2018? `year=${[...new Array(parseInt(maxYear - minYear )+ 1)].map((v, i) => parseInt(minYear) + i).join('+')}` : '';
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
 * @param {boolean} grand
 * @param {boolean} gold
 * @param {boolean} silver
 * @param {boolean} bronze
 * @return {string}
 */
function rate(grand, gold, silver, bronze) {
  let count = 0;
  if (grand) count++;
  if (gold) count++;
  if (silver) count++;
  if (bronze) count++;
  return `rate=${count}`;
}

/**
 *
 * @param {{division: string,
 * min: number,
 * max: number,
 * digital: boolean,
 * mobile: boolean,
 * sunrinthon: boolean,
 * game: boolean,
 * life: boolean,
 * application: boolean,
 * web: boolean,
 * multimedia: boolean,
 * grand: boolean,
 * gold: boolean,
 * silver: boolean,
 * bronze: boolean,
 * developer: string,
 * name : string
 * }} options
 * @return {string}
 */
export function generator(options) {
  const queries = [];
  if (options.division) queries.push(division(options.division));
  if (options.min) queries.push(year(options.min, options.max));
  if (options.digital || options.mobile || options.sunrinthon) queries.push(type(!!options.digital, !!options.mobile, !!options.sunrinthon));
  if (options.game || options.life || options.application || options.web || options.multimedia) queries.push(field(!!options.game, !!options.life, !!options.application, !!options.web, !!options.multimedia));
  if (options.grand || options.gold || options.silver || options.bronze) queries.push(rate(options.grand, options.gold, options.silver, options.bronze));
  if (options.developer) queries.push(developer(options.developer));
  if (options.name) queries.push(name(options.name));
  console.log(queries);
  return `${server}/api/list?${queries.join('&')}`;
}
