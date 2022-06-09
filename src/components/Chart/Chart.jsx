import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 175px;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: 9fr 1fr;
  grid-gap: .5rem 1rem;
  align-items: end;
  justify-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid hsl(27,66%,92%);

  @media screen and (max-width: 440px) {
    grid-gap: .75rem;
  }
`;

const Bar = styled.div`
  height: ${({percentage}) => `calc(${percentage}%)`};
  width: 100%;
  background-color: ${({percentage}) => percentage === 100 ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"};
  border-radius: 5px;
  /* margin-bottom: 1rem; */
  /* padding-bottom: 1rem; */
`;

const Label = styled.span`
  /* padding-top: 1rem; */
  color: hsl(28, 10%, 53%);
`;

const Chart = () => {
  const [data, setData] = useState([]);
  const [max, setMax] = useState(0);

  const getAmounts = arr => {
    let amounts = [];
    arr.forEach(obj => {
      amounts.push(obj.amount);
    });
    console.log(amounts);
    setMax(Math.max(...amounts));
  };

  const fetchData = async () => {
    let res = await fetch("./data.json");
    let json = await res.json();
    console.log(json);
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getAmounts(data);
  }, [data]);

  return (
    <Container>
      {data.map(data => {
      return (
        // <Column>
          <Bar percentage={Math.round(((data.amount / max) * 100))} />
          // <Label>{data.day}</Label>z
        // </Column>
      )
    })}
      {data.map(data => {
      return (
        // <Column>
          // <Bar percentage={Math.round(((data.amount / max) * 100))} />
          <Label>{data.day}</Label>
        // </Column>
      )
    })}
    </Container>
  )
};

export { Chart };
