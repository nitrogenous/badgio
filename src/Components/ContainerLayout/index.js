import { Header } from '../index';
import { Content } from './styled';

const ContainerLayout = ({ children, centered, horizontal }) => {
  
  return (
    <div>
      <Header />
      <Content centered={centered} horizontal={horizontal}>
        { children }
      </Content>
    </div>
  );
};

export default ContainerLayout;
