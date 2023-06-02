import { useCallback, useMemo, useState } from 'react';

import { toggleVisibility, updateItemStates } from './utils';
import CheckboxList from '../CheckboxList';
// types
import { CheckboxState } from '../Checkbox';
import type { Category } from '@app/queries/useCategories';

interface CheckboxTreeProps {
  items?: Category[];
}

export type Checkbox = Category & {
  state: CheckboxState;
  visible: boolean;
  expanded: boolean;
  hasChildren: boolean;
};

function getDefaultCheckboxItems(items: Category[]): Checkbox[] {
  const parentIds = items.map(item => item.parent);
  const uniqueParentIds = [...new Set(parentIds)];

  return items.map(item => ({
    ...item,
    state: CheckboxState.UNCHECKED,
    expanded: false,
    visible: item.parent === '0',
    hasChildren: !!uniqueParentIds.find(id => id === item.id),
  }));
}

export default function CheckboxTree({ items = [] }: CheckboxTreeProps) {
  const [checkboxList, setCheckboxList] = useState<Checkbox[]>(
    getDefaultCheckboxItems(items)
  );

  const rootItemsIds = useMemo(
    () => checkboxList.filter(item => item.parent === '0').map(item => item.id),
    [checkboxList]
  );

  const toggleVisibilityHandler = useCallback(
    (id: string) => () => {
      const newItems = toggleVisibility(checkboxList, id);
      if (newItems) setCheckboxList(newItems);
    },
    [checkboxList]
  );

  const updateItemStatesHandler = useCallback(
    (id: string) => () => {
      const newItems = updateItemStates(checkboxList, id);
      if (newItems) setCheckboxList(newItems);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checkboxList]
  );

  return (
    <CheckboxList
      items={checkboxList}
      updateItemStates={updateItemStatesHandler}
      toggleVisibility={toggleVisibilityHandler}
      idsToRender={rootItemsIds}
    />
  );
}
