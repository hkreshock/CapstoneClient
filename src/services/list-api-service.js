import TokenService from "./token-service";
import config from "../config";

const ListApiService = {
  getLists() {
    return fetch(`${config.API_ENDPOINT}/api/lists`, {
      headers: {}
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getList(listId) {
    return fetch(`${config.API_ENDPOINT}/api/lists/${listId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  addList(list) {
    return fetch(`${config.API_ENDPOINT}/api/lists`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        id: list.id,
        title: list.title,
        quantity: list.quantity,
        date_created: list.date_created
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteList(list) {
    return fetch(`${config.API_ENDPOINT}/api/lists/${list.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    });
  }
};

export default ListApiService;
