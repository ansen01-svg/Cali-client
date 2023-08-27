import styled from "styled-components";
import { FlexDiv, ParaWrapper } from "../component_utils/styled_components";

const Footer = () => {
  return (
    <FooterWrapper>
      <ParaWrapper fontSize="0.6rem">Bet at your own risk.</ParaWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled(FlexDiv)`
  width: 100vw;
  max-width: 100vw;
  height: 150px;
  background-color: black;
  flex-direction: column;
  margin-top: 20px;
`;

export default Footer;
