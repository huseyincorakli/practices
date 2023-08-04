import { useContext, createContext } from 'react';

interface MainContextValue {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>
  setLogoText: React.Dispatch<React.SetStateAction<string>>;
}

const MainContext = createContext<MainContextValue >({
  theme:'light',
  setTheme:() => {},
  setLogoText: () => {},
});

export { MainContext, useContext };