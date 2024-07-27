import styled from "styled-components";
import data from "../../utils/data";
import { FlexDiv } from "../component_utils/styled_components";
import Tab from "./tabs";

const Nav = () => {
  return (
    <NavWrapper>
      {data.map((item) => (
        <Tab key={item.id} data={item} />
      ))}
    </NavWrapper>
  );
};

const NavWrapper = styled(FlexDiv)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default Nav;
