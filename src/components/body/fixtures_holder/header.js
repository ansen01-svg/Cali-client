import styled from "styled-components";
import { FlexDiv, ParaWrapper } from '../../utils/styled_components';


const bets = ['W1', 'X', 'W2'];

const Header = () => {
    return (
        <HeaderWrapper>
            <Col1Holder />
            <Col2Holder heading={bets} />
        </HeaderWrapper>
    )
}

const Col1Holder = () => {
    return (
        <Col1Wrapper>
            <ParaWrapper color="black" fontSize='0.9rem'>
                TEAMS
            </ParaWrapper>
        </Col1Wrapper>
    )
}

const Col2Holder = ({heading}) => {
    return (
        <Col2Wrapper>
            {
                heading.map((item, index) =>  <OddsHolder key={index} odd={item} /> )
            }
        </Col2Wrapper>
    )
}

const OddsHolder = ({ odd }) => {
    return (
        <HeadingWrapper>
            <ParaWrapper color="black" fontSize='0.9rem'>
                {odd}
            </ParaWrapper>
        </HeadingWrapper>
    )
}

const HeaderWrapper = styled(FlexDiv)`
    width:100%;
    max-width:100%;
    height:45px;
    background-color:#f0725c;
`

const Col1Wrapper = styled(HeaderWrapper)`
    width:50%;
    padding-left:1vw;
    justify-content:flex-start;
`

const Col2Wrapper = styled(Col1Wrapper)`
    padding-right:1vw;
    justify-content:flex-end;
    gap:20px;
`

const HeadingWrapper = styled(FlexDiv)`
    width:4vw;
`

export default Header;