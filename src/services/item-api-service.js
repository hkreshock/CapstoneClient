import TokenService from "./token-service";
import config from "../config";

const ItemApiService = {
  getItems() {
    return fetch(`${config.API_ENDPOINT}/items`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getItem(itemId) {
    return fetch(`${config.API_ENDPOINT}/items/${itemId}`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  addItem(item) {
    return fetch(`${config.API_ENDPOINT}/items`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        date_created: item.date_created,
        listId: item.listId
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteItem(item) {
    return fetch(`${config.API_ENDPOINT}/items/${item.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    });
  }
};

export default ItemApiService;
