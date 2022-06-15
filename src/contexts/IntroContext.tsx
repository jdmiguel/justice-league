import { ReactNode, createContext, useState, useContext } from 'react';

const IntroContext = createContext({
  isIntroVisible: true,
  hideIntro: () => {},
});

type Props = {
  children: ReactNode;
};

const IntroContextProvider = ({ children }: Props) => {
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  const hideIntro = () => setIsIntroVisible(false);

  const value = {
    isIntroVisible,
    hideIntro,
  };

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
};

const useIntro = () => useContext(IntroContext);

export { IntroContextProvider, useIntro };

export default IntroContext;
