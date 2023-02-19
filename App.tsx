import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import ImageViewer from './components/ImageViewer';
import ContinueButton from './components/ContinueButton';
import SelectImageButton from './components/SelectImageButton';

const PlaceholderImage = require('./assets/images/placeholder-image.png');

function App(): JSX.Element {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const pickImageAsync = async () => {
    let result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (!result.didCancel) {
      setSelectedImage(result.assets![0].uri!);
      setShowEditor(true);
    } else {
      Alert.alert('Warning!', 'You did not select any image.');
    }
  };

  const takeImageAsync = async () => {
    let result = await launchCamera({
      mediaType: 'photo',
      quality: 1,
    });

    if (!result.didCancel) {
      setSelectedImage(result.assets![0].uri!);
      setShowEditor(true);
    } else {
      Alert.alert('Warning!', 'You did take an image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showEditor ? (
          <View>
            
          </View>
        ) : (
        <View style={styles.buttonContainer}>
            <View style={styles.imageButtonContainer}>
              <SelectImageButton label="Choose" theme="image" onPress={pickImageAsync}/>
              <SelectImageButton label="Camera" theme="camera" onPress={takeImageAsync}/>
            </View>
            <ContinueButton label="Add stickers!" onPress={() => setShowEditor(true)} />
        </View>
      )}
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
