import styled from 'styled-components';
import Image from '../images/phone-book.png';

export const Banner = styled.div`
  width: 400px;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  /* background-position: right 1% bottom 45%; */
  background-image: url(${Image});
  margin-top: 40px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 60px;
  width: 500px;
  padding-left: 50px;
`;
