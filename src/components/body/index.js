import styled from "styled-components";
import { useFixtureContext } from "../../context/fixture_context";
import { H1Wrapper } from "../component_utils/styled_components";
import CalculatorHolder from "./calculator_holder";
import FixturesHolder from "./fixtures_holder";
import Header from "./header";

const Body = () => {
  const { error } = useFixtureContext();

  if (error.error) {
    return <Error error={error.msg} />;
  }

  return <Main />;
};

const Error = ({ error }) => {
  return (
    <Wrapper setHeight flex>
      <H1Wrapper fontSize="1rem" color="#828282">
        {error}. Reload again
      </H1Wrapper>
    </Wrapper>
  );
};

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <FixturesHolder />
      <CalculatorHolder />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: ${(props) => (props.setHeight ? "100vh" : "")};
  display: ${(props) => (props.flex ? "flex" : "grid")};
  grid-template-columns: 10vw auto auto 10vw;
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
  align-items: ${(props) => (props.flex ? "center" : "")};
  justify-content: ${(props) => (props.flex ? "center" : "")};
  z-index: -1;
`;

export default Body;
