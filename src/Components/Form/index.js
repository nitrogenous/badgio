import { Wrapper, Content, Title } from './styled';

const Form = (props) => {
  const { title, children, onSubmit, onChange } = props;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content onSubmit={onSubmit} onChange={onChange}>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Form;
