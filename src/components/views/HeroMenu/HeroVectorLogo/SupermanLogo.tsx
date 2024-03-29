import { theme } from '@/helpers/theme';
import {
  StyledHeroVectorLogoSvg,
  StyledHeroVectorLogoPath,
} from '@/components/views/HeroMenu/styles';

type Props = {
  isHighlighted: boolean;
  isFaded: boolean;
};

const SupermanLogo: React.FC<Props> = ({ isHighlighted, isFaded }) => (
  <StyledHeroVectorLogoSvg
    data-testid="superman-vector-logo"
    x="0px"
    y="0px"
    width="500px"
    height="500px"
    viewBox="0 0 500 500"
    enableBackground="new 0 0 500 500"
    xmlSpace="preserve"
    isHighlighted={isHighlighted}
    isFaded={isFaded}
  >
    <StyledHeroVectorLogoPath
      stroke={theme.blue}
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M23.035,215.585L5.974,195.771C15.941,150.645,38.088,110,68.81,78h32.491C19.482,117,18.296,184.122,23.035,215.585z M355.843,292.967c-26.194-11.388-103.541-17.049-205.963-20.471c-48.185-1.646-75.961-9.282-91.892-16.918l63.06,72.803c6.846-8.359,22.25-18.3,57.268-18.3c60.297,0,64.837,29.557,64.837,29.557c50.093,4.54,84.258-2.238,105.847-7.965C370.59,325.946,381.979,304.354,355.843,292.967z M168.31,382.948l81.689,94.261l81.229-93.799C257.37,399.402,199.445,390.782,168.31,382.948z M444.773,252.417l49.357-57.078c-6.665-30.06-18.739-58.014-35.152-82.929L455.9,160h-97.883c-6.846-42-48.906-66.088-48.906-66.088c-17.773-9.217-35.744-14.185-52.792-16.424c-17.773-2.37-34.56-1.794-48.908-0.017c-28.175,3.554-47.33,11.841-47.33,11.841c-77.344,38.64-37.519,64.833-37.519,64.833c68.327,47.789,186.613,17.047,249.212,36.399C416.472,204.435,436.811,235.698,444.773,252.417z M398.291,48c-41.475-30-92.73-48.673-148.218-48.673C194.586-0.673,143.331,18,101.855,48H398.291z M269.743,498.922c128.876-10.031,230.33-117.781,230.33-249.232c0-5.368-0.189-10.691-0.522-15.976L269.743,498.922z M390.336,77.454l4.15-6.454h-48.844l6.386,6.454l23.171,23.169L390.336,77.454z M0.586,233.872c-0.327,5.232-0.513,10.503-0.513,15.818c0,131.396,101.37,239.109,230.17,249.218L0.586,233.872z"
      isHighlighted={isHighlighted}
      heroColor={theme.blue}
    />
  </StyledHeroVectorLogoSvg>
);

export default SupermanLogo;
