import { useState, useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import { DEFAULT_PROFILE } from '@/helpers';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import { RequestStatus, HeroId, ProfileData, PageId } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useHero } from '@/contexts/HeroContext';
import useHeroNavigation from '@/hooks/useHeroNavigation';
import useLockedBody from '@/hooks/useLockedBody';
import useImagePreloader from '@/hooks/useImagePreloader';
import Intro from '@/components/views/Intro';
import ProfileView from '@/components/views/Hero/Profile';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Loader from '@/components/ui/Loader';

const Profile: React.FC = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('LOADING');
  const [profileData, setProfileData] = useState<ProfileData>(DEFAULT_PROFILE);
  const { id: currentHeroId } = useParams<Params>();
  const { isIntroVisible } = useIntro();
  const { updateHero } = useHero();
  const { nextPagePath, isNavigating, initNavigation, endNavigation } = useHeroNavigation();
  const { updateLocked } = useLockedBody();

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

  useEffect(() => {
    updateHero(currentHeroId as HeroId);
  }, [currentHeroId, updateHero]);

  useEffect(() => {
    if (isIntroVisible) {
      return;
    }

    updateLocked(false);
  }, [isIntroVisible, updateLocked]);

  const { imagesPreloaded } = useImagePreloader([
    profileData.colorLogoPath as string,
    profileData.intro.imagePath as string,
    profileData.detail.imagePath as string,
    profileData.appearance.imagePath as string,
  ]);

  const heroColor = heroColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSemiTransparentColors[currentHeroId as HeroId];

  const isLeaving = isNavigating && nextPagePath === '/';

  return (
    <>
      {isIntroVisible && <Intro idParam={currentHeroId} />}
      <Layout>
        <Header isSticky>
          <Header.Logo onClick={() => initNavigation({ heroId: null, pageId: 'root' })} />
          <Header.Navigation
            pageId="profile"
            onClick={(pageId: PageId) =>
              initNavigation({ heroId: currentHeroId as HeroId, pageId })
            }
            isLeaving={isLeaving}
          />
          <Header.Divider isLeaving={isLeaving} />
        </Header>
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
      </Layout>
    </>
  );
};

export default Profile;
