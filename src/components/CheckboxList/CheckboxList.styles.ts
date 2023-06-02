import styled, { css } from 'styled-components';

export const StyledUl = styled.ul<{ indentLevel: number }>(
  ({ indentLevel }) => css`
    list-style-type: none;
    width: fit-content;
    margin: 0;
    padding: 0;
    padding-left: ${indentLevel * 20}px;
  `
);
