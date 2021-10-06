import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const mouseClickEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
})

test('renders numbers correctly after buttons are pressed', () => {
  render(<App/>);
  const nineButton = screen.getByText('9');
  for (let i = 0; i < 3; i += 1) {
    fireEvent(nineButton, mouseClickEvent);
  }
  expect(screen.getByText(/999/)).toBeInTheDocument();

  const plusButton = screen.getByText('+');
  fireEvent(plusButton, mouseClickEvent);

  expect(screen.getAllByText(/999/)).toHaveLength(2);
  expect(screen.getByText('999 +')).toBeInTheDocument();
});

test('correctly calculates the sum', () => {
  render(<App/>);
  const nineButton = screen.getByText('9');

  for (let i = 0; i < 2; i += 1) {
    fireEvent(nineButton, mouseClickEvent);
  }

  const plusButton = screen.getByText('+');
  fireEvent(plusButton, mouseClickEvent);

  expect(screen.getByText(/99 +/)).toBeInTheDocument();

  for (let i = 0; i < 2; i += 1) {
    fireEvent(nineButton, mouseClickEvent);
  }

  const equalsButton = screen.getByText('=');

  fireEvent(equalsButton, mouseClickEvent);

  expect(screen.getByText(/198 +/)).toBeInTheDocument();
});
