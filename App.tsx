import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ImageViewer from './components/ImageViewer';
import ContinueButton from './components/ContinueButton';
import SelectImageButton from './components/SelectImageButton';
import AddStickerButton from './components/AddStickerButton';
import IconButton from './components/IconButtons';
import StickerPicker from './components/StickerPicker';
import StickerList from './components/StickerList';
import Sticker from './components/Sticker';

const PlaceholderImage = require('./assets/images/placeholder-image.png');
const ResetIcon = require('./assets/images/icons/rotate-right-solid.png');
const SaveIcon = require('./assets/images/icons/arrow-down-solid.png');
const Stickers = [
  require('./assets/images/stickers/emoji/emoji1.png'),
  require('./assets/images/stickers/emoji/emoji2.png'),
  require('./assets/images/stickers/emoji/emoji3.png'),
  require('./assets/images/stickers/emoji/emoji4.png'),
  require('./assets/images/stickers/emoji/emoji5.png'),
  require('./assets/images/stickers/emoji/emoji6.png'),
];

function App(): JSX.Element {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [showStickerPicker, setShowStickerPicker] = useState(false);
  const [pickedSticker, setPickedSticker] = useState<string | null>(null);

  const pickImageAsync = async () => {
    let result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (!result.didCancel) {
      setSelectedImage(result.assets![0].uri!);
      setShowEditor(true);
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
    }
  };

  const onReset = () => {
    setShowEditor(false);
  };

  const onSaveImage = () => {

  };

  const onAddSticker = () => {
    setShowStickerPicker(true);
  }

  const onCloseStickerPicker = () => {
    setShowStickerPicker(false);
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedSticker !== null ? <Sticker imageWidth={40} imageHeight={40} stickerSource={pickedSticker} /> : null}
      </View>
      {showEditor ? (
          <View style={styles.editorOtionsContainer}>
            <View style={styles.editorOptionsRow}>
              <IconButton icon={ResetIcon} onPress={onReset} onLongPress={'reset'}/>
              <AddStickerButton onPress={onAddSticker} onLongPress={'add sticker'}/>
              <IconButton icon={SaveIcon} onPress={onSaveImage} onLongPress={'save image'}/>
            </View>
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
      <StickerPicker isVisible={showStickerPicker} onClose={onCloseStickerPicker}>
        <StickerList onSelect={setPickedSticker} onClose={onCloseStickerPicker} stickers={Stickers}/>
      </StickerPicker>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={styles.container.backgroundColor}
      />  
    </GestureHandlerRootView>
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
  },
  editorOtionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  editorOptionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
