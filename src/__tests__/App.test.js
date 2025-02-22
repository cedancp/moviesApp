/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import App from '../App';

it('renders correctly', async () => {
  await waitFor(() => {
    render(<App />);
  });
});

it('should render Home screen by default', async () => {
  const {getByText} = render(<App />);
  await waitFor(() => {
    getByText('Pop Movies');
  });
});
