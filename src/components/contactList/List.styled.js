import styled from '@emotion/styled';

// export const List = styled.ul`
//   display: flex;
//   padding: 20px;
//   margin: 20px;

//   flex-direction: column;
//   list-style: none;
//   align-items: flex-start;
// `;

// export const Item = styled.li`
//   display: flex;
//   width: 300px;
//   list-style: none;
//   align-items: center;
//   justify-content: space-between;
// `;

// export const Delete = styled.button`
//   margin-right: 10px;
// `;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  align-items: center;
`;

export const Delete = styled.button`
  margin-left: 40px;
  border-color: #ccc;
  border-radius: 4px;
font-size: 16px;

 &:hover {
    background-color: #449cf4;
    border-color: #449cf4;
    color: white;
`;
