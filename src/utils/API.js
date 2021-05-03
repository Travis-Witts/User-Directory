import axios from "axios";
const URL = "https://randomuser.me/api/?results=50&nat=au,us";

function searchAPI () {
  return axios.get(URL);
}

export default searchAPI