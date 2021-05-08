import { useRef } from 'react';
import { Wrapper, Input } from './styled';

const CopyToClipboard = ({ url }) => {
  const inputElement = useRef(null);

  const copy = () => {
    inputElement.current.select();
    inputElement.current.setSelectionRange(0, 99999); /* For mobile devices */
  
    document.execCommand("copy");  
  }

  return (
    <Wrapper data-text={url} onClick={copy}>
      <Input value={url} ref={inputElement} />
    </Wrapper>
  );
};

export default CopyToClipboard;
