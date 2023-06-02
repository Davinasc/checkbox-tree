import styled from 'styled-components';

export const CheckboxContainerDiv = styled.div`
  display: flex;
  align-items: center;

  & svg {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledSpan = styled.span`
  margin-top: -2px;
`;
