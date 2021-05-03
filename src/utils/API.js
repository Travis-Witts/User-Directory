import axios from "axios";
const URL = "https://randomuser.me/api/?results=50&nat=au,us";

export default {
  search: function() {
    return axios.get(URL);
  }
};
