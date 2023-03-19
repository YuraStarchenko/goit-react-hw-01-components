import styled from 'styled-components';

export const Card = styled.div`
  text-align: center;
  display: flex;
  margin-bottom: 30px;
  gap: 10px;
  border: solid 3px #fbdddd;
  width: 300px;
  border-radius: 20px;
  background-color: #f2ecec;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 130px;
  margin-top: 10px;
  border-radius: 100%;
  border: solid 3px #fbdddd;
  background-color: #cb4b4b;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const Tag = styled.p`
  color: #a89898;
`;

export const Location = styled.p`
  color: #a89898;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
`;

export const StatsItem = styled.li`
  display: flex;
  padding: 5px;
  width: 85px;
	margin-bottom: 10px; 
  border-radius: 20px;
  flex-direction: column;
  border: solid 2px #fbdddd;
  background-color: #982e2e0a;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
`;

export const Label = styled.span`
  color: #a89898;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
