import supermanLogoPath from '@/assets/logo/color/superman.svg';
import batmanLogoPath from '@/assets/logo/color/batman.svg';
import wonderwomanLogoPath from '@/assets/logo/color/wonderwoman.svg';
import flashLogoPath from '@/assets/logo/color/flash.svg';
import greenlanternLogoPath from '@/assets/logo/color/greenlantern.svg';
import aquamanLogoPath from '@/assets/logo/color/aquaman.svg';
import greenarrowLogoPath from '@/assets/logo/color/greenarrow.svg';
import cyborgLogoPath from '@/assets/logo/color/cyborg.svg';
import { HeroData, HeroId } from '@/helpers/types';

export const debounce = (fn: any, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: unknown[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

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

export const defaultHeroId = 'superman';
export const getHero = (heroData: HeroData, id: HeroId): string => heroData[id || defaultHeroId];

export const getLogoPath = (id: HeroId) => {
  switch (id) {
    case 'superman':
    default:
      return supermanLogoPath;
    case 'batman':
      return batmanLogoPath;
    case 'wonderwoman':
      return wonderwomanLogoPath;
    case 'flash':
      return flashLogoPath;
    case 'greenlantern':
      return greenlanternLogoPath;
    case 'aquaman':
      return aquamanLogoPath;
    case 'greenarrow':
      return greenarrowLogoPath;
    case 'cyborg':
      return cyborgLogoPath;
  }
};
