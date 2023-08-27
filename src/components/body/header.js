import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";
import { useFixtureContext } from "../../context/fixture_context";
import {
  FlexDiv,
  H1Wrapper,
  ParaWrapper,
  SpanWrapper,
} from "../component_utils/styled_components";

const Header = () => {
  const { fixtures, isLoading } = useFixtureContext();

  return (
    <Wrapper>
      <H1Wrapper fontSize="1.3rem">
        MATCHES
        {isLoading ? (
          <AiOutlineLoading3Quarters id="spinner" />
        ) : (
          <SpanWrapper paddingLeft="5px" fontSize="0.9rem">
            ({fixtures.site})
          </SpanWrapper>
        )}
      </H1Wrapper>
      {isLoading ? (
        <AiOutlineLoading3Quarters id="spinner" />
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
    </Wrapper>
  );
};

const Wrapper = styled(FlexDiv)`
  height: 55px;
  padding: 0 1vw;
  background-color: black;
  grid-column: 2/4;
  grid-row: 1/2;
  justify-content: space-between;
  gap: 0;

  #spinner {
    font-size: 1.5rem;
    color: #828282;
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
`;

export default Header;
