import { Header } from '../index';
import { Content, BackgroundWaves } from './styled';
import Waves from '../../Assets/Images/Landing/waves.svg';

const ContainerLayout = ({ children, centered, horizontal, waves = true }) => {
  
  return (
    <>
      <Header />
      <Content centered={centered} horizontal={horizontal}>
        { children }
        {waves && <BackgroundWaves src={Waves}/>}
      </Content>
    </>
  );
};

export default ContainerLayout;
