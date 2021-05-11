import { ContainerLayout, Block, Button, Image } from '../../Components/';
import Guide1 from '../../Assets/Images/Guide/guide-1.svg';
import Guide2 from '../../Assets/Images/Guide/guide-2.svg';
import Guide3 from '../../Assets/Images/Guide/guide-3.svg';
import { ContentWrapper, Title } from './styled';

const Guide = () => {

  const handleClick = () => {
    window.open('https://www.figma.com/file/MjJk5rV9zBR0nvcnNq7xkZ/Badge-Template-by-Badgio?node-id=203%3A2', '_blank');
  };

  return (
    <ContainerLayout vertical centered>
      <ContentWrapper>
        <Block>
          <Image src={Guide1} width={'50%'}/>
          <Block vertical>
            <Title>Customize your own badge with figma!</Title>
            <Button primary onClick={handleClick}>Figma Template</Button>
          </Block>
        </Block>
        <Block>
          <Title right>Export your badge in a PNG format!</Title>
          <Image src={Guide2} width={'50%'}/>
        </Block>
        <Block>
          <Image src={Guide3} width={'50%'}/>
          <Title>Upload your badge to <b>badgio</b> and have fun!</Title>
        </Block>
      </ContentWrapper>
    </ContainerLayout>
  );
};

export default Guide;
