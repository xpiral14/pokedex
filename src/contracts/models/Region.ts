import Generation from "./Generation";

export default interface Region {
  id: number;
  locations: [];
  name: string;
  names: string;
  main_generation: Generation;
  pokedexes: []
}
