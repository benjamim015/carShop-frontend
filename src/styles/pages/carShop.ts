import styled from 'styled-components';

export const Header = styled.header`
  background: #29292e;
  width: 100%;
  height: 120px;
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  display: flex;
  white-space: nowrap;
  color: #dc1839;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  &:after {
    border-top: 2px solid #dc1839;
    content: '';
    position: relative;
    top: 20px;
    width: 100%;
    margin-left: 15px;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CarsContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
  }
`;

export const CarContainer = styled.div`
  display: flex;
  margin-bottom: 32px;

  img {
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 32px;
  font-size: 24px;
  font-weight: 400;
`;
