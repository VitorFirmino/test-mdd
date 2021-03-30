import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto 6.2rem;

  position: relative;
  display: flex;

  .map-popup div {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .map-popup h1 {
    font-size: 14px;
  }

  .map-popup p + p {
    margin-top: 0;
  }

  .map-popup img {
    width: 48px;
    height: 48px;
    position: absolute;
    top: -8rem;
    left: 11.8rem;
  }

  .map-popup a {
    width: 6rem;
  }
`;
