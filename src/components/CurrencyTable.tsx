import { Currency } from '../views/home/home';
import styled from 'styled-components';
import { LoadingIcon } from './LoadingIcon';
import { useDeepCompareMemo } from 'use-deep-compare';

type CurrencyTableProps = {
  currencies?: Currency[];
  selectCurrency: (currency: Currency) => void;
  reload: () => void;
  isLoading: boolean;
};

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border-spacing: 0;
  overflow: hidden;
`;

const TableHeader = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 8px 15px;
  text-align: left;
  font-size: 14px;
  background-color: white;
  white-space: nowrap;
  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const TableRow = styled.tr`
  background-color: white;
  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;

const TableCell = styled.td`
  padding: 8px 15px;
  font-size: 14px;
  text-align: left;
  white-space: nowrap;
  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin-left: 8px;
`;

export const CurrencyTable = (props: CurrencyTableProps) => {
  const { currencies, selectCurrency, reload, isLoading } = props;

  const table = useDeepCompareMemo(
    () => (
      <Table>
        <thead>
          <tr>
            <TableHeader>Country</TableHeader>
            <TableHeader>Currency</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Code</TableHeader>
            <TableHeader>
              Rate
              <IconButton onClick={reload}>
                <LoadingIcon isLoading={isLoading} title="Refresh rates" />
              </IconButton>
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          {currencies?.map((currency, index) => (
            <TableRow key={index} onClick={() => selectCurrency(currency)}>
              <TableCell>{currency.country}</TableCell>
              <TableCell>{currency.currency}</TableCell>
              <TableCell>{currency.amount}</TableCell>
              <TableCell>{currency.code}</TableCell>
              <TableCell>{currency.rate} Kč</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    ),
    [currencies, isLoading],
  );

  return table;
};
