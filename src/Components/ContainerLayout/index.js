import { Header } from '../index';

const ContainerLayout = ({ children }) => {
  
  return (
    <div>
      <Header />
      <div>
        { children }
      </div>
    </div>
  );
};

export default ContainerLayout;
