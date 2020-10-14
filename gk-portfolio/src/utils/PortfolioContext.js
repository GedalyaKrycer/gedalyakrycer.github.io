import React, { useContext, useState } from "react";

const PortfolioContext = React.createContext();

export const usePortfolioContext = () => {
    return useContext(PortfolioContext);
};


export function PortfolioProvider({ children }) {

    // Controls the nav burger menu on mobile to open and close
    const [toggleBurgerMenu, setToggleBurgerMenu] = useState(true);

    // Stores which page the user is on
    const [amHome, setAmHome] = useState();
    const [amAbout, setAmAbout] = useState();

    return (

          <PortfolioContext.Provider
            value={{
                toggleBurgerMenu,
                setToggleBurgerMenu,
                amHome,
                setAmHome,
                amAbout,
                setAmAbout
            }}
          >
            {children}
          </PortfolioContext.Provider>

      );
}