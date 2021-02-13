/**
 * Get request
 *
 * @param {String} url
 * @param {Object} queryParams
 */
export const get = async (url, queryParams = {}) => {
  const u = new URL(url);

  for (const [key, value] of Object.entries(queryParams)) {
    u.searchParams.append(key, value);
  }

  return fetch(u, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
  })
    .then(response => response.json());
}
