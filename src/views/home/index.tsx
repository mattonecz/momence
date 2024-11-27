import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const Index = () => {
  const fetchData = async () => {
    const response = await fetch(
      'https://nodejs-serverless-function-express-nine-wine.vercel.app/api/hello',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch the file');
    }
    return await response.json();
  };

  const { isPending, error, data, isFetched } = useQuery({
    queryKey: ['currencies'],
    queryFn: fetchData,
  });

  console.log(data);

  return <>Index</>;
};
