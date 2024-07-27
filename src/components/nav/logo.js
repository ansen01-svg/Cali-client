import styled from "styled-components";
import { FlexDiv } from "../component_utils/styled_components";

const Logo = () => {
  return (
    <Wrapper>
      <a href="/" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        CALI
      </a>
    </Wrapper>
  );
};

export const Wrapper = styled(FlexDiv)`
  height: 100%;
`;

export default Logo;
