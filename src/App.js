import Body from "./components/body";
import Footer from "./components/footer";
import NavBar from "./components/nav";
import MyCalculatorContext from "./context/calculator_context";
import MyFixtureContext from "./context/fixture_context";
import MyModalContext from "./context/modal_context";
import styled from "styled-components";

const App = () => {
  return (
    <AppWrapper>
      <MyFixtureContext>
        <MyModalContext>
          <NavBar />
        </MyModalContext>
        <MyCalculatorContext>
          <MainWrapper>
            <Body />
          </MainWrapper>
        </MyCalculatorContext>
      </MyFixtureContext>
      <Footer />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: calc(10vw + 682px + 341px + 10vw + 50px);
  overflow-x: "auto";
`;

const MainWrapper = styled.div`
  width: 100%;
`;

export default App;
