import styled from "styled-components";
import { useFixtureContext } from "../../../context/fixture_context";
import Fixture from "./fixture";
import Header from "./header";
import Spinner from "../../spinner";

const FixturesHolder = () => {
  const { fixtures, isLoading } = useFixtureContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Header />
      <div className="fixtures-holder">
        {fixtures.fixtures.map((item) => (
          <Fixture key={item.id} fixture={item} />
        ))}
      </div>
    </Wrapper>
  );
};

const Loading = () => {
  return (
    <Wrapper flex setHeight>
      <Spinner />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 682px;
  height: ${(props) => (props.setHeight ? "100vh" : "")};
  background: #333;
  grid-column: 2/3;
  grid-row: 2 / span 4;
  padding-bottom: 2vh;
  display: ${(props) => (props.flex ? "flex" : "")};
  align-items: ${(props) => (props.flex ? "center" : "")};
  justify-content: ${(props) => (props.flex ? "center" : "")};

  .fixtures-holder {
    width: 100%;
  }
`;

export default FixturesHolder;
