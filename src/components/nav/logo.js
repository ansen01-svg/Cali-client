import styled from 'styled-components';
import { FlexDiv, H1Wrapper } from '../utils/styled_components';


const Logo = () => {
    return (
        <Wrapper>
            <H1Wrapper color='#f5f5f5' padding='0 20px'>
                CALI
            </H1Wrapper>
        </Wrapper>
    )
}

export const Wrapper = styled(FlexDiv)`
    height:100%;
    padding:0 2vw;
    gap:5px;
`


export default Logo