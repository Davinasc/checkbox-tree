import { CheckboxState } from '../Checkbox/Checkbox';
import type { Checkbox } from './CheckboxTree';

export function getCheckboxState(checkboxList: Checkbox[], id: string) {
  return checkboxList.find(item => item.id === id)?.state;
}

export function updateItemStates(checkboxList: Checkbox[], clickedId: string) {
  const newCheckboxList = [...checkboxList];
  const clickedItemState = getCheckboxState(newCheckboxList, clickedId);

  if (!clickedItemState) return;

  function getLengthByState(
    stateList: (CheckboxState | undefined)[],
    state: CheckboxState
  ) {
    return stateList?.filter(s => s === state).length;
  }

  function setParentState(id: string) {
    const currentItem = newCheckboxList.find(item => item.id === id);
    if (!currentItem) return;

    const parent = newCheckboxList.find(item => item.id === currentItem.parent);
    if (!parent) return;

    const parentStates = newCheckboxList
      .filter(item => item.parent === parent.id)
      .map(item => getCheckboxState(newCheckboxList, item.id));

    switch (parentStates.length) {
      case getLengthByState(parentStates, CheckboxState.CHECKED):
        parent.state = CheckboxState.CHECKED;
        break;
      case getLengthByState(parentStates, CheckboxState.UNCHECKED):
        parent.state = CheckboxState.UNCHECKED;
        break;
      default:
        parent.state = CheckboxState.INDETERMINATE;
        break;
    }

    setParentState(parent.id);
  }

  function setItemsState(id: string, state: CheckboxState) {
    const currentItem = newCheckboxList.find(item => item.id === id);
    if (currentItem) currentItem.state = state;

    newCheckboxList
      .filter(item => item.parent === id)
      .forEach(item => setItemsState(item.id, state));

    setParentState(id);
  }

  if (clickedItemState === CheckboxState.CHECKED) {
    setItemsState(clickedId, CheckboxState.UNCHECKED);
    return newCheckboxList;
  }

  setItemsState(clickedId, CheckboxState.CHECKED);
  return newCheckboxList;
}

export function toggleVisibility(items: Checkbox[], clickedId: string) {
  const newItems = [...items];
  const itemChildren = newItems.filter(item => item.parent === clickedId);

  const currentItem = newItems.find(item => item.id === clickedId);
  if (currentItem) currentItem.expanded = !currentItem.expanded;

  itemChildren.forEach(child => {
    const item = newItems.find(({ id }) => id === child.id);
    if (item) item.visible = !item.visible;
  });

  return newItems;
}
