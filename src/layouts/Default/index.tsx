import React from "react";
import { RouteProps } from "react-router-dom";
import SideBar from "../../components/Sidebar";
import { Container, DashBoard } from "./style";

const Default: React.FC<RouteProps> = ({ children }) => {
  return (
    <Container>
      <SideBar />
      <DashBoard>{children}</DashBoard>
    </Container>
  );
};

export default Default;
