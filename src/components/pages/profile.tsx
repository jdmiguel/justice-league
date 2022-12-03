import { useParams, Params } from 'react-router-dom';
import { DEFAULT_PROFILE } from '@/helpers';
import { heroSquadColors, heroSquadSemiTransparentColors } from '@/helpers/theme';
import { HeroId, ProfileData } from '@/helpers/types';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useFetchHeroData from '@/hooks/useFetchHeroData';
import useImagePreloader from '@/hooks/useImagePreloader';
import ProfileView from '@/components/views/Hero/Profile';
import Loader from '@/components/ui/Loader';

const Profile: React.FC = () => {
  const { id: currentHeroId } = useParams<Params>();

  const { isNavigating, endNavigation } = useCustomNavigation();

  const { heroData: profileData, requestStatus } = useFetchHeroData<ProfileData>(
    DEFAULT_PROFILE,
    `/.netlify/functions/getProfile/${currentHeroId}`,
  );

  const { imagesPreloaded } = useImagePreloader([
    profileData.colorLogoPath as string,
    profileData.intro.imagePath as string,
    profileData.detail.imagePath as string,
    profileData.appearance.imagePath as string,
  ]);

  const heroColor = heroSquadColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSquadSemiTransparentColors[currentHeroId as HeroId];

  return (
    <>
      {requestStatus === 'LOADING' || !imagesPreloaded ? (
        <Loader shouldFitWithHeaderPage />
      ) : (
        <ProfileView
          profileData={profileData}
          heroColor={heroColor}
          heroSemiTransparentColor={heroSemiTransparentColor}
          isLeaving={isNavigating}
          onEndFadeAnimation={endNavigation}
        />
      )}
    </>
  );
};

export default Profile;
