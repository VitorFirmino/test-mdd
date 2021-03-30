import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 2.4rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 20rem;
    height: 13rem;
  }

  p {
    width: 297px;
    font-size: 16px;
    margin-top: 13px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 13px;
  display: flex;
  width: 620px;
  height: 510px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 848px) {
    width: 50%;
    margin-left: 100px;

    img {
      width: 8rem;
      height: 6rem;
    }

    p {
      /* width: 138px; */
      font-size: 16px;
      margin-top: 13px;
    }
  }

  @media (max-width: 663px) {
    p {
      width: 138px;
    }
  }

  @media (max-width: 320px) {
    h1 {
      width: 2rem;

      margin-right: 4rem;
    }
    p {
      width: 100px;
    }
  }
`;
