import styled from "styled-components";
import { useFixtureContext } from "../../context/fixture_context";
import CalculatorHolder from "./calculator_holder";
import FixturesHolder from "./fixtures_holder";
import Header from "./header";

const errorText = `Failed to load fixtures. Please reload again`;

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
      <p className="error-msg">{errorText}</p>
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
  width: 100%;
  height: ${(props) => (props.setHeight ? "100vh" : "")};
  display: ${(props) => (props.flex ? "flex" : "grid")};
  grid-template-columns: 10vw auto auto 10vw;
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
  align-items: ${(props) => (props.flex ? "center" : "")};
  justify-content: ${(props) => (props.flex ? "center" : "")};
  z-index: -1;

  .error-msg {
    font-size: 1rem;
    color: #828282;
    text-align: center;
  }
`;

export default Body;
