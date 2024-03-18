import http from "./httpServices";
import config from "../config.json";
export function getFoodlist() {
  return http.get(config.endPointUrl + "/c75dc0d8-ad78-4b3d-b697-807a5ded8645");
}
