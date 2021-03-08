import styled from 'styled-components';

export const Container = styled.header`
  background: #29292e;
  width: 100%;
  height: 120px;
  margin-bottom: 80px;
  position: relative;

  > a {
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 20px;
  }

  div + div {
    cursor: pointer;
    width: 80px;
    height: 80px;
    background: #dc1839;
    border-radius: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerModal = styled.div`
  margin: 0 auto;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
`;

export const Modal = styled.div`
  margin: 0 auto;
  width: 30vw;
  height: 80vh;
  position: absolute;
  z-index: 50;
  background: #29292e;
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin-bottom: 15px;
      width: 80%;
      height: 40px;
      font-size: 20px;
      padding-left: 8px;

      &:focus {
        outline: 0;
      }
    }

    input[type='file'] {
      width: 80%;
      height: 100%;
      padding: 0;
    }

    > span {
      color: red;
      padding: 0;
      margin-top: -12px;
      margin-bottom: 16px;
    }

    button {
      width: 80%;
      height: 40px;
      background: #dc1839;
      border: 0;
      color: #f3f3f3;
      font-size: 20px;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    img {
      width: 156px;
      height: 156px;
      object-fit: cover;
      border-radius: 8px;
      margin-left: -53%;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;

  div {
    width: 50%;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  span {
    font-size: 20px;
  }
`;
