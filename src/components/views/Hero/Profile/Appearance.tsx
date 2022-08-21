import { useRef } from 'react';
import { ProfileAppearance } from '@/helpers/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Card from '@/components/views/Hero/Profile/Card';
import {
  StyledAppearance,
  StyledAppearanceImage,
  StyledCardList,
} from '@/components/views/Hero/Profile/styles';

type Props = {
  data: ProfileAppearance;
  powers: string[];
  color: string;
};

const Appearance: React.FC<Props> = ({
  data: { race, height, weight, eyeColor, hairColor, imagePath },
  powers,
  color,
}) => {
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
            race: <strong>{race}</strong>
          </li>
          <li>
            height: <strong>{height}</strong>
          </li>
          <li>
            weight: <strong>{weight}</strong>
          </li>
          <li>
            eye color: <strong>{eyeColor}</strong>
          </li>
          <li>
            hair color: <strong>{hairColor}</strong>
          </li>
        </StyledCardList>
      </Card>
      <StyledAppearanceImage src={imagePath} isVisible={isVisible} alt="hero" />
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
