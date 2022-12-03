import { useState, useEffect } from 'react';
import { RequestStatus, HeroMeta } from '@/helpers/types';

const useHeroMetas = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('LOADING');
  const [heroMetas, setHeroMetas] = useState<HeroMeta[]>([]);

  useEffect(() => {
    const getMetas = async () => {
      try {
        const res = await fetch('/.netlify/functions/getMetas');
        const metas = await res.json();

        setRequestStatus('SUCCESS');
        setHeroMetas(metas);
      } catch (err) {
        console.error(err);
        setRequestStatus('FAILURE');
      }
    };

    getMetas();
  }, []);

  return {
    requestStatus,
    heroMetas,
  };
};

export default useHeroMetas;
