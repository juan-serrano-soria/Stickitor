import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  View,
} from 'react-native';

import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require('./assets/images/placeholder-image.png');

function App(): JSX.Element {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={styles.container.backgroundColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});

export default App;
