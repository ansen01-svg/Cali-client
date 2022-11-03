import styled from "styled-components";
import { FlexDiv, ParaWrapper } from '../../utils/styled_components';


const Panel = ({ bets }) => {
    return (
        <PanelWrapper>
            <BetsWrapper>
                {
                    bets.map((bet, index) => <ParaWrapper key={index} padding='0 1.6vw'>{bet} </ParaWrapper>)
                }
            </BetsWrapper>
        </PanelWrapper>
    )
}

const PanelWrapper = styled.div`
    height:43px;
    padding:0 0.8vw;

    .border{
        width:100%;
        height:1px;
        background-color:#f5f5f5;
    }
`

const BetsWrapper = styled(FlexDiv)`
    width:100%;
    height:100%;
    justify-content:flex-end;
`


export default Panel;