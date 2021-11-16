import { ContainerLayout, Image, Link } from "../../Components";
import { ContentWrapper, Content } from "./styled";
import BadgeGroup from "../../Assets/Images/Landing/badge.svg";

const Landing = () => {
  return (
    <ContainerLayout centered>
      <ContentWrapper>
        <Image src={BadgeGroup} width="400px" height="672px" />
        <Content>
          <span>
            Create your <br /> <b>virtual badges</b> <br />{" "}
            <Link href="#"> now! </Link>
          </span>
        </Content>
      </ContentWrapper>
    </ContainerLayout>
  );
};

export default Landing;
