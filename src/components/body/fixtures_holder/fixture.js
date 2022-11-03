import styled from "styled-components";
import { oddsConstructor } from '../../utils/calculators';
import { FlexDiv, ParaWrapper, SpanWrapper } from '../../utils/styled_components';


const Fixture = ({ fixture, setOdds }) => {

    const updateOdds = (fixture) => {
        if (fixture.w1 === undefined || fixture.x === undefined || fixture.w2 === undefined) return;
        setOdds(state => oddsConstructor({ state, fixture, e : null}))
    }
    

    return (
        <FixtureWrapper onClick={() => updateOdds(fixture)}>
            <Col1Holder fixture={fixture} />
            <Col2Holder fixture={fixture} />
        </FixtureWrapper>
    )
}

const Col1Holder = ({ fixture }) => {
    return (
        <Col1Wrapper>
            <Timeholder time={fixture.time} />
            <Teamsholder 
            team1={fixture.team1}
            team2={fixture.team2}
            scores={fixture.scores}
            />
        </Col1Wrapper>
    )
}

const Timeholder = ({ time }) => {
    return (
        <TimeWrapper>
            { time.date && <ParaWrapper fontSize='0.8rem'>{time.date}</ParaWrapper> }
            { time.starts && <ParaWrapper fontSize='0.8rem'>{time.starts}</ParaWrapper> }
            { time.current && <ParaWrapper fontSize='0.8rem'>{time.current}</ParaWrapper> }
        </TimeWrapper>
    )
}

const Teamsholder = ({ team1, team2, scores }) => {
    return (
        <TeamsWrapper>
            <Team team={team1} score={scores ? scores[0] : ''} />
            <Team team={team2} score={scores ? scores[1] : ''} />
        </TeamsWrapper>
    )
}

const Team = ({ team, score }) => {
    return (
        <>
            <ParaWrapper fontSize='0.8rem'>{team} 
                <SpanWrapper className={`${score > 0 ? 'green' : ''}`} 
                fontSize='0.7rem' paddingLeft='10px'
                > 
                    {score}
                </SpanWrapper> 
            </ParaWrapper>
        </>
    )
}

const Col2Holder = ({ fixture }) => {
    return (
        <Col2Wrapper>
            <TeamOdd odd={fixture.w1} />
            <TeamOdd odd={fixture.x} />
            <TeamOdd odd={fixture.w2} />
        </Col2Wrapper>
    )
}

const TeamOdd = ({ odd }) => {
    return (
        <TeamOddWrapper>
            <ParaWrapper fontSize='0.8rem'>
                {odd ? odd : '-'}
            </ParaWrapper>
        </TeamOddWrapper>
    )
}

const FixtureWrapper = styled(FlexDiv)`
    width:100%;
    max-width:100%;
    height:84px;
    padding:0 1vw;
    border-bottom:1px solid #b5b6ba;
    cursor:pointer;
`

const Col1Wrapper = styled(FlexDiv)`
    width:50%;
    height:100%;
    justify-content:flex-start;
    gap:20px;
`

const TimeWrapper = styled(FlexDiv)`
    padding:0.5vh 1vw;
    background-color:#71b77e;
    flex-direction:column;
    gap:5px;
`
const TeamsWrapper = styled(TimeWrapper)`
    padding:2vh 1vw;
    background:none;
    align-items:flex-start;
    justify-content:center;
    gap:10px;

    .green{
        color:#73c3ce;
    }
`

const Col2Wrapper = styled(Col1Wrapper)`
    background:none;
    justify-content:flex-end;
    gap:20px;
    border:none;
`

const TeamOddWrapper = styled(FlexDiv)`
    width:4vw;
`


export default Fixture;