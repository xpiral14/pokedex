import styled from "styled-components";

export const Container = styled.div`
  grid-area: sb;
  height: 100vh;
  padding: 1rem;
  background-color: #e7ebf4;
  box-shadow: 5px 0 10px #20202030;
`;
export const Menu = styled.ul`
  list-style: none;
`;
export const MenuItem = styled.li<{ active: boolean }>`
  background-color: ${(p) => (p.active ? "#D9DEEA" : "transparent")};
  border-radius: 5px;
  padding: 10px;
  a {
    padding: 10px;
    color: #50546b;
    text-decoration: none;
  }
`;
