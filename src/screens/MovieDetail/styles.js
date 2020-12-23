import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    height: 56,
    backgroundColor: '#746A64',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '500',
  },
  contentContainer: {
    height: '100%',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  topContainer: {
    flexDirection: 'row',
  },
  movieImage: {
    height: 170,
    width: 115,
  },
  topRightContainer: {
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  releaseDate: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24,
    color: '#212121',
  },
  duration: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    fontStyle: 'italic',
    color: '#212121',
  },
  qualification: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 24,
    color: '#212121',
    marginTop: 26,
  },
  addToFavorite: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 196,
    backgroundColor: '#746A64',
  },
  addToFavoriteText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#ffffff',
  },
  description: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    color: '#757575',
    marginTop: 24,
  },
  trailerTitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    color: '#757575',
    marginTop: 24,
  },
  divider: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#dedede',
    marginBottom: 16,
  },
  trailerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fafafa',
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  trailerText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    color: '#757575',
    marginLeft: 20,
  },
});

export default styles;
