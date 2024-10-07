import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const WorksContext = createContext();

export const WorksProvider = ({ children }) => {
  const [selected, setSelected] = useState();

  return (
    <WorksContext.Provider value={{ selected, setSelected }}>
      {children}
    </WorksContext.Provider>
  );
};

WorksProvider.propTypes = {
  children: PropTypes.element,
};
