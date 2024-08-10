import { useParams, Params } from 'react-router-dom';
import profilesDB from '@/db/profiles.json';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import ProfileView from '@/components/views/Hero/Profile';
import { heroSquadColors, heroSquadSemiTransparentColors } from '@/helpers/theme';
import fetchHeroData from '@/helpers/fetchHeroData';
import { HeroId, ProfileData } from '@/helpers/types';

const Profile: React.FC = () => {
  const { id: currentHeroId } = useParams<Params>();

  const { isNavigating, endNavigation } = useCustomNavigation();

  const profileData = fetchHeroData<ProfileData>({ db: profilesDB, heroId: currentHeroId });

  const heroColor = heroSquadColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSquadSemiTransparentColors[currentHeroId as HeroId];

  return (
    <ProfileView
      profileData={profileData}
      heroColor={heroColor}
      heroSemiTransparentColor={heroSemiTransparentColor}
      isLeaving={isNavigating}
      onEndFadeAnimation={endNavigation}
    />
  );
};

export default Profile;
