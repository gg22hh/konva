import { useEffect, useState } from 'react';

export const useGetData = () => {
  const [rects, setRects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://6303a6270de3cd918b3b3fda.mockapi.io/konva'
        );
        const json = await response.json();
        setRects(json);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return [rects, setRects];
};
