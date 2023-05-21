import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 8px 20px;
  width: 100px;
  color: #201717;
  transition: all 0.3s ease;
  font-size: 16px;
  background: linear-gradient(10deg, rgb(126 185 191), rgb(255, 255, 255) 50%);
  &:hover {
    background: linear-gradient(45deg, rgb(78, 126, 134), rgb(39, 75, 84));
    color: #79bfc9;
  }
`;
