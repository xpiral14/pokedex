import GenericResult from "./GenericResult";
import PokemonSpecie from "./PokemonSpecie";
import Region from "./Region";

export default interface Generation {
  id: number;
  main_region: Region;
  moves: [];
  name: string;
  pokemon_species: GenericResult[];
  types: [];
  version_groups: [];
}
