import { useState } from 'react';
import short from 'short-uuid';
import { storage } from '../../Firebase';
import { ContainerLayout, Form } from '../../Components';

const uuid = short.generate();

const CreateNewBadge = () => {
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState('');
  
  const handleImageAsFile= (event) => {
    const image = event.target.files[0];

    setImageAsFile(imageFile => (image));
  }

  const handleFireBaseUpload = e => {
    e.preventDefault()

    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`);
      return;
    }
    const uploadTask = storage.ref(`/badges/${uuid}/${imageAsFile.name}`).put(imageAsFile);

    uploadTask.on('state_changed', (snapShot) => {
      console.log(snapShot);
    }, (err) => {
      console.log(err);
    }, () => {
      storage.ref(`badges/${uuid}/`).child(imageAsFile.name).getDownloadURL().then(fireBaseUrl => {
          setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}));
        });
    });
  };

  return (
    <ContainerLayout>
      <Form onSubmit={handleFireBaseUpload} >
        <input 
          type="file" 
          onChange={handleImageAsFile}
        />
        <button>upload to firebase</button>
      </Form>

      <img src={imageAsUrl?.imgUrl} alt="badge" />
    </ContainerLayout>
  );
};

export default CreateNewBadge;
