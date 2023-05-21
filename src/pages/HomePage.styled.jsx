import styled from 'styled-components';
import Image from '../images/phone-book.png';

export const Banner = styled.div`
  width: 500px;
  height: 500px;
  background-size: auto;
  background-repeat: no-repeat;
  background: url(${Image});
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 40px;
`;
