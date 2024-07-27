import styled from "styled-components";
import { FlexDiv } from "../component_utils/styled_components";
import Logo from "./logo";
import Nav from "./nav";

const NavBar = () => {
  return (
    <Wrapper>
      <Logo />
      <Nav />
    </Wrapper>
  );
};

const Wrapper = styled(FlexDiv)`
  width: 100%;
  height: 60px;
  padding: 0 40px;
  background-color: black;
  border-bottom: 0.25rem solid #f0725c;
  justify-content: flex-start;
  gap: 100px;
  position: sticky;
  top: 0;
  left: 0;
`;

export default NavBar;
