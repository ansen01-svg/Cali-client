import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import Panel from "./panel";


const FootballCalc = ({ bets, setOdds, odds }) => {   
    return (
        <FootballCalcWrapper>
            <Header title='CALCULATOR' />
            <Panel bets={bets} />
            <Main odds={odds} />
            <Footer odds={odds} setOdds={setOdds} />
        </FootballCalcWrapper>
    )
}

export const FootballCalcWrapper = styled.div`
    width:100%;
    max-width:100%;
    background-color:#081f2c;
`


export default FootballCalc;