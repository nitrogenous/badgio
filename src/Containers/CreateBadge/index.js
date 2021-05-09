import { useContext, useEffect } from 'react';
import { storage } from '../../Firebase';
import { BadgeCreatorContext } from '../../Providers/BadgeCreator';
import { ContainerLayout, Form, Button, Canvas, Input } from '../../Components';

const CreateBadge = (props) => {
  const { match: { params: { id } }} = props;
  const { createBadge, canvasRef, setCanvasImage } = useContext(BadgeCreatorContext);

  useEffect(() => {
    storage.ref(`badges/${id}/`).listAll().then(res => {
      res?.items?.[0]?.getDownloadURL()?.then(url => {
        setCanvasImage(url);
      })
    });
  }, [id, setCanvasImage]);
  
  const handleOnSubmit = (event) => {
    event.preventDefault();

    const userDetails = {
      name: event.target.name.value,
      company: event.target.company.value,
      title: event.target.title.value,
    };

    createBadge(userDetails);
  };

  return(
    <ContainerLayout horizontal centered>
      <Form onSubmit={handleOnSubmit}  title="Create Your Badge!">
        <Input name="name" placeholder="Name" />
        <Input name="company" placeholder="Company" />
        <Input name="title" placeholder="Title" />
        <Button primary>Create Your Badge!</Button>
      </Form>
      <Canvas canvasRef={canvasRef} width='1080' height="1920"></Canvas>
    </ContainerLayout>
  );
};

export default CreateBadge;
