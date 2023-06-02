import {
  BiCheckboxSquare,
  BiCheckbox,
  BiCheckboxChecked,
} from 'react-icons/bi';

import { CheckboxContainerDiv, StyledSpan } from './Checkbox.styles';

export enum CheckboxState {
  CHECKED = 'checked',
  UNCHECKED = 'unchecked',
  INDETERMINATE = 'indeterminate',
}

export interface CheckboxProps {
  state: CheckboxState;
  size?: number;
  label?: string;
  onClick?: () => void;
}

export default function Checkbox({
  state = CheckboxState.UNCHECKED,
  size = 24,
  label = '',
  onClick = () => {},
}: CheckboxProps) {
  return (
    <CheckboxContainerDiv onClick={onClick}>
      {state === CheckboxState.CHECKED && <BiCheckboxChecked size={size} />}
      {state === CheckboxState.UNCHECKED && <BiCheckbox size={size} />}
      {state === CheckboxState.INDETERMINATE && (
        <BiCheckboxSquare size={size} />
      )}

      <StyledSpan>{label}</StyledSpan>
    </CheckboxContainerDiv>
  );
}
