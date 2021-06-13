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
      {createCards()}
    </ContainerLayout>
  );
};

export default BadgeGallery;