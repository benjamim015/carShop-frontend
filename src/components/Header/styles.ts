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
