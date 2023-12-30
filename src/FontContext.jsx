import { createContext, useContext, useState } from "react";
export const FontContext = createContext();
export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};
export const FontProvider = ({ children }) => {
  const [font, setFont] = useState("serif");
  const toggleFont = () => {
    setFont((prevFont) => (prevFont === "serif" ? "sans-serif" : "serif"));
  };
  const value = { font, toggleFont };
  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};
