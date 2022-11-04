import styled from "styled-components";
import { useModalContext } from "../../context/modal_context";
import NavOptions from "./nav_options";


const NavModal = () => {

    const { modalData } = useModalContext();

    return (
        <ModalWrapper>
            {
                modalData.info.map(item => <NavOptions key={item.id} event={item.event} site={modalData.site} url={item.url} /> )
            }
        </ModalWrapper>
    ) 
}

const ModalWrapper = styled.div`
    width:100vw;
    max-width:100vw;
    height:60px;
    background-color:#292929;
    box-shadow:0 4px 4px rgba(0,0,0,0.2);
    display:flex;
    align-items:flex-end;
    justify-content:flex-start;
    padding-left:135px;
    position:fixed;
    top:calc(60px - 0.25rem - 0.1rem);
    left:0;
    z-index:5;
`


export default NavModal