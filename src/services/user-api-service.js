import config from "../config";
import TokenService from "./token-service";

const UserApiService = {
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/api/users`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default UserApiService;
