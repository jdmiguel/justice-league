import { theme } from '@/helpers/theme';
import { StyledHeroLogoSvg, StyledHeroLogoPath } from '@/components/views/HeroMenu/styles';

type Props = {
  isHighlighted: boolean;
  isFaded: boolean;
};

const WonderWomanLogo: React.FC<Props> = ({ isHighlighted, isFaded }) => (
  <StyledHeroLogoSvg
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
    <StyledHeroLogoPath
      stroke={theme.orange}
      strokeWidth="2"
      strokeMiterlimit="10"
      fill={theme.alphaDark_75}
      d="M85.562,94c0,0,36.672-2.375,59.695,40.858l41.106,74.835L249.824,94.1l63.451,115.592l41.11-74.835c23.02-43.232,59.69-40.858,59.69-40.858V94h31.591C399.862,37,329.274-0.307,250.073-0.307S100.284,37,54.479,94H85.562zM438.874,253c0,0-24.446-0.225-37.764,25.16l-59.679,108.91l-27.709,50.562l-27.766-50.614l-36.133-65.847l-36.141,65.825l-27.764,50.583l-27.708-50.619l-59.68-108.799C85.215,252.775,60.77,253,60.77,253H0.109c1.536,136,112.849,247.14,249.964,247.14S498.501,389,500.037,253H438.874z M433.168,151h46.872c-1.907-4-3.946-8-6.1-13h-42.14c0,0-24.451,0.163-37.772,25.552l-53.011,96.59l-27.758,50.569l-27.742-50.52l-35.695-65.016l-35.701,65.032l-27.739,50.542l-27.759-50.527l-53.021-96.671C92.29,138.162,67.837,138,67.837,138H26.206c-2.154,5-4.193,9-6.099,13h46.367c0,0,21.457,0.772,30.96,19.77c9.509,19.002,18.74,35.574,18.74,35.574S102.058,196,83.852,196H5.912c-0.9,4-1.7,8-2.396,12H78.49c0,0,36.676-2.265,59.691,40.963l47.788,87.358l63.855-116.276l63.845,116.318l47.789-87.407C384.479,205.728,421.153,208,421.153,208h75.478c-0.697-4-1.496-8-2.396-12h-78.447c-18.199,0-32.322,10.467-32.322,10.467s9.234-16.649,18.741-35.65C411.712,151.819,433.168,151,433.168,151z"
      isHighlighted={isHighlighted}
      heroColor={theme.orange}
    />
  </StyledHeroLogoSvg>
);

export default WonderWomanLogo;
