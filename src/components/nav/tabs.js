import { AiOutlineCaretDown } from "react-icons/ai";
import styled from "styled-components";
import { useModalContext } from "../../context/modal_context";
import { ParaWrapper } from "../component_utils/styled_components";
import NavModal from "../nav_modal";

const Tab = ({ data }) => {
  const { setModalData, modalData } = useModalContext();

  const setData = (data) => {
    setModalData({ show: true, site: data.site, info: data.info });
  };

  const removeData = () => setModalData({ show: false, site: "", info: [] });

  return (
    <TabsWrapper
      onMouseOverCapture={() => setData(data)}
      onMouseLeave={removeData}
    >
      <InnerWrapper data={data} />
      <div className="slider"></div>
      {modalData.show && <NavModal />}
    </TabsWrapper>
  );
};

const InnerWrapper = ({ data }) => {
  return (
    <Para>
      <ParaWrapper fontSize="0.9rem">{data.site}</ParaWrapper>
      <Button>
        <AiOutlineCaretDown className="drop_down" />
      </Button>
    </Para>
  );
};

const TabsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0;
  cursor: pointer;
  overflow-x: hidden;
  &:hover .drop_down {
    transform: rotate(180deg);
    transition: all 0.3s linear;
  }
  &:hover .slider {
    transform: translateX(0);
    transition: all 0.3s linear;
    padding: 0.2rem 0;
  }

  .slider {
    width: 100%;
    padding: 0;
    background-color: #f0725c;
    transform: translateX(-102%);
    transition: all 0.3s linear;
  }
`;

const Para = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .drop_down {
    color: white;
    font-size: 11px;
    transform: rotate(0);
    transition: all 0.3s linear;
  }
`;

export default Tab;
