import get from 'lodash/get';
import translations from '../../assets/translations';

export function getTranslation(path) {
  return get(translations[L.PM.activeLang], path);
}

export function isEmptyDeep(l) {
  // thanks for the function, Felix Heck
  const flatten = list =>
    list
      .filter(x => ![null, '', undefined].includes(x))
      .reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

  return !flatten(l).length;
}
