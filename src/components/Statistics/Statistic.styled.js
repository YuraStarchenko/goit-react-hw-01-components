import styled from 'styled-components';
import { getRandomHexColor } from '../utils/RandomColor';

export const Section = styled.section`
  margin-bottom: 30px;
  text-align: center;
  border: solid 3px #fbdddd;
  width: 450px;
  border-radius: 20px;
  background-color: #f2ecec;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Title = styled.h2`
  margin: 10px 0 10px 0;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 65px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: solid 2px #fbdddd;
  background-color: ${getRandomHexColor};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12);
`;

export const Label = styled.span`
  color: #000;
`;

export const Percentage = styled.span`
  font-weight: 600;
	color: #fff;
`;