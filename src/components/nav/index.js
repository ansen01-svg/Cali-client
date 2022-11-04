import styled from 'styled-components';
import data from '../../utils/data';
import { FlexDiv } from '../utils/styled_components';
import Logo from './logo';
import Tab from './tabs';


const Nav = () => {

    return (
        <Wrapper>
            <Logo />
            {
                data.map(item => <Tab key={item.id} data={item} /> )
            }
        </Wrapper>
    )
}

const Wrapper = styled(FlexDiv)`
    width:100vw;
    max-width:100vw;
    height:60px;
    background-color:black;
    border-bottom:0.25rem solid #f0725c;
    justify-content:flex-start;
    position:sticky;
    top:0;
    left:0;
`


export default Nav;