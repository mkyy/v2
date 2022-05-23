import { Container } from './style';

export const Button = props => {
  return (
    <a href={props.href}>
      <Container>{props.content}</Container>
    </a>
  );
};
