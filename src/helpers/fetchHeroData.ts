import { HeroData } from '@/helpers/types';

export interface FetchHeroDataParams {
  db: HeroData[];
  heroId?: string;
}

const fetchHeroData = <T extends HeroData>({ db, heroId }: FetchHeroDataParams) => {
  const heroData = db.find((hero: HeroData) => hero.id === heroId);

  if (!heroData) {
    throw Error("hero data doesn't exist");
  }

  return heroData as T;
};

export default fetchHeroData;
