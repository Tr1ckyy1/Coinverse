import { createContext, useContext, useRef } from "react";

const SectionContext = createContext();

const HEADER_FIXED_HEIGHT = 120;

function SectionProvider({ children }) {
  const marketRef = useRef(null);
  const chooseUsRef = useRef(null);
  const joinRef = useRef(null);

  function scrollToSection(ref) {
    const scroll =
      ref.current.getBoundingClientRect().top +
      window.scrollY -
      HEADER_FIXED_HEIGHT;
    window.scrollTo({ top: scroll, behavior: "smooth" });
  }

  return (
    <SectionContext.Provider
      value={{
        scrollToSection,
        marketRef,
        chooseUsRef,
        joinRef,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

function useSection() {
  const context = useContext(SectionContext);
  if (context === undefined)
    throw new Error("SectionContext was used outside the SectionProvider");
  return context;
}

export { SectionProvider, useSection };
