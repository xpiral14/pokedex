import styled from "styled-components";

export const Container = styled.div``;

export const PokemonContainer = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const PokemonInfo = styled.div`
  position: relative;
  padding: 10px;
  margin-right: 10px;
  margin-top: 20px;
  width: 150px;
  border-radius: 0.7rem;
  box-shadow: 0 5px 10px #00000020;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  :hover {
    top: -10px;
  }
`;
