import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const WorksContext = createContext();

const selectedFromStorage = JSON.parse(
  localStorage.getItem("selected") || "{}"
);

export const WorksProvider = ({ children }) => {
  const initialLoader = false;
  const [loader, setLoader] = useState(initialLoader ? false : true);
  //   const [loader, setLoader] = useState(false);
  const [selected, setSelected] = useState(selectedFromStorage);
  const [scrollOrientation, setScrollOrientation] = useState("vertical");
  const [clickedIndex, setClickedIndex] = useState();
  const [mobile] = useState(window.innerWidth > 768 ? false : true);

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  });

  return (
    <WorksContext.Provider
      value={{
        loader,
        setLoader,
        selected,
        setSelected,
        scrollOrientation,
        setScrollOrientation,
        clickedIndex,
        setClickedIndex,
        mobile,
      }}
    >
      {children}
    </WorksContext.Provider>
  );
};

WorksProvider.propTypes = {
  children: PropTypes.element,
};
