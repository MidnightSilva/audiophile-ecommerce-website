import { useState, createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  //message
  const [displayModal, setDisplayModal] = useState(false);

  const tiggerModal = (event) => {
       console.log(event.target);

       console.log("Image clicked");
        console.log(displayModal);
    displayModal ? setDisplayModal(false) : setDisplayModal(true);
  };

  // contact me messager

  const value = {
    tiggerModal,
    displayModal,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
