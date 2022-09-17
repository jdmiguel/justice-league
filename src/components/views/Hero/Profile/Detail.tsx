import { useRef } from 'react';
import { ProfileDetail } from '@/helpers/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { ProfileCard } from '@/components/ui/Card';
import {
  StyledDetail,
  StyledDetailText,
  StyledDetailImage,
  StyledList,
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
    <StyledDetail data-testid="profile-detail" ref={detailRef}>
      <StyledDetailText isVisible={isVisible}>
        <ProfileCard title="Details" color={color}>
          <StyledList>
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
          </StyledList>
        </ProfileCard>
      </StyledDetailText>
      <StyledDetailImage
        src={imagePath}
        alt="hero details"
        semiTransparentColor={semiTransparentColor}
        isVisible={isVisible}
      />
    </StyledDetail>
  );
};

export default Detail;
