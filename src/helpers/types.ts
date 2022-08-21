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

export type HeroMeta = {
  heroId: string;
  name: string;
  menuBgImagePath: string;
  whiteLogoPath: string;
  colorLogoPath: string;
};

export type HeroMenuData = {
  heroId: HeroId;
  name: string;
  bgImagePath: string;
  whiteLogoPath: string;
  active: boolean;
};

export type PageId = 'root' | 'profile' | 'enemies' | 'timeline';

export type RequestStatus = 'LOADING' | 'SUCCESS' | 'FAILURE';

export type ProfileIntro = {
  name: string;
  alias: string;
  description: string;
  imagePath: string;
};

export type ProfileDetail = {
  fullName: string;
  birthPlace: string;
  occupation: string;
  base: string;
  firstAppearance: string;
  imagePath: string;
};

export type ProfileAppearance = {
  race: string;
  height: string;
  weight: string;
  eyeColor: string;
  hairColor: string;
  imagePath: string;
};

type Skill = {
  name: string;
  namePosX: number;
  value: number;
};
export type ProfileSkills = Skill[];

export type ProfileData = {
  bgLogoPath: string;
  intro: ProfileIntro;
  appearance: ProfileAppearance;
  powers: string[];
  detail: ProfileDetail;
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
