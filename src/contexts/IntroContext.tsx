import { ReactNode, createContext, useState, useContext } from 'react';

const IntroContext = createContext({
  isDisplayed: true,
  setDisplayedIntro: () => {},
});

type Props = {
  children: ReactNode;
};

const IntroContextProvider = ({ children }: Props) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const setDisplayedIntro = () => setIsDisplayed(false);

  const value = {
    isDisplayed,
    setDisplayedIntro,
  };

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
};

const useIntro = () => useContext(IntroContext);

export { IntroContextProvider, useIntro };

export default IntroContext;
