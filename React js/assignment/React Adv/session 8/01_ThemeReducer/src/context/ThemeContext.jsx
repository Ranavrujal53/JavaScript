import React, { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

const initialState = {
  theme: "light",
};

// 1. Reducer function (handles the state logic)
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

// 2. Initialization function (checks localStorage on first load)
const initTheme = (defaultState) => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return { ...defaultState, theme: savedTheme };
    }
  }
  return defaultState;
};

export const ThemeProvider = ({ children }) => {
  // 3. Pass initTheme as the third argument to useReducer
  const [state, dispatch] = useReducer(themeReducer, initialState, initTheme);

  // 4. Automatically save to localStorage whenever state.theme changes
  useEffect(() => {
    localStorage.setItem("app-theme", state.theme);
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};