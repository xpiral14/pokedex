import PokemonSpecie from "./PokemonSpecie";
import Region from "./Region";

export default interface Generation {
  id :number;
  name: string;
  abilities: [];
  main_region: Region;
  pokemon_species: PokemonSpecie;
}
