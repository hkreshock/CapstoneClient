import config from "../config";

const ProduceApiService = {
  getItems(search) {
    return fetch(
      `${
        config.PRODUCE_API_ENDPOINT
      }/food/products/search?offset=0&query=${search}&number=20`,
      {
        headers: {
          "X-RapidAPI-Key": `${config.X_RAPIDAPI_KEY}`
        }
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getItem(id) {
    return fetch(`${config.PRODUCE_API_ENDPOINT}/food/products/${id}`, {
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
