export type HeroData = {
  superman: string;
  batman: string;
  wonderwoman: string;
  flash: string;
  greenlantern: string;
  aquaman: string;
  cyborg: string;
};

export type HeroId = keyof HeroData;

export type HeroMenuData = {
  heroId: HeroId;
  name: string;
  bgImagePath: string;
  whiteLogoPath: string;
  active: boolean;
};

export type PageId = 'root' | 'profile' | 'enemies' | 'timeline';

export type ProfileIntroData = {
  semiTransparentColor: string;
  imgPath: string;
  title: string;
  subtitle: string;
  description: string;
};

export type ProfileDetailsData = {
  color: string;
  semiTransparentColor: string;
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

type Skill = {
  name: string;
  namePosX: number;
  value: number;
};
export type ProfileStatsData = {
  color: string;
  skills: Skill[];
};

type ProfileStatsBarData = {
  id: string;
  posX: number;
  posY: number;
  width: number;
  height: number;
  color: string;
};
export type ProfileStatsBarsData = ProfileStatsBarData[];

type ProfileStatsLegendData = {
  name: string;
  posX: number;
  posY: number;
};
export type ProfileStatsLegendsData = ProfileStatsLegendData[];

export type ProfileStatsPercentData = {
  id: string;
  value: number;
  posX: number;
  posY: number;
  valueTextFontSize: string;
  percentTextFontSize: string;
  percentTextPosX: number;
  percentTextPosY: number;
};
export type ProfileStatsPercentsData = ProfileStatsPercentData[];

type EventData = {
  year: string;
  imagePath: string;
  title: string;
  description: string;
};
export type EventsData = EventData[];

type EnemyData = {
  name: string;
  imagePath: string;
  description: string;
};
export type EnemiesData = EnemyData[];
