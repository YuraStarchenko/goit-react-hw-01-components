import styled from 'styled-components';

export const Table = styled.table`
  border: 2px solid #fbdddd;
  border-radius: 20px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  margin-bottom: 50px;
  background-color: #f2ecec;
`;
export const Thead = styled.thead`
  background-color: #fbdddd;
  color: #000;
`;
export const Tr = styled.tr`
  text-align: center;

  :nth-child(even) {
    background-color: #fbdddd;
  }
`;
export const Th = styled.th`
  padding: 15px 0;

  :nth-child(2n + 1) {
    border-radius: 20px 0 0 5px;
  }
  :nth-child(2n + 3) {
    border-radius: 0 20px 5px 0;
  }
`;

export const Tbody = styled.tbody`
  background-color: #f2ecec;
  color: #000;
`;
export const Td = styled.td`
  border: 2px solid #fbdddd;
  border-radius: 20px;
  width: 130px;
  padding: 10px 0;
`;
