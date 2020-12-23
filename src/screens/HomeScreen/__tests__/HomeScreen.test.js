import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import moxios from 'moxios';
import HomeScreen from '../HomeScreen';
import client from '../../../config/client';

describe('Home Screen', () => {
  const mockNavigate = jest.fn();
  const mockProps = {
    navigation: {
      navigate: mockNavigate,
    },
  };
  const mockMoviesData = [
    {
      id: 'uuidmovie1',
      title: 'Back to the future',
      coverUrl: 'test-cover-url',
    },
    {
      id: 'uuidmovie2',
      title: 'Back to the future 2',
      coverUrl: 'test-cover-url-2',
    },
  ];

  beforeEach(function () {
    moxios.install(client);
  });

  afterEach(function () {
    moxios.uninstall(client);
  });

  const setUp = () => render(<HomeScreen {...mockProps} />);

  it('should render correctly', () => {
    setUp();
  });

  it('should show a list of movies', async () => {
    moxios.stubRequest('/movies', {
      status: 200,
      response: mockMoviesData,
    });

    const {queryAllByTestId} = setUp();

    await waitFor(() => {
      const movies = queryAllByTestId('movie-item');
      expect(movies).toHaveLength(2);
    });
  });

  it('should navigate to Movie Detail Screen when pressing on a movie item', async () => {
    moxios.stubRequest('/movies', {
      status: 200,
      response: mockMoviesData,
    });
    const {queryAllByTestId} = setUp();

    await waitFor(() => {
      const movies = queryAllByTestId('movie-item');
      fireEvent.press(movies[0]);
    });

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('MovieDetail');
  });

  it('should show loader while getting movies', async () => {
    const {getByTestId} = setUp();

    await waitFor(() => {
      getByTestId('activity-indicator');
    });
  });
});
