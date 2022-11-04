import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";
import { useFixtureContext } from "../../../context/fixture_context";
import Fixture from "./fixture";
import Header from "./header";


const FixturesHolder = () => {

    const { fixtures, isLoading } = useFixtureContext();

    if (isLoading) {
        return <Loading />
    }

    return (
        <Wrapper>
            <Header />
            {
                fixtures.fixtures.map(item => <Fixture  key={item.id} fixture={item} /> )
            }
        </Wrapper>
    )
}

const Loading = () => {
    return (
        <Wrapper flex setHeight>
            <AiOutlineLoading3Quarters id="spinner" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:50vw;
    height:${props => props.setHeight ? '100vh' : ''};
    background:#333;
    grid-column:2/3;
    grid-row:2/span 4;
    padding-bottom:2vh;
    display:${props => props.flex ? 'flex' : ''};
    align-items:${props => props.flex ? 'center' : ''};
    justify-content:${props => props.flex ? 'center' : ''};

    #spinner{
        font-size:2rem;
        color:#828282;
        animation: rotate 1.5s infinite linear;

        @keyframes rotate {
            0% {
              transform: rotate(0); 
            }
            100% {
              transform: rotate(360deg); 
            } 
        }
    }
`


export default FixturesHolder;