import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('renders the Counter component', () => {
    let title = "My Title"
    render(<Counter title={title} />);
    const titleTag = screen.getByText(title);
    expect(titleTag).toBeInTheDocument();

    const counterTag = screen.getByText('Counter : 0');
    expect(counterTag).toBeInTheDocument();
});


test('increment counter', () => {
    render(<Counter title='My Counter' />);
    //expect the button exists
    const incrementBtn = screen.getByRole('button', { name: 'Increment' });
    expect(incrementBtn).toBeInTheDocument();

    //click the button
    userEvent.click(incrementBtn);

    //the count should increase to 1
    const counterTag = screen.getByText('Counter : 1');
    expect(counterTag).toBeInTheDocument();
});

test('decrement counter', () => {
    render(<Counter title='My Counter' />);
    //expect the button exists
    const decrementBtn = screen.getByRole('button', { name: 'Decrement' });
    expect(decrementBtn).toBeInTheDocument();

    //click the button
    userEvent.click(decrementBtn);

    //the count should decrease to -1
    const counterTag = screen.getByText('Counter : -1');
    expect(counterTag).toBeInTheDocument();
});
