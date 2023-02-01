/**
 * Capitalizes a string
 * @param str The string to capitalize
 * @returns The capitalized string
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Pluralizes a string
 * @param str The string to pluralize
 * @returns The pluralized string
 */
export function pluralize(str: string) {
  if (str.endsWith('s')) {
    return str.slice();
  }
  return str + 's';
}

/**
 * Singularizes a string
 * @param str The string to singularize
 * @returns The singularized string
 */
export function singularize(str: string) {
  if (str.endsWith('s')) {
    return str.slice(0, -1);
  }
  return str.slice();
}
