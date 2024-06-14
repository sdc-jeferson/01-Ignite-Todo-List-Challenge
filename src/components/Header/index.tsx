import { Container } from "./header";
import logoImg from "../../assets/logo.png";

export const Header = () => {
  return (
    <Container>
      <img src={logoImg} alt="logo do site" />
    </Container>
  );
};
