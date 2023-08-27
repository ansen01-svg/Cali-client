import styled from "styled-components";
import { FlexDiv, H1Wrapper } from "../../component_utils/styled_components";

const Header = ({ title }) => {
  return (
    <HeadWrapper>
      <H1Wrapper fontSize="0.9rem">{title}</H1Wrapper>
    </HeadWrapper>
  );
};

const HeadWrapper = styled(FlexDiv)`
  height: 45px;
  padding: 0 1vw;
  justify-content: flex-start;
  background: black;
`;

export default Header;
