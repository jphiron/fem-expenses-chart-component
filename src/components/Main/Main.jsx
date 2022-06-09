import styled from "styled-components";
import { Chart } from "../Chart/Chart";

const Container = styled.main`
  background-color: hsl(33, 100%, 98%);
  padding: 1.5rem 1.5rem 2rem;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  border-radius: 15px;

  @media screen and (max-width: 440px) {
    padding: 1rem;
  }
`;

const Text = styled.section`
  color: hsl(25, 47%, 15%);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 4rem;
  }
`

const Bottom = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1.5rem;
`

const Total = styled.section`
  display: flex;
  flex-flow: column nowrap;
`

const TotalLabel = styled.span`
  font-size: .9rem;
  color: hsl(28, 10%, 53%);
`

const TotalValue = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`

const Percentage = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;
`

const PercentageValue = styled.span`
  font-size: 1rem;
  font-weight: 700;
`

const PercentageLabel = styled.span`
  font-size: .9rem;
  color: hsl(28, 10%, 53%);
`

const Main = () => {
  return (
    <Container>
      <Text>
        <h2>Spending - Last 7 days</h2>
      </Text>
      <Chart/>
      <Bottom>
        <Total>
          <TotalLabel>Total this month</TotalLabel>
          <TotalValue>£478.33</TotalValue>
        </Total>
        <Percentage>
          <PercentageValue>+2.4%</PercentageValue>
          <PercentageLabel>from last month</PercentageLabel>
        </Percentage>
      </Bottom>
    </Container>
  )
}

export { Main };