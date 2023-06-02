import { Fragment } from 'react';

import { getCheckboxState } from '../CheckboxTree/utils';
import CheckboxListItem from '../CheckboxListItem';
import { StyledUl } from './CheckboxList.styles';
import type { Checkbox } from '../CheckboxTree';

type CheckboxListProps = {
  items: Checkbox[];
  idsToRender?: string[];
  indentLevel?: number;
  updateItemStates: (id: string) => () => void;
  toggleVisibility: (id: string) => () => void;
};

export default function CheckboxList({
  items,
  idsToRender = [],
  indentLevel = 0,
  updateItemStates,
  toggleVisibility,
}: CheckboxListProps) {
  function renderChildNodes(parent: string) {
    const nodeItems = items.filter(item => item.parent === parent);

    if (nodeItems.length === 0) return null;

    return (
      <CheckboxList
        items={items}
        idsToRender={nodeItems.map(item => item.id)}
        indentLevel={indentLevel + 1}
        updateItemStates={updateItemStates}
        toggleVisibility={toggleVisibility}
      />
    );
  }

  function renderNodes() {
    return idsToRender.map(id => {
      const item = items.find(item => item.id === id);
      const checkboxState = getCheckboxState(items, id);

      if (!item || !checkboxState) return null;

      return (
        item.visible && (
          <Fragment key={item.id}>
            <CheckboxListItem
              item={item}
              state={checkboxState}
              label={`${item.name} (${item.count})`}
              expanded={item.expanded}
              onClick={updateItemStates(item.id)}
              onToggle={toggleVisibility(item.id)}
            />

            {renderChildNodes(item.id)}
          </Fragment>
        )
      );
    });
  }

  return <StyledUl indentLevel={indentLevel}>{renderNodes()}</StyledUl>;
}
