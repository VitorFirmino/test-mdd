import styled from 'styled-components';

export const Aside = styled.div`
  position: fixed;
  height: 100vh;
  padding: 32px 12px;
  background: linear-gradient(329.54deg, #4169e1 0%, #f5f5f5 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  img {
    width: 80px;
  }
`;

export const Footer = styled.div`
  a,
  button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #0e50f6;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #daa520;
    }
  }
`;
