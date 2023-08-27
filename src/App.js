import Body from "./components/body";
import Footer from "./components/footer";
import Nav from "./components/nav";
import MyCalculatorContext from "./context/calculator_context";
import MyFixtureContext from "./context/fixture_context";
import MyModalContext from "./context/modal_context";

const App = () => {
  return (
    <div className="App">
      <MyFixtureContext>
        <MyModalContext>
          <Nav />
        </MyModalContext>
        <MyCalculatorContext>
          <Body />
        </MyCalculatorContext>
      </MyFixtureContext>
      <Footer />
    </div>
  );
};

export default App;
