import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { StyledNavigationDemo } from '@/components/ui/styles';

const NavigationDemo: React.FC = () => {
  const timelineRef = useRef<GSAPTimeline>();
  const wheelRef = useRef<HTMLLIElement>(null);
  const clickRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!wheelRef.current || !clickRef.current) {
      return;
    }

    timelineRef.current = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    timelineRef.current
      .to(wheelRef.current, {
        duration: 0.5,
        opacity: 1,
        ease: 'linear',
      })
      .to(
        wheelRef.current,
        {
          duration: 0.5,
          opacity: 0,
          ease: 'linear',
        },
        '+=4',
      )
      .to(
        clickRef.current,
        {
          duration: 0.5,
          opacity: 1,
          ease: 'linear',
        },
        '+=0.5',
      )
      .to(
        clickRef.current,
        {
          delay: 2,
          duration: 0.5,
          opacity: 0,
          ease: 'linear',
        },
        '+=4',
      )
      .startTime(2);

    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <StyledNavigationDemo>
      <h4>To navigate the menu:</h4>
      <ul>
        <li ref={wheelRef}>
          <span>use the mouse wheel</span>
          <figure>
            <img src="/mouse-icon.svg" alt="mouse" />
            <img src="/hand-finger-icon.svg" alt="hand finger" />
          </figure>
        </li>
        <li ref={clickRef}>
          <span>click on the side menu</span>
          <figure>
            <img src="/menu-icon.svg" alt="menu" width={16} />
            <img src="/hand-finger-icon.svg" alt="hand finger" />
          </figure>
        </li>
      </ul>
    </StyledNavigationDemo>
  );
};

export default NavigationDemo;
