"use client";

import React, { createContext, useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

interface ContextState {
  activeSection: string;
  setActiveSection: (section: Section) => void;
}

const AppContext = createContext<ContextState | null>(null);

type Section = "home" | "projects" | "experience" | "contact";

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  return (
    <AppContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </AppContext.Provider>
  );
};

function useAppContext(): ContextState {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export { ContextProvider, useAppContext };
