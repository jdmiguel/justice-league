import { useRef } from 'react';
import { ProfileAppearance } from '@/helpers/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { ProfileCard } from '@/components/ui/Card';
import {
  StyledAppearance,
  StyledAppearanceText,
  StyledAppearanceImage,
  StyledList,
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
    <StyledAppearance data-testid="profile-appearance" ref={appearanceRef}>
      <StyledAppearanceText isVisible={isVisible} xOrigin="left">
        <ProfileCard title="Appearance" color={color}>
          <StyledList>
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
          </StyledList>
        </ProfileCard>
      </StyledAppearanceText>
      <StyledAppearanceImage src={imagePath} isVisible={isVisible} alt="hero appearance" />
      <StyledAppearanceText isVisible={isVisible} xOrigin="right">
        <ProfileCard title="Powers" color={color}>
          <StyledList>
            {powers.map((power) => (
              <li key={power}>
                <strong>{power}</strong>
              </li>
            ))}
          </StyledList>
        </ProfileCard>
      </StyledAppearanceText>
    </StyledAppearance>
  );
};

export default Appearance;
