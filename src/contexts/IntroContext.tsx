import { ReactNode, createContext, useState } from 'react';

const IntroContext = createContext({
  isDisplayed: true,
  setDisplayedIntro: () => {},
});

type Props = {
  children: ReactNode;
};

export const IntroContextProvider = ({ children }: Props) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const setDisplayedIntro = () => setIsDisplayed(false);

  const value = {
    isDisplayed,
    setDisplayedIntro,
  };

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
};

export default IntroContext;
