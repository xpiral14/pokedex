import GenericResult from "./GenericResult";

export default interface Pokemon {
  name: string;
  abilities: GenericResult;
  forms: GenericResult;
  sprites: {
    front_default?: string;
  };
  types: {
    slot: number;
    type: GenericResult;
  }[];
}
