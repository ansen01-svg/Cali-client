import styled from "styled-components";
import { FlexDiv, ParaWrapper } from "../component_utils/styled_components";

const Footer = () => {
  return (
    <FooterWrapper>
      <ParaWrapper fontSize="0.7rem">
        &copy; 2023. Cali. All rights reserved.
      </ParaWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled(FlexDiv)`
  width: 100%;
  height: 150px;
  background-color: black;
  flex-direction: column;
  margin-top: 20px;
`;

export default Footer;
