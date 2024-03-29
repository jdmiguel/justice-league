import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/animations';
import { EnemiesData } from '@/helpers/types';
import Enemy from '@/components/views/Hero/Enemies/Enemy';
import { StyledEnemiesWrapper, StyledEnemies } from '@/components/views/Hero/Enemies/styles';

type Props = {
  color: string;
  semiTransparentColor: string;
  enemiesData: EnemiesData;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Enemies: React.FC<Props> = ({
  color,
  semiTransparentColor,
  enemiesData,
  isLeaving,
  onEndFadeAnimation,
}) => {
  const tweenRef = useRef<GSAPTween>();
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const { colorLogoPath, enemies } = enemiesData;

  return (
    <StyledEnemiesWrapper
      data-testid="enemies"
      ref={mediaRef}
      heroLogoPath={colorLogoPath}
      isLeaving={isLeaving}
    >
      <StyledEnemies>
        {enemies.map((enemy, index) => (
          <Enemy
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
