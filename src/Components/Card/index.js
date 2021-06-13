import { useHistory } from 'react-router-dom';
import { CardWrapper } from "./styled";

const Card = (props) => {
  const history = useHistory();  
  const badgeUrl = '/create-badge/' + props.url;

  const handleClick = () => {
    history.push(badgeUrl);
  };

  return (
    <CardWrapper onClick={handleClick}>
      {props?.name}
    </CardWrapper>
  );
};

export default Card;
