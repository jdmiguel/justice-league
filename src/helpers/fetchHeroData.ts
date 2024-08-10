import { HeroDB, HeroData } from '@/helpers/types';

export interface FetchHeroDataParams {
  db: HeroDB;
  heroId?: string;
}

const fetchHeroData = <T extends HeroData>({ db, heroId }: FetchHeroDataParams) => {
  const heroData = db.find((hero) => hero.id === heroId);

  if (!heroData) {
    throw Error("hero data doesn't exist");
  }

  return heroData as T;
};

export default fetchHeroData;
