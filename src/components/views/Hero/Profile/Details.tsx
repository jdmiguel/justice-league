import { useRef } from 'react';
import { ProfileDetailsData } from '@/helpers/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Card from '@/components/views/Hero/Profile/Card';
import { StyledDetails, StyledDetailsImage } from '@/components/views/Hero/Profile/styles';

type Props = {
  data: ProfileDetailsData;
};

const Details: React.FC<Props> = ({
  data: {
    semiTransparentColor,
    color,
    imgPath,
    fullName,
    birthPlace,
    occupation,
    base,
    firstAppearance,
  },
}) => {
  const detailsRef = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(detailsRef);
  const isVisible = !!entry?.isIntersecting;

  return (
    <StyledDetails ref={detailsRef}>
      <Card title="Details" color={color} isVisible={isVisible}>
        <ul>
          <li>
            full name: <strong>{fullName}</strong>
          </li>
          <li>
            place of birth: <strong>{birthPlace}</strong>
          </li>
          <li>
            occupation: <strong>{occupation}</strong>
          </li>
          <li>
            base: <strong>{base}</strong>
          </li>
          <li>
            first appearance: <strong>{firstAppearance}</strong>
          </li>
        </ul>
      </Card>
      <StyledDetailsImage
        src={imgPath}
        semiTransparentColor={semiTransparentColor}
        isVisible={isVisible}
      />
    </StyledDetails>
  );
};

export default Details;
