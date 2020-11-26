import Generation from "../contracts/models/Generation";
import GenericApiData from "../contracts/models/GenericApiData";
import api from "./api";

export default class GenerationService {
  static basePath = "/generation";
  static async getAll() {
    return await api.get<GenericApiData>(this.basePath);
  }

  static async getById(id: string) {
    return await api.get<Generation>(`${this.basePath}/${id}`);
  }
}
