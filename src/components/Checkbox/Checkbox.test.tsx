import { render, screen } from '@app/utils/test-utils';
import Checkbox, { CheckboxState } from './Checkbox';

describe('<Checkbox />', () => {
  it('should render a checkbox', () => {
    render(<Checkbox state={CheckboxState.UNCHECKED} label="label" />);

    const checkbox = screen.getByText('label');

    expect(checkbox).toBeInTheDocument();
  });
});
