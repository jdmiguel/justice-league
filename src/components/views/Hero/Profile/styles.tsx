import styled from 'styled-components';

export const StyledProfileWrapper = styled.main<{ heroLogoPath: string }>`
  overflow: hidden;
  position: relative;
  min-height: calc(100vh - 85px);
  &:before {
    background-image: ${({ heroLogoPath }) => `url(${heroLogoPath})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: 100%;
    opacity: 0.1;
    position: absolute;
    z-index: 1;
    width: 100%;
  }
`;

export const StyledProfile = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: '100%';
  padding: 100px 30px;
  width: 1400px;
`;

export const StyledIntro = styled.div`
  align-items: center;
  display: flex;
  gap: 100px;
`;

export const StyledIntroImage = styled.img<{ semiTransparentColor: string }>`
  border-radius: 50%;
  box-shadow: ${({ semiTransparentColor }) => `0px 0px 16px 4px ${semiTransparentColor}`};
  height: 380px;
  widht: 380px;
`;

export const StyledIntroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const StyledIntroTitle = styled.h2`
  font-weight: 700;
  font-size: 70px;
  line-height: 0;
`;
export const StyledIntroSubtitle = styled.h3`
  font-size: 40px;
  line-height: 0;
`;
export const StyledIntroDescription = styled.p`
  font-size: 20px;
  line-height: 30px;
`;
