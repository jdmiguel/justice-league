import { useRef } from 'react';
import { ProfileAppearanceData } from '@/helpers/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Card from '@/components/views/Hero/Profile/Card';
import {
  StyledAppearance,
  StyledAppearanceImage,
  StyledCardList,
} from '@/components/views/Hero/Profile/styles';

type Props = {
  color: string;
  appearanceData: ProfileAppearanceData | null;
  powers: string[];
};

const Appearance: React.FC<Props> = ({ color, appearanceData, powers }) => {
  const appearanceRef = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(appearanceRef, {
    threshold: 0.4,
    root: null,
    rootMargin: '-20%',
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <StyledAppearance ref={appearanceRef}>
      <Card title="Appearance" color={color} isVisible={isVisible}>
        <StyledCardList>
          <li>
            race: <strong>{appearanceData?.race}</strong>
          </li>
          <li>
            height: <strong>{appearanceData?.height}</strong>
          </li>
          <li>
            weight: <strong>{appearanceData?.weight}</strong>
          </li>
          <li>
            eye color: <strong>{appearanceData?.eyeColor}</strong>
          </li>
          <li>
            hair color: <strong>{appearanceData?.hairColor}</strong>
          </li>
        </StyledCardList>
      </Card>
      <StyledAppearanceImage src={appearanceData?.imagePath} isVisible={isVisible} alt="hero" />
      <Card title="Powers" color={color} isVisible={isVisible} xOrigin="right">
        <ul>
          {powers.map((power) => (
            <li key={power}>
              <strong>{power}</strong>
            </li>
          ))}
        </ul>
      </Card>
    </StyledAppearance>
  );
};

export default Appearance;
