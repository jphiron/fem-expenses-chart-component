import { useEffect, useState } from "react";
import styled from "styled-components";

let currentDotw;

const Container = styled.div`
  height: 175px;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: 9fr 1fr;
  grid-gap: 0.5rem 1rem;
  align-items: end;
  justify-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid hsl(27, 66%, 92%);

  @media screen and (max-width: 440px) {
    grid-gap: 0.75rem;
  }
`;

const Amount = styled.span`
  position: absolute;
  top: -2.5rem;
  font-weight: 700;
  color: hsl(33, 100%, 98%);
  background-color: hsl(25, 47%, 15%);
  padding: .33rem;
  border-radius: 5px;
  opacity: 0;
  transition: all .15s;

  @media screen and (max-width: 460px) {
    top: -2rem;
    font-size: .8rem;
  }
`;

const Bar = styled.div`
  display: flex;
  justify-content: center;
  height: ${({ percentage }) => `calc(${percentage}%)`};
  width: 100%;
  background-color: ${({ dotw }) =>
    dotw === currentDotw ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"};
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  transition: all .15s ease-out;

  &:hover {
    background-color: ${({ dotw }) =>
    dotw === currentDotw ? "hsl(186, 34%, 75%)" : "hsl(10, 79%, 75%)"};

    & ${Amount} {
      opacity: 1;
    }
  }
`;

const Day = styled.span`
  /* padding-top: 1rem; */
  color: hsl(28, 10%, 53%);
`;

const Chart = () => {
  const [data, setData] = useState([]);
  const [max, setMax] = useState(0);
  // const [currentDotw,] = useState(new Date().getDay());

  const daysOfTheWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const weekdayNumbers = [6, 0, 1, 2, 3, 4, 5];

  const getAmounts = arr => {
    let amounts = [];
    arr.forEach(obj => {
      amounts.push(obj.amount);
    });
    setMax(Math.max(...amounts));
  };

  const fetchData = async () => {
    let res = await fetch("./data.json", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    let json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getAmounts(data);
  }, [data]);

  useEffect(() => {
    currentDotw = weekdayNumbers[new Date().getDay()];
  }, [])

  return (
    <Container>
      {data.map((data, i) => {
        return (
          <Bar dotw={i} key={`${daysOfTheWeek[i]}-bar`} percentage={Math.round((data.amount / max) * 100)}>
            <Amount key={`${daysOfTheWeek[i]}-amount`}>£{data.amount}</Amount>
          </Bar>
        );
      })}
      {data.map((data, i) => {
        return <Day key={`${daysOfTheWeek[i]}-label`}>{data.day}</Day>;
      })}
    </Container>
  );
};

export { Chart };
