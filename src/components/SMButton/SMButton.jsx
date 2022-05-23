import { Container } from './style';

export const SMButton = props => {
  return (
    <a href={props.href} target='_blank'>
      <Container>{props.content}</Container>
    </a>
  );
};
