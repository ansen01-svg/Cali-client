import styled from "styled-components";
import { useFixtureContext } from "../../context/fixture_context";
import { FlexDiv, ParaWrapper } from "../component_utils/styled_components";
import Spinner from "../spinner";

const Header = () => {
  const { fixtures, isLoading } = useFixtureContext();

  return (
    <Wrapper>
      <MatchAndEventWrapper>
        <h1>MATCHES</h1>
        {isLoading ? (
          <Spinner />
        ) : (
          <span>
            <p>({fixtures.site})</p>
          </span>
        )}
      </MatchAndEventWrapper>
      <TotalEventsWrapper>
        {isLoading ? (
          <Spinner />
        ) : (
          <ParaWrapper
            fontSize="0.9rem"
            color="black"
            padding="1vh 2vw"
            backgroundColor="#f0725c"
          >
            {fixtures.event} ({fixtures.fixtures.length})
          </ParaWrapper>
        )}
      </TotalEventsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(FlexDiv)`
  height: 55px;
  padding: 0 20px;
  background-color: black;
  grid-column: 2/4;
  grid-row: 1/2;
  justify-content: space-between;
  gap: 0;
  z-index: -10;
`;

const MatchAndEventWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h1 {
    font-size: 1.3rem;
  }

  span {
    font-size: 0.9rem;
    color: white;
  }
`;

const TotalEventsWrapper = styled.div``;

export default Header;
