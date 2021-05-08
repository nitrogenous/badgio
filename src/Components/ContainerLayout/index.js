import { Header } from '../index';
import { Content } from './styled';

const ContainerLayout = ({ children, centered }) => {
  
  return (
    <div>
      <Header />
      <Content centered={centered}>
        { children }
      </Content>
    </div>
  );
};

export default ContainerLayout;
