import { HeroData, HeroId, ProfileData } from '@/helpers/types';

export const splitHeadingIntoChars = (target: HTMLHeadingElement | null) => {
  if (!target) {
    return;
  }

  const createSpan = () => {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    return span;
  };

  const split = (target: HTMLHeadingElement) => {
    const currentTarget = target;
    const chars: HTMLSpanElement[] = [];
    const splittedTarget = currentTarget?.textContent?.split(' ');

    splittedTarget?.map((word: string) => {
      word.split(/(?!^)/).map((char) => {
        const el = createSpan();
        el.innerText = char;
        el.style.opacity = '0';
        currentTarget.appendChild(el);
        chars.push(el);
      });
    });

    currentTarget.innerHTML = '';

    chars.forEach((char) => {
      currentTarget.appendChild(char);
    });

    return currentTarget.querySelectorAll('span');
  };

  return split(target);
};

export const TOTAL_HEROES = 7;
export const LAST_HERO_INDEX = TOTAL_HEROES - 1;
export const DEFAULT_HERO_ID = 'superman';
export const DEFAULT_PROFILE: ProfileData = {
  bgLogoPath: '',
  intro: {
    name: '',
    alias: '',
    description: '',
    imagePath: '',
  },
  detail: {
    fullName: '',
    birthPlace: '',
    occupation: '',
    base: '',
    firstAppearance: '',
    imagePath: '',
  },
  appearance: {
    race: '',
    height: '',
    weight: '',
    eyeColor: '',
    hairColor: '',
    imagePath: '',
  },
  powers: [],
  skills: [],
};

export const getHero = (heroData: HeroData, id: HeroId): string => heroData[id || DEFAULT_HERO_ID];
