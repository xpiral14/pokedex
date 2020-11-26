import React, { useEffect, useState } from "react";
import GenericResult from "../../contracts/models/GenericResult";
import RegionService from "../../services/RegionService";
import { getCodeFromUrl } from "../../utils/index";
import { Container } from "./style";

const Home: React.FC = () => {
  const [genericRegions, setGenericRegions] = useState<GenericResult[]>();
  const [generations, setGenerations] = useState<GenericResult[]>();
  useEffect(() => {
    async function getRegions() {
      try {
        const response = await RegionService.getAll();
        const formattedData = response.data.results.map((result) => ({
          ...result,
          code: getCodeFromUrl(result.url),
        }));
        setGenericRegions(formattedData);
      } catch (error) {
        alert(error);
      }
    }
    getRegions();
  }, []);
  return (
    <Container>
      <div>
        <h1>Seja bem vindo ao teste para a Delivery Much!</h1>
        <span>
          <strong>Sistema desenvolvido por Samuel Araújo Reis</strong>
        </span>
      </div>
    </Container>
  );
};

export default Home;
