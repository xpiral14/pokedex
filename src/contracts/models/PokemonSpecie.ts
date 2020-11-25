export default interface PokemonSpecie {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: boolean;
  has_gender_differences: boolean;
  forms_switchable: boolean;
}
