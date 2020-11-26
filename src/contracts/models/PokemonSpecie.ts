import GenericResult from "./GenericResult";

export default interface PokemonSpecie {
  id: number;
  name: string;
  order: number;
  color: GenericResult;
  abilities: GenericResult

}
