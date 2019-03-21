import config from "../config";

const ProduceApiService = {
  getItems() {
    return fetch(`${config.PRODUCE_API_ENDPOINT}`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getItem() {
    return fetch(`${config.PRODUCE_API_ENDPOINT}`, {
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": `${config.X_RAPIDAPI_KEY}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default ProduceApiService;
