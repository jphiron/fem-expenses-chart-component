import styled from "styled-components";
import LogoImg from "../../assets/images/logo.svg";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  background-color: hsl(10, 79%, 65%);
  color: hsl(33, 100%, 98%);
  padding: 1.5rem;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const Text = styled.section`
  h2 {
    font-size: 1rem;
    font-weight: 400;
  }

  div {
    font-size: 1.5rem;
    font-weight: 700;
  }
`

const Logo = styled.img`

`;

const Header = () => {
  return (
    <Container>
      <Text>
        <h2>My balance</h2>
        <div>£921.48</div>
      </Text>
      <Logo src={LogoImg} />
    </Container>
  )
}

export { Header };