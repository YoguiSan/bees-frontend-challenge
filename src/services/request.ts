interface Params {
  [key: string]: string|undefined,
}

export const request = async (url:string, method:string, params:Params = {}) => fetch(
  (method === 'get'
    ? `${url}
    ${Object.keys(params).length > 0 ? '&' : ''}
    ${
    (Object.keys(params)
      .map((key:string) => `${key}=${params[key]}`))
      .join('&')
    }`
    : url
  ), {
    method,
  },
)
  .then((res) => res)
  .then((res) => res.json())
  .catch((e) => e);

export const get = async (url:string, params:Params) => request(url, 'get', params);
