import styled from 'styled-components';

export const Container = styled.header`
  font-family: monospace;
  background-color: ${({color}) => color};
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
