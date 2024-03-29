import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import Panel from "./panel";

const FootballCalc = ({ bets }) => {
  return (
    <FootballCalcWrapper>
      <Header title="CALCULATOR" />
      <Panel bets={bets} />
      <Main />
      <Footer />
    </FootballCalcWrapper>
  );
};

export const FootballCalcWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  background-color: #081f2c;
`;

export default FootballCalc;
