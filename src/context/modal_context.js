import { createContext, useContext, useState } from "react";

let ModalContext = createContext();

const MyContext = ({ children }) => {
  let [modalData, setModalData] = useState({
    show: false,
    site: "",
    info: [],
  });

  return (
    <ModalContext.Provider value={{ modalData, setModalData }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};

export default MyContext;
