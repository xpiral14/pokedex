import GenericApiData from "../contracts/models/GenericApiData";
import api from "./api";

export default class RegionService {
  static async getAll() {
    return await api.get<GenericApiData>("/region");
  }
}
