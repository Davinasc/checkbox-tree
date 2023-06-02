import { BiRightArrow, BiDownArrow } from 'react-icons/bi';

import Checkbox, { CheckboxProps } from '../Checkbox';
import { StyledButton, StyledLi } from './CheckboxListItem.styles';
import type { Checkbox as CheckboxType } from '../CheckboxTree';

interface CheckboxListItemProps extends CheckboxProps {
  item: CheckboxType;
  expanded: boolean;
  onToggle?: () => void;
}

export default function CheckboxListItem({
  item,
  state,
  label,
  expanded,
  onClick,
  onToggle,
}: CheckboxListItemProps) {
  return (
    <StyledLi>
      {/* Only shows if item has children */}
      {item.hasChildren && (
        <StyledButton onClick={onToggle}>
          {expanded ? <BiDownArrow size={12} /> : <BiRightArrow size={12} />}
        </StyledButton>
      )}

      <Checkbox state={state} onClick={onClick} label={label} />
    </StyledLi>
  );
}
