import api from "./api";

export default class PokemonService {
  static basePath = "pokemon";
  static async getById(id: string) {
    return await api.get(`${this.basePath}/${id}`);
  }

  static async getAbilities(id: string) {
    return await api.get(`/ability/${id}`)
  }
}
