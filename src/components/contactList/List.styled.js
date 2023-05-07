import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  padding: 20px;
  margin: 20px;

  flex-direction: column;
  list-style: none;
  align-items: flex-start;
`;

export const Item = styled.li`
  display: flex;
  width: 300px;
  list-style: none;
  align-items: center;
  justify-content: space-between;
`;

export const Delete = styled.button`
  margin-right: 10px;
`;
