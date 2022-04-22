import { ReactDOM } from 'react';

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
