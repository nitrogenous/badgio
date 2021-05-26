import { useContext, useEffect } from 'react';
import { storage } from '../../Firebase';
import { BadgeCreatorContext } from '../../Providers/BadgeCreator';
import { ContainerLayout, Form, Button, Canvas, Input } from '../../Components';
import { FormWrapper } from './styled.js';

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

  // const handleDownloadBadge = () => {
  //   const canvas = canvasRef.current;
  //   const image = new Image();
  //   const win = window.open("about:blank", "badgio.net");
  //   image.crossOrigin = "anonymous";
      
  //   image.src = canvas.toDataURL('png');
    
  //   win.document.write(image.outerHTML);
  //   win.document.close();
  // };

  return(
    <ContainerLayout horizontal centered>
      <FormWrapper>
        <Form onSubmit={handleOnSubmit}  title="Create Your Badge!">
          <Input name="name" placeholder="Name" />
          <Input name="title" placeholder="Title" />
          <Input name="company" placeholder="Company" />
          <Button primary>Create Your Personal Badge!</Button>
        </Form>
        {/* <Button onClick={handleDownloadBadge}>Download Your Badge!</Button> */}
      </FormWrapper>
      <Canvas canvasRef={canvasRef} width='1080' height="1920" crossOrigin='Anonymous'></Canvas>
    </ContainerLayout>
  );
};

export default CreateBadge;
