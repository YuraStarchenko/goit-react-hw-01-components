import styled from 'styled-components';

export const Status = styled.span`
  display: block;
  margin-left: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 50px;
`;

export const Name = styled.p`
  margin-left: 5px;
  font-weight: 700;
`;
