import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { theme } from '@/helpers/theme';
import { StyledLogo } from '@/components/views/Intro/styles';

const Logo: React.FC = () => {
  const timelineRef = useRef<GSAPTimeline>();
  const logoRef = useRef<SVGSVGElement>(null);
  const logoPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;

    return () => {
      timeline?.kill();
    };
  }, []);

  useEffect(() => {
    if (!logoRef.current || !logoPathRef.current) {
      return;
    }

    timelineRef.current = gsap.timeline();

    timelineRef.current
      .to(logoRef.current, {
        duration: 1,
        opacity: 1,
        rotation: 720,
        scale: 1,
        ease: 'quad.inOut',
      })
      .to(logoPathRef.current, {
        delay: 0.5,
        duration: 2.5,
        fillOpacity: 0.3,
        scale: 0.8,
        transformOrigin: '50% 50%',
        ease: 'power1.inOut',
      });
  }, []);

  return (
    <StyledLogo
      ref={logoRef}
      width="900"
      height="900"
      viewBox="0 0 900 900"
      enableBackground="new 0 0 900 900"
      xmlSpace="preserve"
    >
      <path
        ref={logoPathRef}
        fill={theme.light}
        d="M450.069,0C201.503,0,0,201.503,0,450.071c0,248.567,201.503,450.069,450.069,450.069c248.568,0,450.071-201.503,450.071-450.069C900.14,201.504,698.637,0,450.069,0z M33.109,450.071c0-48.352,8.128-95.443,24.204-140.321l43.292,30.07v337.863c-13.458-20.62-25.058-42.438-34.743-65.327C44.137,560.971,33.109,506.372,33.109,450.071z M744.906,744.908c-38.301,38.299-82.896,68.369-132.543,89.37c-51.384,21.735-105.983,32.753-162.293,32.753c-56.299,0-110.899-11.018-162.282-32.753c-49.656-21.001-94.244-51.071-132.552-89.37c-12.079-12.089-23.34-24.795-33.757-38.094h230.427l90.743-65.694V283.555l-90.743-67.571H104.923c14.726-21.659,31.534-41.959,50.313-60.747c38.308-38.309,82.896-68.378,132.552-89.373c51.383-21.736,105.983-32.753,162.282-32.753c56.31,0,110.91,11.017,162.293,32.753c49.646,20.995,94.242,51.063,132.543,89.373c18.788,18.787,35.586,39.088,50.313,60.747h-65.882l-14.801,32.679l-43.987-32.679H568.208l-90.088,67.571V641.12l89.665,65.694h210.889C768.257,720.113,756.992,732.819,744.906,744.908z M192.605,328.332h82.409c23.058,0,41.743,18.684,41.743,41.742v184.779c0,23.051-18.686,41.741-41.743,41.741h-49.44v-244.37L192.605,328.332z M810.533,659.841V532.432H693.907v64.163h-50.376c-22.037,0-39.896-17.856-39.896-39.893v-204.43l-32.989-23.94h123.261v70.037h106.904l21.265-136.866c4.355,8.586,8.431,17.352,12.2,26.275c21.736,51.383,32.756,105.983,32.756,162.292c0,56.301-11.02,110.899-32.756,162.283C827.343,628.75,819.421,644.592,810.533,659.841z"
      />
    </StyledLogo>
  );
};

export default Logo;
