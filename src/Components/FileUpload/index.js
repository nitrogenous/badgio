import { useState } from 'react';
import { Wrapper, Input } from './styled';

const FileUpload = ({ onChange }) => {
  const [inputText, setInputText] = useState('Select A Badge!');

  const handleChange = (event) => {
    setInputText(event?.target?.files?.[0]?.name || 'Select A Badge!');

    onChange(event);
  };

  return (
    <Wrapper data-text={inputText}>
      <Input type="file" onChange={handleChange} />
    </Wrapper>
  );
};

export default FileUpload;
