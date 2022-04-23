import { theme } from '@/helpers/theme';
import { StyledSvg, StyledPath } from '@/components/views/HeroMenu/HeroLogo/styles';

type Props = {
  isHighlighted: boolean;
};

const GreenLanternLogo: React.FC<Props> = ({ isHighlighted }) => (
  <StyledSvg
    x="0px"
    y="0px"
    width="500px"
    height="500px"
    viewBox="0 0 500 500"
    enableBackground="new 0 0 500 500"
    xmlSpace="preserve"
    isHighlighted={isHighlighted}
  >
    <StyledPath
      stroke={theme.green}
      strokeWidth="2"
      strokeMiterlimit="10"
      fill={theme.alphaDark_75}
      d="M245.892,144.247c55.575,0,100.622,45.049,100.622,100.621c0,55.576-45.053,100.623-100.622,100.623c-55.57,0-100.622-45.047-100.624-100.623C145.272,189.296,190.323,144.247,245.892,144.247z M363.501,27.195C329.44,9.809,290.866,0,250,0c-40.866,0-79.439,9.809-113.5,27.195H363.501z M136.499,472.805C170.561,490.191,209.135,500,250,500c40.866,0,79.44-9.809,113.502-27.195H136.499z M426.604,73.054v26.017h-95.93c56.535,29.888,91.799,87.858,91.824,150.93c-0.092,68.245-41.367,129.94-105.111,157.094h107.156v21.861C471.088,383.554,500,320.158,500,250C500,180.877,471.946,118.309,426.604,73.054z M75.454,407.096h102.749c-63.62-27.24-104.768-88.918-104.806-157.094c0.063-63.119,35.418-121.096,92.038-150.93H79.556V67.133C30.615,112.769,0,177.804,0,250c0,70.156,28.911,133.551,75.454,178.954V407.096z"
      isHighlighted={isHighlighted}
      heroColor={theme.green}
    />
  </StyledSvg>
);

export default GreenLanternLogo;
