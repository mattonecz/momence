import styled from 'styled-components';
import { Currency } from '../views/home/home';
import { useState } from 'react';

type ExchangeRateProps = {
  currency?: Currency;
};

const MainDiv = styled.div`
  padding: 24px 0;
  width: 100%;
`;
const NumberInput = styled.input.attrs({
  type: 'number',
  min: 0,
  step: 1,
})`
  padding: 10px 15px;
  font-size: 16px;
  width: 100px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  }

  &:hover {
    border-color: #007bff;
  }
`;

const Result = styled.span`
  font-weight: 600;
  margin-left: 16px;
  font-size: 20px;
`;

export const ExchangeRate = (props: ExchangeRateProps) => {
  const [value, setValue] = useState(100);

  const { currency } = props;

  const calculateRate = (): string | undefined => {
    if (currency)
      return (
        ((value / currency.rate) * currency.amount).toFixed(2) +
        ' ' +
        currency.code
      );
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(evt.target.value);
    if (value) setValue(value);
  };

  return (
    <MainDiv>
      <NumberInput value={value} onChange={handleChange} />
      <Result>Kč = {calculateRate()}</Result>
    </MainDiv>
  );
};
