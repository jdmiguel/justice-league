import { useState, useRef, useEffect } from 'react';
import { HeroId, ProfileAppearanceData } from '@/helpers/types';
import { useHero } from '@/contexts/HeroContext';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Card from '@/components/views/Hero/Profile/Card';
import {
  StyledAppearance,
  StyledAppearanceImage,
  StyledCardList,
} from '@/components/views/Hero/Profile/styles';

type Props = {
  color: string;
};

const Appearance: React.FC<Props> = ({ color }) => {
  const [appearanceData, setAppearanceData] = useState<ProfileAppearanceData | null>(null);
  const [powers, setPowers] = useState<string[]>([]);
  const appearanceRef = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(appearanceRef, {
    threshold: 0.4,
    root: null,
    rootMargin: '-20%',
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;
  const { hero: currentHeroId } = useHero();

  useEffect(() => {
    const getAppearance = async (heroId: HeroId) => {
      try {
        const res = await fetch(`/.netlify/functions/getAppearance/${heroId}`);
        const [formattedResponse] = await res.json();
        setAppearanceData(formattedResponse.appearance);
      } catch (err) {
        console.error(err);
      }
    };

    getAppearance(currentHeroId as HeroId);

    const getPowers = async (heroId: HeroId) => {
      try {
        const res = await fetch(`/.netlify/functions/getPowers/${heroId}`);
        const [formattedResponse] = await res.json();
        setPowers(formattedResponse.powers);
      } catch (err) {
        console.error(err);
      }
    };

    getPowers(currentHeroId as HeroId);
  }, [currentHeroId]);

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
