import { Container } from './style';

export const SMButton = props => {
  return (
    <a href={props.href}>
      <Container>{props.content}</Container>
    </a>
  );
};
