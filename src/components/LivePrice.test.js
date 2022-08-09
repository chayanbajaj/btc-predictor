import { render, screen, fireEvent } from '@testing-library/react';
import LivePrice from './LivePrice';


test('button test', () => {
    render(<LivePrice />);

    const button = screen.getByRole('button', {name: 'Up'});
    fireEvent.click(button);
    expect(button).toBeDisabled();
});