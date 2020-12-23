import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import client from '../../config/client';
import {getYearFromDate} from '../../utils/dateUtils';
import PlayIcon from '../../assets/images/common/play.png';
import styles from './styles';

const MovieDetail = ({route, navigation}) => {
  const [movieDetail, setMovieDetail] = useState();

  const getMovie = async () => {
    const movieId = route.params.movieId;
    const movieResponse = await client.get(`/movieDetail/${movieId}`);
    setMovieDetail(movieResponse.data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const openTrailer = (trailer) => {
    Linking.openURL(trailer.trailerUrl).catch(() => {
      Alert.alert('Could not open trailer, try again later');
    });
  };

  const renderTrailers = () => {
    return (
      <View>
        <Text style={styles.trailerTitle}>TRAILERS</Text>
        <View style={styles.divider} />
        {movieDetail.trailers.map((trailer, index) => (
          <TouchableOpacity
            key={trailer.id}
            style={styles.trailerContainer}
            onPress={() => openTrailer(trailer)}>
            <Image source={PlayIcon} />
            <Text style={styles.trailerText}>{`Play trailer ${
              index + 1
            }`}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <>
      {movieDetail ? (
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{movieDetail.title}</Text>
          </View>
          <ScrollView style={styles.contentContainer}>
            <View style={styles.topContainer}>
              <Image
                testID="movie-image"
                style={styles.movieImage}
                resizeMode="contain"
                source={{uri: movieDetail.coverUrl}}
              />
              <View style={styles.topRightContainer}>
                <View>
                  <Text style={styles.releaseDate}>
                    {getYearFromDate(movieDetail.releaseDate)}
                  </Text>
                  <Text style={styles.duration}>
                    {`${movieDetail.duration} mins`}
                  </Text>
                  <Text style={styles.qualification}>
                    {`${movieDetail.qualification} / 10`}
                  </Text>
                </View>
                <TouchableOpacity>
                  <View style={styles.addToFavorite}>
                    <Text style={styles.addToFavoriteText}>
                      Add to Favorite
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>{movieDetail.description}</Text>
            {renderTrailers()}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.activityIndicator}>
          <ActivityIndicator testID="activity-indicator" />
        </View>
      )}
    </>
  );
};

export default MovieDetail;
