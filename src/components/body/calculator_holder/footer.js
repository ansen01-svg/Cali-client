import styled from "styled-components";
import { oddsConstructor } from '../../utils/calculators';
import { FlexDiv, ParaWrapper, SpanWrapper } from '../../utils/styled_components';


const Footer = ({ odds, setOdds }) => {
    return (
        <Wrapper>
            <TotalOddsHolder odds={odds} />
            <AmountHolder odds={odds} setOdds={setOdds} />
        </Wrapper>
    )
}

const TotalOddsHolder = ({ odds }) => {
    return (
        <ChildWrapper>
            <ParaWrapper color="#f2cd5f">
                Total odds : 
                <SpanWrapper
                paddingLeft='10px'
                className={`${(odds.totalOdds < 1 && odds.totalOdds !== 0) ? 'green' : 'red'}`}
                >
                    {odds.totalOdds} %
                </SpanWrapper>
            </ParaWrapper>
        </ChildWrapper>
    )
}

const AmountHolder = ({ odds, setOdds }) => {

    let handleChange = (e) => {
        if (odds.w1.odd === 0 || odds.x.odd === 0 || odds.w2.odd === 0) return;
        if (e.target.value < 0) return;
        setOdds(state => oddsConstructor({ state, fixture : null, e }))
    }


    return (
        <ChildWrapper justifyContent='flex-end'>
            <ParaWrapper color="#f2cd5f">
                Amount :
            </ParaWrapper>
            <form>
                <InputWrapper 
                id="amountInput"
                type='number'
                placeholder="00:00" 
                name="totalAmount"
                value={odds.totalAmount}
                onChange={(e) => handleChange(e)}
                autoFocus
                />
            </form>
        </ChildWrapper>
    )
}

const Wrapper = styled(FlexDiv)`
    height:58px;
    padding:0 1vw;
    border-top:0.1px solid white;
`

const ChildWrapper = styled(FlexDiv)`
    width:50%;
    height:100%;
    justify-content:${props => props.justifyContent || 'flex-start'};
    gap:10px;

    .green{
        color:#71b77e;
    }
    .red{
        color:#f0725c;
    }
`

export const InputWrapper = styled.input`
    width:6vw;
    height:30px;
    background:red;
    padding-left:10px;
    border:0.1px solid white;
    outline:none;
    background:none;
    color:white;
    font-family:Poppins, sans-serif;
    font-size:0.7rem;
`


export default Footer;