import { useEffect, useState } from 'react';

const preloadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = img.onabort = () => reject();
    img.src = src;
  });

const useImagePreloader = (imageList: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    if (!imageList.every((image) => image)) {
      return;
    }

    let isCancelled = false;

    const preloadImages = async () => {
      const imagesPromiseList: Promise<HTMLImageElement>[] = imageList.map((img) =>
        preloadImage(img),
      );

      try {
        await Promise.all(imagesPromiseList);
      } catch (error: unknown) {
        console.error(error);
      }

      if (isCancelled) {
        return;
      }

      setImagesPreloaded(true);
    };

    preloadImages();

    return () => {
      isCancelled = true;
    };
  }, [imageList]);

  return { imagesPreloaded };
};

export default useImagePreloader;
