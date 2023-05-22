import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 8px 20px;
  color: #201717;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: 20px;
  background: linear-gradient(10deg, rgb(126 185 191), rgb(255, 255, 255) 50%);
  &.active {
    background: linear-gradient(45deg, #4e7e86, #274b54);
    color: #79bfc9;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
`;
