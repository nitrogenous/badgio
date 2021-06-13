import { GalleryWrapper, Title } from './styled';
import { ContainerLayout, Card } from '../../Components';
import { galleryItems } from './staticData';

const BadgeGallery = () => {

  const createCards = () => {
    return galleryItems.map((galleryItem) => {
      return <Card {...galleryItem}/>
    });
  };

  return(
    <ContainerLayout centered>
      <Title>Badge Gallery</Title>
      <GalleryWrapper>
        {createCards()}
      </GalleryWrapper>
    </ContainerLayout>
  );
};

export default BadgeGallery;