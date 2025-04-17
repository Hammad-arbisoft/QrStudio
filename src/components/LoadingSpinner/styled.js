import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Spinner = styled.div`
    width: ${props => props.size || '40px'};
    height: ${props => props.size || '40px'};
    border: ${props => props.borderWidth || '4px'} solid
        ${props => props.color + '33' || 'rgba(0, 123, 255, 0.2)'};
    border-top-color: ${props => props.color || '#007bff'};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;
