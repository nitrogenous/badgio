import { Header } from "../index";
import { Content } from "./styled";

const ContainerLayout = ({ children, centered, horizontal, waves = true }) => {
  return (
    <>
      <Header />
      <Content centered={centered} horizontal={horizontal}>
        {children}
      </Content>
    </>
  );
};

export default ContainerLayout;
