import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Icon = styled.img<{ $loading?: boolean }>`
  ${({ $loading }) =>
    $loading &&
    css`
      animation: ${spin} 1s linear infinite;
    `}
  &:hover {
    transform: scale(1.1);
  }
`;

export const LoadingIcon = (props: {
  isLoading: boolean;
  title?: string;
  height?: number;
}) => {
  const { isLoading, title, height } = props;
  return (
    <Icon
      $loading={isLoading}
      src="/images/reload.svg"
      title={title}
      height={height ?? 16}
    />
  );
};
