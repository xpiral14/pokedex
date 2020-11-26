import React, { useEffect, useState } from "react";
import Pokemon from "../../contracts/models/Pokemon";
import PokemonSpecie from "../../contracts/models/PokemonSpecie";
import PokemonService from "../../services/PokemonService";
import { Container } from "./style";

interface PokemonModalInfoProps {
  pokemonId?: string;
}

const PokemonModalInfo: React.FC<PokemonModalInfoProps> = ({ pokemonId }) => {
  const [pokemonData, setPokemonData] = useState<Pokemon>();

  useEffect(() => {
    async function getPokemonData() {
      const response = await PokemonService.getById(pokemonId as string);

      setPokemonData(response.data);
    }
    getPokemonData();
  }, [pokemonId]);
  return (
    <Container>
      {pokemonData ? (
        <>
          {pokemonData?.sprites?.front_default && (
            <div style={{ textAlign: "center" }}>
              <img src={pokemonData.sprites.front_default} />
            </div>
          )}
          <p>
            <strong>Tipo: </strong>
            {pokemonData.types.map((type) => type.type.name).join(", ")}
          </p>
        </>
      ) : (
        <h5>Carregando</h5>
      )}
    </Container>
  );
};

export default PokemonModalInfo;
