import { Keyframes } from 'styled-components';

export type CustomAnimation = {
  optopusGreet: Keyframes;
  backgroundNoise: Keyframes;
  entryFromTop: Keyframes;
  entryFromBottom: Keyframes;
  loaderBar: Keyframes;
  fadeIn: Keyframes;
  fadeInFromBottom: Keyframes;
  fadeInFromLeft: Keyframes;
  fadeInFromRight: Keyframes;
  fadeInFromTop: Keyframes;
  scaleIn: Keyframes;
  smoothFadeIn: Keyframes;
};

export type HeroSquad = {
  superman: string;
  batman: string;
  wonderwoman: string;
  flash: string;
  greenlantern: string;
  aquaman: string;
  cyborg: string;
};

export type HeroId = keyof HeroSquad;

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
  name: string;
  colorLogoPath: string;
  intro: ProfileIntro;
  detail: ProfileDetail;
  appearance: ProfileAppearance;
  powers: string[];
  skills: Skill[];
};

export type ProfileStatsDimensions = {
  width: number;
  height: number;
};

export type ProfileStatsGridLineCoordinates = {
  id: string;
  initPosX: number;
  endPosX: number;
  initPosY: number;
  endPosY: number;
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

type ProfileStatsPercentData = {
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
export type ProfileStatsPercentFontSize = {
  value: string;
  percent: string;
};
export type ProfileStatsPercentOffsets = {
  valueOffsetX: number;
  percentOffsetX: number;
  percentOffsetY: number;
};

type Enemy = {
  name: string;
  imagePath: string;
  description: string;
};
export type EnemiesData = {
  colorLogoPath: string;
  enemiesList: Enemy[];
};

type Event = {
  year: string;
  imagePath: string;
  title: string;
  description: string;
};
export type EventsData = { colorLogoPath: string; eventsList: Event[] };

export type HeroData = HeroMeta[] | ProfileData | EnemiesData | EventsData;
