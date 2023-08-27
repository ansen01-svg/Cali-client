import styled from "styled-components";
import { useCalculatorContext } from "../../../context/calculator_context";
import { FlexDiv, ParaWrapper } from "../../component_utils/styled_components";

const titles = ["Odds", "Bet amount", "Returns"];

const Main = () => {
  let { odds } = useCalculatorContext();

  return (
    <Wrapper>
      <Titles />
      <Rest odds={odds.w1} />
      <Rest odds={odds.x} />
      <Rest odds={odds.w2} />
    </Wrapper>
  );
};

const Titles = () => {
  return (
    <CommonWrapper>
      {titles.map((title, index) => (
        <Para title={title} key={index} />
      ))}
    </CommonWrapper>
  );
};

const Para = ({ title }) => {
  return (
    <ParaWrapper color="#f2cd5f">
      {title !== "Odds" ? `${title} (Rs)` : title}
    </ParaWrapper>
  );
};

const Rest = ({ odds }) => {
  return (
    <CommonWrapper width="18%" align="center">
      <ParaWrapper>{odds.odd}</ParaWrapper>
      <ParaWrapper>{odds.betAmount}</ParaWrapper>
      <ParaWrapper>{odds.returns}</ParaWrapper>
    </CommonWrapper>
  );
};

const Wrapper = styled(FlexDiv)`
  width: 100%;
  height: 162px;
  padding: 0 1vw;
  align-items: flex-start;
  gap: 7px;
`;

const CommonWrapper = styled.div`
  width: ${(props) => props.width || "calc(100% - 54% - 21px)"};
  height: 100%;
  padding: 3vh 0;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: center;
  gap: 30px;
`;

export default Main;
