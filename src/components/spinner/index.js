import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <AiOutlineLoading3Quarters className="spinner" />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
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

export default Spinner;
