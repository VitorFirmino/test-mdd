import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #cd7f32 0%, #f5f5f5 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 0.02em;
    animation: 2.8s steps(30) 0s 1 normal none running typing;
  }

  @keyframes typing {
    0% {
      opacity: 0;
      width: 0px;
    }

    100% {
      width: 100%;
    }
  }

  @media (max-width: 1068px) {
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
    }
  }
`;

export const EnterApp = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 1rem;

  width: 80px;
  height: 80px;
  background: #daa520;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: #0e50f6;
  }
`;
