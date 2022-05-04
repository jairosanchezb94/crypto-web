const url = "https://api.coincap.io/v2";

export const getAssets = () => {
  return fetch(`${url}/assets?limit=10`)
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getAsset = (coin) => {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getAssetHistory = (coin) => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getMarkets = (coin) => {
  return fetch(`${url}/assets/${coin}/markets?limit=10`)
    .then((res) => res.json())
    .then((res) => res.data);
};

export const getExchange = (id) => {
  return fetch(`${url}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
};