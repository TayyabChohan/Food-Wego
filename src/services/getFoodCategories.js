import http from "./httpServices";
import config from "../config.json";
export function getFoodCategoryList() {
  return http.get(config.endPointUrl + "/b88ec762-2cb3-4015-8960-2839b06a7593");
}
