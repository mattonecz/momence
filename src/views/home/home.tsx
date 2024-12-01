import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CurrencyTable, ExchangeRate } from '../../components';
import { LoadingIcon } from '../../components/LoadingIcon';

export type Currency = {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
};
const HomeWrapper = styled.div`
  padding: 24px;
  max-width: 600px;
`;

export const Home = () => {
  console.log('reder');
  const [selectedCurrency, selectCurrency] = useState<Currency>();
  const fetchData = async () => {
    const response = await fetch(
      'https://nodejs-serverless-function-express-nine-wine.vercel.app/api/currencies',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch the file');
    }
    return await response.json();
  };

  const { isSuccess, data, refetch, isRefetching, isLoading } = useQuery<
    Currency[]
  >({
    queryKey: ['currencies'],
    queryFn: fetchData,
  });

  useEffect(
    () => selectCurrency(data?.find((curr) => curr.code === 'EUR')),
    [isSuccess, data],
  );

  const CalculateRate = (amount: number): string | undefined => {
    if (selectedCurrency)
      return (
        ((amount / selectedCurrency.rate) * selectedCurrency.amount).toFixed(
          2,
        ) +
        ' ' +
        selectedCurrency.code
      );
  };

  return (
    <>
      <HomeWrapper>
        {isLoading ? (
          <LoadingIcon isLoading={true} height={200} />
        ) : (
          <>
            <ExchangeRate
              currency={selectedCurrency}
              calculate={CalculateRate}
            />
            <CurrencyTable
              currencies={data}
              selectCurrency={selectCurrency}
              reload={refetch}
              isLoading={isRefetching}
            />
          </>
        )}
      </HomeWrapper>
    </>
  );
};
