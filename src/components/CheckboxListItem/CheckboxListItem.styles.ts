import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  padding: 4px;
  padding-left: 2px;

  color: ${({ theme }) => theme.palette.text.main};
  font-size: 14px;

  cursor: pointer;
`;

export const StyledButton = styled.button`
  border: none;
  padding: 4px;
  background: transparent;
  cursor: pointer;
`;
