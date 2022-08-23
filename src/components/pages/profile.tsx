import { useState, useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import { DEFAULT_PROFILE } from '@/helpers';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import { RequestStatus, HeroId, ProfileData } from '@/helpers/types';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useImagePreloader from '@/hooks/useImagePreloader';
import ProfileView from '@/components/views/Hero/Profile';
import Loader from '@/components/ui/Loader';

const Profile: React.FC = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('LOADING');
  const [profileData, setProfileData] = useState<ProfileData>(DEFAULT_PROFILE);
  const { id: currentHeroId } = useParams<Params>();
  const { isNavigating, endNavigation } = useCustomNavigation();

  useEffect(() => {
    const getProfile = async (heroId: HeroId) => {
      try {
        const res = await fetch(`/.netlify/functions/getProfile/${heroId}`);
        const fetchedProfileData = await res.json();
        setProfileData(fetchedProfileData);
        setRequestStatus('SUCCESS');
      } catch (err) {
        console.error(err);
        setRequestStatus('FAILURE');
      }
    };

    getProfile(currentHeroId as HeroId);
  }, [currentHeroId]);

  const { imagesPreloaded } = useImagePreloader([
    profileData.colorLogoPath as string,
    profileData.intro.imagePath as string,
    profileData.detail.imagePath as string,
    profileData.appearance.imagePath as string,
  ]);

  const heroColor = heroColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSemiTransparentColors[currentHeroId as HeroId];

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
