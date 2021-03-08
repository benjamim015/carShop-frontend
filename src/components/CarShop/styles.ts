import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  min-width: 256px;
  min-height: 256px;
  background: #29292e;
  border-radius: 8px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 56px;

  &.no-margin {
    margin-left: 0;
  }

  img {
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  h2 {
    margin: auto 0;
  }
`;
