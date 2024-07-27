import styled from "styled-components";
import { ParaWrapper } from "../../component_utils/styled_components";

const Panel = ({ bets }) => {
  return (
    <PanelWrapper>
      <BetsWrapper>
        {bets.map((bet, index) => (
          <ParaWrapper key={index}>{bet} </ParaWrapper>
        ))}
      </BetsWrapper>
    </PanelWrapper>
  );
};

const PanelWrapper = styled.div`
  width: 100%;
  height: 43px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .border {
    width: 100%;
    height: 1px;
    background-color: #f5f5f5;
  }
`;

const BetsWrapper = styled.div`
  // width: 176.16px;
  width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Panel;
