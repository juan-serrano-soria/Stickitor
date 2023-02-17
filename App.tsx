import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import ImageViewer from './components/ImageViewer';
import ContinueButton from './components/ContinueButton';
import SelectImageButton from './components/SelectImageButton';

const PlaceholderImage = require('./assets/images/placeholder-image.png');

function App(): JSX.Element {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.imageButtonContainer}>
          <SelectImageButton label="Choose photo" />
          <SelectImageButton label="Take photo" />
        </View>
        <ContinueButton label="Add stickers!" />
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
  buttonContainer: {
    flex: 1 / 2,
    alignItems: 'center',
  },
  imageButtonContainer: {
    flex: 1 / 2,
    flexDirection: 'row',
  }
});

export default App;
