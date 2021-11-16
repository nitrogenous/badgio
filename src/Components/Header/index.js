import { Wrapper } from "./styled";
import { Link } from "../index";

const Header = () => {
  return (
    <Wrapper>
      <span>badgio</span>
      <Link href="#">
        <span>create</span>
      </Link>
    </Wrapper>
  );
};

export default Header;
