import { useState } from 'react';
import short from 'short-uuid';
import { storage } from '../../Firebase';
import { ContainerLayout, Form, Button, FileUpload, Image, CopyToClipboard } from '../../Components';
import BadgioTemplate from '../../Assets/Images/Badges/badgio-template.png';
import { FormWrapper } from './styled';

const uuid = short.generate();

const CreateNewBadge = () => {
  const [imageAsFile, setImageAsFile] = useState('');
  const [imageAsUrl, setImageAsUrl] = useState('');
  const [badgeUrl, setBadgeUrl] = useState('');
  
  const handleImageAsFile= (event) => {
    const image = event.target.files[0];

    setImageAsFile(imageFile => (image));
  }

  const handleFirebaseUpload = (event) => {
    event.preventDefault();

    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`);
      return;
    }

    const uploadTask = storage.ref(`/badges/${uuid}/${imageAsFile.name}`).put(imageAsFile);

    uploadTask.on('state_changed', (snapShot) => {
      // console.log(snapShot);
    }, (err) => {
      // console.log(err);
    }, () => {
      storage.ref(`badges/${uuid}/`).child(imageAsFile.name).getDownloadURL().then(fireBaseUrl => {
          setImageAsUrl(fireBaseUrl);
          createBadgeUrl();          
        });
    });
  };

  const createBadgeUrl = () => {
    const url = window.location.origin + '/create-badge/' + uuid; 

    setBadgeUrl(url);
  };

  return (
    <ContainerLayout horizontal centered >
      <FormWrapper>
        <Form onSubmit={handleFirebaseUpload} title="Create A New Event Badge!" >
          <FileUpload  
            onChange={handleImageAsFile}
          />
          <Button primary>Upload & Create</Button>
        </Form>
        {badgeUrl && <CopyToClipboard url={badgeUrl}/>} 
      </FormWrapper>
      <Image src={imageAsUrl ? imageAsUrl : BadgioTemplate} alt="badge" />
    </ContainerLayout>
  );
};

export default CreateNewBadge;
