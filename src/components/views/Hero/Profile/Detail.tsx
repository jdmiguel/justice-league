import { useRef } from 'react';
import { ProfileDetail } from '@/helpers/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Card from '@/components/views/Hero/Profile/Card';
import {
  StyledDetail,
  StyledDetailImage,
  StyledCardList,
} from '@/components/views/Hero/Profile/styles';

type Props = {
  data: ProfileDetail;
  color: string;
  semiTransparentColor: string;
};

const Detail: React.FC<Props> = ({
  data: { fullName, birthPlace, occupation, base, firstAppearance, imagePath },
  color,
  semiTransparentColor,
}) => {
  const detailRef = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(detailRef);
  const isVisible = !!entry?.isIntersecting;

  return (
    <StyledDetail ref={detailRef}>
      <Card title="Details" color={color} isVisible={isVisible}>
        <StyledCardList>
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
            1st appearance: <strong>{firstAppearance}</strong>
          </li>
        </StyledCardList>
      </Card>
      <StyledDetailImage
        src={imagePath}
        semiTransparentColor={semiTransparentColor}
        isVisible={isVisible}
        alt={fullName}
      />
    </StyledDetail>
  );
};

export default Detail;
