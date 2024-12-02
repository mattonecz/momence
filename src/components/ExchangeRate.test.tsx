import { fireEvent, render, screen } from '@testing-library/react';
import { ExchangeRate } from './ExchangeRate';
import { Currency } from '../views/home';

const currency: Currency = {
  country: 'Brazil',
  currency: 'real',
  amount: 1,
  code: 'BRL',
  rate: 2,
};

test('Render ExchangeRate', () => {
  render(<ExchangeRate />);
  const linkElement = screen.getByText(/Kč/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check exchange rate', () => {
  render(<ExchangeRate currency={currency} />);
  const result = screen.getByText(/Kč =/);
  expect(result).toHaveTextContent('Kč = 50.00 BRL');
});

test('Check exchange rate with different amoount', () => {
  render(<ExchangeRate currency={{ ...currency, amount: 100 }} />);
  const result = screen.getByText(/Kč =/);
  expect(result).toHaveTextContent('Kč = 5000.00 BRL');
});

it('updates the exchange rate when the input value changes', () => {
  render(<ExchangeRate currency={currency} />);
  const input = screen.getByRole('spinbutton');

  const result = screen.getByText(/Kč =/);
  expect(result).toHaveTextContent('Kč = 50.00 BRL');

  fireEvent.change(input, { target: { value: '200' } });

  const result2 = screen.getByText(/Kč =/);
  expect(result2).toHaveTextContent('Kč = 100.00 BRL');
});
