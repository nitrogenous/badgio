import { useState, useEffect } from 'react';
import { storage } from '../../Firebase';
import { ContainerLayout } from '../../Components';

const CreateBadge = (props) => {
  const { match: { params: { id } }} = props;
  const [imageAsUrl, setImageAsUrl] = useState('');

  useEffect(() => {
    storage.ref(`badges/${id}/`).listAll().then(res => {
      res?.items?.[0]?.getDownloadURL()?.then(url => {
        setImageAsUrl(url);
      })
    });
  }, [id]);
  
  return(
    <ContainerLayout>
      <img src={imageAsUrl} alt="badge" />
    </ContainerLayout>
  );
};

export default CreateBadge;