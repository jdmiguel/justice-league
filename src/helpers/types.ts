export type HeroData = {
  superman: string;
  batman: string;
  wonderwoman: string;
  flash: string;
  greenlantern: string;
  aquaman: string;
  greenarrow: string;
  cyborg: string;
};

export type HeroId = keyof HeroData;

export type HeroMenuData = {
  id: HeroId;
  name: string;
  active: boolean;
};

export type PageId = 'root' | 'profile' | 'timeline' | 'media';

export type ProfileIntroData = {
  semiTransparentColor: string;
  imgPath: string;
  title: string;
  subtitle: string;
  description: string;
};

export type ProfileDetailsData = {
  semiTransparentColor: string;
  color: string;
  imgPath: string;
  fullName: string;
  birthPlace: string;
  occupation: string;
  base: string;
  firstAppearance: string;
};

export type ProfileDetailsCard = {
  color: string;
  fullName: string;
  birthPlace: string;
  occupation: string;
  base: string;
  firstAppearance: string;
};

export type ProfileAppearanceData = {
  color: string;
  imgPath: string;
  race: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  powers: string[];
};

export type ProfileAppearanceCard = {
  color: string;
  race: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
};

export type ProfilePowersCard = {
  color: string;
  powers: string[];
};
