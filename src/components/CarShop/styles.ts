import styled from 'styled-components';

export const Container = styled.div`
  min-width: 256px;
  min-height: 256px;
  background: #29292e;
  border-radius: 8px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    background: red;
    width: 100%;
    height: 208px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  h2 {
    margin: auto 0;
  }
`;
