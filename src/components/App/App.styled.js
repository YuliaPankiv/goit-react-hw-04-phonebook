import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  & h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  & h2 {
    color: #333;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
