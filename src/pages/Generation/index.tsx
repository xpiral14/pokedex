import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import PokemonModalInfo from "../../components/PokemonModalInfo";
import GenerationModel from "../../contracts/models/Generation";
import GenerationService from "../../services/GenerationService";
import { getCodeFromUrl } from "../../utils";
import { Container, PokemonContainer, PokemonInfo } from "./style";

const Generation: React.FC<RouteComponentProps<{ id: string }>> = (props) => {
  const [generation, setGeneration] = useState<GenerationModel>();
  const [pokemonDetailModals, setPokemonDetailModals] = useState<boolean[]>([]);

  useEffect;
  useEffect(() => {
    async function getGenerationData() {
      const response = await GenerationService.getById(props.match.params.id);
      const pokemonDataFormatted = response.data.pokemon_species.map(
        (pokemonSpecie) => ({
          ...pokemonSpecie,
          code: getCodeFromUrl(pokemonSpecie.url),
        })
      );
      response.data.pokemon_species = pokemonDataFormatted;
      setGeneration(response.data);
      setPokemonDetailModals(
        Array(response.data.pokemon_species.length).fill(false)
      );
    }
    getGenerationData();
  }, [props.match.params.id]);
  return (
    <Container>
      {generation && (
        <div>
          <h1>Infos about {generation.name}</h1>
          <PokemonContainer>
            <h2>
              Nesta geração foram introduzidos{" "}
              {generation.pokemon_species.length} pokémons
            </h2>
            <div>
              {generation?.pokemon_species.map(
                (pokemonSpecie, pokemonSpecieIndex) => (
                  <PokemonInfo
                    key={pokemonSpecie.name}
                    onMouseOver={() => {
                      setPokemonDetailModals((prev) => {
                        const copy = [...prev];
                        copy[pokemonSpecieIndex] = true;
                        return copy;
                      });
                    }}
                    onMouseLeave={() => {
                      setPokemonDetailModals((prev) => {
                        const copy = [...prev];
                        copy[pokemonSpecieIndex] = false;
                        return copy;
                      });
                    }}
                  >
                    {pokemonSpecie.name}

                    {pokemonDetailModals[pokemonSpecieIndex] && (
                      <PokemonModalInfo pokemonId={pokemonSpecie.code} />
                    )}
                  </PokemonInfo>
                )
              )}
            </div>
          </PokemonContainer>
        </div>
      )}
    </Container>
  );
};

export default Generation;
