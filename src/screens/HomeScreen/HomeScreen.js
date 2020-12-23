import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import client from '../../config/client';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const moviesResponse = await client.get('/movies');
    setMovies(moviesResponse.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const goToMovieDetail = (movie) => {
    navigation.navigate('MovieDetail', {movieId: movie.id});
  };

  const renderMovie = ({item: movie}) => {
    return (
      <TouchableOpacity
        testID="movie-item"
        style={styles.movieContainer}
        onPress={() => goToMovieDetail(movie)}>
        <Image
          style={styles.movieImage}
          resizeMode="cover"
          source={{uri: movie.coverUrl}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      {movies ? (
        <FlatList
          data={movies}
          renderItem={renderMovie}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      ) : (
        <View style={styles.activityIndicator}>
          <ActivityIndicator testID="activity-indicator" />
        </View>
      )}
    </>
  );
};

export default HomeScreen;
