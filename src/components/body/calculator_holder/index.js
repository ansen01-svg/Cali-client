import styled from "styled-components";
import { FlexDiv } from '../../utils/styled_components';
import FootballCalc from "./calculator";

let bets = {
    football : ['W1', 'X', 'W2'],
    cricket : ['W1', 'W2'],
}


const CalculatorHolder = () => {

    return (
        <Wrapper>
            <FootballCalc bets={bets.football} />
        </Wrapper>
    )
}

const Wrapper = styled(FlexDiv)`
    width:25vw;
    grid-column:3/4;
    grid-row:2/3;
    flex-direction:column;
    gap:20px;
    position:sticky;
    top:calc(62.69px + 20px);
    z-index:-1;
`


export default CalculatorHolder;