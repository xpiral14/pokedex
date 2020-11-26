import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template:
    "sb ds"
    / 300px auto;
  grid-column-gap: 1rem;
  
`;

export const DashBoard = styled.div`
  grid-area: ds;
  height: 100vh;
  overflow-y: scroll;
`;
