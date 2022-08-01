import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/theme';
import { EnemiesData } from '@/helpers/types';
import Card from '@/components/views/Hero/Enemies/Card';
import { StyledEnemiesWrapper, StyledEnemies } from '@/components/views/Hero/Enemies/styles';

type Props = {
  heroLogoPath: string;
  color: string;
  semiTransparentColor: string;
  enemiesData: EnemiesData;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Enemies: React.FC<Props> = ({
  heroLogoPath,
  color,
  semiTransparentColor,
  enemiesData,
  isLeaving,
  onEndFadeAnimation,
}) => {
  const tweenRef = useRef<GSAPTween>();
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!isLeaving) {
      return;
    }

    tweenRef.current = gsap.to(mediaRef.current, {
      duration: 0.5,
      opacity: 0,
      ease: ease.smooth,
    });

    tweenRef.current.then(onEndFadeAnimation);
  }, [isLeaving, onEndFadeAnimation]);

  return (
    <StyledEnemiesWrapper ref={mediaRef} heroLogoPath={heroLogoPath} isLeaving={isLeaving}>
      <StyledEnemies>
        {enemiesData.map((enemy, index) => (
          <Card
            key={enemy.name}
            color={color}
            semiTransparentColor={semiTransparentColor}
            title={enemy.name}
            imagePath={enemy.imagePath}
            description={enemy.description}
            xOrigin={(index + 1) % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </StyledEnemies>
    </StyledEnemiesWrapper>
  );
};

export default Enemies;