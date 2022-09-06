import { gsap } from 'gsap';
import { HeroData, HeroId, ProfileData, EnemiesData, EventsData } from '@/helpers/types';

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

export const cyclesByHeroId = {
  superman: {
    distanceX: gsap.utils.wrap([-24, -16, -8, 0, 8, 16, 24, 30]),
    duplicatedDistanceX: gsap.utils.wrap([-48, -32, -16, 0, 16, 32, 48, 60]),
    leftX: gsap.utils.wrap([-160, -140, -120, -100, -80, -60, -40, -20]),
    rightX: gsap.utils.wrap([20, 40, 60, 80, 100, 120, 140, 160]),
  },
  batman: {
    distanceX: gsap.utils.wrap([-16, -8, 0, 8, 16, 24]),
    duplicatedDistanceX: gsap.utils.wrap([-44, -16, 0, 16, 32, 44]),
    leftX: gsap.utils.wrap([-120, -100, -80, -60, -40, -20]),
    rightX: gsap.utils.wrap([20, 40, 60, 80, 100, 120]),
  },
  wonderwoman: {
    distanceX: gsap.utils.wrap([-40, -32, -24, -16, -8, 0, 8, 16, 24, 32, 40]),
    duplicatedDistanceX: gsap.utils.wrap([-80, -64, -48, -32, -16, 0, 16, 32, 48, 64, 80]),
    leftX: gsap.utils.wrap([-220, -200, -180, -160, -140, -120, -100, -80, -60, -40, -20]),
    rightX: gsap.utils.wrap([20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220]),
  },
  flash: {
    distanceX: gsap.utils.wrap([-12, -6, 0, 6, 12]),
    duplicatedDistanceX: gsap.utils.wrap([-24, -8, 0, 8, 24]),
    leftX: gsap.utils.wrap([-120, -100, -80, -60, -40]),
    rightX: gsap.utils.wrap([40, 60, 80, 100, 120]),
  },
  greenlantern: {
    distanceX: gsap.utils.wrap([-40, -32, -24, -16, -8, 0, 8, 16, 24, 32, 40, 48]),
    duplicatedDistanceX: gsap.utils.wrap([-80, -62, -48, -32, -16, 0, 16, 48, 28, 62, 80, 96]),
    leftX: gsap.utils.wrap([-240, -220, -200, -180, -160, -140, -120, -100, -80, -60, -40, -20]),
    rightX: gsap.utils.wrap([20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240]),
  },
  aquaman: {
    distanceX: gsap.utils.wrap([-24, -16, -8, 0, 8, 16, 24]),
    duplicatedDistanceX: gsap.utils.wrap([-48, -32, -16, 0, 16, 32, 48]),
    leftX: gsap.utils.wrap([-140, -120, -100, -80, -60, -40, -20]),
    rightX: gsap.utils.wrap([20, 40, 60, 80, 100, 120, 140]),
  },
  cyborg: {
    distanceX: gsap.utils.wrap([-16, -8, 0, 8, 16, 24]),
    duplicatedDistanceX: gsap.utils.wrap([-44, -16, 0, 16, 32, 44]),
    leftX: gsap.utils.wrap([-120, -100, -80, -60, -40, -20]),
    rightX: gsap.utils.wrap([20, 40, 60, 80, 100, 120]),
  },
};

export const TOTAL_HEROES = 7;
export const LAST_HERO_INDEX = TOTAL_HEROES - 1;
export const DEFAULT_ACTIVE_HERO_ID = 'superman';
export const DEFAULT_ACTIVE_PAGE_ID = 'root';
export const DEFAULT_PROFILE: ProfileData = {
  colorLogoPath: '',
  name: '',
  intro: {
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
export const DEFAULT_ENEMIES: EnemiesData = {
  colorLogoPath: '',
  enemiesList: [
    {
      name: '',
      description: '',
      imagePath: '',
    },
  ],
};
export const DEFAULT_EVENTS: EventsData = {
  colorLogoPath: '',
  eventsList: [
    {
      year: '',
      title: '',
      description: '',
      imagePath: '',
    },
  ],
};

export const getHero = (heroData: HeroData, id: HeroId): string =>
  heroData[id || DEFAULT_ACTIVE_HERO_ID];
