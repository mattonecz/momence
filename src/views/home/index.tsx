import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const Index = () => {
  const fetchData = async () => {
    const response = await fetch(
      'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch the file');
    }
    return await response.text();
  };

  const { isPending, error, data, isFetched } = useQuery({
    queryKey: ['currencies'],
    queryFn: fetchData,
  });

  console.log(data);

  return <>Index</>;
};
