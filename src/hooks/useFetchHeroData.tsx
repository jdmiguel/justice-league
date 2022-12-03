import { useState, useEffect } from 'react';
import { RequestStatus, HeroData } from '@/helpers/types';

const useFetchHeroData = <T extends HeroData>(defaultData: T, request: string) => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('LOADING');
  const [heroData, setHeroData] = useState<T>(defaultData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(request);
        const fetchedHeroData = await res.json();

        setRequestStatus('SUCCESS');
        setHeroData(fetchedHeroData);
      } catch (err) {
        console.error(err);
        setRequestStatus('FAILURE');
      }
    };

    fetchData();
  }, [request]);

  return {
    requestStatus,
    heroData,
  };
};

export default useFetchHeroData;
