import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GenericResult from "../../contracts/models/GenericResult";
import GenerationService from "../../services/GenerationService";
import { getCodeFromUrl } from "../../utils";
import { Container, Menu, MenuItem } from "./style";

const SideBar = () => {
  const [generations, setGenerations] = useState<GenericResult[]>();
  useEffect(() => {
    async function getGenerations() {
      try {
        const response = await GenerationService.getAll();
        const formattedData = response.data.results.map((result) => ({
          ...result,
          code: getCodeFromUrl(result.url),
        }));
        setGenerations(formattedData);
      } catch (error) {
        alert(error);
      }
    }
    getGenerations();
  }, []);

  return (
    <Container>
      <Menu>
        {generations ? (
          generations.map((generation) => (
            <MenuItem active={generation.code === "1"} key={generation.name}>
              <Link to={`/generation/${generation.code}`}>
                {generation.name}
              </Link>
            </MenuItem>
          ))
        ) : (
          <h1>Carregando</h1>
        )}
      </Menu>
    </Container>
  );
};

export default SideBar;
