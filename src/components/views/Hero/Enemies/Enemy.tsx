import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { EnemyCard } from '@/components/ui/Card';
import { StyledEnemy } from '@/components/views/Hero/Enemies/styles';

type Props = {
  color: string;
  semiTransparentColor: string;
  title: string;
  imagePath: string;
  description: string;
  xOrigin: 'left' | 'right';
};

const Enemy: React.FC<Props> = (props) => {
  const enemyRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(enemyRef, {
    threshold: 0.4,
    root: null,
    rootMargin: '-12%',
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <StyledEnemy ref={enemyRef} isVisible={isVisible} xOrigin={props.xOrigin}>
      <EnemyCard {...props} />
    </StyledEnemy>
  );
};

export default Enemy;
