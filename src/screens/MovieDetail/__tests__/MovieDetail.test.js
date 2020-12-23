import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import moxios from 'moxios';
import MovieDetail from '../MovieDetail';
import client from '../../../config/client';
import {Alert, Linking} from 'react-native';

describe('Movie Detail Screen', () => {
  const mockProps = {
    route: {
      params: {
        movieId: 'uuidmovie1',
      },
    },
  };
  const mockMovieDetailData = {
    id: 'uuidmovie1',
    title: 'Back to the future',
    coverUrl: 'test-cover-url',
    description: 'movie about time travel',
    releaseDate: '1885-07-03',
    duration: 116,
    qualification: 8.5,
    trailers: [
      {
        id: 'uuidtrailer1',
        title: 'Back to the future trailer',
        trailerUrl: 'https://google.com',
      },
    ],
  };

  beforeEach(function () {
    moxios.install(client);
  });

  afterEach(function () {
    moxios.uninstall(client);
    jest.clearAllMocks();
  });

  const setUp = (requestOk = true) => {
    if (requestOk) {
      moxios.stubRequest(`/movieDetail/${mockMovieDetailData.id}`, {
        status: 200,
        response: mockMovieDetailData,
      });
    }

    return render(<MovieDetail {...mockProps} />);
  };
  it('should render correctly', () => {
    setUp();
  });

  it('should show loader while getting movie detail', async () => {
    const {getByTestId} = setUp(false);

    await waitFor(() => {
      getByTestId('activity-indicator');
    });
  });

  it('should show movie title', async () => {
    const {getByText} = setUp();

    await waitFor(() => {
      getByText(mockMovieDetailData.title);
    });
  });

  it('should show image date', async () => {
    const {getByTestId} = setUp();

    await waitFor(() => {
      getByTestId('movie-image');
    });
  });

  it('should show release date', async () => {
    const expectedReleaseYear = new Date(
      mockMovieDetailData.releaseDate,
    ).getFullYear();
    const {getByText} = setUp();

    await waitFor(() => {
      getByText(`${expectedReleaseYear}`);
    });
  });

  it('should show duration', async () => {
    const {getByText} = setUp();

    await waitFor(() => {
      getByText(`${mockMovieDetailData.duration} mins`);
    });
  });

  it('should show qualification', async () => {
    const {getByText} = setUp();

    await waitFor(() => {
      getByText(`${mockMovieDetailData.qualification} / 10`);
    });
  });

  it('should show add to favorites button', async () => {
    const {getByText} = setUp();

    await waitFor(() => {
      getByText('Add to Favorite');
    });
  });

  it('should show description', async () => {
    const {getByText} = setUp();

    await waitFor(() => {
      getByText(mockMovieDetailData.description);
    });
  });

  it('should open link with trailer url', async () => {
    const openUrlSpy = jest.spyOn(Linking, 'openURL').mockResolvedValue(true);
    const {getByText} = setUp();

    await waitFor(() => {
      const trailerButton = getByText('Play trailer 1');
      fireEvent.press(trailerButton);
    });

    expect(openUrlSpy).toHaveBeenCalledTimes(1);
    expect(openUrlSpy).toHaveBeenCalledWith(
      mockMovieDetailData.trailers[0].trailerUrl,
    );
  });

  it('should show alert if linking fails', async () => {
    const mockedAlert = jest.fn();
    Alert.alert = mockedAlert;
    jest.spyOn(Linking, 'openURL').mockRejectedValue(false);
    const {getByText} = setUp();

    await waitFor(() => {
      const trailerButton = getByText('Play trailer 1');
      fireEvent.press(trailerButton);
    });

    expect(mockedAlert).toHaveBeenCalledTimes(1);
    expect(mockedAlert).toHaveBeenCalledWith(
      'Could not open trailer, try again later',
    );
  });
});
