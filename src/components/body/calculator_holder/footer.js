import styled from "styled-components";
import { useCalculatorContext } from "../../../context/calculator_context";
import { oddsConstructor } from "../../component_utils/calculators";
import { FlexDiv } from "../../component_utils/styled_components";

const Footer = () => {
  const { odds, setOdds } = useCalculatorContext();

  return (
    <Wrapper>
      <TotalOddsHolder odds={odds} />
      <AmountHolder odds={odds} setOdds={setOdds} />
    </Wrapper>
  );
};

const TotalOddsHolder = ({ odds }) => {
  return (
    <TotalOddsWrapper>
      <p>Total odds: </p>
      <p
        className={`${
          odds.totalOdds < 1 && odds.totalOdds !== 0 ? "green" : "red"
        }`}
      >
        {odds.totalOdds} %
      </p>
    </TotalOddsWrapper>
  );
};

const AmountHolder = ({ odds, setOdds }) => {
  let handleChange = (e) => {
    if (odds.w1.odd === 0 || odds.x.odd === 0 || odds.w2.odd === 0) return;
    if (e.target.value < 0) return;
    setOdds((state) => oddsConstructor({ state, fixture: null, e }));
  };

  return (
    <AmountHolderWrapper>
      <p>Amount :</p>
      <label htmlFor="amountInput">Amount :</label>
      <input
        id="amountInput"
        type="number"
        placeholder="00"
        name="totalAmount"
        value={odds.totalAmount}
        onChange={(e) => handleChange(e)}
        autoFocus
      />
    </AmountHolderWrapper>
  );
};

const Wrapper = styled(FlexDiv)`
  height: 58px;
  padding: 0 10px;
  border-top: 0.1px solid white;
  justify-content: space-between;
`;

const TotalOddsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    font-size: 0.7rem;
    color: #f2cd5f;
  }

  .green {
    color: #71b77e;
  }
  .red {
    color: #f0725c;
  }
`;

const AmountHolderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    font-size: 0.7rem;
    color: #f2cd5f;
  }

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  input {
    width: 80px;
    height: 30px;
    padding-left: 10px;
    border: 0.1px solid white;
    outline: none;
    background: none;
    color: white;
    font-family: Poppins, sans-serif;
    font-size: 0.7rem;
    z-index: 1;
  }
`;

export default Footer;
