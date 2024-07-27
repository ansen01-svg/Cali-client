import styled from "styled-components";
import { useCalculatorContext } from "../../../context/calculator_context";

const titles = ["Odds", "Bet amount", "Returns"];

const Main = () => {
  let { odds } = useCalculatorContext();

  return (
    <Wrapper>
      <TitleHolder />
      <RestHolder odds={odds} />
    </Wrapper>
  );
};

const TitleHolder = () => {
  return (
    <TitleHolderWrapper>
      {titles.map((title, index) => (
        <p key={index}>{title}</p>
      ))}
    </TitleHolderWrapper>
  );
};

const RestHolder = ({ odds }) => {
  return (
    <RestHolderWrapper>
      <OddHolder num1={odds.w1.odd} num2={odds.x.odd} num3={odds.w2.odd} />
      <OddHolder
        num1={odds.w1.betAmount}
        num2={odds.x.betAmount}
        num3={odds.w2.betAmount}
      />
      <OddHolder
        num1={odds.w1.returns}
        num2={odds.x.returns}
        num3={odds.w2.returns}
      />
    </RestHolderWrapper>
  );
};

const OddHolder = ({ num1, num2, num3 }) => {
  return (
    <div className="odd-holder">
      <p>{num1}</p>
      <p>{num2}</p>
      <p>{num3}</p>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 162px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleHolderWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;

  p {
    font-size: 0.7rem;
    color: #f2cd5f;
  }
`;

const RestHolderWrapper = styled.div`
  width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;

  .odd-holder {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: 0.7rem;
  }
`;

export default Main;
